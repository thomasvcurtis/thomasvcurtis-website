export const defaultLanguage = 'en';

export type LanguageCode = 'en';

export const ui = {
  en: {
    projectsContent: {
      weatherBox: {
        title: 'Weather Box',
        description: 'Interactive weather application using a world map to display real-time weather conditions.',
        imageAltText: 'Weather Box interface screenshot',
        categoryText: 'Web Application',
        dateText: 'June 2025',
        detailedDescription:
          'A modern weather application that combines the power of Mapbox for map interaction and Tomorrow.io for accurate weather data. Users can click anywhere on the map to get detailed weather forecasts for that location.',
        keyFeatures: {
          interactiveMap: {
            title: 'Interactive Map',
            description: 'Intuitive map interface powered by Mapbox allowing users to select any location.',
          },
          realTimeWeather: {
            title: 'Real-time Weather',
            description: 'Accurate and up-to-date weather data provided by Tomorrow.io API.',
          },
          locationServices: {
            title: 'Location Services',
            description: 'Reverse geocoding to get precise place names from selected coordinates.',
          }
        },
        challenges:
          'Implementation of React state management with TypeScript, third-party API integration, and map rendering performance optimization.',
        learnings: 'Deepened knowledge of TypeScript, geographical APIs handling, and cloud architecture development with Firebase.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description: '',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description:
          '',
      },
      devOps: {
        title: 'Dev Ops',
        description:
          '',
      },
    },
    site: {
      title: 'Thomas Curtis',
      description:
        'Software Developer Portfolio',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tldr: 'TLDR',
    },
    footer: {
      rights: 'All rights reserved.',
      quickLinks: 'Quick Links',
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      social: 'Social',
      tldr: "TLDR",
    },
    homePage: {
      pageTitle: 'Thomas Curtis - Software Developer',
      pageDescription:
        'Welcome to the portfolio of Thomas Curtis - Software Developer specializing in modern web technologies',
      heroGreeting: "Hello There, I'm Thomas Curtis",
      heroSubtitlePart1: 'Software Developer',
      heroSubtitlePart2: '',
      heroIntroduction: '',
      heroViewWorkButton: 'View My Projects',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'A handsome black man',
      featuredProjectsTitle: 'Latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'The tools I use to take my ideas to code',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'Calendar integration coming soon! In the meantime, feel free to send me a message using the form above.',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Thomas Curtis's Portfolio",
      metaDescription: "Discover all of Thomas Curtis's software development projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },


    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
    tldrPage: {
      pageTitle: "TC's TLDR Collection",
      pageDescription: "My collection of interesting articles and quick thoughts",
      title: "TC's TLDR",
      description: "Quick summaries and thoughts on interesting articles I've read",
      noEntriesFound: "No TLDR entries found."
    },
    tldrPost: {
      backToList: "Back to TLDR List",
      readOn: "Read on: ",
      sourceLink: "Original Article",
      readMore: "Read my thoughts",
    },
  },
} as const;

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  _lang: LanguageCode | undefined,
  feature: F
) {
  // Always use English
  const currentLanguage = 'en';
  return function t(key: keyof UISchema[typeof defaultLanguage][F]): string {
    const featureTranslations = ui[currentLanguage][feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[key as keyof typeof featureTranslations] as string;
    }
    return '';
  };
}
