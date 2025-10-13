import stovaCover from '../assets/project-assets/Stova/Stova Cover.png';
import cupraCover from '../assets/project-assets/Cupra Agency/Cupra Cover.png';
import egyptEmpireCover from '../assets/project-assets/Egypt Empire/Egypt Empire Cover.png';
import nileGardenCover from '../assets/project-assets/Nile Garden/Nile Garden Cover.png';
import eDestinationCover from '../assets/project-assets/E-Destination/E-سكة.png';
import swapopCover from '../assets/project-assets/Swapop/Cover.png';
import venturaTradingCover from '../assets/project-assets/Ventura Trading/Cover.png';
import gatesCrmErpCover from '../assets/project-assets/Gates Developments CRM & ERP/Cover.png';

// External image URLs
const breadfastCover = 'https://i.ibb.co/d044m1Hr/Breadfast-Cover.png';
const gatesAdminCover = 'https://i.ibb.co/bRWmD2HH/Screenshot-2025-10-04-032738.png';
const byetCover = 'https://i.ibb.co/4Zv0shbh/Cover.png';
const health360Cover = 'https://i.ibb.co/397gwZS6/Health-360-cover.png';
const employee360Cover = 'https://i.ibb.co/FLVtH9q1/Cover.png';
const crewCover = 'https://i.ibb.co/zHm7hPpG/Desktop-3.png';
const siwaGardenCover = 'https://i.ibb.co/vvqrB24g/Siwa-Garden-Cover.png';

