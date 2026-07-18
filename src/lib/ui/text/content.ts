export interface ProcessStep {
  title: string;
  description?: string;
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
  problem: {
    sectionTitle: string;
    paragraphs: string[];
  };
  advantages: {
    sectionTitle: string;
    paragraphs: string[];
  };
  whatYouGet: {
    sectionTitle: string;
    items: string[];
  };
  projects: {
    sectionTitle: string;
    visitSite: string;
    showMore: string;
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
      sectionTitle: "למי זה מיועד?",
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
    problem: {
      sectionTitle: "לפעמים צריך חכה",
      paragraphs: [
        "(נו, המשל עם הדייג והדגים…)",
        "אז נכון שיש עכשיו כלים מאוד מתקדמים לבניית אתרים וכתיבת קוד, ואלו כלים מדהימים למי שיש לו גישה טכנית טובה למדי. אבל אחרי שהתוצאה הראשונה עולה - מתחילות לצוץ בעיות, צריך לשנות שורה פה ושם, לעדכן מידע או לינק או להבין לאן הלידים הולכים.",
        "לפעמים יותר פשוט לעשות את התהליך הזה יד ביד עם מישהי שמבינה בזה!",
        "לעשות עבודה יסודית ולחסוך אחר כך זמן יקר (ותסכול) בתיקון תקלות ובאגים.",
      ],
    },
    advantages: {
      sectionTitle: "לא מעצבת אתרים טיפוסית",
      paragraphs: [
        "אז יש בי גם וגם - צד טכנולוגי מפותח, יכולת טכנית, חוש אסתטי ויסודיות בלתי מתפשרת.",
        "וצד שמחובר לרגש ולרוח ובעיקר (!) לאנשים שמקדמים את הערכים והשליחות שלהם בעולם כעצמאיים או במסגרת ארגון.",
      ],
    },
    whatYouGet: {
      sectionTitle: "מה אתם מקבלים?",
      items: [
        "בנאדם לדבר איתו על מה שאתם רוצים וצריכים בעמוד שלכם. (גם יודעת להקשיב, לצחוק וליצור קשר עין 😂)",
        "בניית עמוד נחיתה/אתר מאפס עד לתוצר יפה, אוטומציות, התאמה לנייד וניהול חכם של לידים. כל מה שישרת את העשייה שלכם ויפנה אתכם למה שחשוב באמת.",
        "עמוד עם טביעת האצבע הייחודית שלכם שלא יראה כמו שיבוט של מיליוני אתרים אחרים שנבנו ב-AI באופן אוטומטי.",
        "תהליך מקוצר (הודו לטכנולוגיה 😎), דיאלוגי ויצירתי שיוכל אפילו לחבר אתכם יותר למהות של החזון שלכם בעולם.",
      ],
    },
    projects: {
      sectionTitle: "תיק עבודות",
      visitSite: "לצפייה באתר",
      showMore: "הצג פרויקטים נוספים",
    },
    about: {
      heading: "נעים להכיר",
      bio: [
        "תמיד בתנועה ותמיד לומדת. הסקרנות תמיד מובילה אותי למקומות טובים ואת האיכות הזו אני מביאה לכל מקום. כדי שהאתר ישקף את המהות שלכם כעצמאיים/עמותה - אני לומדת אתכם, שואלת ומכוונת. אחר כך אני מארגנת את התוכן לשפה שתוכל להגיע ללב של הקהל שלכם.",
        "וכמובן, לא משאירה אתכם לבד עם הבלגן. ניסיון כמפתחת full-stack ושנים של בניית אתרים ב-Wix כולל אוטומציות שמקלות על ניהול לידים. קוראת ומבינה קוד - מה שמאפשר לתפור גם פתרונות מתקדמים איפה שצריך (גם כותבת קוד, אבל כבר יש כלים אחרים שעושים את זה לא רע 😁). לאחרונה מעמיקה בקלוד קוד ובכלי AI נוספים כדי לייעל את כל מה שאפשר, ולחסוך לכם זמן שתתפנו לשליחות שלכם!",
        "בוגרת לימודי טיפול בתנועה (M.A), מנחת קבוצות, גינקוסופית (ליווי נשים הוליסטי) עם רקע נרחב כיזמית בפרויקטים חברתיים בתחומי חינוך, אמנות וקהילה. מביאה את הרגישות, ההבנה ברוח האישה והאדם, והיצירתיות שלי לתהליך העבודה שנעשה יחד.",
        "(לא תאמינו אבל כתבתי את הטקסט בעצמי ללא שימוש בצ'אטי)",
      ],
      ctaLabel: "בואו נדבר",
      skillsHeading: "הכלים שלי",
      skills: [
        "עיצוב אתרים ב-Wix",
        "עיצוב אתרים ב-WordPress",
        "עמודי נחיתה",
        "כתיבת תוכן לאתרים",
        "עיצוב רספונסיבי",
        "עיצוב Canva",
        "עריכת וידאו",
      ],
    },
    process: {
      sectionTitle: "תהליך העבודה",
      intro:
        "תהליך אחד שלם — מהרעיון ועד לאתר חי, בליווי צמוד לאורך כל הדרך. בלי צורך בגורמים נוספים.",
      steps: [
        {
          title: "נפגשים לשיחת איפיון",
          description:
            "מכירים, מבינים את הצורך והחזון שלכם לפרויקט, וקובעים יחד את הכיוון הנכון.",
        },
        {
          title: "שני צירי עבודה",
          description:
            "ציר ראשון - התוכן: אתם מקבלים פרומפט ל-AI שמייצר שאלות, עושים קצת שיעורי בית, ואני מגבשת יחד איתכם את התוכן שיעלה לאתר. ציר שני - עיצוב תבנית האתר: פלטת צבעים, מדיה, מבנה האתר, עיצוב אלמנטים ועוד.",
        },
        {
          title: "נפגשות לדבר על הסקיצה",
          description:
            "עושות משוב ואוספות רשימת הערות ומחשבות. תיקונים וסידורים אחרונים: אוטומציות, פרטים, פייפליין ללידים, נגישות, פרטיות, SEO.",
        },
        {
          title: "יוצאים לדרך",
          description:
            "האתר באוויר ואתם מתפנים לשליחות שלכם, ויודעים שיש בית באינטרנט לפרויקט שלכם שמשקף את המהות שלכם.",
        },
      ],
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
    problem: {
      sectionTitle: "Sometimes you need a fishing rod",
      paragraphs: [
        "(you know, the old saying about the fisherman and the fish…)",
        "Sure, there are incredibly advanced tools now for building websites and writing code, and they're amazing for anyone with decent technical access. But after the first result goes live, problems start popping up — a line needs changing here, information or a link needs updating, or you need to figure out where your leads are actually going.",
        "Sometimes it's just simpler to do this process hand in hand with someone who knows what she's doing.",
        "Doing it thoroughly the first time saves you precious time (and frustration) fixing glitches and bugs later.",
      ],
    },
    advantages: {
      sectionTitle: "Not your typical website designer",
      paragraphs: [
        "I have both sides — a developed technological side: technical ability, an aesthetic sense and uncompromising thoroughness.",
        "And a side connected to emotion and spirit, and above all (!) to people who are advancing their values and mission in the world, whether as freelancers or within an organization.",
      ],
    },
    whatYouGet: {
      sectionTitle: "What do you get?",
      items: [
        "A real person to talk to about what you want and need for your page. (I also know how to listen, laugh, and make eye contact 😂)",
        "A landing page or website built from scratch to a beautiful result — automations, mobile optimization and smart lead management. Everything that serves what you do and frees you up for what really matters.",
        "A page with your unique fingerprint, that won't look like a clone of the millions of other sites built automatically by AI.",
        "A shortened process (thank you, technology 😎), dialogic and creative, that can even connect you more deeply to the essence of your vision in the world.",
      ],
    },
    projects: {
      sectionTitle: "Portfolio",
      visitSite: "Visit site",
      showMore: "Show more projects",
    },
    about: {
      heading: "Nice to meet you",
      bio: [
        "Always in motion, always learning. Curiosity always leads me to good places, and I bring that quality everywhere. So the site reflects who you really are — as a freelancer or a nonprofit — I get to know you, ask questions, and guide the process. Then I organize the content into language that reaches the heart of your audience.",
        "And of course, I don't leave you alone with the mess. Experience as a full-stack developer and years of building Wix websites, including automations that make lead management easier. I read and understand code — which lets me tailor advanced solutions wherever needed (I write code too, but there are already other tools that do that pretty well 😁). Lately I've been going deep into Claude Code and other AI tools, to streamline everything I can and save you time to focus on your mission!",
        "Graduate of movement therapy studies (M.A.), group facilitator, gynocosophist (holistic guidance for women), with an extensive background as a social entrepreneur in projects spanning education, art and community. I bring sensitivity, an understanding of the spirit of women and people, and my creativity to the work we do together.",
        "(You won't believe it, but I wrote this text myself — no AI chatbot involved.)",
      ],
      ctaLabel: "Let's talk",
      skillsHeading: "My Toolkit",
      skills: [
        "Wix Website Design",
        "WordPress Website Design",
        "Landing Pages",
        "Web Copywriting",
        "Responsive Design",
        "Canva Design",
        "Video Editing",
      ],
    },
    process: {
      sectionTitle: "The work process",
      intro:
        "One complete process — from idea to a live site, with close guidance all the way. No need for additional parties.",
      steps: [
        {
          title: "Discovery call",
          description:
            "We get to know each other, understand your need and vision for the project, and set the right direction together.",
        },
        {
          title: "Two work tracks",
          description:
            "Track one - content: you get an AI prompt that generates questions, do a bit of homework, and together we shape the content that will go on your site. Track two - template design: color palette, media, site structure, element design and more.",
        },
        {
          title: "Reviewing the sketch together",
          description:
            "We gather feedback, notes and thoughts. Final touches: automations, details, lead pipeline, accessibility, privacy, SEO.",
        },
        {
          title: "Launch day",
          description:
            "The site goes live and you're free for your mission, knowing your project has a home online that reflects who you really are.",
        },
      ],
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
