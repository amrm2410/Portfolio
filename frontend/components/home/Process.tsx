import { Fragment } from 'react';
import {
  PROCESS_STAGES,
  PROCESS_LOOP,
  PROCESS_COLUMNS,
  PROCESS_SECTION_TITLE
} from '@/constants/process';
import './Process.css';

const pad = (step: number) => String(step).padStart(2, '0');

const loopFromIndex = PROCESS_STAGES.findIndex((stage) => stage.id === PROCESS_LOOP.from);
const loopToIndex = PROCESS_STAGES.findIndex((stage) => stage.id === PROCESS_LOOP.to);
const loopFrom = PROCESS_STAGES[loopFromIndex];
const loopTo = PROCESS_STAGES[loopToIndex];

/** Grid column of a node in the desktop diagram (nodes and arrows alternate). */
const nodeColumn = (index: number) => (index % PROCESS_COLUMNS) * 2 + 1;

const Process = () => {
  return (
    <section id="process" className="process bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">{PROCESS_SECTION_TITLE}</h2>
          <span className="bento-section-count">{PROCESS_STAGES.length} stages</span>
        </div>

        <div className="process-diagram" role="list" aria-label="UX process stages, in order">
          {PROCESS_STAGES.map((stage, index) => {
            const isLast = index === PROCESS_STAGES.length - 1;
            const endsRow = (index + 1) % PROCESS_COLUMNS === 0;

            return (
              <Fragment key={stage.id}>
                <div role="listitem" className="bento-card process-node">
                  <span className="process-step">{pad(stage.step)}</span>
                  <h3 className="process-title">{stage.title}</h3>
                  <p className="process-description">{stage.description}</p>
                </div>

                {!isLast &&
                  (endsRow ? (
                    <div className="process-turn" aria-hidden="true">
                      <span className="process-turn-out" />
                      <span className="process-turn-across" />
                      <span className="process-turn-in" />
                    </div>
                  ) : (
                    <div className="process-arrow" aria-hidden="true" />
                  ))}
              </Fragment>
            );
          })}

          {loopFrom && loopTo && (
            <div
              className="process-return"
              aria-hidden="true"
              style={{ gridColumn: `${nodeColumn(loopToIndex)} / ${nodeColumn(loopFromIndex) + 1}` }}
            >
              <span className="process-return-to" />
              <span className="process-return-across">
                <span className="process-return-label">iterate</span>
              </span>
              <span className="process-return-from" />
            </div>
          )}
        </div>

        {loopFrom && loopTo && (
          <p className="process-loop-note">
            <i className="fas fa-rotate-left" aria-hidden="true"></i>
            {loopFrom.title} loops back to {pad(loopTo.step)} {loopTo.title}
          </p>
        )}
      </div>
    </section>
  );
};

export default Process;
