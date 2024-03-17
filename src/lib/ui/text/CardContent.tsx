interface CardProps {
  id: number;
  title: string;
  image: string;
  description?: string;
  link: string;
  skills?: string[];
}

export const CardContent: CardProps[] = [
  {
    id: 1,
    title: "Mukdam Control Panel",
    description: "Control system for pension reports for monthly inspection",
    image: "/demoMukdam15_02_24.gif",
    link: "/projects/mukdam-inspection",
    skills: ["NextJS", "TypeScript", "TailwindCSS", "PostgressSQL"],
  },
  {
    id: 2,
    title: "Mukdam CRM",
    description:
      "CRM system to manage Accounts and Tokens with full CRUD options.",
    image: "/images/mukdamCRMCover.png",
    link: "/projects/mukdam-crm",
    skills: ["NextJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Pet App",
    description: "A smoke that is a byproduct of fire.",
    image: "/images/sea.jpg",
    link: "/projects/pet-app",
    skills: ["React", "NodeJS", "MongoDB"],
  },
];
