import React from 'react';
import './Skills.css';
import { SKILL_CATEGORIES, TECH_SECTION_TITLE, TECH_SECTION_SUBTITLE } from '../../constants/skills';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="tech-title">{TECH_SECTION_TITLE.split(' & ')[0]} & <span>{TECH_SECTION_TITLE.split(' & ')[1]}</span></h2>
                <p className="tech-subtitle">
                    {TECH_SECTION_SUBTITLE}
                </p>

                <div className="tech-grid">
                    {SKILL_CATEGORIES.map(category => (
                        <div key={category.id} className={`tech-category ${category.id}`}>
                            <div className="tech-category-header">
                                <i className={category.icon}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="tech-skills">
                                {category.skills.map((skill, index) => (
                                    <div key={index} className="tech-skill">
                                        <div className="skill-bullet"></div>
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
