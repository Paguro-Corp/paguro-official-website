import PageBehavior from './PageBehavior';
import { withBasePathMarkup } from './sitePath';

export default function StaticPage({ markup, screenLabel }) {
  return (
    <>
      <PageBehavior screenLabel={screenLabel} />
      <div dangerouslySetInnerHTML={{ __html: withBasePathMarkup(markup) }} />
    </>
  );
}
