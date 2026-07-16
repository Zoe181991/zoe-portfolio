export interface LegalPageContent {
  title: string;
  paragraphs: string[];
  backHome: string;
}

export const accessibilityContent: Record<"he" | "en", LegalPageContent> = {
  he: {
    title: "הצהרת נגישות",
    paragraphs: [
      "אתר זה מופעל על ידי זואי ברקן, ונבנה מתוך מחויבות לאפשר לכל אדם לגלוש בו בנוחות, ללא תלות ביכולת פיזית, חושית או קוגניטיבית.",
      "במסגרת התאמת האתר הושם דגש על ניגודיות צבעים נאותה, מבנה סמנטי וברור, טקסט חלופי לתמונות, ותצוגה מותאמת למגוון מכשירים ורזולוציות.",
      "למרות המאמצים, ייתכן שיימצאו חלקים באתר שטרם הונגשו במלואם. אנו ממשיכים לעבוד על שיפור הנגישות באתר על בסיס קבוע.",
      "נתקלתם בבעיית נגישות באתר? נשמח שתפנו אלינו בכתובת zoebarkan@gmail.com ונטפל בפנייה בהקדם האפשרי.",
    ],
    backHome: "חזרה לדף הבית",
  },
  en: {
    title: "Accessibility statement",
    paragraphs: [
      "This site is operated by Zoe Barkan and was built with a commitment to making it usable for everyone, regardless of physical, sensory, or cognitive ability.",
      "In adapting the site, care was taken with color contrast, clear semantic structure, alternative text for images, and a layout that adapts to a range of devices and resolutions.",
      "Despite these efforts, some parts of the site may not yet be fully accessible. We continue to work on improving accessibility on an ongoing basis.",
      "Run into an accessibility issue on this site? Please reach out at zoebarkan@gmail.com and we'll address it as soon as possible.",
    ],
    backHome: "Back to homepage",
  },
};

export const privacyContent: Record<"he" | "en", LegalPageContent> = {
  he: {
    title: "מדיניות פרטיות",
    paragraphs: [
      "הפרטיות שלכם חשובה. מסמך זה מסביר אילו נתונים נאספים באתר וכיצד הם נשמרים ומשמשים.",
      "בעת יצירת קשר דרך האתר (מייל, וואטסאפ או טלפון), ייתכן שיועברו פרטים כגון שם, כתובת מייל ותוכן הפנייה. פרטים אלו משמשים אך ורק לצורך מענה לפנייתכם.",
      "האתר עצמו אינו משתמש בעוגיות מעקב לצורכי פרסום. קישורים לאתרים חיצוניים (כגון אתרי לקוחות בתיק העבודות) כפופים למדיניות הפרטיות של אותם אתרים.",
      "המידע שנמסר לא יועבר, יימכר או ישותף עם צד שלישי, למעט אם נדרש הדבר על פי דין.",
      "שאלות בנוגע למדיניות זו ניתן להפנות אל zoebarkan@gmail.com.",
    ],
    backHome: "חזרה לדף הבית",
  },
  en: {
    title: "Privacy policy",
    paragraphs: [
      "Your privacy matters. This page explains what data is collected on this site and how it's stored and used.",
      "When you reach out through the site (email, WhatsApp, or phone), details such as your name, email address, and message content may be shared. This information is used solely to respond to your inquiry.",
      "The site itself does not use tracking cookies for advertising. Links to external sites (such as client portfolio sites) are governed by those sites' own privacy policies.",
      "Information provided will not be transferred, sold, or shared with third parties, except where required by law.",
      "Questions about this policy can be directed to zoebarkan@gmail.com.",
    ],
    backHome: "Back to homepage",
  },
};
