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
    image: `${process.env.BASE_PATH}/images/projects/mukdam-inspection/demoMukdamInspection.gif`,
    link: `${process.env.BASE_PATH}/projects/mukdam-inspection`,
    skills: ["PostgreSQL", "NextJS", "NestJS", "TypeScript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Mukdam CRM system",
    description:
      "CRM system to manage Accounts and Tokens with full CRUD options.",
    image: `${process.env.BASE_PATH}/images/projects/mukdam-crm/demoMukdamCRM.gif`,
    link: `${process.env.BASE_PATH}/projects/mukdam-crm`,
    skills: ["NextJS", "TypeScript", "TailwindCSS", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Pet App",
    description: "A full-stack app for pet adoption.",
    image: `${process.env.BASE_PATH}/images/projects/pet-app/demoPetApp.gif`,
    link: `${process.env.BASE_PATH}/projects/pet-app`,
    skills: ["React", "NodeJS", "ChakraUI", "MongoDB", "Vercel"],
  },
];
