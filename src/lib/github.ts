export interface RepoItem {
  name: string;
  url: string;
  language: string;
  shortLang: string;
  pushedAt: string;
  pushedLabel: string;
}

export interface ActivityWeek {
  start: string;
  end: string;
  rangeLabel: string;
  score: number;
  heightPct: number;
  opacity: number;
  title: string;
}

export interface GitHubSnapshot {
  username: string;
  profileUrl: string;
  publicReposCount: number;
  latestRepo: RepoItem;
  recentRepos: RepoItem[];
  yearlyContributions: number;
  weeks: ActivityWeek[];
  dateRangeLabel: string;
  monthLabels: string[];
  isFallback: boolean;
}

const SHORT_LANG_MAP: Record<string, string> = {
  TypeScript: 'TS',
  JavaScript: 'JS',
  Python: 'Py',
  'Jupyter Notebook': 'Py',
  Shell: 'Sh',
  HTML: 'HTML',
  CSS: 'CSS',
  SCSS: 'SCSS',
  Astro: 'Astro',
};

const shortUtcDate = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

const monthUpper = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  timeZone: 'UTC',
});

const monthYearUtc = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatShortLang(language: string | null | undefined): string {
  if (!language) return 'Code';
  return SHORT_LANG_MAP[language] ?? language.slice(0, 6);
}

function formatPushedDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 'Recent';
  return shortUtcDate.format(d);
}

function buildWeeksFromScores(
  scores: { start: string; end: string; score: number }[],
): ActivityWeek[] {
  const maxScore = Math.max(1, ...scores.map((w) => w.score));

  return scores.map((w) => {
    const startFmt = shortUtcDate.format(new Date(`${w.start}T00:00:00Z`));
    const endFmt = shortUtcDate.format(new Date(`${w.end}T00:00:00Z`));
    const rangeLabel = `${startFmt} – ${endFmt}`;
    const heightPct =
      w.score === 0 ? 11 : Math.min(100, 22 + Math.round((w.score / maxScore) * 78));
    const opacity =
      w.score === 0 ? 1 : Number((0.45 + (w.score / maxScore) * 0.55).toFixed(2));
    const title =
      w.score === 0
        ? `${rangeLabel} · quiet week`
        : `${rangeLabel} · activity index ${w.score}/${maxScore}`;

    return {
      start: w.start,
      end: w.end,
      rangeLabel,
      score: w.score,
      heightPct,
      opacity,
      title,
    };
  });
}

function computeMonthTicks(weeks: ActivityWeek[]): string[] {
  if (weeks.length === 0) {
    return ['DEC', 'FEB', 'APR', 'JUN', 'AUG', 'OCT', 'NOV'];
  }
  const indices = [1, 9, 17, 26, 35, 43, weeks.length - 1];
  return indices.map((idx) => {
    const w = weeks[Math.min(idx, weeks.length - 1)];
    return monthUpper.format(new Date(`${w.end}T00:00:00Z`)).toUpperCase();
  });
}

function computeDateRangeLabel(weeks: ActivityWeek[]): string {
  if (weeks.length === 0) return 'Last 52 Weeks';
  const first = monthYearUtc.format(new Date(`${weeks[0].start}T00:00:00Z`));
  const last = monthYearUtc.format(new Date(`${weeks[weeks.length - 1].end}T00:00:00Z`));
  return `${first} – ${last}`;
}

const FALLBACK_SCORES = [
  0, 0, 0, 0, 0, 0, 1, 0, 0, 8, 4, 1, 2, 3, 6, 2, 1, 1, 0, 3, 1, 0, 1, 0, 0, 4,
  1, 2, 0, 0, 0, 0, 3, 0, 0, 1, 4, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 3, 0, 2,
];

function buildFallbackWeeks(): ActivityWeek[] {
  const baseStart = Date.UTC(2025, 10, 25);
  const raw = FALLBACK_SCORES.map((score, idx) => {
    const s = new Date(baseStart + idx * 7 * 86_400_000).toISOString().slice(0, 10);
    const e = new Date(baseStart + (idx * 7 + 6) * 86_400_000).toISOString().slice(0, 10);
    return { start: s, end: e, score };
  });
  return buildWeeksFromScores(raw);
}

const FALLBACK_WEEKS = buildFallbackWeeks();

export const FALLBACK_GITHUB_SNAPSHOT: GitHubSnapshot = {
  username: 'the-whiz84',
  profileUrl: 'https://github.com/the-whiz84',
  publicReposCount: 10,
  latestRepo: {
    name: 'the-whiz.dev',
    url: 'https://github.com/the-whiz84/the-whiz.dev',
    language: 'TypeScript',
    shortLang: 'TS',
    pushedAt: '2026-11-23T15:00:16Z',
    pushedLabel: 'Nov 23',
  },
  recentRepos: [
    {
      name: 'the-whiz.dev',
      url: 'https://github.com/the-whiz84/the-whiz.dev',
      language: 'TypeScript',
      shortLang: 'TS',
      pushedAt: '2026-11-23T15:00:16Z',
      pushedLabel: 'Nov 23',
    },
    {
      name: 'zero-dawn-v3',
      url: 'https://github.com/the-whiz84/zero-dawn-v3',
      language: 'TypeScript',
      shortLang: 'TS',
      pushedAt: '2026-11-21T16:23:05Z',
      pushedLabel: 'Nov 21',
    },
    {
      name: 'Python_Projects',
      url: 'https://github.com/the-whiz84/Python_Projects',
      language: 'Python',
      shortLang: 'Py',
      pushedAt: '2026-11-03T16:38:16Z',
      pushedLabel: 'Nov 3',
    },
  ],
  yearlyContributions: 345,
  weeks: FALLBACK_WEEKS,
  dateRangeLabel: computeDateRangeLabel(FALLBACK_WEEKS),
  monthLabels: computeMonthTicks(FALLBACK_WEEKS),
  isFallback: true,
};

