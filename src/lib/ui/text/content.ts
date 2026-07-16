export interface ProcessStep {
  title: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  description: string;
}

export interface SiteContent {
  nav: {
    about: string;
    portfolio: string;
    cta: string;
  };
  hero: {
    name: string;
    tagline: string;
    badges: string[];
  };
  whoItsFor: {
    sectionTitle: string;
    audiences: AudienceCard[];
    cta: string;
  };
  projects: {
    sectionTitle: string;
    visitSite: string;
  };
  about: {
    heading: string;
    bio: string[];
    ctaLabel: string;
    skillsHeading: string;
    skills: string[];
  };
  process: {
    sectionTitle: string;
    intro: string;
    steps: ProcessStep[];
    cta: string;
  };
  footer: {
    heading: string;
    whatsapp: string;
    phone: string;
    moreLinksHeading: string;
    accessibility: string;
    privacy: string;
    copyright: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
}

export const content: Record<"he" | "en", SiteContent> = {
  he: {
    nav: {
      about: "מי אני",
      portfolio: "תיק עבודות",
      cta: "בואו נדבר",
    },
    hero: {
      name: "ZoeStudio",
      tagline: "להבין קוד. להבין אנשים.",
      badges: ["עיצוב ב-Wix", "עיצוב ב-WordPress", "פיתוח Full-Stack"],
    },
    whoItsFor: {
      sectionTitle: "למי זה מתאים?",
      audiences: [
        {
          title: "עצמאים ובעלי עסקים קטנים",
          description:
            "צריכים עמוד נחיתה מדויק שעובד וממיר — בלי בלגן, בלי סיבוכים, עם מסר שמדבר אל הלקוחות שלכם.",
        },
        {
          title: "עמותות וארגונים חברתיים",
          description:
            "רוצים להנגיש את התוכניות והשירותים שלכם למי שבאמת צריך אותם, בשפה ברורה ובנגישות מלאה.",
        },
      ],
      cta: "לצפייה בפרויקטים",
    },
    projects: {
      sectionTitle: "תיק עבודות",
      visitSite: "לצפייה באתר",
    },
    about: {
      heading: "היי!",
      bio: [
        "אני זואי ברקן, אמא וגרה בחוף הכרמל.",
        "אני מעצבת ומפתחת אתרים, ומגיעה עם רקע של מתכנתת Full Stack, עורכת תוכן ויזמית חברתית. ביומיום, אני עוזרת לעצמאיים שצריכים עמוד נחיתה מדויק שיעבוד וימכור עבורם, ולעמותות שרוצות להנגיש את התוכניות שלהן למי שבאמת צריך אותן.",
        "לצד העולם הטכנולוגי, אני גם בעלת תואר שני בטיפול בתנועה ומנחת קבוצות. החיבור הזה מאפשר לי להביא לעבודה שילוב של יסודיות בלתי מתפשרת וירידה לפרטים הטכניים הכי קטנים, יחד עם הבנה עמוקה של אנשים ובניית קהילה.",
        "הסגנון שלי הוא נקי ופשוט, כזה שמדבר את הלב של העסק שלכם. אני מאמינה שאתר טוב באמת לא נשען רק על קוד חכם, אלא קודם כל על הקשבה, שותפות ודיאלוג פתוח ונעים לאורך כל הדרך.",
        "אם זה מרגיש לכם נכון ומתאים למה שאתם צריכים כרגע – בואו נדבר.",
      ],
      ctaLabel: "בואו נדבר",
      skillsHeading: "הכלים שלי",
      skills: [
        "עיצוב אתרים ב-Wix",
        "עיצוב אתרים ב-WordPress",
        "עמודי נחיתה",
        "UX/UI",
        "מיתוג דיגיטלי",
        "כתיבת תוכן לאתרים",
        "אופטימיזציה למובייל",
        "נגישות דיגיטלית",
      ],
    },
    process: {
      sectionTitle: "תהליך העבודה",
      intro:
        "תהליך אחד שלם — מהרעיון ועד לאתר חי, בליווי צמוד לאורך כל הדרך. בלי צורך בגורמים נוספים.",
      steps: [
        {
          title: "פגישת איפיון",
          description:
            "מכירים, מבינים את הצרכים והמטרות שלכם, ומתחילים לבנות כיוון.",
        },
        {
          title: "עבודה משותפת על טקסטים",
          description: "בונים יחד את המסרים שמדברים אל קהל היעד שלכם.",
        },
        {
          title: "סקיצה",
          description: "מציגה לכם הצעה ראשונית למבנה ולעיצוב של האתר.",
        },
        {
          title: "תיקונים וסיום",
          description:
            "מדייקות יחד עד שהכל בדיוק כמו שרציתם — ועולים לאוויר.",
        },
      ],
      cta: "בואו נדבר",
    },
    footer: {
      heading: "בואו נדבר",
      whatsapp: "כתבו לי בוואטסאפ",
      phone: "התקשרו אליי",
      moreLinksHeading: "עוד קישורים",
      accessibility: "הצהרת נגישות",
      privacy: "מדיניות פרטיות",
      copyright: "© כל הזכויות שמורות לזואי ברקן",
    },
    notFound: {
      title: "אופס!",
      message: "העמוד המבוקש לא נמצא",
      backHome: "חזרה לדף הבית ❯",
    },
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      cta: "Let's talk",
    },
    hero: {
      name: "ZoeStudio",
      tagline: "Understand code. Understand people.",
      badges: ["Wix Design", "WordPress Design", "Full-Stack Development"],
    },
    whoItsFor: {
      sectionTitle: "Who is this for?",
      audiences: [
        {
          title: "Freelancers & small business owners",
          description:
            "Need a precise landing page that works and converts — no clutter, no complications, with a message that speaks to your clients.",
        },
        {
          title: "Nonprofits & social organizations",
          description:
            "Want to make your programs and services accessible to the people who truly need them, in clear language and full accessibility.",
        },
      ],
      cta: "View my projects",
    },
    projects: {
      sectionTitle: "Portfolio",
      visitSite: "Visit site",
    },
    about: {
      heading: "HEY!",
      bio: [
        "I'm Zoe Barkan, a mom living on the Carmel coast.",
        "I design and build websites, coming from a background as a full-stack developer, content editor and social entrepreneur. Day to day, I help freelancers who need a precise landing page that actually works and sells for them, and nonprofits who want to make their programs accessible to the people who truly need them.",
        "Alongside the tech world, I also hold a master's degree in movement therapy and facilitate groups. That combination lets me bring uncompromising thoroughness and attention to the smallest technical details, together with a deep understanding of people and community-building.",
        "My style is clean and simple — the kind that speaks to the heart of your business. I believe a truly good website doesn't rely on clever code alone, but first on listening, partnership, and an open, pleasant dialogue all the way through.",
        "If this feels right and fits what you need right now — let's talk.",
      ],
      ctaLabel: "Let's talk",
      skillsHeading: "My Toolkit",
      skills: [
        "Wix Website Design",
        "WordPress Website Design",
        "Landing Pages",
        "UX/UI",
        "Digital Branding",
        "Web Copywriting",
        "Mobile Optimization",
        "Digital Accessibility",
      ],
    },
    process: {
      sectionTitle: "The work process",
      intro:
        "One complete process — from idea to a live site, with close guidance all the way. No need for additional parties.",
      steps: [
        {
          title: "Discovery meeting",
          description:
            "We get to know each other, understand your needs and goals, and start shaping a direction.",
        },
        {
          title: "Working on the copy together",
          description: "We build the messages that speak to your audience, together.",
        },
        {
          title: "Sketch",
          description: "I present an initial proposal for the site's structure and design.",
        },
        {
          title: "Revisions and completion",
          description: "We fine-tune until it's exactly what you wanted — then launch.",
        },
      ],
      cta: "Let's talk",
    },
    footer: {
      heading: "Let's talk",
      whatsapp: "Message me on WhatsApp",
      phone: "Call me",
      moreLinksHeading: "More links",
      accessibility: "Accessibility statement",
      privacy: "Privacy policy",
      copyright: "© Zoe Barkan. All rights reserved.",
    },
    notFound: {
      title: "Oops!",
      message: "404 - sorry, this page was not found!",
      backHome: "Take me back home ❯",
    },
  },
};
