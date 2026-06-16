import { sitePath } from './sitePath';

export default function SiteHeader({ current }) {
  const linkClass = (key) => (current === key ? 'is-current' : undefined);

  return (
    <>
      <nav className="page-switch">
        <a href={sitePath('/')} className={linkClass('home')} data-i18n="page-home">
          Home
        </a>
        <a href={sitePath('/sobre')} className={linkClass('sobre')} data-i18n="page-sobre">
          Sobre
        </a>
        <a href={sitePath('/ecosistema')} className={linkClass('ecosistema')} data-i18n="page-ecosistema">
          Ecosistema
        </a>
      </nav>

      <header className="nav" id="nav">
        <div className="nav__inner">
          <a className="logo" href={sitePath('/')}>
            <img className="logo__mark" src={sitePath('/assets/paguro-isotipo.png')} alt="Paguro" width="22" height="22" />
            <span className="logo__text">
              PAGURO<small>CORPORACION PAGURO SAS</small>
            </span>
          </a>
          <nav className="nav__items">
            <a href={sitePath('/sobre')} className={linkClass('sobre')} data-i18n="nav-sobre">
              Sobre Paguro
            </a>
            <a href={sitePath('/ecosistema')} className={linkClass('ecosistema')}>
              <span data-i18n="nav-ecosistema">Ecosistema</span> <span className="chev">v</span>
            </a>
            <a href={sitePath('/proyectos')} className={linkClass('proyectos')} data-i18n="nav-proyectos">
              Proyectos
            </a>
            <a href={sitePath('/insights')} className={linkClass('insights')} data-i18n="nav-insights">
              Insights / Lab
            </a>
            <a href={sitePath('/contacto')} className={linkClass('contacto')} data-i18n="nav-contacto">
              Contacto
            </a>
          </nav>
          <div className="nav__controls">
            <button className="nav-ctrl-btn" id="toggle-lang" aria-label="Cambiar idioma" title="Cambiar idioma">
              EN
            </button>
            <span className="nav-ctrl-sep" aria-hidden="true"></span>
            <button className="nav-ctrl-btn" id="toggle-theme" aria-label="Cambiar tema" title="Cambiar a modo claro">
              <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true">
                <path d="M8 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 2zm0 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 11zm-7-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 1 8zm10.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
              </svg>
            </button>
          </div>
          <a className="btn btn--accent btn--sm" href={sitePath('/contacto')}>
            <span data-i18n="nav-cta">Contacto</span> <span className="arr">→</span>
          </a>
        </div>
      </header>
    </>
  );
}
