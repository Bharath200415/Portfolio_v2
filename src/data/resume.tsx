import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Bharath",
  initials: "B",
  url: "https://bharath.codes",
  location: "Bangalore, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "A CS Student specializing in building robust web solutions that prioritize a seamless user experience.",
  summary:
    "Over 2+ years of experience in building software solutions that enhance user experiences. Specializes in front-end development with a strong focus on building intuitive web applications using React. Combines a passion for UI/UX with freelance experience to deliver high-quality, user-centric digital products.",
  avatarUrl: "/pixelpfp2.svg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bharath200415@gmail.com",
    tel: "+91 8217720297",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bharath200415",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/bharathcodes",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/zustydev",
        icon: Icons.x,

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
      company: "Zeepty",
      href: "https://zeepty.com/",
      badges: [],
      location: "Remote",
      title: "Graphic design Intern",
      logoUrl: "/zeepty.png",
      start: "May 2025",
      end: "Jul 2025",
      description:
        "Designed and developed engaging visual content and user experiences, from social media promotions to pixel-perfect responsive applications. Key contributions include redesigning the user onboarding process, which led to a 10% increase in user activation and improved long-term retention.",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technolology, Bhopal",
      href: "https://vitbhopal.ac.in",
      degree: "Bachelor's of Technology in Computer Science (BTech)",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/300px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Kendriya Vidyalaya",
      href: "https://kvsangathan.nic.in/en/home-new/",
      degree: "Class 12th & 10th",
      logoUrl: "https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "SnapQR",
      href: "https://github.com/bharath200415/SnapQR",
      dates: "Jan 2026 - Jan 2026",
      active: true,
      description:
        "This project is dedicated to building a fast, simple, and reliable QR code generator that helps users instantly convert links into scannable QR codes. ",
      technologies: [
        "HTML",
        "Javascript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/bharath200415/SnapQR",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-52330599f4c24002984ec170d5e0354d.r2.dev/cursorful-video-1768539033879.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [

    {
      title: "MERNxAI Hackathon",
      dates: "November 23rd - 25th, 2024",
      location: "Bhopal, India",
      description:
        "Developed an API scrapper tool to select only the best models available on platforms like github, hugging face and ARXIV",
      image:
        "/ss.png",
      links: [
                {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/bharath200415",
        },
      ],
    },
  ],
} as const;
