export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'design',
    icon: 'https://cdn.simpleicons.org/figma',
    title: 'Design & Prototyping',
    skills: [
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Sketch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg' },
      { name: 'Miro', icon: 'https://cdn.simpleicons.org/miro' },
      { name: 'ProtoPie', icon: 'https://avatars.githubusercontent.com/u/19763562?s=200&v=4' },
      { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion' }
    ]
  },
  {
    id: 'analytics',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    title: 'Analytics & Data',
    skills: [
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
    ]
  },
  {
    id: 'development',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    title: 'Working Knowledge',
    skills: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Webflow', icon: 'https://cdn.simpleicons.org/webflow' },
      { name: 'Framer', icon: 'https://cdn.simpleicons.org/framer' }
    ]
  },
  {
    id: 'delivery',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    title: 'Delivery & Collaboration',
    skills: [
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'UML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg' }
    ]
  }
];

export const TECH_SECTION_TITLE = 'Skills & Tools';
export const TECH_SECTION_SUBTITLE = 'The tools and technologies I use to bring ideas to life';
