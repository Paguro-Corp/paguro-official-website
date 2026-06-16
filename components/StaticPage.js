import PageBehavior from './PageBehavior';

export default function StaticPage({ markup, screenLabel }) {
  return (
    <>
      <PageBehavior screenLabel={screenLabel} />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  );
}
