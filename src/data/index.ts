export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  accomplishments: string[];
}

export interface EducationItem {
  institution: string;
  logo?: string;
  icon?: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Certification {
  title: string;
  image: string;
  description: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const profile = {
  name: "Radu Chiriac",
  tagline: "I'm a guy passionate about videogames, tech and Linux. I dabble in Python, DevOps, AWS and AI.",
  location: "Sibiu, Romania",
  locationUrl: "https://maps.app.goo.gl/riqMDNYqAJRaxHdr9",
  resumeUrl: "/files/Resume.pdf",
  image: "/assets/img/profile-old.png",
};

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/the-whiz84", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/radu-chiriac/", icon: "Linkedin" },
  { name: "X", url: "https://x.com/the_whiz84", icon: "Twitter" },
];

export const projects: Project[] = [
  {
    title: "Zero-Dawn v2",
    description:
      "The second iteration of my personal portfolio website, built to showcase my growing skills and projects. Created using Python, Flask and Bootstrap 5.",
    image: "/assets/img/project-v2-updated.png",
    link: "https://github.com/the-whiz84/zero-dawn-v2",
    linkLabel: "View Code",
    tags: ["Python", "Flask", "Bootstrap 5"],
  },
  {
    title: "Zero-Dawn v1",
    description:
      "The first version of my personal website. A stepping stone in my web development journey. Created using Hugo and Toha theme.",
    image: "/assets/img/project-v1-new.webp",
    link: "https://github.com/the-whiz84/zero-dawn-v1",
    linkLabel: "View Code",
    tags: ["Hugo", "Go", "Toha Theme"],
  },
  {
    title: "Python Projects",
    description:
      "This is the GitHub repo for most of the projects created using Python during the 100 Days of Code bootcamp. Larger projects have separate repos.",
    image: "/assets/img/python-projects.webp",
    link: "https://github.com/the-whiz84/Python_Projects",
    linkLabel: "View Code",
    tags: ["Pandas", "Matplotlib", "Flask", "Selenium"],
  },
  {
    title: "Radu's Blog",
    description:
      "A Blog Website created with Python, Flask and SQLAlchemy with user registration and login flow to post articles and comments.",
    image: "/assets/img/blog.webp",
    link: "https://blog.the-whiz.dev",
    linkLabel: "Go to Website",
    tags: ["Python", "Flask", "SQLAlchemy"],
  },
  {
    title: "OrganizeIt",
    description:
      "ToDo Web App created with Flask, Bootstrap 5 and PostgreSQL database to manage each user's list. Tasks show due date and can be closed or deleted.",
    image: "/assets/img/organize-it.webp",
    link: "https://todo.the-whiz.dev",
    linkLabel: "Go to Website",
    tags: ["Flask", "PostgreSQL", "Bootstrap 5"],
  },
  {
    title: "Demo E-Commerce Website",
    description:
      "This is an e-commerce Example Website created with Flask, Bootstrap 5 and functioning payment processing for testing using Stripe's API services.",
    image: "/assets/img/shop.webp",
    link: "https://shop.the-whiz.dev",
    linkLabel: "Go to Website",
    tags: ["Flask", "Stripe API", "Bootstrap 5"],
  },
];

