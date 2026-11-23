export interface SocialLink {
  name: string;
  url: string;
}

export interface StackLayer {
  id: string;
  code: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  scope: string;
}

export interface CareerEntry {
  role: string;
  period: string;
  organization: string;
  summary: string;
}

export interface RepoHighlight {
  name: string;
  description: string;
  tag: string;
  url: string;
}

export interface ArchiveEntry {
  label: string;
  url: string;
  note?: string;
}

export interface Certification {
  issuer: string;
  title: string;
  linkLabel: string;
  url: string;
}

export interface NowEntry {
  label: string;
  detail: string;
}

export const profile = {
  name: 'Radu Chiriac',
  handle: 'The-Whiz',
  domain: 'the-whiz.dev',
  role: 'HPC & Linux Infrastructure Engineer',
  lead: 'Keeping mission-critical automotive HPC infrastructure reliable from Romania. Fifteen years climbing from hardware diagnostics and Okta IAM to RHEL fleet automation, Puppet, MN4DCM monitoring, and AWS architecture.',
  email: 'radu@the-whiz.dev',
  resumeUrl: '/files/Resume.pdf',
  location: 'Sibiu, Romania',
  locationUrl: 'https://maps.app.goo.gl/riqMDNYqAJRaxHdr9',
  timezone: 'Europe/Bucharest',
  githubUsername: 'the-whiz84',
  currentRoleShort: 'Bull Romania · Automotive HPC',
  certificationsShort: 'AWS SAA · CompTIA Linux+',
  coreStackShort: 'RHEL · Puppet · Python · AWS',
} as const;

export const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/the-whiz84' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/radu-chiriac/' },
  { name: 'X', url: 'https://x.com/the_whiz84' },
];

export const stackLayers: StackLayer[] = [
  {
    id: 'rhel',
    code: 'L1',
    label: 'RHEL & Linux',
    title: 'Automotive HPC & RHEL Fleet Infrastructure',
    description:
      'Infrastructure operations for mission-critical Red Hat Enterprise Linux server fleets supporting a major German automaker—patching, incident triage, and reliability across continuous ATOS → Eviden → Bull tenure.',
    tags: ['RHEL', 'Bash', 'CompTIA Linux+'],
    scope: '2022–Present · Continuous Engagement',
  },
  {
    id: 'puppet',
    code: 'L2',
    label: 'Puppet & Patching',
    title: 'Declarative Patching & Configuration Management',
    description:
      'Automated RHEL server configuration and repeatable patch cycles with Puppet, replacing manual host drift with auditable, reproducible state.',
    tags: ['Puppet', 'Git', 'Shell Automation', 'RHEL'],
    scope: 'Fleet-wide consistency & controlled rollouts',
  },
  {
    id: 'migrations',
    code: 'L3',
    label: 'MN4DCM & Migrations',
    title: 'Datacenter Monitoring & Platform Migrations',
    description:
      'Operated Fujitsu ManageNow for Datacenter Monitoring (MN4DCM) and executed RHV-Manager to vSphere cluster migrations alongside remote-site infrastructure transitions.',
    tags: ['Fujitsu MN4DCM', 'RHV → vSphere', 'Migrations'],
    scope: 'High-availability infrastructure cutovers',
  },
  {
    id: 'iam',
    code: 'L4',
    label: 'IAM & Federation',
    title: 'Enterprise Identity & Access Federation',
    description:
      'Resolved high-complexity Okta federation tickets spanning on-prem Access Gateway, SAML 2.0 assertions, OIDC flows, MFA policies, and SCIM lifecycle provisioning.',
    tags: ['Okta', 'SAML 2.0', 'OIDC', 'SCIM / MFA'],
    scope: '2020–2022 · Enterprise IAM Support',
  },
  {
    id: 'aws',
    code: 'L5',
    label: 'AWS & Scripting',
    title: 'Cloud Architecture & Automation Scripting',
    description:
      'AWS Solutions Architect – Associate certified; writes Python and Bash automation utilities alongside web tooling and continuous cloud study.',
    tags: ['AWS SAA', 'Python', 'Bash', 'GitHub'],
    scope: 'Cloud architecture & personal builds',
  },
];

