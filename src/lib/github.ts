import { profile } from '../data/site';

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
  maxScore: number;
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

const GITHUB_USERNAME_RE = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

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

function sanitizeGitHubUsername(username: string): string {
  return GITHUB_USERNAME_RE.test(username) ? username : profile.githubUsername;
}

function parseSafeGitHubUrl(rawUrl: unknown, fallbackUrl: string): string {
  if (typeof rawUrl !== 'string') return fallbackUrl;
  try {
    const url = new URL(rawUrl);
    if (url.protocol === 'https:' && url.hostname === 'github.com') {
      return url.toString();
    }
  } catch {
    // Fall back to constructed GitHub URL
  }
  return fallbackUrl;
}

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
    const title =
      w.score === 0
        ? `${rangeLabel} · quiet week`
        : `${rangeLabel} · activity index ${w.score}/${maxScore}`;

    return {
      start: w.start,
      end: w.end,
      rangeLabel,
      score: w.score,
      maxScore,
      title,
    };
  });
}

function computeMonthTicks(weeks: ActivityWeek[]): string[] {
  if (weeks.length === 0) {
    return ['DEC', 'FEB', 'APR', 'JUN', 'AUG', 'OCT', 'NOV'];
  }
  const indices = [1, 9, 17, 26, 35, 43, weeks.length - 1];
  const labels: string[] = [];
  for (const idx of indices) {
    const w = weeks[Math.min(idx, weeks.length - 1)];
    if (w) {
      labels.push(monthUpper.format(new Date(`${w.end}T00:00:00Z`)).toUpperCase());
    }
  }
  return labels;
}