export const experience: ExperienceItem[] = [
    {
    company: "Bull Romania",
    logo: "/assets/img/logos/bull.webp",
    role: "HPC Technical Engineer",
    period: "Jan. 2026 - Present",
    accomplishments: [
      "Maintaining critical server infrastructure for a major German automaker.",
      "Automating RHEL patching and configuration management via Puppet.",
      "Streamlining remote location migrations to modern solutions.",
    ],
  },
  {
    company: "Eviden Technologies",
    logo: "/assets/img/logos/eviden.webp",
    role: "HPC Technical Engineer",
    period: "July 2023 - Dec. 2025",
    accomplishments: [
      "Supported mission-critical infrastructure for automotive clients.",
      "Managed RHEL automation and patching using Puppet.",
      "Executed migration of RHV-Manager servers to vSphere clusters.",
    ],
  },
  {
    company: "ATOS Romania",
    logo: "/assets/img/logos/atos.svg",
    role: "HPC Technical Engineer",
    period: "Feb. 2022 - July 2023",
    accomplishments: [
      "Updated technical documentation to meet modern standards.",
      "Automated server patching and configuration with Puppet.",
      "Assisted in migrating remote locations to streamlined solutions.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Technical Support Engineer - Okta",
    period: "April 2020 - Jan. 2022",
    accomplishments: [
      "Resolved complex SSO, MFA, and federation tickets (SAML/OIDC/SCIM).",
      "Guided admins on Okta integrations and Access Gateway troubleshooting.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "L2 Technical Mentor - Dell",
    period: "April 2018 - March 2020",
    accomplishments: [
      "Mentored L1 support teams and collaborated with L3 team.",
      "Developed and delivered training materials for new product lines.",
      "Managed Jira ticket escalations to internal teams.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Technical Support Agent - Lenovo",
    period: "Oct. 2014 - April 2018",
    accomplishments: [
      "Diagnosed and resolved hardware/software issues for laptops and mobile devices.",
      "Identified root causes to provide permanent customer solutions.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Back Office Agent - Sprint",
    period: "Aug. 2012 - Oct. 2014",
    accomplishments: [
      "Managed support tickets and purchase orders for employees.",
    ],
  },
];



export const skills: Skill[] = [
  {
    name: "Linux",
    icon: "Terminal",
    description: "Using as the main operating system. Capable of writing bash/shell scripts.",
  },
  {
    name: "Python",
    icon: "Code",
    description:
      "Learned Python as my first programming language. I have used it in various projects, including web development, data analysis and automation.",
  },
  {
    name: "Identity and Access Management",
    icon: "ShieldCheck",
    description:
      "Resolved support tickets for Okta clients that integrated their on-prem or cloud applications with SSO, MFA and Lifecycle Management.",
  },
  {
    name: "Technical Support",
    icon: "Headset",
    description:
      "Highly experienced in offering technical support, both hardware and software, while working for Lenovo, Dell and Okta.",
  },
  {
    name: "Git and GitHub",
    icon: "GitBranch",
    description:
      "Experienced with git-based version control. I use Github for all my projects but have experience with Gitlab also.",
  },
  {
    name: "Puppet",
    icon: "GitMerge",
    description:
      "I use it in my daily work for configuration management and automatic updates of RHEL servers.",
  },
  {
    name: "Cloud Computing",
    icon: "Cloud",
    description:
      "Worked with features and technologies from the major cloud providers such as GCP, AWS and Azure.",
  },
  {
    name: "Web Development",
    icon: "Globe",
    description:
      "During the Python course, I was introduced to and learned Flask, Bootstrap, HTML and CSS.",
  },
];

export const certifications: Certification[] = [
  {
    title: "100 Days of Code: The Complete Python Bootcamp",
    image: "/assets/img/logos/python.webp",
    description:
      "Built 100+ Python projects covering web dev (Flask), data science (Pandas/Matplotlib), and automation apps.",
    link: "https://www.udemy.com/certificate/UC-a0f21ccd-9840-4158-8bb3-b2d4f39dac93/",
  },
  {
    title: "CompTIA Linux+",
    image: "/assets/img/logos/Comptia-linux.webp",
    description:
      "Validates proficiency in Linux system configuration, CLI navigation, and core package management.",
    link: "https://www.credly.com/badges/ee106ea6-ba34-440b-9f29-3f2a59239e9d/public_url",
  },
  {
    title: "Okta Certified Consultant",
    image: "/assets/img/logos/Okta-consultant.webp",
    description:
      "Expert-level validation for scoping and implementing complex Okta SSO/MFA integrations and architectures.",
    link: "https://www.credly.com/badges/0239f2b6-94c8-42cb-8ba4-1aa1435067a8/public_url",
  },
];
