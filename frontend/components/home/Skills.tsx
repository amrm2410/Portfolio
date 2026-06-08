import Image from 'next/image';
import { SKILL_CATEGORIES } from '@/constants/skills';
import './Skills.css';

const COMPETENCIES = [
  { area: 'Strategy', level: 'Senior', rank: 3 },
  { area: 'Research', level: 'Senior', rank: 3 },
  { area: 'Flows', level: 'Independent', rank: 2 },
  { area: 'UI & Accessibility', level: 'Senior', rank: 3 },
  { area: 'Design Systems', level: 'Senior', rank: 3 },
  { area: 'Collaboration', level: 'Lead', rank: 4 },
  { area: 'Delivery', level: 'Principal', rank: 5 },
  { area: 'Ethics & Practice', level: 'Principal', rank: 5 },
];

const BADGES = [
  { name: 'System Sculptor', icon: 'fas fa-cubes' },
  { name: 'Team Influence Pro', icon: 'fas fa-users' },
  { name: 'Impact Engineer', icon: 'fas fa-bolt' },
  { name: 'Ethics Guardian', icon: 'fas fa-shield-alt' },
  { name: 'Senior Ship Captain', icon: 'fas fa-anchor' },
];

const Skills = () => {
  const totalSkills = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <section id="skills" className="skills bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">Skills &amp; Tools</h2>
          <span className="bento-section-count">{totalSkills}+ tools</span>
        </div>

        <div className="skills-layout">
          {/* Tools Card */}
          <div className="bento-card skills-card">
            {SKILL_CATEGORIES.map(category => (
              <div key={category.id} className="skills-category-group">
                <h3 className="skills-category-label">{category.title}</h3>
                <div className="skills-pills">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-pill">
                      {skill.icon && (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          className="skill-pill-icon"
                          width={18}
                          height={18}
                          unoptimized
                        />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Competencies Card */}
          <div className="bento-card competencies-card">
            <div className="competencies-header">
              <h3 className="skills-category-label">UX Competencies</h3>
              <a
                href="https://rank.uxbreakfast.com/u/amrm241020"
                target="_blank"
                rel="noopener noreferrer"
                className="competencies-source"
              >
                UX Breakfast <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <div className="competencies-grid">
              {COMPETENCIES.map((comp) => (
                <div key={comp.area} className="competency-row">
                  <span className="competency-area">{comp.area}</span>
                  <div className="competency-bar-track">
                    <div
                      className={`competency-bar-fill level-${comp.level.toLowerCase().replace(/\s.*/, '')}`}
                      style={{ width: `${(comp.rank / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className={`competency-level level-${comp.level.toLowerCase().replace(/\s.*/, '')}`}>
                    {comp.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="badges-section">
              <h3 className="skills-category-label">Earned Badges</h3>
              <div className="badges-grid">
                {BADGES.map((badge) => (
                  <div key={badge.name} className="badge-item">
                    <div className="badge-icon">
                      <i className={badge.icon}></i>
                    </div>
                    <span className="badge-name">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
