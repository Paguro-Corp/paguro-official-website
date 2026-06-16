import { sitePath } from './sitePath';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="canvas">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="logo" href={sitePath('/')}>
              <img className="logo__mark" src={sitePath('/assets/paguro-isotipo.png')} alt="Paguro" width="22" height="22" />
              <span className="logo__text">
                PAGURO<small>CORPORACION PAGURO SAS</small>
              </span>
            </a>
            <p data-i18n="footer-brand-desc">
              Holding institucional moderno. Arquitectura empresarial adaptativa, automatizacion e inteligencia sistemica.
              Bogota · Colombia.
            </p>
          </div>
          <div className="footer__col">
            <h6 data-i18n="footer-holding">Holding</h6>
            <ul>
              <li><a href={sitePath('/sobre')} data-i18n="footer-about">Sobre Paguro</a></li>
              <li><a href={sitePath('/sobre#filosofia')} data-i18n="footer-philosophy">Filosofia</a></li>
              <li><a href={sitePath('/sobre#metodo')} data-i18n="footer-method">Metodo</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h6 data-i18n="footer-brands">Marcas</h6>
            <ul>
              <li><a href={sitePath('/ecosistema#pagurai')}>Pagurai</a></li>
              <li><a href={sitePath('/ecosistema#pagureo')}>Pagureo</a></li>
              <li><a href={sitePath('/ecosistema#ermitano')}>Ermitano Pep</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h6 data-i18n="footer-content">Contenido</h6>
            <ul>
              <li><a href={sitePath('/proyectos')} data-i18n="nav-proyectos">Proyectos</a></li>
              <li><a href={sitePath('/insights')} data-i18n="nav-insights">Insights / Lab</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h6 data-i18n="footer-legal">Legal</h6>
            <ul>
              <li><a href={sitePath('/contacto')} data-i18n="footer-contact">Contacto</a></li>
              <li><a href={sitePath('/privacidad')} data-i18n="footer-privacy">Privacidad</a></li>
              <li><a href={sitePath('/terminos')} data-i18n="footer-terms">Terminos</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Corporacion Paguro SAS</span>
          <span data-i18n="footer-tagline">Paguro es una arquitectura disenada para producir excelencia repetible.</span>
          <span>Next.js</span>
        </div>
      </div>
    </footer>
  );
}
