export interface ProcessStage {
  id: string;
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STAGES: ProcessStage[] = [
  { id: 'discovery', step: 1, title: 'Discovery & AI synthesis', description: 'Interviews, AI-clustered insights' },
  { id: 'framing-ia', step: 2, title: 'Framing & IA', description: 'Problem brief, flows, edge cases' },
  { id: 'ai-exploration', step: 3, title: 'AI exploration', description: 'Many directions, fast' },
  { id: 'curation-ui', step: 4, title: 'Curation & UI', description: 'Select, refine, design system' },
  { id: 'prototype-validate', step: 5, title: 'Prototype & validate', description: 'Coded prototypes, real users' },
  { id: 'handoff-build', step: 6, title: 'Handoff & build', description: 'Specs, states, AI-assisted front-end' }
];

/**
 * Iteration loop (BRD UP-04): validation feeds back into design.
 * The desktop diagram draws it as a return arrow under the second row, so
 * both stages must sit in that row with `to` before `from`.
 */
export const PROCESS_LOOP = { from: 'prototype-validate', to: 'curation-ui' };

/** Nodes per row in the desktop diagram. */
export const PROCESS_COLUMNS = 3;

export const PROCESS_SECTION_TITLE = 'My Process';
