import ProjectEditor from './ProjectEditor';

export async function generateStaticParams() {
  return [{ id: 'new' }];
}

export default function ProjectEditorPage() {
  return <ProjectEditor />;
}
