import PageBehavior from '@/components/PageBehavior';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { sitePath } from '@/components/sitePath';

export const metadata = {
  title: 'Proyectos',
};

const projects = [
  {
    unit: 'Pagurai',
    tagClass: 'tag--pagurai',
    category: 'IA · Automatizacion',
    titleEs: 'Agentes IA para operaciones repetibles',
    titleEn: 'AI agents for repeatable operations',
    bodyEs: 'Arquitectura de agentes, chatbots e integraciones para reducir tareas manuales y escalar atencion, ventas y soporte.',
    bodyEn: 'Agent architecture, chatbots and integrations to reduce manual work and scale support, sales and operations.',
  },
  {
    unit: 'Pagureo',
    tagClass: 'tag--pagureo',
    category: 'Commerce · Home office',
    titleEs: 'Curaduria ecommerce para setups de trabajo',
    titleEn: 'Ecommerce curation for work setups',
    bodyEs: 'Sistema de catalogo editorial para vender espacios completos, no productos aislados. Funcion, percepcion y conversion.',
    bodyEn: 'Editorial catalog system for selling complete spaces, not isolated products. Function, perception and conversion.',
  },
  {
    unit: 'Ermitano Pep',
    tagClass: 'tag--ermitano',
    category: 'Media · Awareness',
    titleEs: 'Universo narrativo para construir reconocimiento',
    titleEn: 'Narrative universe for brand awareness',
    bodyEs: 'Contenido, personaje y piezas de cultura visual que amplifican el ecosistema sin depender solo de pauta.',
    bodyEn: 'Content, character and visual culture assets that amplify the ecosystem without relying only on paid media.',
  },
];

export default function ProyectosPage() {
  return (
    <>
      <PageBehavior screenLabel="04 Proyectos" />
      <SiteHeader current="proyectos" />

      <main>
        <section className="sec sec--hero sec--aurora">
          <div className="canvas">
            <div className="hero__layout">
              <div className="hero__content">
                <div className="hero__meta">
                  <span className="eyebrow">
                    <span className="dot"></span>
                    <span data-copy-es="PROYECTOS · EJECUCION REAL" data-copy-en="PROJECTS · REAL EXECUTION">
                      PROYECTOS · EJECUCION REAL
                    </span>
                  </span>
                </div>
                <h1 className="display">
                  <span data-copy-es="Lo que hemos disenado," data-copy-en="What we have designed,">
                    Lo que hemos disenado,
                  </span>
                  <br />
                  <span className="em" data-copy-es="automatizado y enviado" data-copy-en="automated and shipped">
                    automatizado y enviado
                  </span>
                  <br />
                  <span data-copy-es="al mundo." data-copy-en="to the world.">
                    al mundo.
                  </span>
                </h1>
                <p
                  className="lede hero__lede"
                  data-copy-es="Proyectos transversales del ecosistema Paguro: IA, comercio, automatizacion, narrativa y sistemas digitales aplicados a unidades reales."
                  data-copy-en="Cross-ecosystem Paguro projects: AI, commerce, automation, narrative and digital systems applied to real business units."
                >
                  Proyectos transversales del ecosistema Paguro: IA, comercio, automatizacion, narrativa y sistemas
                  digitales aplicados a unidades reales.
                </p>
                <div className="hero__ctas">
                  <a className="btn btn--accent" href={sitePath('/contacto')}>
                    <span data-copy-es="Contacto estrategico" data-copy-en="Strategic contact">
                      Contacto estrategico
                    </span>{' '}
                    <span className="arr">→</span>
                  </a>
                  <a className="btn btn--ghost" href={sitePath('/insights')}>
                    Insights / Lab
                  </a>
                </div>
              </div>
              <div className="diagram">
                <svg viewBox="0 0 400 400" fill="none">
                  <rect x="42" y="62" width="316" height="236" rx="8" fill="#0a0b0d" stroke="#3d4452" />
                  <path d="M78 130h110M78 166h190M78 202h150" stroke="#ee7224" strokeOpacity=".7" strokeWidth="8" />
                  <circle cx="304" cy="132" r="30" fill="#0360ab" fillOpacity=".18" stroke="#0360ab" />
                  <circle cx="304" cy="220" r="30" fill="#e72175" fillOpacity=".16" stroke="#e72175" />
                  <path d="M80 310h240" stroke="#fff" strokeOpacity=".12" strokeDasharray="3 5" />
                  <text x="200" y="348" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7e848f">
                    PROJECT MAP
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="sec sec--compact">
          <div className="canvas">
            <div className="stats-strip">
              <div className="stat"><span className="v">3</span><span className="l">Unidades</span></div>
              <div className="stat"><span className="v">5</span><span className="l">Categorias</span></div>
              <div className="stat"><span className="v">B2B+B2C</span><span className="l">Modelo dual</span></div>
              <div className="stat"><span className="v">CO</span><span className="l">Bogota</span></div>
            </div>
          </div>
        </section>

        <section className="sec sec--with-divider">
          <div className="canvas">
            <div className="sec__head">
              <span className="eyebrow">
                <span className="dot"></span>
                <span data-copy-es="PORTAFOLIO" data-copy-en="PORTFOLIO">PORTAFOLIO</span>
              </span>
              <h2 className="h1" data-copy-es="Proyectos cruzados por unidad." data-copy-en="Projects across business units.">
                Proyectos cruzados por unidad.
              </h2>
              <p
                className="lede"
                data-copy-es="Cada proyecto muestra como la arquitectura Paguro se convierte en producto, operacion o contenido."
                data-copy-en="Each project shows how the Paguro architecture becomes product, operation or content."
              >
                Cada proyecto muestra como la arquitectura Paguro se convierte en producto, operacion o contenido.
              </p>
            </div>

            <div className="eco-grid">
              {projects.map((project) => (
                <article className={`eco-card eco-card--${project.unit === 'Pagurai' ? 'pagurai' : project.unit === 'Pagureo' ? 'pagureo' : 'ermitano'}`} key={project.unit}>
                  <span className={`tag ${project.tagClass}`}>
                    <span className="dot"></span>
                    {project.unit}
                  </span>
                  <h3 className="eco-card__title" data-copy-es={project.titleEs} data-copy-en={project.titleEn}>
                    {project.titleEs}
                  </h3>
                  <p className="eco-card__tagline">{project.category}</p>
                  <div className="eco-card__body" data-copy-es={project.bodyEs} data-copy-en={project.bodyEn}>
                    {project.bodyEs}
                  </div>
                  <div className="eco-card__foot">
                  <a className="eco-card__dom" href={sitePath('/contacto')}>
                      brief →
                    </a>
                    <span className="eco-card__stat">2026</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec sec--with-divider sec--aurora">
          <div className="canvas">
            <div className="close-cta">
              <div>
                <span className="label">CTA</span>
                <h3
                  className="close-cta__title"
                  data-copy-es="Tu proyecto debe terminar en un sistema, no en una pieza aislada."
                  data-copy-en="Your project should become a system, not an isolated asset."
                >
                  Tu proyecto debe terminar en un sistema, no en una pieza aislada.
                </h3>
                <p
                  className="close-cta__hand"
                  data-copy-es="Cuéntanos qué necesitas construir."
                  data-copy-en="Tell us what you need to build."
                >
                  Cuéntanos qué necesitas construir.
                </p>
              </div>
              <div className="close-cta__ctas">
                <a className="btn btn--accent" href={sitePath('/contacto')}>
                  Contacto <span className="arr">→</span>
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
