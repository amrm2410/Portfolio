'use client';

import { useState, type ReactNode } from 'react';

interface Tab {
  icon: string;
  label: string;
  content: ReactNode;
}

interface CedarRoseTabsProps {
  tabs: Tab[];
}

export default function CedarRoseTabs({ tabs }: CedarRoseTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="bento-grid">
        <div className="bento-card cedar-rose-tabs-card">
          <div className="cedar-rose-tabs-bar">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`cedar-rose-tab${activeTab === index ? ' cedar-rose-tab-active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <i className={tab.icon}></i>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="cedar-rose-tab-content">
            <div className="mdx-content">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  style={{ display: activeTab === index ? 'block' : 'none' }}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
