# Project Structure

## Overview
This React portfolio application is organized with a clean, modular structure for easy maintenance and scalability.

## Directory Structure

```
src/
├── components/          # Reusable React components
│   ├── index.js        # Barrel exports for clean imports
│   ├── Navigation.js   # Navigation header component
│   ├── Hero.js         # Hero/landing section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Projects.js     # Projects portfolio
│   └── Contact.js      # Contact information
├── assets/             # Static assets
│   ├── styles/         # CSS stylesheets
│   │   ├── index.css   # Main styles entry point
│   │   ├── variables.css # CSS custom properties
│   │   ├── global.css  # Global styles and reset
│   │   ├── components.css # Component-specific styles
│   │   └── responsive.css # Responsive design rules
│   ├── images/         # Image assets
│   ├── icons/          # Icon assets
│   └── index.js        # Assets barrel exports
├── App.js              # Main application component
├── App.css             # App-specific styles
├── index.js            # Application entry point
└── index.css           # Main stylesheet import
```

## Component Architecture
- Each component is self-contained and focused on a single responsibility
- Components use semantic HTML and accessibility best practices
- Styling is handled through CSS classes with BEM-like naming conventions

## Styling System
- CSS custom properties (variables) for consistent theming
- Modular CSS files for better organization
- Responsive design with mobile-first approach
- Smooth animations and transitions

## Import Strategy
- Barrel exports (`index.js` files) enable clean imports
- Example: `import { Navigation, Hero } from './components'`

## Adding New Components
1. Create component file in `src/components/`
2. Add export to `src/components/index.js`
3. Add component-specific styles to appropriate CSS files
4. Import and use in `App.js` or other components