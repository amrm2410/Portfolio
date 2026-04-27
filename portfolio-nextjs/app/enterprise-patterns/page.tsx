import type { Metadata } from 'next';
import { Navigation } from '@/components';
import ParticlesBackground from '@/components/common/ParticlesBackground';
import Footer from '@/components/home/Footer';
import './patterns.css';

export const metadata: Metadata = {
  title: 'Enterprise UI Patterns',
  description: 'Scalable enterprise UI patterns for tables, forms, approvals, notifications, and search — designed for B2B SaaS products.',
};

const PATTERNS = [
  {
    title: 'Data Tables',
    icon: 'fas fa-table',
    description: 'Sortable, filterable, paginated tables with bulk actions, inline editing, and column configuration.',
    states: ['Loading skeleton', 'Empty state', 'Error state', 'Filtered results'],
    usedIn: ['Cedar Rose Risk Portfolio', 'Gates CRM'],
  },
  {
    title: 'Approval Workflows',
    icon: 'fas fa-check-double',
    description: 'Multi-step approval chains with role-based routing, delegation, auto-escalation, and audit trails.',
    states: ['Pending', 'In review', 'Approved', 'Rejected', 'Escalated'],
    usedIn: ['Gates ERP Budgeting', 'Gates Procurement'],
  },
  {
    title: 'Complex Forms',
    icon: 'fas fa-clipboard-list',
    description: 'Multi-step forms with conditional logic, inline validation, autosave, and progressive disclosure.',
    states: ['Validation errors', 'Success', 'Partial save', 'Field dependencies'],
    usedIn: ['Cedar Rose Entity Profiles', 'Gates HR'],
  },
  {
    title: 'Dashboard Composition',
    icon: 'fas fa-chart-pie',
    description: 'Configurable widget-based dashboards with drill-down, time range selectors, and export.',
    states: ['Loading', 'No data', 'Partial data', 'Full render'],
    usedIn: ['Cedar Rose Portfolio Overview', 'Health 360'],
  },
  {
    title: 'Notification System',
    icon: 'fas fa-bell',
    description: 'Priority-based notifications with read/unread states, grouping, and action buttons.',
    states: ['Toast', 'Inline alert', 'Banner', 'Modal confirmation'],
    usedIn: ['Cedar Rose Compliance Alerts', 'Gates CRM'],
  },
  {
    title: 'Search & Filters',
    icon: 'fas fa-search',
    description: 'Faceted search with saved filters, recent searches, and typeahead suggestions.',
    states: ['No results', 'Loading suggestions', 'Active filters', 'Saved filter sets'],
    usedIn: ['Cedar Rose Entity Search', 'Ventura Trading'],
  },
];

export default function EnterprisePatternsPage() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navigation isHomePage={false} />

      <main className="patterns-page">
        <header className="patterns-header">
          <span className="patterns-badge">Design System Patterns</span>
          <h1 className="patterns-title">Enterprise UI Patterns</h1>
          <p className="patterns-subtitle">
            Reusable, scalable patterns I have designed and refined across multiple B2B SaaS products.
            Each pattern accounts for loading, empty, error, and edge-case states.
          </p>
        </header>

        <div className="patterns-grid">
          {PATTERNS.map((pattern) => (
            <div key={pattern.title} className="bento-card pattern-card">
              <div className="pattern-icon">
                <i className={pattern.icon}></i>
              </div>
              <h3 className="pattern-title">{pattern.title}</h3>
              <p className="pattern-description">{pattern.description}</p>

              <div className="pattern-section">
                <h4 className="pattern-section-label">States handled</h4>
                <div className="pattern-chips">
                  {pattern.states.map((state) => (
                    <span key={state} className="pattern-state-chip">{state}</span>
                  ))}
                </div>
              </div>

              <div className="pattern-section">
                <h4 className="pattern-section-label">Used in</h4>
                <div className="pattern-chips">
                  {pattern.usedIn.map((project) => (
                    <span key={project} className="pattern-project-chip">{project}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
