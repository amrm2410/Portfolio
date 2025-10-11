import stovaCover from '../assets/project-assets/Stova/Stova Cover.png';
import cupraCover from '../assets/project-assets/Cupra Agency/Cupra Cover.png';
import egyptEmpireCover from '../assets/project-assets/Egypt Empire/Egypt Empire Cover.png';
import siwaGardenCover from '../assets/project-assets/Siwa Garden/Siwa Garden Cover.png';
import nileGardenCover from '../assets/project-assets/Nile Garden/Nile Garden Cover.png';
import breadfastCover from '../assets/project-assets/Breadfast/Breadfast Cover.png';
import gatesAdminCover from '../assets/project-assets/Gates Admin Request/UI/Screenshot 2025-10-04 032738.png';
import eDestinationCover from '../assets/project-assets/E-Destination/E-سكة.png';
import health360Cover from '../assets/project-assets/Health 360/Health 360 cover.png';
import byetCover from '../assets/project-assets/Byet/Byet Cover.png';
import employee360Cover from '../assets/project-assets/Employee 360/Cover.png';
import swapopCover from '../assets/project-assets/Swapop/Cover.png';
import venturaTradingCover from '../assets/project-assets/Ventura Trading/Cover.png';
import gatesCrmErpCover from '../assets/project-assets/Gates Developments CRM & ERP/Cover.png';
import crewCover from '../assets/project-assets/Crew Website/UI/Desktop - 3.png';

export const PROJECTS = [
  {
    id: 1,
    slug: 'hr-project-management',
    icon: 'fas fa-users',
    title: 'HR & Project Management System',
    description: 'Developed web and mobile platforms for employee management, payroll, and task tracking with comprehensive business analysis.',
    tags: ['Business Analysis', 'UI/UX Design', 'Web App', 'Mobile App'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 2,
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
    id: 3,
    slug: 'e-destination',
    icon: 'fas fa-route',
    title: 'E-Destination',
    description: 'Designed a mobile app for smart transportation route planning with intuitive user interface and seamless navigation.',
    tags: ['Mobile Design', 'Navigation', 'Transport'],
    hasDetails: true,
    coverImage: eDestinationCover
  },
  {
    id: 4,
    slug: 'journey-maker',
    icon: 'fas fa-compass',
    title: 'Journey Maker',
    description: 'Developed a career path exploration platform with updated industry trends and interactive user guidance.',
    tags: ['Career Platform', 'User Research', 'Interactive Design'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 5,
    slug: 'voltechs-ecommerce',
    icon: 'fas fa-shopping-cart',
    title: 'Voltechs E-commerce',
    description: 'Created comprehensive e-commerce platform for electronics with modern design and optimized user experience.',
    tags: ['E-commerce', 'Electronics', 'UX Optimization'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 6,
    slug: 'atmedicine',
    icon: 'fas fa-pills',
    title: 'ATMedicine',
    description: 'Designed innovative medicine ATM concept with mobile application for code-based medication purchases and distribution.',
    tags: ['Healthcare Innovation', 'Mobile App', 'Business Analysis'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 7,
    slug: 'employee-360',
    icon: 'fas fa-user-circle',
    title: 'Employee 360',
    description: 'Comprehensive employee management platform with 360-degree performance tracking, analytics, and engagement tools.',
    tags: ['HR Management', 'Analytics', 'Performance Tracking'],
    hasDetails: true,
    coverImage: employee360Cover
  },
  {
    id: 8,
    slug: 'health-360',
    icon: 'fas fa-heartbeat',
    title: 'Health 360',
    description: 'Holistic healthcare management system providing complete patient care solutions with integrated monitoring and reporting.',
    tags: ['Healthcare', 'Patient Management', 'Medical Dashboard'],
    hasDetails: true,
    coverImage: health360Cover
  },
  {
    id: 9,
    slug: 'byet',
    icon: 'fas fa-home',
    title: 'Byet',
    description: 'Modern real estate platform connecting buyers and sellers with advanced property search and management features.',
    tags: ['Real Estate', 'Property Management', 'Search Platform'],
    hasDetails: true,
    coverImage: byetCover
  },
  {
    id: 10,
    slug: 'siwa-garden',
    icon: 'fas fa-seedling',
    title: 'Siwa Garden',
    description: 'Eco-friendly garden management and landscaping platform with plant care tracking and sustainability features.',
    tags: ['Garden Management', 'Sustainability', 'Plant Care'],
    hasDetails: true,
    coverImage: siwaGardenCover
  },
  {
    id: 11,
    slug: 'crew-website',
    icon: 'fas fa-briefcase',
    title: 'Crew Website',
    description: 'Business consultancy firm specializing in HR management solutions, personnel services, and government compliance for Egyptian corporations.',
    tags: ['Business Consultancy', 'HR Solutions', 'Corporate Website', 'UI/UX Design'],
    hasDetails: true,
    coverImage: crewCover
  },
  {
    id: 12,
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
    id: 13,
    slug: 'cupra-agency',
    icon: 'fas fa-car',
    title: 'Cupra Agency',
    description: 'Automotive brand agency website showcasing vehicle lineup with immersive design and interactive configurator.',
    tags: ['Automotive', 'Brand Agency', 'Interactive Design'],
    hasDetails: false,
    coverImage: cupraCover,
    link: 'https://www.cupraagency.com'
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
    slug: 'techlandbs',
    icon: 'fas fa-laptop-code',
    title: 'TechlandBS',
    description: 'Business solutions technology platform providing enterprise-level software development and consulting services.',
    tags: ['Enterprise Solutions', 'Business Software', 'Consulting'],
    hasDetails: false,
    coverImage: null
  },
  {
    id: 17,
    slug: 'stova',
    icon: 'fas fa-couch',
    title: 'Stova',
    description: 'Premium furniture and interior design e-commerce platform featuring modern furniture solutions and personalized design services.',
    tags: ['E-commerce', 'Interior Design', 'Furniture', 'UI/UX Design'],
    hasDetails: true,
    coverImage: stovaCover
  },
  {
    id: 18,
    slug: 'gates-admin-request',
    icon: 'fas fa-clipboard-list',
    title: 'Gates Admin Request',
    description: 'Stationary request solution to track and get insights about requests and stocks with comprehensive inventory management.',
    tags: ['Request Management', 'Inventory Tracking', 'Analytics', 'Admin Dashboard'],
    hasDetails: true,
    coverImage: gatesAdminCover
  },
  {
    id: 19,
    slug: 'water-world',
    icon: 'fas fa-water',
    title: 'Water World',
    description: 'Water park and entertainment platform featuring attractions, ticketing, and visitor experience management.',
    tags: ['Entertainment', 'Theme Park', 'Booking System', 'UI/UX Design'],
    hasDetails: false,
    coverImage: null,
    comingSoon: true
  },
  {
    id: 20,
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
    id: 21,
    slug: 'breadfast',
    icon: 'fas fa-shopping-basket',
    title: 'Breadfast',
    description: 'On-demand grocery delivery app providing fresh bread, groceries, and daily essentials with seamless ordering experience and quick delivery.',
    tags: ['Grocery Delivery', 'Mobile App', 'Food Tech', 'UI/UX Design'],
    hasDetails: true,
    coverImage: breadfastCover
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
