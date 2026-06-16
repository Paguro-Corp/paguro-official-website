const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const pages = [
  { file: 'home-medium.html', dir: 'app', title: 'Paguro Corp - Home', label: '01 Home' },
  { file: 'sobre-medium.html', dir: path.join('app', 'sobre'), title: 'Sobre Paguro - Filosofia - Metodo', label: '02 Sobre Paguro' },
  { file: 'ecosistema-medium.html', dir: path.join('app', 'ecosistema'), title: 'Ecosistema - Pagurai - Pagureo - Ermitano Pep', label: '03 Ecosistema' },
];

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = match ? match[1] : '';

  return body
    .replace(/<!--[^>]*TWEAKS[^>]*-->/i, '')
    .replace(/<script[\s\S]*?<\/script>\s*/gi, '')
    .trim();
}

function normalizeLinks(markup) {
  return markup
    .replace(/href="home-medium\.html(#[^"]*)?"/g, (_, hash = '') => `href="/${hash}"`)
    .replace(/href="sobre-medium\.html(#[^"]*)?"/g, (_, hash = '') => `href="/sobre${hash}"`)
    .replace(/href="ecosistema-medium\.html(#[^"]*)?"/g, (_, hash = '') => `href="/ecosistema${hash}"`)
    .replace(/src="assets\//g, 'src="/assets/')
    .replace(/src="uploads\//g, 'src="/uploads/')
    .replace(/href="assets\//g, 'href="/assets/')
    .replace(/href="uploads\//g, 'href="/uploads/');
}

function normalizeContentLinks(markup) {
  return markup
    .replace(/<a href="#metodo" data-i18n="nav-metodo">[^<]*<\/a>/g, '<a href="/proyectos" data-i18n="nav-proyectos">Proyectos</a>')
    .replace(/<a href="#metodo">[^<]*<\/a>/g, '<a href="/proyectos" data-i18n="nav-proyectos">Proyectos</a>')
    .replace(/<a href="#proyectos">Proyectos<\/a>/g, '<a href="/proyectos" data-i18n="nav-proyectos">Proyectos</a>')
    .replace(/<a href="#insights"([^>]*)>Insights \/ Lab<\/a>/g, '<a href="/insights"$1 data-i18n="nav-insights">Insights / Lab</a>')
    .replace(/<a href="#">Insights \/ Lab<\/a>/g, '<a href="/insights" data-i18n="nav-insights">Insights / Lab</a>')
    .replace(/<li><a href="#">Proyectos<\/a><\/li>/g, '<li><a href="/proyectos" data-i18n="nav-proyectos">Proyectos</a></li>')
    .replace(/<li><a href="#">Insights \/ Lab<\/a><\/li>/g, '<li><a href="/insights" data-i18n="nav-insights">Insights / Lab</a></li>')
    .replace(/<li><a href="#contacto">Contacto(?: estratégico)?<\/a><\/li>/g, '<li><a href="/contacto">Contacto</a></li>')
    .replace(/<li><a href="#">Privacidad<\/a><\/li>/g, '<li><a href="/privacidad">Privacidad</a></li>')
    .replace(/<li><a href="#">Términos<\/a><\/li>/g, '<li><a href="/terminos">Terminos</a></li>')
    .replace(/<a href="#contacto" data-i18n="nav-contacto">Contacto<\/a>/g, '<a href="/contacto" data-i18n="nav-contacto">Contacto</a>')
    .replace(/<a class="btn" href="#">Leer todo el Lab <span class="arr">→<\/span><\/a>/g, '<a class="btn" href="/insights">Leer todo el Lab <span class="arr">→</span></a>');
}

const controlsHtml = `
    <div class="nav__controls">
      <button class="nav-ctrl-btn" id="toggle-lang" aria-label="Cambiar idioma" title="Cambiar idioma">EN</button>
      <span class="nav-ctrl-sep" aria-hidden="true"></span>
      <button class="nav-ctrl-btn" id="toggle-theme" aria-label="Cambiar tema" title="Cambiar a modo claro">
        <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13" aria-hidden="true"><path d="M8 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 2zm0 9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 11zm-7-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 1 8zm10.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zM2.636 4.05a.5.5 0 0 1 .708-.708l.707.707a.5.5 0 0 1-.707.707l-.708-.707zm9.193 8.485a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 0 1 .707.707l-.707.707zM2.636 11.95a.5.5 0 0 1 0-.707l.708-.707a.5.5 0 0 1 .707.707l-.707.708a.5.5 0 0 1-.708 0zm9.193-8.485a.5.5 0 0 1 .707.707l-.707.707a.5.5 0 0 1-.707-.707l.707-.707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
      </button>
    </div>`;

function ensureNavControls(markup) {
  if (markup.includes('class="nav__controls"')) return markup;
  return markup.replace(/(\n\s*<a class="btn btn--accent btn--sm")/, `${controlsHtml}$1`);
}

function setPrimaryCtaToContact(markup) {
  return markup
    .replace(
      /<a class="btn btn--accent btn--sm" href="[^"]*">[\s\S]*?<\/a>/,
      '<a class="btn btn--accent btn--sm" href="/contacto"><span data-i18n="nav-cta">Contacto</span> <span class="arr">→</span></a>',
    )
    .replace(
      /<a class="btn btn--accent" href="[^"]*">Contacto estratégico <span class="arr">→<\/span><\/a>/g,
      '<a class="btn btn--accent" href="#contacto">Contacto estratégico <span class="arr">→</span></a>',
    )
    .replace(
      /<a class="btn btn--accent" href="\/ecosistema">Explorar ecosistema <span class="arr">→<\/span><\/a>/g,
      '<a class="btn btn--accent" href="#contacto">Contacto estratégico <span class="arr">→</span></a>',
    )
    .replace(
      /<a class="btn btn--accent" href="#unidades">Ver las marcas <span class="arr">→<\/span><\/a>/g,
      '<a class="btn btn--accent" href="#contacto">Contacto estratégico <span class="arr">→</span></a>',
    )
    .replace(
      /<a class="btn btn--accent" href="#metodo">Ver el método <span class="arr">→<\/span><\/a>/g,
      '<a class="btn btn--accent" href="#contacto">Contacto estratégico <span class="arr">→</span></a>',
    );
}

function routeContactLinks(markup) {
  return markup.replace(/href="#contacto"/g, 'href="/contacto"');
}

function applySharedI18nMarkup(markup) {
  return markup
    .replace(/<a href="\/" class="is-current">Home<\/a>/g, '<a href="/" class="is-current" data-i18n="page-home">Home</a>')
    .replace(/<a href="\/">Home<\/a>/g, '<a href="/" data-i18n="page-home">Home</a>')
    .replace(/<a href="\/sobre" class="is-current">Sobre<\/a>/g, '<a href="/sobre" class="is-current" data-i18n="page-sobre">Sobre</a>')
    .replace(/<a href="\/sobre">Sobre<\/a>/g, '<a href="/sobre" data-i18n="page-sobre">Sobre</a>')
    .replace(
      /<a href="\/ecosistema" class="is-current">Ecosistema<\/a>/g,
      '<a href="/ecosistema" class="is-current" data-i18n="page-ecosistema">Ecosistema</a>',
    )
    .replace(/<a href="\/ecosistema">Ecosistema<\/a>/g, '<a href="/ecosistema" data-i18n="page-ecosistema">Ecosistema</a>')
    .replace(/<a href="\/sobre"([^>]*)>Sobre Paguro<\/a>/g, '<a href="/sobre"$1 data-i18n="nav-sobre">Sobre Paguro</a>')
    .replace(
      /<a href="\/ecosistema"([^>]*)>Ecosistema <span class="chev">([^<]*)<\/span><\/a>/g,
      '<a href="/ecosistema"$1><span data-i18n="nav-ecosistema">Ecosistema</span> <span class="chev">$2</span></a>',
    )
    .replace(/<a href="\/contacto">Contacto<\/a>/g, '<a href="/contacto" data-i18n="nav-contacto">Contacto</a>')
    .replace(/<h6>Holding<\/h6>/g, '<h6 data-i18n="footer-holding">Holding</h6>')
    .replace(/<h6>Marcas<\/h6>/g, '<h6 data-i18n="footer-brands">Marcas</h6>')
    .replace(/<h6>Contenido<\/h6>/g, '<h6 data-i18n="footer-content">Contenido</h6>')
    .replace(/<h6>Legal<\/h6>/g, '<h6 data-i18n="footer-legal">Legal</h6>')
    .replace(/<a href="\/sobre#filosofia">Filosofía<\/a>/g, '<a href="/sobre#filosofia" data-i18n="footer-philosophy">Filosofía</a>')
    .replace(/<a href="\/sobre#filosofia">Filosofia<\/a>/g, '<a href="/sobre#filosofia" data-i18n="footer-philosophy">Filosofia</a>')
    .replace(/<a href="#filosofia">Filosofía<\/a>/g, '<a href="#filosofia" data-i18n="footer-philosophy">Filosofía</a>')
    .replace(/<a href="#filosofia">Filosofia<\/a>/g, '<a href="#filosofia" data-i18n="footer-philosophy">Filosofia</a>')
    .replace(/<a href="\/sobre#metodo">Método<\/a>/g, '<a href="/sobre#metodo" data-i18n="footer-method">Método</a>')
    .replace(/<a href="\/sobre#metodo">Metodo<\/a>/g, '<a href="/sobre#metodo" data-i18n="footer-method">Metodo</a>')
    .replace(/<a href="\/sobre#valores">Valores<\/a>/g, '<a href="/sobre#valores" data-i18n="footer-values">Valores</a>')
    .replace(/<a href="#valores">Valores<\/a>/g, '<a href="#valores" data-i18n="footer-values">Valores</a>')
    .replace(/<a href="#">Casos<\/a>/g, '<a href="#" data-i18n="footer-cases">Casos</a>')
    .replace(/<a href="\/privacidad">Privacidad<\/a>/g, '<a href="/privacidad" data-i18n="footer-privacy">Privacidad</a>')
    .replace(/<a href="\/terminos">Terminos<\/a>/g, '<a href="/terminos" data-i18n="footer-terms">Terminos</a>')
    .replace(/ data-i18n="([^"]+)" data-i18n="\1"/g, ' data-i18n="$1"');
}

