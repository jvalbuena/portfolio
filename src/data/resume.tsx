import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Julian Valbuena",
  initials: "https://www.jvev.link/",
  url: "https://jv.io",
  location: "Sydney, AU",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "System's Engineer(SRE), I love solving problems and building products that just work, find me on X.",
  summary:
    "I design and build systems grounded in first principles, with a passion for advancing AI and ML research and development. I share insights and projects on X under @Sentient_Radar, focusing on Python for Data Science and AI agent development. My background includes a degree in Electronic Engineering, a Master's in Information and Communication Technology, and specialized training in AI and ML. I’ve contributed to startups and served as an SRE in the financial sector, with hands-on experience in innovative projects, including my first ML hackathon.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFffiN3l93H8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1655726289562?e=1730937600&v=beta&t=JCE7_qIX1DycwMPldP1KWV6zzXpQDBDV8Bz1773p84U",
  skills: [
    "Python for Data Science",
    "Data Analysis",
    "ML Algorithms",
    "LLM tunning",
    "Python",
    "Docker",
    "Kubernetes",
    "SRE"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sentient.radar@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jvalbuena",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/julian-valbuena-9739913/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sentient_Radar",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@SentientRadar",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "CommBank",
      href: "https://www.commbank.com.au/",
      badges: [],
      location: "Hybrid",
      title: "Principal Engineer",
      logoUrl: "https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg",
      start: "July 2013",
      end: "Current",
      description:
        "Modernising and migrating apps to EKS, solving performance and reliability issues, optimising for cost.",
    },
    {
      company: "Ninefold",
      badges: [],
      href: "https://en.wikipedia.org/wiki/Ninefold",
      location: "Hybrid",
      title: "Cloud Engineer",
      logoUrl: "https://en.wikipedia.org/wiki/File:Ninefold_logo_white_on_black.png",
      start: "January 2012",
      end: "July 2013",
      description:
        "Custom build PaaS platform for Ruby on Rails applications.",
    },
    {
      company: "Nextgen",
      href: "https://nextgen.net/#!/home",
      badges: [],
      location: "Sydney, NSW",
      title: "Infrastructure Engineer",
      logoUrl: "https://nextgen.net/assets/images/Home/nextgen-logo.png",
      start: "January 2012",
      end: "April 2008",
      description:
        "P2V and V2V migrations of applications to private cloud, storage and network engineering.",
    }
  ],
  education: [
    {
      school: "MIT IDSS",
      href: "https://idss.mit.edu/academics/idssx/",
      degree: "https://eportfolio.mygreatlearning.com/julian-valbuena",
      logoUrl: "https://idss.mit.edu/wp-content/themes/idss%202015/images/mit-idss-mobile.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Wollongong University",
      href: "https://www.uow.edu.au/",
      degree: "Master of Information and Communication Technology",
      logoUrl: "https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo-white.svg",
      start: "2001",
      end: "2002",
    },
    {
      school: "Universidad Pontificia Bolivariana",
      href: "https://www.upb.edu.co/es/pregrados/ingenieria-electronica-bucaramanga",
      degree: "Electronic Engineer",
      logoUrl: "https://www.upb.edu.co/wcs_statics/pp/img/Logo-UPB-2022.svg",
      start: "1996",
      end: "2000",
    },
  ],
  projects: [
    {
      title: "Research Agent - Local LLM",
      href: "https://github.com/jvalbuena/ollama-local-ui",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "I'm trying out a fully local research agent, this agent will research any topic and write down a few paragraphs it has the ability to search the web for information and write about it. It works relatively ok on macbook M3 series.",
      technologies: [
        "crewai.js",
        "Node.js",
        "Magic UI",
        "ollama"
      ],
      links: [
        {
          type: "Codebase",
          href: "https://github.com/jvalbuena/ollama-local-ui",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Classification Model",
      href: "https://docs.google.com/presentation/d/e/2PACX-1vSnuusiMWIUSzOTgEyVGHEgzqSEiOYWhFrtJx13F-Ltiz6yFwYSs6X6pVNZZbilV-ScllJ0ll0WiaCK/embed?start=true&loop=false&delayms=3000",
      dates: "Feb 2024",
      active: false,
      description:
        "Developed a classification model, performed EDA, build a decision trees and Random Forests",
      technologies: [
        "RAG",
        "Python",
        "Google Colab",
        "GPU",
        "PineconeDB"
      ],
      links: [
        {
          type: "Hackathon Workbook",
          href: "https://github.com/jvalbuena/ML-notebooks/blob/main/Hackathon_BTTF.ipynb",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CrewAI Helper Crew",
      href: "https://github.com/jvalbuena/ai",
      dates: "Oct 2024",
      active: true,
      description:
        "CrewAI multi-agent research crew, runs locally with ollama",
      technologies: [
        "CrewAI",
        "Python",
        "Serper.dev",
        "GPU",
      ],
      links: [
        {
          type: "CrewAI Helper Crew",
          href: "https://github.com/jvalbuena/ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "er-med-assist",
      href: "https://er-med-assist-sentientradar.replit.app",
      dates: "",
      active: true,
      description: "An AI enabled platform aimed at providing Doctors and Patients control over their health journey.",
      technologies: ["AI", "Web Platform", "Healthcare"],
      links: [
        {
          type: "Live Demo",
          href: "https://er-med-assist-sentientradar.replit.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
 ],
  hackathons: [
    {
      title: "MIT IDSS",
      dates: "Feb 09th - 11th, 2024",
      location: "Remote",
      description:
        "Developed a prediction model to predict customer satisfaction for passengers in the Shinkansen, 1st runner up",
      image:
        "https://photos.app.goo.gl/2FjZqVZ7EdArrCf58",
      mlh: "",
      links: [],
    },
    {
      title: "X-ray lite",
      dates: "March 2025",
      location: "Sydney, Australia",
      description: "Developed a lightweight X-ray analysis tool using AI.",
      image: "",
      mlh: "",
      links: [
        {
          title: "Live Demo",
          href: "https://xray-lite.replit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
      {
        title: "Prompt Sculptor",
        dates: "Aug 2025",
        location: "",
        description: "Prompt Sculptor is a personal prompt engineering tool that helps you craft and manage your AI prompts effectively.",
        image: "",
        mlh: "",
        links: [
          {
      title: "Live Demo",
            href: "https://prompt-sculptor-sentientradar.replit.app/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
      },
        {
          title: "k8agent",
          dates: "",
          location: "",
          description: "An SRE ready environment for Kubernetes monitoring setup with Prometheus, Grafana, and automated load testing capabilities.",
          image: "",
          mlh: "",
          links: [
            {
        title: "GitHub",
              href: "https://github.com/jvalbuena/k8agent",
              icon: <Icons.github className="size-3" />,
            },
          ],
        },
  ],
} as const;