function computeDateRangeLabel(weeks: ActivityWeek[]): string {
  const firstWeek = weeks[0];
  const lastWeek = weeks[weeks.length - 1];
  if (!firstWeek || !lastWeek) return 'Last 52 Weeks';
  const first = monthYearUtc.format(new Date(`${firstWeek.start}T00:00:00Z`));
  const last = monthYearUtc.format(new Date(`${lastWeek.end}T00:00:00Z`));
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
const DEFAULT_USERNAME = profile.githubUsername;
const DEFAULT_PROFILE_URL = `https://github.com/${encodeURIComponent(DEFAULT_USERNAME)}`;

export const FALLBACK_GITHUB_SNAPSHOT: GitHubSnapshot = {
  username: DEFAULT_USERNAME,
  profileUrl: DEFAULT_PROFILE_URL,
  publicReposCount: 10,
  latestRepo: {
    name: 'the-whiz.dev',
    url: `${DEFAULT_PROFILE_URL}/the-whiz.dev`,
    language: 'TypeScript',
    shortLang: 'TS',
    pushedAt: '2026-11-23T15:00:16Z',
    pushedLabel: 'Nov 23',
  },
  recentRepos: [
    {
      name: 'the-whiz.dev',
      url: `${DEFAULT_PROFILE_URL}/the-whiz.dev`,
      language: 'TypeScript',
      shortLang: 'TS',
      pushedAt: '2026-11-23T15:00:16Z',
      pushedLabel: 'Nov 23',
    },
    {
      name: 'zero-dawn-v3',
      url: `${DEFAULT_PROFILE_URL}/zero-dawn-v3`,
      language: 'TypeScript',
      shortLang: 'TS',
      pushedAt: '2026-11-21T16:23:05Z',
      pushedLabel: 'Nov 21',
    },
    {
      name: 'Python_Projects',
      url: `${DEFAULT_PROFILE_URL}/Python_Projects`,
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

interface ParsedGitHubRepo {
  name: string;
  htmlUrl: unknown;
  language: string | null;
  pushedAt: string;
}

function parseGitHubRepo(value: unknown): ParsedGitHubRepo | null {
  if (!value || typeof value !== 'object') return null;
  const record = value as Record<string, unknown>;
  if (
    typeof record.name !== 'string' ||
    record.name.length === 0 ||
    typeof record.pushed_at !== 'string'
  ) {
    return null;
  }
  const language =
    typeof record.language === 'string' && record.language.length > 0
      ? record.language
      : null;
  return {
    name: record.name,
    htmlUrl: record.html_url,
    language,
    pushedAt: record.pushed_at,
  };
}

function parseContributionsHtml(html: string): {
  total: number | null;
  weeks: ActivityWeek[] | null;
} {
  const totalMatch = html.match(
    /([0-9,]+)\s+contributions?\s+in\s+the\s+last\s+year/i,
  );
  const totalRaw = totalMatch?.[1];
  const parsedTotal = totalRaw
    ? Number.parseInt(totalRaw.replaceAll(',', ''), 10)
    : null;
  const total =
    parsedTotal !== null && Number.isFinite(parsedTotal) ? parsedTotal : null;

  const dayMap = new Map<string, number>();
  const re1 = /data-date="(\d{4}-\d{2}-\d{2})"[^>\r\n]{0,200}data-level="(\d)"/g;
  const re2 = /data-level="(\d)"[^>\r\n]{0,200}data-date="(\d{4}-\d{2}-\d{2})"/g;

  for (const m of html.matchAll(re1)) {
    const date = m[1];
    const level = m[2];
    if (date && level) {
      dayMap.set(date, Number.parseInt(level, 10));
    }
  }
  if (dayMap.size === 0) {
    for (const m of html.matchAll(re2)) {
      const level = m[1];
      const date = m[2];
      if (date && level) {
        dayMap.set(date, Number.parseInt(level, 10));
      }
    }
  }

  if (dayMap.size < 350) {
    return { total, weeks: null };
  }

  const sortedDays = Array.from(dayMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-364);

  const buckets: { start: string; end: string; score: number }[] = [];
  for (let i = 0; i < sortedDays.length; i += 7) {
    const chunk = sortedDays.slice(i, i + 7);
    const first = chunk[0];
    const last = chunk[chunk.length - 1];
    if (!first || !last) continue;
    const score = chunk.reduce((sum, [, lvl]) => sum + lvl, 0);
    buckets.push({
      start: first[0],
      end: last[0],
      score,
    });
  }

  if (buckets.length === 0) {
    return { total, weeks: null };
  }

  return {
    total,
    weeks: buildWeeksFromScores(buckets.slice(-52)),
  };
}

export async function fetchGitHubSnapshot(
  username: string = profile.githubUsername,
): Promise<GitHubSnapshot> {
  const safeUsername = sanitizeGitHubUsername(username);
  const encodedUsername = encodeURIComponent(safeUsername);
  const profileUrl = `https://github.com/${encodedUsername}`;

  const envToken: unknown =
    import.meta.env.GITHUB_TOKEN ??
    (typeof process !== 'undefined' ? process.env.GITHUB_TOKEN : undefined);
  const token =
    typeof envToken === 'string' && envToken.length > 0 ? envToken : undefined;

  const apiHeaders: Record<string, string> = {
    'User-Agent': 'the-whiz.dev',
    Accept: 'application/vnd.github+json',
  };
  if (token) {
    apiHeaders.Authorization = `Bearer ${token}`;
  }

  const [userRes, reposRes, contribRes] = await Promise.allSettled([
    fetch(`https://api.github.com/users/${encodedUsername}`, {
      headers: apiHeaders,
      signal: AbortSignal.timeout(4000),
    }),
    fetch(
      `https://api.github.com/users/${encodedUsername}/repos?sort=pushed&per_page=20`,
      {
        headers: apiHeaders,
        signal: AbortSignal.timeout(4000),
      },
    ),
    fetch(`https://github.com/users/${encodedUsername}/contributions`, {
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
      const userData: unknown = await userRes.value.json();
      if (
        userData &&
        typeof userData === 'object' &&
        typeof (userData as Record<string, unknown>).public_repos === 'number'
      ) {
        publicReposCount = (userData as Record<string, unknown>)
          .public_repos as number;
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
      const rawRepos: unknown = await reposRes.value.json();
      if (Array.isArray(rawRepos)) {
        const parsedRepos: ParsedGitHubRepo[] = [];
        for (const item of rawRepos) {
          const parsed = parseGitHubRepo(item);
          if (parsed) {
            parsedRepos.push(parsed);
          }
        }

        const filtered = parsedRepos
          .filter((r) => r.name.toLowerCase() !== safeUsername.toLowerCase())
          .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt))
          .slice(0, 3)
          .map<RepoItem>((r) => {
            const lang = r.language ?? 'Code';
            const fallbackRepoUrl = `${profileUrl}/${encodeURIComponent(r.name)}`;
            return {
              name: r.name,
              url: parseSafeGitHubUrl(r.htmlUrl, fallbackRepoUrl),
              language: lang,
              shortLang: formatShortLang(lang),
              pushedAt: r.pushedAt,
              pushedLabel: formatPushedDate(r.pushedAt),
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
    username: safeUsername,
    profileUrl,
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
