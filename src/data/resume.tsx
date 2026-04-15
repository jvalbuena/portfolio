import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Julian Valbuena",
  initials: "JV",
  url: "https://jv.io",
  location: "Sydney, AU",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "Infrastructure engineer exploring AI and ML. Building systems that work reliably and solve real problems.",
  summary:
    "I build systems grounded in first principles—starting from reliable infrastructure and evolving toward AI-driven solutions. With roots in cloud engineering and site reliability, I’m now exploring how machine learning can create meaningful products. I share experiments and learnings on X (@mrer42), focusing on practical AI applications and Python for data science. Formally trained in Electronic Engineering and Information Communication Technology, with recent specialized training in AI/ML. I enjoy building in public, learning from the community, and contributing to projects that have real impact.",
  avatarUrl: "/avatar.jpg",
  skills: [
    "Python",
    "Machine Learning",
    "Data Science & Analysis",
    "AI Agents & LLMs",
    "Kubernetes & Docker",
    "Infrastructure & SRE",
    "System Design",
    "Cloud Architecture"
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
        url: "https://github.com/jvalbuena/jv",
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
        url: "https://x.com/mrer42",
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
      badges: ["Kubernetes", "EKS", "System Reliability", "Cost Optimization"],
      location: "Hybrid",
      title: "Principal Engineer",
      logoUrl: "https://www.commbank.com.au/content/dam/commbank/commBank-logo.svg",
      start: "July 2013",
      end: "Current",
      description:
        "Leading platform modernization efforts by migrating applications to EKS, improving system reliability, and optimizing infrastructure costs. Working on large-scale distributed systems supporting millions of customers.",
    },
    {
      company: "Ninefold",
      badges: ["PaaS", "Ruby on Rails", "Cloud Infrastructure"],
      href: "https://en.wikipedia.org/wiki/Ninefold",
      location: "Hybrid",
      title: "Cloud Engineer",
      logoUrl: "https://en.wikipedia.org/wiki/File:Ninefold_logo_white_on_black.png",
      start: "January 2012",
      end: "July 2013",
      description:
        "Built and maintained a custom Platform-as-a-Service for Ruby on Rails applications, handling infrastructure abstractions and enabling developer productivity at scale.",
    },
    {
      company: "Nextgen",
      href: "https://nextgen.net/#!/home",
      badges: ["Virtualization", "Cloud Migration", "Infrastructure"],
      location: "Sydney, NSW",
      title: "Infrastructure Engineer",
      logoUrl: "https://nextgen.net/assets/images/Home/nextgen-logo.png",
      start: "April 2008",
      end: "January 2012",
      description:
        "Engineered and executed large-scale P2V and V2V migrations to private cloud environments. Managed storage and network infrastructure supporting critical business operations.",
    }
  ],
  education: [
    {
      school: "MIT IDSS",
      href: "https://idss.mit.edu/academics/idssx/",
      degree: "AI & Machine Learning Specialization",
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
        "Built a fully local research agent that explores any topic, synthesizes information, and generates summaries without relying on external APIs. The agent can search the web for context and works efficiently on Apple Silicon hardware. An experiment in privacy-preserving AI.",
      technologies: [
        "CrewAI.js",
        "Node.js",
        "Magic UI",
        "Ollama",
        "Local LLMs"
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
      title: "Customer Satisfaction Prediction Model",
      href: "https://docs.google.com/presentation/d/e/2PACX-1vSnuusiMWIUSzOTgEyVGHEgzqSEiOYWhFrtJx13F-Ltiz6yFwYSs6X6pVNZZbilV-ScllJ0ll0WiaCK/embed?start=true&loop=false&delayms=3000",
      dates: "Feb 2024",
      active: false,
      description:
        "Developed and trained a classification model for predicting passenger satisfaction on high-speed rail. Performed exploratory data analysis, engineered features, and compared decision trees and random forests. Learned the importance of data quality and feature engineering.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Google Colab",
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
        "A multi-agent research crew that leverages specialized roles to investigate topics in depth. Runs entirely locally with Ollama, demonstrating how agent architectures can distribute complex tasks effectively.",
      technologies: [
        "CrewAI",
        "Python",
        "Serper API",
        "Ollama",
        "Local Inference"
      ],
      links: [
        {
          type: "Explore on GitHub",
          href: "https://github.com/jvalbuena/ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ER Medical Assistant",
      href: "https://er-med-assist-sentientradar.replit.app",
      dates: "Ongoing",
      active: true,
      description: "An AI-powered platform exploring how technology can support doctors and patients in managing health journeys more effectively. Focused on practical applications of AI in healthcare with a human-centered design approach.",
      technologies: ["AI", "React", "Web Platform", "Healthcare"],
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
      title: "MIT IDSS Hackathon - Shinkansen Satisfaction Prediction",
      dates: "Feb 09th - 11th, 2024",
      location: "Remote",
      description:
        "Built a machine learning pipeline to predict customer satisfaction for Shinkansen passengers. Finished as 1st runner-up. The experience reinforced the importance of understanding business context and user needs when building predictive models.",
      image:
        "https://photos.app.goo.gl/2FjZqVZ7EdArrCf58",
      mlh: "",
      links: [],
    },
    {
      title: "X-ray Lite - Lightweight Medical Image Analysis",
      dates: "March 2025",
      location: "Sydney, Australia",
      description: "Developed an accessible tool for basic X-ray image analysis using AI. Focused on making medical AI approachable and understanding the challenges of deploying AI in resource-constrained settings.",
      image: "",
      mlh: "",
      links: [
        {
          type: "Live Demo",
          href: "https://xray-lite.replit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
