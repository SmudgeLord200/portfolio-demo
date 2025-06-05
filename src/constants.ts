import type { ExperienceItem, ProjectItem, SKillsItem } from "./type";
import WeatherApp from "./assets/WeatherApp.png";
import ResDashboardApp from "./assets/ResDashboardApp.png";
import HackathonApp from "./assets/HackathonApp.png";
import MiniDashboardApp from "./assets/MiniDashboardApp.png";
import ClickbaitandSwitchAI from "./assets/ClickbaitandSwitchAI.png";
import WebScraper from "./assets/WebScraper.png";

export const DRAWER_WIDTH = 240

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Frontend Engineer',
    company: 'Ayora, UK',
    dates: 'Jan 2025 - Apr 2025',
    description: 'Developed web app CRM dashboard for visualising clients’ transactions using React, TypeScript, Chakra UI, Vite and TanStack. Built and maintained web app component to retrieve CRM data (e.g. budget) via API integration, visualised data via front-end library, collaborated with cross-functional teams, and stored data via cache and local storage. Improved budget planning for clients by 30%.',
    technologies: ['React', 'TypeScript', 'Chakra UI', 'Vite', 'TanStack', 'Vitest', 'Agile'],
  },
  {
    title: 'Software Engineer',
    company: 'EtherSec, UK',
    dates: 'Nov 2023 - Dec 2024',
    description: 'Built and optimised mobile apps (Android/ iOS) and web apps for real-time user verification and surveillance in supply chain management, using React Native, HTML, and CSS. Implemented user flow components from biometric registration and real-time data tracking to asynchronous data processing. Improved the processing speed by 20%.',
    technologies: ['React Native', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Software Engineer (Programming)',
    company: 'Edvance Technology, Hong Kong',
    dates: 'Dec 2022 - Sept 2023',
    description: 'Consulted clients on digital transformation (from offline staff training to digital – building e-learning web system), working with the System Development team, using React, JavaScript, Redux Toolkit, Material UI, HTML, CSS, Python, MongoDB. Supported full software development lifecycle (SDLC), using project skills, from design, test, implementation, to maintenance. Reduced project timeline by 10%.',
    technologies: ['React', 'JavaScript', 'Redux Toolkit', 'Material UI', 'HTML', 'CSS', 'Python', 'MongoDB'],
  },
  {
    title: 'Software Developer',
    company: 'SOS Group, Hong Kong',
    dates: 'Sept 2022 - Dec 2022',
    description: 'Advised clients on debugging WordPress websites, using WordPress, CSS, and JavaScript. Handled testing and maintenance throughout SDLC, using project skills and web searching. Improved website performance by 30%.',
    technologies: ['WordPress', 'CSS', 'JavaScript', 'Java', 'Digital Transformation'],
  },
  {
    title: 'Web Developer Intern',
    company: 'Zpiral, Hong Kong',
    dates: 'Aug 2021 - Oct 2021',
    description: 'Developed and maintained web applications using WordPress, WooCommerce.  Collaborated with a team of engineers to implement new features and improve performance.',
    technologies: ['WordPress', 'WooCommerce', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Inncorn Technology, Hong Kong',
    dates: 'Jun 2021 - Jul 2021',
    description: 'Trained an AI Ambassador, one of their AI products. Led “testing/ UAT” phase of AI product, inputting different questions to assess its response accuracy, after building test cases (questions and answer templates). Boosted accuracy by 30%.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Machine Learning', 'AI'],
  },
];

export const SKILLS_DATA: SKillsItem[] = [
  { category: 'Front-End', items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'HTML', 'CSS', 'MUI', 'Chakra UI'] },
  { category: 'Back-End', items: ['Python', 'MongoDB', 'SQL', 'RESTful APIs'] },
  { category: 'Tools', items: ['Git', 'Vite', 'VS Code', 'npm', 'Vitest', 'Docker', 'Figma', 'WordPress', 'Wix', 'Postman'] },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'Fund Your Hack',
    description: 'A Hackathon group project scrapping Hackathon sponsor data from DevPost using React, Material UI, Python.',
    technologies: ['React', 'Matierial UI', 'JavaScript', 'Python'],
    link: 'https://smudgelord200.github.io/sponsorship-web-scraper-2/',
    image: HackathonApp,
  },
  {
    title: 'Mini Dashboard App',
    description: 'A mini dashboard app displaying sensor readings using React, TypeScript, Material UI, Vite, faker, Vitest.',
    technologies: ['React', 'TypeScript', 'Matierial UI', 'JavaScript', 'Vite', 'Vitest', 'Faker'],
    link: 'https://smudgelord200.github.io/mini-dashboard',
    image: MiniDashboardApp,
  },
  {
    title: 'Clickbait & Switch AI',
    description: 'A full-stack service that analyzes news articles from URLs using NLP models to provide insights like summarization, sentiment, bias, topic, and named entity recognition.',
    technologies: ['React', 'TypeScript', 'Matierial UI', 'JavaScript', 'Vite', 'Vitest', 'Python', 'FastAPI', 'Pytest'],
    link: 'https://github.com/SmudgeLord200/clickbait-and-switch-ai',
    image: ClickbaitandSwitchAI,
  },
  {
    title: 'CB Web Scraper',
    description: 'A backend service that scrapes various websites to find events (talks, screenings, Q&As, etc.) in London and beyond that involve Cate Blanchett using machine learning.',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Requests', 'Yagmail', 'Spacy'],
    link: 'https://github.com/SmudgeLord200/cb_web_scraper',
    image: WebScraper,
  },
  {
    title: 'Restaurant Dashboard App',
    description: 'A dashboard app displaying restaurant statistics using React, TypeScript, Material UI, Vite.',
    technologies: ['React', 'TypeScript', 'Matierial UI', 'JavaScript', 'Vite', 'WebSocket'],
    link: 'https://github.com/SmudgeLord200/dashboard-app',
    image: ResDashboardApp,
  },
  {
    title: 'HTTP GET Weather App',
    description: 'A weather app using React, TypeScript, Material UI, OpenWeather API, Vite.',
    technologies: ['React', 'TypeScript', 'Matierial UI', 'JavaScript', 'OpenWeather API', 'Vite'],
    link: 'https://smudgelord200.github.io/http-get-weather-app',
    image: WeatherApp,
  },
];

// Animation Variants
export const PAGE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const CARD_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
};

export const LISTITEM_VARIANTS = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export const MAX_PROJECTS_STATIC_GRID = 3;
export const PROJECTS_PER_PAGE_CAROUSEL = 3;