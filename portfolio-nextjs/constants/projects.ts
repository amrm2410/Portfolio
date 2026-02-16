export interface Project {
  id: number;
  slug: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  hasDetails: boolean;
  coverImage: string | null;
  link?: string;
  projectLink?: string;
  comingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  // Featured Projects
  {
    id: 1,
    slug: 'risk-portfolio',
    icon: 'fas fa-shield-alt',
    title: 'Risk Portfolio Overview',
    description: 'Comprehensive risk assessment and portfolio management dashboard for Cedar Rose, featuring real-time risk monitoring and analytics.',
    tags: ['Risk Management', 'Dashboard', 'Data Visualization', 'UI/UX Design'],
    hasDetails: true,
    coverImage: '/project-assets/Risk Portfolio/image.png'
  },
  {
    id: 2,
    slug: 'teleco',
    icon: 'fas fa-network-wired',
    title: 'TELECO',
    description: 'Telecommunications solutions and services platform providing comprehensive connectivity solutions.',
    tags: ['Telecommunications', 'Network Solutions', 'Enterprise'],
    hasDetails: false,
    coverImage: 'https://i.ibb.co/rK1vGMgR/Screenshot-2025-11-27-153244.png',
    link: 'https://telco-eg.com/'
  },
  {
    id: 3,
    slug: 'syarah',
    icon: 'fas fa-car',
    title: 'Syarah',
    description: 'Behind the Wheel of Trust - Comprehensive UX case study for automotive marketplace platform.',
    tags: ['UX Case Study', 'Automotive', 'User Research'],
    hasDetails: false,
    coverImage: 'https://i.ibb.co/5xjh1p3V/Screenshot-2025-11-27-153745.png',
    projectLink: 'https://www.behance.net/gallery/237435523/Behind-the-Wheel-of-Trust-Syarah-App-UX-Case-Study'
  },

  // Coming Soon Projects
  {
    id: 4,
    slug: 'gates-crm-erp',
    icon: 'fas fa-chart-line',
    title: 'Gates Developments CRM & ERP',
    description: 'Designed internal management systems to streamline operational workflows, resulting in 15% efficiency improvement.',
    tags: ['CRM Design', 'ERP System', 'UX Research'],
    hasDetails: false,
    coverImage: '/project-assets/Gates Developments CRM & ERP/Cover.png',
    comingSoon: true
  },
  {
    id: 5,
    slug: 'ventura-trading',
    icon: 'fas fa-chart-area',
    title: 'Ventura Trading',
    description: 'Advanced trading platform with real-time market data, portfolio management, and sophisticated analytics tools.',
    tags: ['Trading Platform', 'Financial Analytics', 'Portfolio Management'],
    hasDetails: true,
    coverImage: '/project-assets/Ventura Trading/Cover.png'
  },
  {
    id: 6,
    slug: 'swapop',
    icon: 'fas fa-exchange-alt',
    title: 'Swapop',
    description: 'Social marketplace app for item swapping and trading with community features and secure transaction handling. Published on App Store & Google Play.',
    tags: ['Social Commerce', 'Marketplace', 'App Store', 'Google Play'],
    hasDetails: false,
    coverImage: '/project-assets/Swapop/image.png'
  },
  {
    id: 7,
    slug: 'water-world',
    icon: 'fas fa-water',
    title: 'Water World',
    description: 'Water park and entertainment platform featuring attractions, ticketing, and visitor experience management.',
    tags: ['Entertainment', 'Theme Park', 'Booking System', 'UI/UX Design'],
    hasDetails: false,
    coverImage: '/project-assets/Water World/image.png',
    link: 'https://wwegypt.com/'
  },

  // Projects with Details
  {
    id: 8,
    slug: 'breadfast',
    icon: 'fas fa-shopping-basket',
    title: 'Breadfast',
    description: 'On-demand grocery delivery app providing fresh bread, groceries, and daily essentials with seamless ordering experience and quick delivery.',
    tags: ['Grocery Delivery', 'Mobile App', 'Food Tech', 'UI/UX Design'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/d044m1Hr/Breadfast-Cover.png'
  },
  {
    id: 9,
    slug: 'byet',
    icon: 'fas fa-home',
    title: 'Byet',
    description: 'Modern real estate platform connecting buyers and sellers with advanced property search and management features.',
    tags: ['Real Estate', 'Property Management', 'Search Platform'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/4Zv0shbh/Cover.png'
  },
  {
    id: 10,
    slug: 'health-360',
    icon: 'fas fa-heartbeat',
    title: 'Health 360',
    description: 'Holistic healthcare management system providing complete patient care solutions with integrated monitoring and reporting.',
    tags: ['Healthcare', 'Patient Management', 'Medical Dashboard'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/397gwZS6/Health-360-cover.png'
  },
  {
    id: 11,
    slug: 'employee-360',
    icon: 'fas fa-user-circle',
    title: 'Employee 360',
    description: 'Comprehensive employee management platform with 360-degree performance tracking, analytics, and engagement tools.',
    tags: ['HR Management', 'Analytics', 'Performance Tracking'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/FLVtH9q1/Cover.png'
  },
  {
    id: 12,
    slug: 'gates-admin-request',
    icon: 'fas fa-clipboard-list',
    title: 'Gates Admin Request',
    description: 'Stationary request solution to track and get insights about requests and stocks with comprehensive inventory management.',
    tags: ['Request Management', 'Inventory Tracking', 'Analytics', 'Admin Dashboard'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/bRWmD2HH/Screenshot-2025-10-04-032738.png'
  },
  {
    id: 13,
    slug: 'crew-website',
    icon: 'fas fa-briefcase',
    title: 'Crew Website',
    description: 'Business consultancy firm specializing in HR management solutions, personnel services, and government compliance for Egyptian corporations.',
    tags: ['Business Consultancy', 'HR Solutions', 'Corporate Website', 'UI/UX Design'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/zHm7hPpG/Desktop-3.png'
  },
  {
    id: 14,
    slug: 'siwa-garden',
    icon: 'fas fa-seedling',
    title: 'Siwa Garden',
    description: 'Premium e-commerce platform specializing in authentic organic products from the Siwa Oasis featuring olive oils, dates, and natural products.',
    tags: ['E-commerce', 'Organic Products', 'Olive Oil', 'UI/UX Design'],
    hasDetails: true,
    coverImage: 'https://i.ibb.co/vvqrB24g/Siwa-Garden-Cover.png'
  },
  {
    id: 15,
    slug: 'stova',
    icon: 'fas fa-couch',
    title: 'Stova',
    description: 'Premium furniture and interior design e-commerce platform featuring modern furniture solutions and personalized design services.',
    tags: ['E-commerce', 'Interior Design', 'Furniture', 'UI/UX Design'],
    hasDetails: true,
    coverImage: '/project-assets/Stova/Stova Cover.png'
  },
  {
    id: 16,
    slug: 'e-destination',
    icon: 'fas fa-route',
    title: 'E-Destination',
    description: 'Designed a mobile app for smart transportation route planning with intuitive user interface and seamless navigation.',
    tags: ['Mobile Design', 'Navigation', 'Transport'],
    hasDetails: true,
    coverImage: '/project-assets/E-Destination/E-سكة.png'
  },

  // Projects with Live Links
  {
    id: 17,
    slug: 'egypt-empire',
    icon: 'fas fa-map-marked-alt',
    title: 'Egypt Empire',
    description: 'Comprehensive tourism management system with destination discovery, booking management, and travel planning tools.',
    tags: ['Tourism', 'Travel Planning', 'Booking System'],
    hasDetails: false,
    coverImage: '/project-assets/Egypt Empire/Egypt Empire Cover.png',
    link: 'https://egypt-empire.com/'
  },
  {
    id: 18,
    slug: 'nile-garden',
    icon: 'fas fa-leaf',
    title: 'Nile Garden',
    description: 'Food production company e-commerce platform specializing in olive oils, pickled vegetables, and premium olive products with comprehensive product showcase.',
    tags: ['E-commerce', 'Food Industry', 'Olive Products', 'UI/UX Design'],
    hasDetails: false,
    coverImage: '/project-assets/Nile Garden/Nile Garden Cover.png',
    link: 'https://www.nile-garden.com/'
  },
  {
    id: 19,
    slug: 'cupra-agency',
    icon: 'fas fa-car',
    title: 'Cupra Agency',
    description: 'Automotive brand agency website showcasing vehicle lineup with immersive design and interactive configurator.',
    tags: ['Automotive', 'Brand Agency', 'Interactive Design'],
    hasDetails: false,
    coverImage: '/project-assets/Cupra Agency/Cupra Cover.png',
    link: 'https://www.cupraagency.com'
  },

  // Other Projects
  {
    id: 20,
    slug: 'atmedicine',
    icon: 'fas fa-pills',
    title: 'ATMedicine',
    description: 'Designed innovative medicine ATM concept with mobile application for code-based medication purchases and distribution.',
    tags: ['Healthcare Innovation', 'Mobile App', 'Business Analysis'],
    hasDetails: false,
    coverImage: 'https://i.ibb.co/vxmPWJHj/Screenshot-2025-11-27-153938.png',
    projectLink: 'https://www.behance.net/gallery/171259005/ATMedicine-UIUX-Case-Study'
  },
  {
    id: 21,
    slug: 'techlandbs',
    icon: 'fas fa-laptop-code',
    title: 'TechlandBS',
    description: 'Business solutions technology platform providing enterprise-level software development and consulting services.',
    tags: ['Enterprise Solutions', 'Business Software', 'Consulting'],
    hasDetails: false,
    coverImage: 'https://i.ibb.co/wrsdh7c5/Screenshot-2025-11-27-153358.png',
    link: 'https://www.techlandbs.com/'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find(project => project.slug === slug);
};

export const getProjectsWithDetails = (): Project[] => {
  return PROJECTS.filter(project => project.hasDetails);
};

export const getProjectByTitle = (title: string): Project | undefined => {
  return PROJECTS.find(project => project.title === title);
};
