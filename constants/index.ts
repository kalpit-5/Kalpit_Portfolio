import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// export const RESUME_LINK = process.env.RESUME_LINK_IS_THIS;
export const RESUME_LINK = 'https://drive.google.com/drive/folders/1_adgM8DU14hNE8C62NaMBK2TMK9ECSBZ';

export const SKILL_DATA = [
  {
    skill_name: "Simple Analytics",
    image: "simpleanalytics.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Slack",
    image: "slack.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Sheets",
    image: "google-sheets.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Maze",
    image: "maze-dark.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Hotjar",
    image: "hotjar.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Perplexity",
    image: "perplexity.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Gemini",
    image: "gemini.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Claude",
    image: "claude.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "ChatGPT",
    image: "chatgpt.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PowerBI",
    image: "powerbi.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Confluence",
    image: "confluence.svg",
    width: 80,
    height: 80,
  },

] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "MySQL",
    image: "mysql.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tableau",
    image: "tableau.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Amplitude",
    image: "amplitude.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mixpanel",
    image: "mixpanel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Excel",
    image: "microsoft-excel.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Google Analytics",
    image: "google-analytics.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Trello",
    image: "trello.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Linear",
    image: "linear-dark.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Miro",
    image: "miro_22399.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Notion",
    image: "notion.svg",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jira",
    image: "jira.svg",
    width: 80,
    height: 80,
  },
]


export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/kalpit-5",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/kalpitparmar/",
  },
] as const;




export const PROJECTS = [
  {
    title: "AI-Powered Onboarding Funnel Analyzer",
    description:
      "An AI-powered product analytics tool that analyzes onboarding funnel drop-offs, uncovers behavioral insights, identifies activation bottlenecks, and prioritizes data-driven experiments using RICE to improve user activation and conversion.",
    image: "/projects/onboarding-analyzer.png",
    githublink: "https://github.com/kalpit-5/Onboarding-Funnel-Analyzer",
    livelink: "https://onboarding-funnel-analyzer.vercel.app/",
    iconLists: [
      "/skills/claude.png",
      "/skills/analytics.png",
    ],
  },
  {
    title: "Full-Featured Learning Management System ",
    description:
      "An intuitive LMS web application where instructors manage and publish courses, and students can browse, purchase, and learn with ease. Built with modern UI, secure access, and stripe payment gateway",
    image: "/projects/primelearn.png",
    githublink: "https://github.com/kalpit-5/PrimeLearn-MERN-LMS",
    livelink: "https://prime-learn.vercel.app/",
    iconLists: [
      "/skills/react.png",
      "/skills/ex-pro.jpg",
      "/skills/node.png",
      "/skills/stripe.png",
    ],
  },
  {
    title: "AI-Powered Voice Interview Prep Tool",
    description:
      "AI-powered platform that helps users prepare for job interviews through realistic voice-based mock sessions, personalized feedback, performance analytics, and a customizable interview experience.",
    image: "/projects/voxnavi.png",
    githublink: "https://github.com/kalpit-5/IntervuAI",
    livelink: "https://vox-navi.vercel.app/",
    iconLists: [
      "/skills/nextpro.png",
      "/skills/firebase.png",
      "/skills/gemini.png",
      "/skills/ts.png",
    ],
  },
  {
    title: "Modern E-commerce Store with Admin Panel",
    description:
      "A Full‑stack MERN E‑Commerce platform with user authentication, product browsing with sorting feature, cart functionality, stripe payment gateway, order management, and an admin dashboard for product and order control. ",
    image: "/projects/velvet_vista.png",
    githublink: "https://github.com/kalpit-5/velvetvista-fullstack-ecommerce",
    livelink: "https://velvetvista.vercel.app/",
    iconLists: [
      "/skills/react.png",
      "/skills/mongodb.svg",
      "/skills/node.png",
      "/skills/ex-pro.jpg",
    ],
  },
  {
    title: "Real-Time user engaging Social Media App",
    description:
      "This dynamic social media app features real-time content sharing, secure login, infinite scrolling feeds, and responsive design—offering users a smooth and engaging way to connect and interact.",
    image: "/projects/vibin.png",
    githublink: "https://github.com/kalpit-5/Vibin-social-media-app",
    livelink: "https://vibin-gamma.vercel.app/",
    iconLists: [
      "/skills/nextpro.png",
      "/skills/react.png",
      "/skills/supabase.png",
      "/skills/tailwind.png",
    ],
  },
  {
    title: "Job Portal with Role-Based Access",
    description:
      "A robust job portal platform featuring secure authentication, role-based access for users and admins, job listings, applications, resume uploads, and admin dashboards to manage jobs and applicants.",
    image: "/projects/hiredup.png",
    githublink: "https://github.com/kalpit-5/HiredUp",
    livelink: "https://hiredup.onrender.com/",
    iconLists: [
      "/skills/react.png",
      "/skills/mongodb.svg",
      "/skills/ex-pro.jpg",
      "/skills/node.png",
    ],
  },

] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/kalpit-5/kalpit-portfolio",
};