export const career: CareerEntry[] = [
  {
    role: 'HPC Technical Engineer',
    period: '2022 – Present',
    organization: 'Bull Romania ← Eviden ← ATOS (Continuous Track)',
    summary:
      'Continuous 4+ year automotive HPC infrastructure engagement across corporate spin-offs: RHEL fleet automation with Puppet, Fujitsu MN4DCM monitoring, RHV → vSphere cluster migrations, and remote-site transitions.',
  },
  {
    role: 'Technical Support Engineer — Okta IAM',
    period: '2020 – 2022',
    organization: 'CGS Romania',
    summary:
      'Enterprise SSO, MFA, and lifecycle federation troubleshooting across SAML, OIDC, SCIM, and Okta Access Gateway.',
  },
  {
    role: 'L2 Mentor (Dell) · Support (Lenovo / Sprint)',
    period: '2012 – 2020',
    organization: 'CGS Romania',
    summary:
      'Eight-year progression from back-office operations to L2 mentor: hardware and OS root-cause diagnostics, training material authoring, and L3 Jira escalation management.',
  },
];

export const publicRepos: RepoHighlight[] = [
  {
    name: 'Python Projects (100 Days)',
    description:
      'Automation scripts, Pandas and Matplotlib data analysis, Selenium tooling, and Flask utilities built across 100 Days of Code.',
    tag: 'PYTHON',
    url: 'https://github.com/the-whiz84/Python_Projects',
  },
  {
    name: 'Bash Scripting',
    description:
      'Linux shell scripting exercises and practical system administration utilities.',
    tag: 'SHELL',
    url: 'https://github.com/the-whiz84/Bash_Scripting',
  },
  {
    name: 'OrganizeIt',
    description:
      'Multi-user Flask to-do application backed by PostgreSQL with due-date tracking and task lifecycle management.',
    tag: 'FLASK · POSTGRES',
    url: 'https://github.com/the-whiz84/Flask-ToDo-App',
  },
  {
    name: 'Capstone Blog',
    description:
      'Multi-user Flask and SQLAlchemy blog with user registration, login flow, post publishing, and comments.',
    tag: 'FLASK · SQL',
    url: 'https://github.com/the-whiz84/Capstone_Blog_Project',
  },
];

export const portfolioArchive: ArchiveEntry[] = [
  {
    label: 'Zero-Dawn v3 (Live)',
    url: 'https://v3.the-whiz.dev',
  },
  {
    label: 'v3 Repo',
    url: 'https://github.com/the-whiz84/zero-dawn-v3',
  },
  {
    label: 'v2 (Flask)',
    url: 'https://github.com/the-whiz84/zero-dawn-v2',
  },
  {
    label: 'v1 (Hugo)',
    url: 'https://github.com/the-whiz84/zero-dawn-v1',
  },
];

export const certifications: Certification[] = [
  {
    issuer: 'Amazon Web Services',
    title: 'AWS Certified Solutions Architect – Associate',
    linkLabel: 'Verify on Credly',
    url: 'https://www.credly.com/badges/c70d8dc4-ebff-4573-b317-cb802b1fbf31/public_url',
  },
  {
    issuer: 'CompTIA',
    title: 'CompTIA Linux+',
    linkLabel: 'Verify on Credly',
    url: 'https://www.credly.com/badges/ee106ea6-ba34-440b-9f29-3f2a59239e9d/public_url',
  },
  {
    issuer: 'Udemy',
    title: '100 Days of Code: Complete Python Bootcamp',
    linkLabel: 'View Certificate',
    url: 'https://www.udemy.com/certificate/UC-a0f21ccd-9840-4158-8bb3-b2d4f39dac93/',
  },
];

export const nowMeta = {
  updatedAt: 'November 2026',
  entries: [
    {
      label: 'Work',
      detail:
        'Running automotive HPC infrastructure at Bull Romania—keeping RHEL fleets reliable with Puppet automation, datacenter monitoring, and clean platform migrations.',
    },
    {
      label: 'Studying',
      detail:
        'Preparing for AWS Certified DevOps Engineer – Professional alongside practical infrastructure automation and disciplined AI-assisted engineering workflows.',
    },
    {
      label: 'Off-Hours',
      detail:
        'Linux tinkering, refining local editor and terminal tooling (Zed, Ghostty), and diving into deep videogames.',
    },
  ] satisfies NowEntry[],
};
