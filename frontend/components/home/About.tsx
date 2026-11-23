import './About.css';

const About = () => {
  return (
    <section id="about" className="about bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">About Me</h2>
        </div>

        <div className="about-content">
          {/* Bio Card */}
          <div className="bento-card about-bio">
            <span className="about-card-emoji">&#x1F9D1;&#x200D;&#x1F4BB;</span>
            <h3 className="bio-title">Who I Am</h3>
            <p className="bio-specialization">
              Specializing in: AI features, dashboards, approval workflows, data-heavy tables, and design systems for enterprise SaaS.
            </p>
            <p className="bio-text">
              I&apos;m a Senior Product Designer with 4+ years in B2B SaaS and enterprise workflows, and I now focus on bringing AI into those products in ways people trust.
            </p>
            <p className="bio-text">
              Enterprise users can&apos;t afford a model that&apos;s confidently wrong. I design AI features around that: clear sources, visible confidence, easy correction, and approval steps where a person makes the final call.
            </p>
            <p className="bio-text">
              Experienced in shipping end-to-end product features, building design systems, and improving usability under real constraints &mdash; legacy systems, permissions, compliance, and data quality.
            </p>
            <div className="bio-highlights">
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Shipped AI features in production at Cedar Rose, Gates Developments and Swapop</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>25+ products shipped end-to-end</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>B.Sc. in BIS (3.85 GPA) &middot; Masters in progress</span>
              </div>
              <div className="highlight-item">
                <i className="fas fa-check-circle"></i>
                <span>Advanced UX &middot; Business Analysis certified</span>
              </div>
            </div>
          </div>

          {/* Expertise Card */}
          <div className="bento-card about-expertise">
            <span className="about-card-emoji">&#x1F680;</span>
            <h3 className="expertise-title">Core Strengths</h3>
            <div className="expertise-list">
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>AI Product Design</h4>
                  <p>Designing for unpredictable output: streaming and loading states, sources and confidence, error recovery, and human-in-the-loop review.</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>Enterprise UX</h4>
                  <p>Dashboards, reporting, tables/filters, complex forms, workflows, approvals, and roles/permissions.</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>Product Delivery</h4>
                  <p>Problem framing, user flows, information architecture, prototyping, handoff specs, QA &amp; iteration.</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>Research &amp; Validation</h4>
                  <p>UX audits, heuristic reviews, usability testing, and competitive analysis to drive decisions.</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>Design Systems</h4>
                  <p>Reusable components, consistency, states (loading/empty/error), and scalable patterns.</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-bullet"></div>
                <div className="expertise-details">
                  <h4>How I Work</h4>
                  <p>Tight loops with engineering, and an AI-native workflow: prototyping with Lovable and Claude, and building with Claude Code, so ideas get tested as working products, not just mockups.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