export const expCards = [
  {
    review:
      "Kalpit demonstrated strong product thinking and execution, helping build and scale AI-powered products from 0-to-1. His ability to translate customer insights into product requirements and collaborate cross-functionally drove measurable improvements in product quality, operational efficiency, and business impact.",
    imgPath: "/experience/quinn.jpeg",
    logoPath: "/experience/quinn.jpeg",
    title: "Associate Product Manager",
    company_name: "Quinn",
    date: "September 2025 - Present",
    responsibilities: [
      "Co-led 0-to-1 development of a GenAI catalogue image product, translating customer discovery insights into a revenue-generating product line while reducing customer cost per image by ~90%.",

      "Conducted customer interviews and product usage analysis to identify workflow bottlenecks, define product requirements, and prioritize high-impact features.",

      "Designed a human-in-the-loop quality assurance system with feedback mechanisms, achieving 87% first-pass acceptance while balancing output quality, generation speed, and reviewer effort.",

      "Partnered with engineering to build an automated generation pipeline using Seedream and Gemini, scaling output 20x (50 to 1,000+ images/day) and reducing turnaround time from days to minutes.",

      "Introduced AI-powered quality validation controls, reducing manual review effort by 60%, measured through before-and-after operational data.",

      "Drove root-cause analysis and engineering prioritization, reducing recurring production incidents by 30% and contributing to the delivery of 8 customer-facing features."
    ],
  },

  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/experience/exp1.jpeg",
    logoPath: "/experience/exp1.jpeg",
    title: "Full Stack Web Development Intern",
    company_name: "Rd Infro Technology",
    date: "December 2024 - April 2025",
    responsibilities: [
      "Engineered and deployed full-stack web apps using the MERN stack , delivering a seamless experience through responsive UIs, mobile-first design, and cross-browser compatibility",
      "Built RESTful APIs with Express.js and Node.js, reducing latency by 20%, and implemented secure JWT-based authentication with role   -based access control.",
      "Implemented real-time chat and notifications using Socket.IO, enhancing user interaction and app responsiveness across the platform, while demonstrating strong communication and collaboration in team environments.",
      "Integrated MongoDB with Mongoose for optimized data modeling, enabling efficient querying and aggregation in large-scale collections.",
      "Collaborated in Agile sprints using Git and GitHub for version control, improving deployment cycles with CI/CD practices and code reviews.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/experience/exp2.jpeg",
    company_name: "Next24Tech",
    logoPath: "/experience/exp2.jpeg",
    title: "Backend Developer Intern",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Designed scalable backend logic using Node.js and Express, integrating third-party APIs and ensuring efficient data handling across services.",
      "Developed and documented modular microservices architecture, enabling independent deployment and better maintainability.",
      "Improved MongoDB performance by restructuring data models and leveraging advanced indexing and aggregation techniques.",
      "Secured backend systems with JWT-based authentication, bcrypt hashing, and layered permission checks for sensitive operations.",
      "Developed modular backend components using Express middleware and controller-service architecture, improving code reusability and simplifying future feature integration.",
    ],
  },

];
