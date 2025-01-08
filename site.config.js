const CONFIG = {
  // profile setting (required)
  profile: {
    name: "홍영환",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "안녕하세요 반갑습니다",
    email: "rong5026@naver.com",
    linkedin: "rong5026",
    github: "rong5026",
    instagram: "rong5026",
  },
  projects: [
    {
      name: `무신사 웨건`,
      href: "https://musinsa-pricewagon-front.vercel.app/",
    },
    {
      name: `미팅해요 동물의 숲`,
      href: "https://renew-animal-meeting-front.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hongcoding",
    description: "welcome to hongcoding.site!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log-rosy-pi.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
