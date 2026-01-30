export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
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
  image: "/assets/img/profile-new.png",
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
    image: "/assets/img/project-v2-new.png",
    link: "https://github.com/the-whiz84/zero-dawn-v2",
    linkLabel: "View Code",
  },
  {
    title: "Zero-Dawn v1",
    description:
      "The first version of my personal website. A stepping stone in my web development journey. Created using Hugo and Toha theme.",
    image: "/assets/img/project-v1-new.png",
    link: "https://github.com/the-whiz84/zero-dawn-v1",
    linkLabel: "View Code",
  },
  {
    title: "Python Projects",
    description:
      "This is the GitHub repo for most of the projects created using Python during the 100 Days of Code bootcamp. Larger projects have separate repos.",
    image: "/assets/img/python-projects.png",
    link: "https://github.com/the-whiz84/Python_Projects",
    linkLabel: "View Code",
  },
  {
    title: "Radu's Blog",
    description:
      "A Blog Website created with Python, Flask and SQLAlchemy with user registration and login flow to post articles and comments.",
    image: "/assets/img/blog.png",
    link: "https://blog.the-whiz.dev",
    linkLabel: "Go to Website",
  },
  {
    title: "OrganizeIt",
    description:
      "ToDo Web App created with Flask, Bootstrap 5 and PostgreSQL database to manage each user's list. Tasks show due date and can be closed or deleted.",
    image: "/assets/img/organize-it.png",
    link: "https://todo.the-whiz.dev",
    linkLabel: "Go to Website",
  },
  {
    title: "Demo E-Commerce Website",
    description:
      "This is an e-commerce Example Website created with Flask, Bootstrap 5 and functioning payment processing for testing using Stripe's API services.",
    image: "/assets/img/shop.png",
    link: "https://shop.the-whiz.dev",
    linkLabel: "Go to Website",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Eviden Technologies",
    logo: "/assets/img/logos/eviden.png",
    role: "HPC Technical Engineer",
    period: "July 2023 - Present",
    accomplishments: [
      "Supporting the server infrastructure for a German auto maker for one of its most critical projects.",
      "Using Puppet for configuration management and automatic patching of RHEL servers.",
      "Monitoring the infrastructure using ManageNow for Datacenter Monitoring (MN4DCM) from Fujitsu.",
      "Participating in a project to migrate obsolete RHV-Manager servers to new vSphere cluster.",
    ],
  },
  {
    company: "ATOS Romania",
    logo: "/assets/img/logos/atos.svg",
    role: "HPC Technical Engineer",
    period: "Feb. 2022 - July 2023",
    accomplishments: [
      "Reviewing all the existing technical documentation and updating it accordingly to the current requirements.",
      "Using Puppet for configuration management and automatic patching of RHEL servers.",
      "Monitoring the infrastructure using ManageNow for Datacenter Monitoring (MN4DCM) from Fujitsu.",
      "Participating in a project to migrate existing remote locations to a more streamlined solution.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Technical Support Engineer - Okta",
    period: "April 2020 - Jan. 2022",
    accomplishments: [
      "Resolving support tickets submitted by customers.",
      "Helping new admins to implement SSO, MFA and federation for their applications using SAML, OIDC and SCIM.",
      "Writing new Knowledge Articles for problems and possible solutions not yet documented.",
      "Troubleshooting Okta Access Gateway using ssh connections and Linux CLI.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "L2 Technical Mentor - Dell",
    period: "April 2018 - March 2020",
    accomplishments: [
      "Provide guidance and support for the Level 1 support team.",
      "Liaison with the Level 3 team and create Jira tickets for them and other internal teams.",
      "Create and share new training materials for latest products.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Technical Support Agent - Lenovo",
    period: "Oct. 2014 - April 2018",
    accomplishments: [
      "Log new support tickets received by phone or email.",
      "Troubleshoot hardware problems related to laptops, PCs or mobile devices.",
      "Find root cause for the issues and provide solution to customers.",
    ],
  },
  {
    company: "CGS Romania",
    logo: "/assets/img/logos/CGS.svg",
    role: "Back Office Agent - Sprint",
    period: "Aug. 2012 - Oct. 2014",
    accomplishments: [
      "Log new support tickets received by phone or email.",
      "Troubleshoot hardware problems related to laptops, PCs or mobile devices.",
      "Find root cause for the issues and provide solution to customers.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Spiru Haret, Bucharest",
    logo: "/assets/img/logos/spiru_haret.jpg",
    degree: "Bachelor Degree in International Relations and European Studies",
    period: "2003-2007",
    details: [
      "Graduation Grade: 8.60/10",
      "European Studies: 9/10",
      "History of the European Union: 10/10",
      "Communication and Negotiations Skills: 8/10",
      "European Law: 9/10",
    ],
  },
  {
    institution: "Gheorghe Cartianu Technical College, Piatra-Neamt",
    icon: "GraduationCap",
    degree: "Baccalaureate Diploma",
    period: "1999-2003",
    details: ["Graduation Grade: 8.16/10"],
  },
  {
    institution: "Public School Nr 2, Piatra-Neamt",
    icon: "School",
    degree: "Secondary School Certificate",
    period: "1995-1999",
    details: [
      "Reached the Regional Stage in the Mathematics school olympics.",
      "Took chess and airsoft rifle shooting classes at the local Children's Club.",
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
    image: "/assets/img/logos/python.png",
    description:
      "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps! You will be able to program in Python professionally. Create a portfolio of 100 Python projects to apply for developer jobs. Be able to use Python for data science and machine learning. You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
    link: "https://www.udemy.com/certificate/UC-a0f21ccd-9840-4158-8bb3-b2d4f39dac93/",
  },
  {
    title: "CompTIA Linux+",
    image: "/assets/img/logos/Comptia-linux.png",
    description:
      "Earners of the CompTIA Linux+ certification have the knowledge and skills required to succeed in a Linux operating system environment. CompTIA Linux+ earners have demonstrated the ability to configure the system, navigate the command line, and use common package management systems. They are also able to customize the environment, create scripts and configure networking.",
    link: "https://www.credly.com/badges/ee106ea6-ba34-440b-9f29-3f2a59239e9d/public_url",
  },
  {
    title: "Okta Certified Consultant",
    image: "/assets/img/logos/Okta-consultant.png",
    description:
      "Okta Certified Consultants are technically proficient at implementing the Okta service in a variety of configurations. Consultants have experience integrating common applications, such as Office 365 and G Suite, with Okta. They also have extensive experience scoping and implementing complex Okta integrations involving multi-forest and multi-domain environments, advanced single sign-on, and inbound federation with Okta. They have working knowledge of Okta APIs and custom configuration options.",
    link: "https://www.credly.com/badges/0239f2b6-94c8-42cb-8ba4-1aa1435067a8/public_url",
  },
];
