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
    title: "Mukdam inspection system",
    description: "Control system for pension reports for monthly inspection",
    image: "/images/projects/mukdam-inspection/demoMukdamInspection.gif",
    link: "/projects/mukdam-inspection",
    skills: ["PostgreSQL", "NextJS", "NestJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Mukdam CRM system",
    description:
      "CRM system to manage Accounts and Tokens with full CRUD options.",
    image: "/images/projects/mukdam-crm/demoMukdamCRM.gif",
    link: "/projects/mukdam-crm",
    skills: ["NextJS", "TypeScript", "TailwindCSS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Pet App",
    description: "A smoke that is a byproduct of fire.",
    image: "/images/projects/pet-app/demoPetApp.gif",
    link: "/projects/pet-app",
    skills: ["React", "NodeJS", "ChakraUI", "MongoDB", "Vercel"],
  },
];