function removeEmbeddedContact(markup) {
  return markup
    .replace(
      /<section class="sec sec--contact sec--with-divider" id="contacto">[\s\S]*?<\/section>\s*/g,
      '',
    )
    .replace(
    /<!-- CIERRE[^>]*-->\s*<section class="sec sec--compact" id="contacto">[\s\S]*?<\/section>\s*/gi,
    '',
    )
    .replace(
    /<section class="sec sec--compact" id="contacto">[\s\S]*?<\/section>\s*/gi,
    '',
    );
}

for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page.file), 'utf8');
  let markup = normalizeLinks(extractBody(html));
  markup = normalizeContentLinks(markup);
  markup = ensureNavControls(markup);
  markup = removeEmbeddedContact(markup);
  markup = setPrimaryCtaToContact(markup);
  markup = routeContactLinks(markup);
  markup = applySharedI18nMarkup(markup);
  if (page.file === 'home-medium.html') {
    markup = markup.replace(
      '<a href="/ecosistema" class="is-current">Ecosistema <span class="chev">▾</span></a>',
      '<a href="/ecosistema">Ecosistema <span class="chev">▾</span></a>',
    );
  }
  const targetDir = path.join(root, page.dir);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(
    path.join(targetDir, 'page.js'),
    `import StaticPage from '@/components/StaticPage';\n\nexport const metadata = {\n  title: ${JSON.stringify(page.title)},\n};\n\nconst markup = ${JSON.stringify(markup)};\n\nexport default function Page() {\n  return <StaticPage markup={markup} screenLabel=${JSON.stringify(page.label)} />;\n}\n`,
    'utf8',
  );
}
