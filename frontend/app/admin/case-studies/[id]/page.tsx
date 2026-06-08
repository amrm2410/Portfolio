import CaseStudyEditor from './CaseStudyEditor';

export async function generateStaticParams() {
  return [{ id: 'new' }];
}

export default function CaseStudyEditorPage() {
  return <CaseStudyEditor />;
}
