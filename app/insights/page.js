import PageBehavior from '@/components/PageBehavior';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { sitePath } from '@/components/sitePath';

export const metadata = {
  title: 'Insights / Lab',
};

const articles = [
  {
    category: 'IA · Metodo Paguro',
    titleEs: 'Automatizacion radical: por que la IA no reemplaza al equipo, lo escala.',
    titleEn: 'Radical automation: why AI does not replace the team, it scales it.',
    bodyEs: 'La paradoja operativa de Paguro: menos tareas manuales, mas capacidad humana para decisiones de alto valor.',
    bodyEn: 'The Paguro operating paradox: fewer manual tasks, more human capacity for high-value decisions.',
  },
  {
    category: 'Branding · Holding',
    titleEs: 'Arquitectura empresarial adaptativa: marcas que cambian sin perder el nucleo.',
    titleEn: 'Adaptive business architecture: brands that change without losing their core.',
    bodyEs: 'Como articular un holding sin convertirlo en una coleccion de logos desconectados.',
    bodyEn: 'How to articulate a holding company without turning it into a disconnected collection of logos.',
  },
  {
    category: 'eCommerce · Operaciones',
    titleEs: 'Vender curaduria, no catalogo: el caso estrategico de Pagureo.',
    titleEn: 'Selling curation, not catalog: Pagureo as a strategic case.',
    bodyEs: 'El ecommerce como interfaz editorial para elevar percepcion, decision y conversion.',
    bodyEn: 'Ecommerce as an editorial interface for improving perception, decisions and conversion.',
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageBehavior screenLabel="05 Insights" />
      <SiteHeader current="insights" />

      <main>
        <section className="sec sec--hero sec--aurora">
          <div className="canvas">
            <div className="hero__layout">
              <div className="hero__content">
                <div className="hero__meta">
                  <span className="eyebrow">
                    <span className="dot"></span>
                    <span data-copy-es="INSIGHTS / LAB · PENSAMIENTO ESTRATEGICO" data-copy-en="INSIGHTS / LAB · STRATEGIC THINKING">
                      INSIGHTS / LAB · PENSAMIENTO ESTRATEGICO
                    </span>
                  </span>
                </div>
                <h1 className="display">
                  <span data-copy-es="Antes de ejecutar," data-copy-en="Before execution,">
                    Antes de ejecutar,
                  </span>
                  <br />
                  <span className="em" data-copy-es="pensamos el sistema." data-copy-en="we think the system.">
                    pensamos el sistema.
                  </span>
                </h1>
                <p
                  className="lede hero__lede"
                  data-copy-es="El Lab publica pensamiento sobre IA, automatizacion, branding, ecommerce y arquitectura empresarial adaptativa."
                  data-copy-en="The Lab publishes thinking on AI, automation, branding, ecommerce and adaptive business architecture."
                >
                  El Lab publica pensamiento sobre IA, automatizacion, branding, ecommerce y arquitectura empresarial
                  adaptativa.
                </p>
                <div className="hero__ctas">
                  <a className="btn btn--accent" href="#articulos">
                    <span data-copy-es="Leer articulos" data-copy-en="Read articles">Leer articulos</span>{' '}
                    <span className="arr">→</span>
                  </a>
                  <a className="btn btn--ghost" href={sitePath('/contacto')}>
                    Contacto
                  </a>
                </div>
              </div>
              <div className="diagram">
                <svg viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="138" stroke="#fff" strokeOpacity=".08" strokeDasharray="2 8" />
                  <circle cx="200" cy="200" r="78" fill="#ee7224" fillOpacity=".08" stroke="#ee7224" />
                  <path d="M128 164h144M128 200h104M128 236h132" stroke="#ebedef" strokeOpacity=".42" strokeWidth="10" />
                  <path d="M116 294h168" stroke="#0360ab" strokeOpacity=".7" strokeWidth="4" />
                  <text x="200" y="112" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7e848f">
                    LAB NOTES
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec--with-divider" id="articulos">
          <div className="canvas">
            <div className="sec__head">
              <span className="eyebrow">
                <span className="dot"></span>
                <span data-copy-es="PUBLICACIONES" data-copy-en="PUBLICATIONS">PUBLICACIONES</span>
              </span>
              <h2 className="h1" data-copy-es="Pensamiento estrategico, publicado mensualmente." data-copy-en="Strategic thinking, published monthly.">
                Pensamiento estrategico, publicado mensualmente.
              </h2>
              <p
                className="lede"
                data-copy-es="El objetivo no es llenar un blog. Es documentar criterios, hipotesis y aprendizajes del ecosistema."
                data-copy-en="The goal is not to fill a blog. It is to document criteria, hypotheses and lessons from the ecosystem."
              >
                El objetivo no es llenar un blog. Es documentar criterios, hipotesis y aprendizajes del ecosistema.
              </p>
            </div>

            <div className="cards-3">
              {articles.map((article) => (
                <article className="insight-card" key={article.titleEs}>
                  <span className="insight-card__cat">{article.category}</span>
                  <h4 className="insight-card__title" data-copy-es={article.titleEs} data-copy-en={article.titleEn}>
                    {article.titleEs}
                  </h4>
                  <p className="insight-card__desc" data-copy-es={article.bodyEs} data-copy-en={article.bodyEn}>
                    {article.bodyEs}
                  </p>
                  <div className="insight-card__foot">
                    <span>Paguro Lab</span>
                    <span>2026</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec--with-divider sec--aurora">
          <div className="canvas">
            <div className="newsletter">
              <div className="stack-tight">
                <span className="box__label">LAB</span>
                <p
                  className="note"
                  style={{ color: 'var(--ink)' }}
                  data-copy-es="Recibe pensamiento estrategico cada mes."
                  data-copy-en="Receive strategic thinking every month."
                >
                  Recibe pensamiento estrategico cada mes.
                </p>
                <p className="note note--dim" data-copy-es="Sin spam. Solo criterio." data-copy-en="No spam. Only signal.">
                  Sin spam. Solo criterio.
                </p>
              </div>
              <div className="newsletter__row">
                <div className="newsletter__input"></div>
                <a className="btn btn--accent" href={sitePath('/contacto')}>
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