export const PROJECTS = [
  // 1. Coming Soon Projects
  {
    id: 1,
    slug: 'gates-crm-erp',
    icon: 'fas fa-chart-line',
    title: 'Gates Developments CRM & ERP',
    description: 'Designed internal management systems to streamline operational workflows, resulting in 15% efficiency improvement.',
    tags: ['CRM Design', 'ERP System', 'UX Research'],
    hasDetails: false,
    coverImage: gatesCrmErpCover,
    comingSoon: true
  },
  {
    id: 2,
    slug: 'ventura-trading',
    icon: 'fas fa-chart-area',
    title: 'Ventura Trading',
    description: 'Advanced trading platform with real-time market data, portfolio management, and sophisticated analytics tools.',
    tags: ['Trading Platform', 'Financial Analytics', 'Portfolio Management'],
    hasDetails: false,
    coverImage: venturaTradingCover,
    comingSoon: true,
    projectLink: '#'
  },
  {
    id: 3,
    slug: 'swapop',
    icon: 'fas fa-exchange-alt',
    title: 'Swapop',
    description: 'Social marketplace app for item swapping and trading with community features and secure transaction handling.',
    tags: ['Social Commerce', 'Marketplace', 'Community Features'],
    hasDetails: false,
    coverImage: swapopCover,
    comingSoon: true
  },
  {
    id: 4,
    slug: 'water-world',
    icon: 'fas fa-water',
    title: 'Water World',
    description: 'Water park and entertainment platform featuring attractions, ticketing, and visitor experience management.',
    tags: ['Entertainment', 'Theme Park', 'Booking System', 'UI/UX Design'],
    hasDetails: false,
    coverImage: null,
    comingSoon: true
  },

  // 2. Projects with Details (hasDetails: true)
  {
    id: 5,
    slug: 'breadfast',
    icon: 'fas fa-shopping-basket',
    title: 'Breadfast',
    description: 'On-demand grocery delivery app providing fresh bread, groceries, and daily essentials with seamless ordering experience and quick delivery.',
    tags: ['Grocery Delivery', 'Mobile App', 'Food Tech', 'UI/UX Design'],
    hasDetails: true,
    coverImage: breadfastCover
  },
  {
    id: 6,
    slug: 'byet',
    icon: 'fas fa-home',
    title: 'Byet',
    description: 'Modern real estate platform connecting buyers and sellers with advanced property search and management features.',
    tags: ['Real Estate', 'Property Management', 'Search Platform'],
    hasDetails: true,
    coverImage: byetCover
  },
  {
    id: 7,
    slug: 'health-360',
    icon: 'fas fa-heartbeat',
    title: 'Health 360',
    description: 'Holistic healthcare management system providing complete patient care solutions with integrated monitoring and reporting.',
    tags: ['Healthcare', 'Patient Management', 'Medical Dashboard'],
    hasDetails: true,
    coverImage: health360Cover
  },
  {
    id: 8,
    slug: 'employee-360',
    icon: 'fas fa-user-circle',
    title: 'Employee 360',
    description: 'Comprehensive employee management platform with 360-degree performance tracking, analytics, and engagement tools.',
    tags: ['HR Management', 'Analytics', 'Performance Tracking'],
    hasDetails: true,
    coverImage: employee360Cover
  },
  {
    id: 9,
    slug: 'gates-admin-request',
    icon: 'fas fa-clipboard-list',
    title: 'Gates Admin Request',
    description: 'Stationary request solution to track and get insights about requests and stocks with comprehensive inventory management.',
    tags: ['Request Management', 'Inventory Tracking', 'Analytics', 'Admin Dashboard'],
    hasDetails: true,
    coverImage: gatesAdminCover
  },
  {
    id: 10,
    slug: 'crew-website',
    icon: 'fas fa-briefcase',
    title: 'Crew Website',
    description: 'Business consultancy firm specializing in HR management solutions, personnel services, and government compliance for Egyptian corporations.',
    tags: ['Business Consultancy', 'HR Solutions', 'Corporate Website', 'UI/UX Design'],
    hasDetails: true,
    coverImage: crewCover
  },
  {
    id: 11,
    slug: 'siwa-garden',
    icon: 'fas fa-seedling',
    title: 'Siwa Garden',
    description: 'Premium e-commerce platform specializing in authentic organic products from the Siwa Oasis featuring olive oils, dates, and natural products.',
    tags: ['E-commerce', 'Organic Products', 'Olive Oil', 'UI/UX Design'],
    hasDetails: true,
    coverImage: siwaGardenCover
  },
  {
    id: 12,
    slug: 'stova',
    icon: 'fas fa-couch',
    title: 'Stova',
    description: 'Premium furniture and interior design e-commerce platform featuring modern furniture solutions and personalized design services.',
    tags: ['E-commerce', 'Interior Design', 'Furniture', 'UI/UX Design'],
    hasDetails: true,
    coverImage: stovaCover
  },
  {
    id: 13,
    slug: 'e-destination',
    icon: 'fas fa-route',
    title: 'E-Destination',
    description: 'Designed a mobile app for smart transportation route planning with intuitive user interface and seamless navigation.',
    tags: ['Mobile Design', 'Navigation', 'Transport'],
    hasDetails: true,
    coverImage: eDestinationCover
  },

  // 3. Projects with Live Links
  {
    id: 14,
    slug: 'egypt-empire',
    icon: 'fas fa-map-marked-alt',
    title: 'Egypt Empire',
    description: 'Comprehensive tourism management system with destination discovery, booking management, and travel planning tools.',
    tags: ['Tourism', 'Travel Planning', 'Booking System'],
    hasDetails: false,
    coverImage: egyptEmpireCover,
    link: 'https://egypt-empire.com/'
  },
  {
    id: 15,
    slug: 'nile-garden',
    icon: 'fas fa-leaf',
    title: 'Nile Garden',
    description: 'Food production company e-commerce platform specializing in olive oils, pickled vegetables, and premium olive products with comprehensive product showcase.',
    tags: ['E-commerce', 'Food Industry', 'Olive Products', 'UI/UX Design'],
    hasDetails: false,
    coverImage: nileGardenCover,
    link: 'https://www.nile-garden.com/'
  },
  {
    id: 16,
    slug: 'cupra-agency',
    icon: 'fas fa-car',
    title: 'Cupra Agency',
    description: 'Automotive brand agency website showcasing vehicle lineup with immersive design and interactive configurator.',
    tags: ['Automotive', 'Brand Agency', 'Interactive Design'],
    hasDetails: false,
    coverImage: cupraCover,
    link: 'https://www.cupraagency.com'
  },

  // 4. Other Projects (Not Completed/No Details)
  {
    id: 17,
    slug: 'hr-project-management',
    icon: 'fas fa-users',
    title: 'HR & Project Management System',
    description: 'Developed web and mobile platforms for employee management, payroll, and task tracking with comprehensive business analysis.',
    tags: ['Business Analysis', 'UI/UX Design', 'Web App', 'Mobile App'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 18,
    slug: 'journey-maker',
    icon: 'fas fa-compass',
    title: 'Journey Maker',
    description: 'Developed a career path exploration platform with updated industry trends and interactive user guidance.',
    tags: ['Career Platform', 'User Research', 'Interactive Design'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 19,
    slug: 'voltechs-ecommerce',
    icon: 'fas fa-shopping-cart',
    title: 'Voltechs E-commerce',
    description: 'Created comprehensive e-commerce platform for electronics with modern design and optimized user experience.',
    tags: ['E-commerce', 'Electronics', 'UX Optimization'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 20,
    slug: 'atmedicine',
    icon: 'fas fa-pills',
    title: 'ATMedicine',
    description: 'Designed innovative medicine ATM concept with mobile application for code-based medication purchases and distribution.',
    tags: ['Healthcare Innovation', 'Mobile App', 'Business Analysis'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 21,
    slug: 'techlandbs',
    icon: 'fas fa-laptop-code',
    title: 'TechlandBS',
    description: 'Business solutions technology platform providing enterprise-level software development and consulting services.',
    tags: ['Enterprise Solutions', 'Business Software', 'Consulting'],
    hasDetails: false,
    coverImage: null
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return PROJECTS.find(project => project.slug === slug);
};

// Helper function to get projects with details
export const getProjectsWithDetails = () => {
  return PROJECTS.filter(project => project.hasDetails);
};

// Helper function to get project by title (for backward compatibility)
export const getProjectByTitle = (title) => {
  return PROJECTS.find(project => project.title === title);
};
