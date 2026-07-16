export interface WebsiteCardProps {
  id: number;
  title: { he: string; en: string };
  description: { he: string; en: string };
  image: string;
  link: string;
}

export const WebsitesCards: WebsiteCardProps[] = [
  {
    id: 1,
    title: {
      he: "דנה אלמלח - טיפול והנחיה אינטגרטיבית",
      en: "Dana Almalach - Integrative Therapy & Guidance",
    },
    description: {
      he: "אתר תדמית - כולל סל שירותים בתחומים שונים",
      en: "Personal brand website featuring a full range of services",
    },
    image: `/images/projects/websites/dana.png`,
    link: `https://www.danaelmalach.com/`,
  },
  {
    id: 2,
    title: {
      he: "לימודי גינקוסופיה",
      en: "Gynocosophia Studies",
    },
    description: {
      he: "עמוד נחיתה לתכנית לימודים",
      en: "Landing page for a study program",
    },
    image: `/images/projects/websites/website_showcase_gynocosophia.gif`,
    link: `https://www.ohela.org/%D7%9C%D7%99%D7%9E%D7%95%D7%93%D7%99-%D7%92%D7%99%D7%A0%D7%A7%D7%95%D7%A1%D7%95%D7%A4%D7%99%D7%94`,
  },
  {
    id: 3,
    title: {
      he: "שי ניר",
      en: "Shai Nir",
    },
    description: {
      he: "עמוד נחיתה",
      en: "Landing page",
    },
    image: `/images/projects/websites/shai_nir.png`,
    link: `https://www.shainir.com/`,
  },
  {
    id: 4,
    title: {
      he: "אוהלה - אדמת מרפא נשית",
      en: "Ohela - A Healing Land for Women",
    },
    description: {
      he: "אתר לעמותה",
      en: "Website for a nonprofit organization",
    },
    image: `/images/projects/websites/amen.png`,
    link: "https://www.ohela.org",
  },
];