interface GitHubUserResponse {
  public_repos?: number;
}

interface GitHubRepoResponse {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
}

function parseContributionsHtml(html: string): {
  total: number | null;
  weeks: ActivityWeek[] | null;
} {
  const totalMatch = html.match(
    /([0-9,]+)\s+contributions?\s+in\s+the\s+last\s+year/i,
  );
  const total = totalMatch
    ? Number.parseInt(totalMatch[1].replaceAll(',', ''), 10)
    : null;

  const dayMap = new Map<string, number>();
  const re1 = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
  const re2 = /data-level="(\d)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g;

  for (const m of html.matchAll(re1)) {
    dayMap.set(m[1], Number.parseInt(m[2], 10));
  }
  if (dayMap.size === 0) {
    for (const m of html.matchAll(re2)) {
      dayMap.set(m[2], Number.parseInt(m[1], 10));
    }
  }

  if (dayMap.size < 350) {
    return { total: Number.isFinite(total) ? total : null, weeks: null };
  }

  const sortedDays = Array.from(dayMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-364);

  const buckets: { start: string; end: string; score: number }[] = [];
  for (let i = 0; i < sortedDays.length; i += 7) {
    const chunk = sortedDays.slice(i, i + 7);
    if (chunk.length === 0) continue;
    const score = chunk.reduce((sum, [, lvl]) => sum + lvl, 0);
    buckets.push({
      start: chunk[0][0],
      end: chunk[chunk.length - 1][0],
      score,
    });
  }

  if (buckets.length === 0) {
    return { total: Number.isFinite(total) ? total : null, weeks: null };
  }

  return {
    total: Number.isFinite(total) ? total : null,
    weeks: buildWeeksFromScores(buckets.slice(-52)),
  };
}

export async function fetchGitHubSnapshot(
  username = 'the-whiz84',
): Promise<GitHubSnapshot> {
  const token =
    typeof process !== 'undefined' ? process.env.GITHUB_TOKEN : undefined;

  const apiHeaders: Record<string, string> = {
    'User-Agent': 'the-whiz.dev',
    Accept: 'application/vnd.github+json',
  };
  if (token) {
    apiHeaders.Authorization = `Bearer ${token}`;
  }

  const [userRes, reposRes, contribRes] = await Promise.allSettled([
    fetch(`https://api.github.com/users/${username}`, {
      headers: apiHeaders,
      signal: AbortSignal.timeout(4000),
    }),
    fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=20`,
      {
        headers: apiHeaders,
        signal: AbortSignal.timeout(4000),
      },
    ),
    fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; the-whiz.dev)',
      },
      signal: AbortSignal.timeout(4000),
    }),
  ]);

  let publicReposCount = FALLBACK_GITHUB_SNAPSHOT.publicReposCount;
  let userOk = false;
  if (userRes.status === 'fulfilled' && userRes.value.ok) {
    try {
      const userData = (await userRes.value.json()) as GitHubUserResponse;
      if (typeof userData.public_repos === 'number') {
        publicReposCount = userData.public_repos;
        userOk = true;
      }
    } catch {
      // Fallback kept
    }
  }

  let recentRepos = FALLBACK_GITHUB_SNAPSHOT.recentRepos;
  let reposOk = false;
  if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
    try {
      const rawRepos = (await reposRes.value.json()) as GitHubRepoResponse[];
      if (Array.isArray(rawRepos)) {
        const filtered = rawRepos
          .filter((r) => r.name.toLowerCase() !== username.toLowerCase())
          .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
          .slice(0, 3)
          .map<RepoItem>((r) => {
            const lang = r.language ?? 'Code';
            return {
              name: r.name,
              url: r.html_url,
              language: lang,
              shortLang: formatShortLang(lang),
              pushedAt: r.pushed_at,
              pushedLabel: formatPushedDate(r.pushed_at),
            };
          });

        if (filtered.length > 0) {
          recentRepos = filtered;
          reposOk = true;
        }
      }
    } catch {
      // Fallback kept
    }
  }

  let yearlyContributions = FALLBACK_GITHUB_SNAPSHOT.yearlyContributions;
  let weeks = FALLBACK_GITHUB_SNAPSHOT.weeks;
  let contribOk = false;
  if (contribRes.status === 'fulfilled' && contribRes.value.ok) {
    try {
      const html = await contribRes.value.text();
      const parsed = parseContributionsHtml(html);
      if (parsed.total !== null) {
        yearlyContributions = parsed.total;
      }
      if (parsed.weeks !== null) {
        weeks = parsed.weeks;
      }
      contribOk = parsed.total !== null || parsed.weeks !== null;
    } catch {
      // Fallback kept
    }
  }

  const latestRepo = recentRepos[0] ?? FALLBACK_GITHUB_SNAPSHOT.latestRepo;

  return {
    username,
    profileUrl: `https://github.com/${username}`,
    publicReposCount,
    latestRepo,
    recentRepos,
    yearlyContributions,
    weeks,
    dateRangeLabel: computeDateRangeLabel(weeks),
    monthLabels: computeMonthTicks(weeks),
    isFallback: !(userOk && reposOk && contribOk),
  };
}
