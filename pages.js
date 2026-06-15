/* ==========================================================================
   PAGES.JS — definiciones de las demás páginas wireframe
   Se inyectan en #page-mount al cargar
   ========================================================================== */

const PAGE_HTML = {};

/* ---------- Helpers de fragments compartidos ---------- */
const NAV_HTML = `
  <nav class="wf-nav">
    <div class="wf-nav__logo">PAGURO<span>/</span>CORP</div>
    <div class="wf-nav__items">
      <a>Sobre Paguro</a>
      <a class="has-drop">Ecosistema</a>
      <a>Proyectos</a>
      <a>Insights / Lab</a>
      <a>Contacto</a>
    </div>
    <div class="wf-nav__cta">Conocer marcas →</div>
  </nav>
`;
const FOOTER_HTML = `
  <footer class="wf-footer">
    <div>
      <div class="wf-nav__logo">PAGURO<span>/</span>CORP</div>
      <p class="note note--dim" style="margin-top:10px">Corporación Paguro SAS · Bogotá, CO</p>
    </div>
    <div><h6>Holding</h6><ul><li>Sobre Paguro</li><li>Filosofía</li><li>Método</li><li>Cultura</li></ul></div>
    <div><h6>Marcas</h6><ul><li>Pagurai</li><li>Pagureo</li><li>Ermitaño Pep</li></ul></div>
    <div><h6>Contenido</h6><ul><li>Proyectos</li><li>Casos</li><li>Insights</li></ul></div>
    <div><h6>Legal</h6><ul><li>Contacto</li><li>Privacidad</li><li>Términos</li></ul></div>
  </footer>
`;

const frame = (url, body) => `
  <div class="frame">
    <div class="frame__chrome">
      <div class="frame__dots"><span></span><span></span><span></span></div>
      <div class="frame__url">pagurocorp.com<em>${url}</em></div>
    </div>
    ${NAV_HTML}
    <div style="padding:22px;">${body}</div>
    ${FOOTER_HTML}
  </div>
`;

const pageShell = (id, label, route, crumbs, title, objective, callout, body) => `
  <section class="page" data-page="${id}" data-screen-label="${label}">
    <div class="page__topbar">
      <div class="page__crumbs">FASE 01 · <span>página</span> · <em>${crumbs}</em></div>
      <div class="page__route">${route}</div>
    </div>
    <div class="page__body">
      <div class="page__title">
        <h1>${title}</h1>
        <span class="id">${route}</span>
      </div>
      <p class="page__objective">${objective}</p>
      ${callout ? `<div class="callout">${callout}</div>` : ''}
      ${body}
    </div>
  </section>
`;

const wfSection = (num, label, note, body) => `
  <div class="wf-section">
    <span class="wf-section__label"><span class="num">${num}</span>${label}</span>
    ${note ? `<span class="wf-section__note">${note}</span>` : ''}
    ${body}
  </div>
`;

/* ---------- Helpers nuevos (Fase 01 · ampliada) ---------- */

const pageNav = (items) => `
  <nav class="page-nav">
    ${items.map((it,i) => `<a href="#${it.id||''}"><span class="num">${String(i+1).padStart(2,'0')}</span>${it.label}</a>`).join('')}
  </nav>
`;

const closeCta = ({title, hand, primary, secondaries}) => `
  <div class="close-cta">
    <div class="stack stack--sm">
      <span class="box__label">CIERRE · próximo paso</span>
      <div class="close-cta__title">${title}</div>
      <div class="close-cta__hand">${hand}</div>
    </div>
    <div class="close-cta__links">
      <div class="btn btn--primary">${primary} →</div>
      ${(secondaries||[]).map(s => `<div class="btn btn--ghost">${s}</div>`).join('')}
    </div>
  </div>
`;

const kpi = (value, label, caption) => `
  <div class="kpi">
    <div class="kpi__label">${label}</div>
    <div class="kpi__value">${value}</div>
    ${caption ? `<div class="kpi__caption">${caption}</div>` : ''}
  </div>
`;

const stat = (v, l) => `<div class="stat"><span class="v">${v}</span><span class="l">${l}</span></div>`;

const card = (tags, cmsFields) => `
  <div class="wf-card">
    <div class="wf-card__media"></div>
    <div class="wf-card__body">
      <div class="wf-card__tags">${tags}</div>
      <div class="line title"></div>
      <div class="lines"><div class="line long"></div><div class="line med"></div></div>
      ${(cmsFields||[]).map(f=>`<span class="cms-pill">${f}</span>`).join(' ')}
    </div>
  </div>
`;

/* ==========================================================================
   02 · SOBRE PAGURO
   ========================================================================== */
PAGE_HTML.sobre = pageShell(
  'sobre', '02 Sobre Paguro', '/sobre', 'Sobre Paguro',
  '02 — SOBRE PAGURO',
  'Explicar la filosofía del holding.',
  'Posicionamiento como <strong>holding superior</strong>, no empresa tradicional.',
  frame('/sobre', `
    <div class="bc"><a>Inicio</a><span class="sep">/</span><span>Sobre Paguro</span></div>

    ${pageNav([
      {label:'Hero'},{label:'Manifiesto'},{label:'Origen'},{label:'Filosofía'},
      {label:'Método'},{label:'Cultura'},{label:'Holding'},{label:'Hitos'},{label:'Ecosistema'},{label:'Cierre'}
    ])}

    ${wfSection('01','Hero institucional','tono editorial', `
      <div class="hero-wf">
        <span class="tag">FILOSOFÍA</span>
        <div class="lines"><div class="line title" style="width:75%;height:24px"></div><div class="line title" style="width:50%;height:24px"></div></div>
        <p class="note">[H1] "Diseñar antes de ejecutar. Automatizar antes de contratar."</p>
        <div class="lines"><div class="line long"></div><div class="line med"></div></div>
        <div class="row"><div class="btn btn--primary">Conocer el método →</div><div class="btn btn--ghost">Ver ecosistema</div></div>
      </div>
    `)}

    ${wfSection('02','Manifiesto · mantra completo','pull-quote dramático', `
      <div class="manifesto">
        <span class="manifesto__kicker">— Mantra Paguro</span>
        <div class="manifesto__line"><span class="em">Diseñar</span> antes de ejecutar.</div>
        <div class="manifesto__line"><span class="em">Automatizar</span> antes de contratar.</div>
        <div class="manifesto__line"><span class="em">Optimizar</span> antes de expandir.</div>
        <div class="manifesto__line"><span class="em">Evolucionar</span> antes de estancarse.</div>
        <div class="manifesto__sign">— Corporación Paguro SAS</div>
      </div>
    `)}

    ${wfSection('03','Origen conceptual','metáfora del paguro', `
      <div class="grid grid--2">
        <div class="box box--img" style="min-height:240px"><span class="box__label">IMG · ilustración paguro</span></div>
        <div class="stack">
          <div class="line h2"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <p class="note note--dim">"Cada marca es un caparazón. La arquitectura permanece."</p>
        </div>
      </div>
    `)}

    ${wfSection('04','Filosofía del paguro','4 principios', `
      <div class="grid grid--2">
        ${['Adaptabilidad','Diseño funcional','Innovación tecnológica','Automatización']
          .map((p,i)=>`
            <div class="box">
              <span class="box__label">PRINCIPIO ${String(i+1).padStart(2,'0')}</span>
              <div class="line title" style="margin-top:10px"></div>
              <div class="lines" style="margin-top:8px"><div class="line long"></div><div class="line med"></div></div>
              <p class="note note--dim" style="margin-top:8px">${p}</p>
            </div>`).join('')}
      </div>
    `)}

    ${wfSection('05','Doctrina operativa · Método Paguro','4 verbos del mantra', `
      <div class="method">
        <div class="method__step"><span class="method__num">01</span><span class="method__verb">Diseñar</span><span class="box__caption">antes de ejecutar.</span></div>
        <div class="method__step"><span class="method__num">02</span><span class="method__verb">Automatizar</span><span class="box__caption">antes de contratar.</span></div>
        <div class="method__step"><span class="method__num">03</span><span class="method__verb">Optimizar</span><span class="box__caption">antes de expandir.</span></div>
        <div class="method__step"><span class="method__num">04</span><span class="method__verb">Evolucionar</span><span class="box__caption">antes de estancarse.</span></div>
      </div>
      <p class="note note--dim" style="margin-top:14px">↳ Cada verbo puede expandirse con copy + ejemplos en fase 02.</p>
    `)}

    ${wfSection('06','Cultura','principios internos', `
      <div class="grid grid--3">
        <div class="box"><span class="box__label">CULTURA · 01</span><div class="line title" style="margin-top:10px"></div><div class="lines" style="margin-top:8px"><div class="line long"></div><div class="line med"></div></div></div>
        <div class="box"><span class="box__label">CULTURA · 02</span><div class="line title" style="margin-top:10px"></div><div class="lines" style="margin-top:8px"><div class="line long"></div><div class="line med"></div></div></div>
        <div class="box"><span class="box__label">CULTURA · 03</span><div class="line title" style="margin-top:10px"></div><div class="lines" style="margin-top:8px"><div class="line long"></div><div class="line med"></div></div></div>
      </div>
    `)}

    ${wfSection('07','Holding como núcleo','diagrama estructural', `
      <div class="box" style="min-height:220px;display:flex;align-items:center;justify-content:center">
        <div class="stack" style="align-items:center;text-align:center">
          <span class="tag">DIAGRAMA</span>
          <p class="note note--dim">Esquema visual: núcleo Paguro → 3 marcas-caparazón →<br/>proyectos · casos · insights (transversal)</p>
        </div>
      </div>
    `)}

    ${wfSection('08','Hitos del holding','timeline horizontal', `
      <div class="timeline">
        <div class="tl-step"><span class="year">AÑO 01</span><span class="label">Fundación</span><span class="desc">Corporación Paguro SAS · holding como sistema operativo.</span></div>
        <div class="tl-step"><span class="year">AÑO 01</span><span class="label">Pagurai</span><span class="desc">Primera unidad · IA y automatización.</span></div>
        <div class="tl-step"><span class="year">AÑO 02</span><span class="label">Pagureo</span><span class="desc">Unidad commerce · home office.</span></div>
        <div class="tl-step"><span class="year">AÑO 02</span><span class="label">Ermitaño Pep</span><span class="desc">Unidad media · awareness narrativa.</span></div>
        <div class="tl-step"><span class="year">EN CURSO</span><span class="label">Próxima unidad</span><span class="desc">Caparazón en diseño.</span></div>
      </div>
      <p class="note note--dim" style="margin-top:18px">↳ Editable desde CMS · cada hito puede incluir link interno.</p>
    `)}

    ${wfSection('09','El ecosistema en una vista','cross-link a /ecosistema', `
      <div class="grid grid--3">
        <div class="unit-card unit-card--pagurai">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagurai"><span class="dot"></span>UNIDAD · IA</span>
          <div class="line title"></div>
          <p class="note note--dim">Pagurai</p>
          <div style="margin-top:auto"><div class="btn btn--ghost">Overview →</div></div>
        </div>
        <div class="unit-card unit-card--pagureo">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagureo"><span class="dot"></span>UNIDAD · COMMERCE</span>
          <div class="line title"></div>
          <p class="note note--dim">Pagureo</p>
          <div style="margin-top:auto"><div class="btn btn--ghost">Overview →</div></div>
        </div>
        <div class="unit-card unit-card--ermitano">
          <div class="unit-card__accent"></div>
          <span class="tag tag--ermitano"><span class="dot"></span>UNIDAD · MEDIA / IP</span>
          <div class="line title"></div>
          <p class="note note--dim">Ermitaño Pep</p>
          <div style="margin-top:auto"><div class="btn btn--ghost">Overview →</div></div>
        </div>
      </div>
    `)}

    ${closeCta({
      title:'Si entendiste la lógica del paguro,',
      hand:'el siguiente paso es ver cómo se materializa en cada marca.',
      primary:'Explorar ecosistema',
      secondaries:['Ver proyectos','Contacto estratégico']
    })}
  `)
);

/* ==========================================================================
   03 · ECOSISTEMA
   ========================================================================== */
PAGE_HTML.ecosistema = pageShell(
  'ecosistema', '03 Ecosistema', '/ecosistema', 'Ecosistema',
  '03 — ECOSISTEMA',
  'Mostrar las unidades de negocio de forma clara y modular.',
  'Página de <strong>aterrizaje del ecosistema</strong> — funciona como hub hacia las 3 unidades.',
  frame('/ecosistema', `
    <div class="bc"><a>Inicio</a><span class="sep">/</span><span>Ecosistema</span></div>

    ${pageNav([
      {label:'Intro'},{label:'Unidades'},{label:'Relación'},{label:'Comparativa'},
      {label:'Cross-proyectos'},{label:'Externos'},{label:'Cierre'}
    ])}

    ${wfSection('01','Intro del ecosistema','contexto', `
      <div class="hero-wf">
        <span class="tag">ECOSISTEMA · 3 UNIDADES</span>
        <div class="lines"><div class="line title" style="width:70%;height:24px"></div></div>
        <p class="note">[H1] "Tres marcas. Un sistema operativo."</p>
        <div class="lines"><div class="line long"></div><div class="line med"></div></div>
      </div>
    `)}

    ${wfSection('02','Cards de unidades','3 unidades lado a lado', `
      <div class="grid grid--3">
        <div class="unit-card unit-card--pagurai">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagurai"><span class="dot"></span>UNIDAD · IA</span>
          <div class="line title"></div>
          <p class="note note--dim">Pagurai · IA y automatización · premium</p>
          <div class="box__label">SERVICIOS PRINCIPALES</div>
          <div class="lines"><div class="line long"></div><div class="line med"></div><div class="line short"></div></div>
          <div style="margin-top:auto" class="stack stack--sm">
            <div class="btn btn--ghost btn--ext">pagurai.com</div>
            <div class="btn btn--ghost">Ver overview →</div>
          </div>
        </div>
        <div class="unit-card unit-card--pagureo">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagureo"><span class="dot"></span>UNIDAD · COMMERCE</span>
          <div class="line title"></div>
          <p class="note note--dim">Pagureo · home office · smart minimalist · Bogotá</p>
          <div class="box__label">CATEGORÍAS</div>
          <div class="lines"><div class="line long"></div><div class="line med"></div><div class="line short"></div></div>
          <div style="margin-top:auto" class="stack stack--sm">
            <div class="btn btn--ghost btn--ext">pagureo.com</div>
            <div class="btn btn--ghost">Ver overview →</div>
          </div>
        </div>
        <div class="unit-card unit-card--ermitano">
          <div class="unit-card__accent"></div>
          <span class="tag tag--ermitano"><span class="dot"></span>UNIDAD · MEDIA / IP</span>
          <div class="line title"></div>
          <p class="note note--dim">Ermitaño Pep · awareness · branding narrativo</p>
          <div class="box__label">CONTENIDO</div>
          <div class="lines"><div class="line long"></div><div class="line med"></div><div class="line short"></div></div>
          <div style="margin-top:auto" class="stack stack--sm">
            <div class="btn btn--ghost">Explorar contenido →</div>
            <div class="btn btn--ghost">Ver overview →</div>
          </div>
        </div>
      </div>
    `)}

    ${wfSection('03','Relación entre unidades','cómo se conectan', `
      <div class="grid grid--2">
        <div class="box" style="min-height:200px;display:flex;align-items:center;justify-content:center">
          <div class="stack" style="align-items:center;text-align:center">
            <span class="tag">DIAGRAMA · CIRCULAR</span>
            <p class="note note--dim">Pagurai (IA) ↔ Pagureo (commerce) ↔ Ermitaño Pep (media) →<br/>se retroalimentan a través del holding.</p>
          </div>
        </div>
        <div class="stack">
          <div class="line h2"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <p class="note note--orange note--arrow">Pagurai entrega automatización que opera Pagureo.</p>
          <p class="note note--orange note--arrow">Ermitaño Pep genera awareness para todo el ecosistema.</p>
          <p class="note note--orange note--arrow">Cada unidad valida hipótesis para las demás.</p>
        </div>
      </div>
    `)}

    ${wfSection('04','Matriz comparativa','foco y percepción por unidad', `
      <table class="matrix">
        <thead>
          <tr>
            <th>Dimensión</th>
            <th><span class="tag tag--pagurai cell-tag"><span class="dot"></span>Pagurai</span></th>
            <th><span class="tag tag--pagureo cell-tag"><span class="dot"></span>Pagureo</span></th>
            <th><span class="tag tag--ermitano cell-tag"><span class="dot"></span>Ermitaño Pep</span></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Categoría</td><td>IA · automatización</td><td>Commerce · lifestyle</td><td>Media · IP · branding</td></tr>
          <tr><td>Audiencia</td><td>Empresas · partners</td><td>Trabajadores remotos · BOG</td><td>Audiencias amplias</td></tr>
          <tr><td>Percepción</td><td>Premium</td><td>Smart minimalist</td><td>Cultural · narrativa</td></tr>
          <tr><td>Modelo</td><td>Servicios + consultoría</td><td>Productos físicos / setups</td><td>Contenido · IP · colabs</td></tr>
          <tr><td>Rol estratégico</td><td>Motor operativo</td><td>Validación de mercado</td><td>Awareness del ecosistema</td></tr>
          <tr><td>Dominio</td><td>pagurai.com</td><td>pagureo.com</td><td>canales sociales</td></tr>
        </tbody>
      </table>
      <p class="note note--dim note--arrow" style="margin-top:14px">Matriz editorial · ayuda a partners e inversionistas a comparar de un vistazo.</p>
    `)}

    ${wfSection('05','Proyectos cruzados','un proyecto representativo por unidad', `
      <div class="grid grid--3">
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><span class="tag">IA</span>',['project.name'])}
        ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><span class="tag">Setup</span>',['project.name'])}
        ${card('<span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span><span class="tag">Media</span>',['project.name'])}
      </div>
      <div class="row row--end" style="margin-top:14px"><span class="btn btn--ghost" data-route="proyectos">Ver todos los proyectos →</span></div>
    `)}

    ${wfSection('06','CTA — webs independientes','externos', `
      <div class="stack">
        <div class="ext-cta">
          <div><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>
            <div class="ext-cta__dom" style="margin-top:6px">→ <em>pagurai.com</em></div>
          </div>
          <div class="btn btn--primary btn--ext">visitar</div>
        </div>
        <div class="ext-cta">
          <div><span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>
            <div class="ext-cta__dom" style="margin-top:6px">→ <em>pagureo.com</em></div>
          </div>
          <div class="btn btn--primary btn--ext">visitar</div>
        </div>
        <div class="ext-cta">
          <div><span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span>
            <div class="ext-cta__dom" style="margin-top:6px">→ <em>ermitanopep.com</em> · canales</div>
          </div>
          <div class="btn btn--primary btn--ext">visitar</div>
        </div>
      </div>
    `)}

    ${closeCta({
      title:'¿Cuál de los tres caparazones resuena con tu necesidad?',
      hand:'Empieza por la unidad que más se acerca — luego conoce las otras.',
      primary:'Hablar con el holding',
      secondaries:['Ver casos','Leer insights']
    })}
  `)
);

/* ==========================================================================
   UNIT PAGE BUILDER
   ========================================================================== */
function unitPage({id, label, route, title, brand, brandClass, domain, intro, serviciosPrincipales, serviciosSecundarios, sectionLabel, kpis, quote, extraSection}){
  return pageShell(
    id, label, route, `Ecosistema / ${title}`,
    `${label.split(' ')[0]} — ${title.toUpperCase()}`,
    `Dar overview simple sin reemplazar ${domain}.`,
    `Hub interno que enruta al sitio externo de <strong>${title}</strong>.`,
    frame(route, `
      <div class="bc">
        <a data-route="">Inicio</a><span class="sep">/</span><a data-route="ecosistema">Ecosistema</a><span class="sep">/</span><span>${title}</span>
      </div>

      ${pageNav([
        {label:'Hero'},{label:'Qué es'},{label:'Rol'},{label:'Servicios'},
        {label:'Secundarios'},{label:'Métricas'},{label: extraSection ? extraSection.navLabel : 'Extra'},
        {label:'Proyectos'},{label:'Voz'},{label:'Externo'},{label:'Cierre'}
      ])}

      ${wfSection('01','Hero de unidad', `acento color · <span style="color:${brand}">${brand}</span>`, `
        <div class="hero-wf" style="border-left:3px solid ${brand};">
          <span class="tag tag--${brandClass}"><span class="dot"></span>UNIDAD · ${sectionLabel}</span>
          <div class="lines"><div class="line title" style="width:55%;height:30px"></div></div>
          <p class="note">[H1] "${title}" + tagline de unidad</p>
          <div class="lines"><div class="line long"></div><div class="line med"></div></div>
          <div class="row">
            <div class="btn btn--primary btn--ext">visitar ${domain}</div>
            <div class="btn btn--ghost">Ver proyectos</div>
          </div>
        </div>
      `)}

      ${wfSection('02', `Qué es ${title}`, 'definición corta + bullets', `
        <div class="grid grid--2">
          <div class="stack">
            <div class="line h2"></div>
            <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
            <p class="note note--dim">${intro}</p>
            <div class="row" style="margin-top:6px">
              <span class="cms-pill">unit.descripcion</span>
              <span class="cms-pill">unit.tagline</span>
            </div>
          </div>
          <div class="box box--img" style="min-height:220px"><span class="box__label">IMG · brand mark / placeholder</span></div>
        </div>
      `)}

      ${wfSection('03','Rol dentro del ecosistema','conexión con otras unidades', `
        <div class="grid grid--2">
          <div class="box" style="min-height:160px">
            <span class="box__label">DIAGRAMA · ${title} ↔ holding</span>
            <p class="note note--dim" style="margin-top:14px">Cómo aporta al sistema completo.</p>
          </div>
          <div class="stack">
            <div class="line h2"></div>
            <div class="lines"><div class="line long"></div><div class="long long"></div><div class="line med"></div></div>
            <p class="note note--orange note--arrow">Aporta al ecosistema en X dimensión.</p>
            <p class="note note--orange note--arrow">Se conecta con la otra unidad en Y momento.</p>
          </div>
        </div>
      `)}

      ${serviciosPrincipales ? wfSection('04', serviciosPrincipales.title, 'lista principal', `
        <div class="grid grid--3">
          ${serviciosPrincipales.items.map(s=>`
            <div class="box">
              <span class="box__label">${serviciosPrincipales.tag}</span>
              <div class="line title" style="margin-top:10px"></div>
              <p class="note note--dim" style="margin-top:6px">${s}</p>
              <div class="lines" style="margin-top:8px"><div class="line med"></div></div>
            </div>
          `).join('')}
        </div>
      `) : ''}

      ${serviciosSecundarios ? wfSection('05', serviciosSecundarios.title, 'lista secundaria', `
        <div class="row">
          ${serviciosSecundarios.items.map(s=>`<span class="tag">${s}</span>`).join('')}
        </div>
      `) : ''}

      ${kpis ? wfSection('06','Estado actual · métricas','snapshot operativo', `
        <div class="grid grid--${kpis.length}">
          ${kpis.map(k=>kpi(k.v, k.l, k.c)).join('')}
        </div>
        <p class="note note--dim" style="margin-top:12px">↳ Editables vía CMS · pueden actualizarse trimestralmente.</p>
      `) : ''}

      ${extraSection ? wfSection('07', extraSection.title, extraSection.note, extraSection.body) : ''}

      ${wfSection('08','Proyectos destacados','3 cards filtrados por unidad', `
        <div class="grid grid--3">
          ${[1,2,3].map(()=>card(
            `<span class="tag tag--${brandClass}"><span class="dot"></span>${title}</span>`,
            ['project.name','project.category']
          )).join('')}
        </div>
        <div class="row row--end" style="margin-top:14px">
          <span class="btn btn--ghost" data-route="proyectos">Ver más proyectos →</span>
        </div>
      `)}

      ${quote ? wfSection('09','Voz · cita representativa','testimonio / posicionamiento', `
        <div class="quote">
          <div class="quote__text">"${quote.text}"</div>
          <div class="quote__attr">— ${quote.attr}</div>
        </div>
      `) : ''}

      ${wfSection('10', `CTA · visitar ${domain}`, 'salida al sitio externo', `
        <div class="ext-cta">
          <div>
            <span class="tag tag--${brandClass}"><span class="dot"></span>${title}</span>
            <div class="ext-cta__dom" style="margin-top:6px">→ <em>${domain}</em></div>
            <p class="note note--dim" style="margin-top:6px">Esta página no reemplaza al sitio independiente.</p>
          </div>
          <div class="btn btn--primary btn--ext">ir al sitio</div>
        </div>
      `)}

      ${closeCta({
        title:`¿Querés conocer otra unidad del ecosistema?`,
        hand:`Las tres marcas trabajan en sintonía — vale la pena verlas juntas.`,
        primary:'Volver al ecosistema',
        secondaries:['Ver casos','Contacto estratégico']
      })}
    `)
  );
}

PAGE_HTML.pagurai = unitPage({
  id:'pagurai', label:'04 Pagurai', route:'/ecosistema/pagurai',
  title:'Pagurai', brand:'#0360ab', brandClass:'pagurai',
  domain:'pagurai.com',
  intro:'Unidad de IA y automatización. Percepción premium. Chatbots, agentes, integraciones, consultoría.',
  sectionLabel:'IA',
  serviciosPrincipales:{ title:'Servicios principales', tag:'SERVICIO · CORE',
    items:['Chatbots IA','Automatizaciones','Agentes IA','Integraciones','Consultoría']
  },
  serviciosSecundarios:{ title:'Servicios secundarios',
    items:['Marketing con IA','Creación de contenido','Community management','Estrategia digital','Análisis y reportes']
  },
  kpis:[
    {v:'+XX', l:'Proyectos entregados', c:'desde el año 01'},
    {v:'XX%', l:'Tasa de automatización', c:'procesos optimizados'},
    {v:'XX', l:'Integraciones activas', c:'stack tecnológico'}
  ],
  quote:{ text:'Cita de partner o cliente sobre la entrega premium de Pagurai.', attr:'Cliente · Empresa · Cargo' },
  extraSection:{
    navLabel:'Stack',
    title:'Stack tecnológico',
    note:'frameworks · proveedores · capacidades',
    body:`
      <div class="row">
        ${['LLM provider 01','LLM provider 02','Vector DB','RAG','Workflows','Voice','Webhooks','API gateway','Observabilidad']
          .map(s=>`<span class="tag">${s}</span>`).join('')}
      </div>
      <p class="note note--dim" style="margin-top:10px">↳ Lista no exhaustiva · varía por proyecto.</p>
    `
  }
});

PAGE_HTML.pagureo = unitPage({
  id:'pagureo', label:'05 Pagureo', route:'/ecosistema/pagureo',
  title:'Pagureo', brand:'#ee7224', brandClass:'pagureo',
  domain:'pagureo.com',
  intro:'Unidad commerce/lifestyle. Smart minimalist para clase media en Bogotá. Home office y desk setup.',
  sectionLabel:'COMMERCE',
  serviciosPrincipales:{ title:'Categorías', tag:'CATEGORÍA',
    items:['Home office','Desk setup','Productos para trabajadores remotos']
  },
  serviciosSecundarios:{ title:'Setups destacados',
    items:['Setup minimalista','Setup creator','Setup dev','Setup ejecutivo','Setup compacto']
  },
  kpis:[
    {v:'+XX', l:'Setups publicados', c:'galería curada'},
    {v:'XX', l:'SKUs activos', c:'catálogo en línea'},
    {v:'BOG', l:'Ciudad base', c:'envíos a Colombia'}
  ],
  quote:{ text:'Cita corta sobre el approach minimalista y funcional de Pagureo.', attr:'Cliente · Setup · Ciudad' },
  extraSection:{
    navLabel:'Setups',
    title:'Galería de setups',
    note:'antes / después · curaduría editorial',
    body:`
      <div class="grid grid--3">
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 01 · IMG</span></div>
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 02 · IMG</span></div>
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 03 · IMG</span></div>
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 04 · IMG</span></div>
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 05 · IMG</span></div>
        <div class="box box--img" style="min-height:180px"><span class="box__label">SETUP 06 · IMG</span></div>
      </div>
      <div class="row row--end" style="margin-top:12px"><span class="btn btn--ghost btn--ext">Ver galería completa en pagureo.com</span></div>
    `
  }
});

PAGE_HTML.ermitano = unitPage({
  id:'ermitano', label:'06 Ermitaño Pep', route:'/ecosistema/ermitano-pep',
  title:'Ermitaño Pep', brand:'#e72175', brandClass:'ermitano',
  domain:'canales · IG · YT · TikTok',
  intro:'Unidad media/IP/branding narrativo. Motor de awareness. Personaje + universo + producciones.',
  sectionLabel:'MEDIA / IP',
  serviciosPrincipales:{ title:'Universo / personaje', tag:'UNIVERSO',
    items:['Personaje base','Mundo narrativo','Códigos visuales']
  },
  serviciosSecundarios:{ title:'Tipos de contenido',
    items:['Series cortas','Reels','Long-form','Episodios','Branding plays','Colabs']
  },
  kpis:[
    {v:'XXk', l:'Audiencia acumulada', c:'across canales'},
    {v:'+XX', l:'Producciones publicadas', c:'reels · episodios · colabs'},
    {v:'XX', l:'Colaboraciones', c:'con marcas y creadores'}
  ],
  quote:{ text:'Cita representativa del universo narrativo de Ermitaño Pep.', attr:'Voz del personaje / autor' },
  extraSection:{
    navLabel:'Universo',
    title:'Universo narrativo · producciones destacadas',
    note:'piezas representativas del personaje',
    body:`
      <div class="grid grid--2">
        <div class="spotlight">
          <div class="spotlight__media"></div>
          <div class="spotlight__body">
            <span class="tag tag--ermitano"><span class="dot"></span>Serie</span>
            <div class="line title"></div>
            <div class="lines"><div class="line long"></div><div class="line med"></div></div>
            <p class="note note--dim">Producción narrativa · varios episodios</p>
          </div>
        </div>
        <div class="grid" style="grid-template-rows:1fr 1fr; gap:14px">
          <div class="box box--img" style="min-height:140px"><span class="box__label">REEL · IMG</span></div>
          <div class="box box--img" style="min-height:140px"><span class="box__label">EPISODIO · IMG</span></div>
        </div>
      </div>
      <div class="row" style="margin-top:14px;gap:8px">
        ${['IG','YT','TikTok','X','Substack'].map(c=>`<span class="tag">${c}</span>`).join('')}
        <span class="note note--dim" style="margin-left:auto">↳ Canales activos</span>
      </div>
    `
  }
});

/* ==========================================================================
   04 · PROYECTOS (índice)
   ========================================================================== */
PAGE_HTML.proyectos = pageShell(
  'proyectos', '07 Proyectos', '/proyectos', 'Proyectos',
  '04 — PROYECTOS',
  'Mostrar ejecución real.',
  'Grid filtrable transversal a las 3 unidades. <strong>Evidencia operativa</strong>.',
  frame('/proyectos', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><span>Proyectos</span></div>

    ${wfSection('01','Hero de proyectos','intro corta', `
      <div class="hero-wf" style="min-height:200px">
        <span class="tag">PORTAFOLIO</span>
        <div class="lines"><div class="line title" style="width:55%;height:24px"></div></div>
        <p class="note">[H1] "Lo que hemos diseñado, automatizado y enviado al mundo."</p>
      </div>
      <div class="stat-row" style="margin-top:18px">
        ${stat('+XX','Proyectos totales')}
        ${stat('3','Unidades')}
        ${stat('5','Categorías')}
        ${stat('XX','Tecnologías usadas')}
      </div>
    `)}

    ${wfSection('02','Proyecto destacado','spotlight · 1 proyecto principal', `
      <div class="spotlight">
        <div class="spotlight__media"></div>
        <div class="spotlight__body">
          <div class="row"><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><span class="tag">IA</span><span class="tag">2025</span></div>
          <div class="line title" style="width:80%;height:22px"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <div class="row"><div class="btn btn--primary" data-route="proyecto-detalle">Ver proyecto →</div></div>
        </div>
      </div>
    `)}

    ${wfSection('03','Filtros','categoría + unidad', `
      <div class="stack">
        <div class="filter-bar">
          <div class="filter-chip is-active">Todos</div>
          <div class="filter-chip">IA</div>
          <div class="filter-chip">Commerce</div>
          <div class="filter-chip">Media</div>
          <div class="filter-chip">Web</div>
          <div class="filter-chip">Innovación</div>
        </div>
        <div class="filter-bar">
          <span class="box__label">UNIDAD:</span>
          <div class="filter-chip">Todas</div>
          <div class="filter-chip">Pagurai</div>
          <div class="filter-chip">Pagureo</div>
          <div class="filter-chip">Ermitaño Pep</div>
        </div>
        <div class="row row--between">
          <p class="note note--dim">XX proyectos encontrados</p>
          <div class="row">
            <span class="box__label">ORDEN:</span>
            <div class="filter-chip is-active">Recientes</div>
            <div class="filter-chip">Por unidad</div>
          </div>
        </div>
      </div>
    `)}

    ${wfSection('04','Grid de proyectos','cards con unidad asociada', `
      <div class="grid grid--3">
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><span class="tag">IA</span>',['project.name','project.category','project.date'])}
        ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><span class="tag">Commerce</span>',['project.name','project.category'])}
        ${card('<span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span><span class="tag">Media</span>',['project.name','project.category'])}
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><span class="tag">Automatización</span>',['project.name'])}
        ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><span class="tag">Setup</span>',['project.name'])}
        ${card('<span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span><span class="tag">Producción</span>',['project.name'])}
        ${card('<span class="tag">Web</span>',['project.name'])}
        ${card('<span class="tag">Innovación</span>',['project.name'])}
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>',['project.name'])}
      </div>
      <div class="row row--end" style="margin-top:14px"><span class="btn btn--ghost">Cargar más ↓</span></div>
    `)}

    ${wfSection('05','Proyectos por unidad','hub rápido', `
      <div class="grid grid--3">
        <div class="unit-card unit-card--pagurai">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>
          <div class="line title"></div>
          <p class="note note--dim">XX proyectos · IA y automatización</p>
          <div style="margin-top:auto"><div class="btn btn--ghost" data-route="pagurai">Ver unidad →</div></div>
        </div>
        <div class="unit-card unit-card--pagureo">
          <div class="unit-card__accent"></div>
          <span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>
          <div class="line title"></div>
          <p class="note note--dim">XX proyectos · Commerce</p>
          <div style="margin-top:auto"><div class="btn btn--ghost" data-route="pagureo">Ver unidad →</div></div>
        </div>
        <div class="unit-card unit-card--ermitano">
          <div class="unit-card__accent"></div>
          <span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span>
          <div class="line title"></div>
          <p class="note note--dim">XX producciones · Media</p>
          <div style="margin-top:auto"><div class="btn btn--ghost" data-route="ermitano">Ver unidad →</div></div>
        </div>
      </div>
    `)}

    ${wfSection('CMS','Esquema CMS · Projects','campos por documento', `
      <div class="row">
        ${['project.name','project.unidad','project.categoria','project.descripcion','project.imagen','project.link','project.fecha','project.estado']
          .map(f=>`<span class="cms-pill">${f}</span>`).join(' ')}
      </div>
    `)}

    ${closeCta({
      title:'¿Tu organización necesita un proyecto así?',
      hand:'Habla con la unidad correcta del ecosistema.',
      primary:'Contacto estratégico',
      secondaries:['Ver casos','Explorar ecosistema']
    })}
  `)
);

/* ==========================================================================
   04b · PROYECTO DETALLE
   ========================================================================== */
PAGE_HTML['proyecto-detalle'] = pageShell(
  'proyecto-detalle', '07b Proyecto · detalle', '/proyectos/[slug]', 'Proyectos / Detalle',
  '04b — PROYECTO · DETALLE',
  'Mostrar el proyecto a profundidad y enrutar a la marca relacionada.',
  null,
  frame('/proyectos/[slug]', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><a data-route="proyectos">Proyectos</a><span class="sep">/</span><span>[slug del proyecto]</span></div>

    ${wfSection('01','Hero de proyecto','título + meta + unidad', `
      <div class="hero-wf">
        <div class="row"><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><span class="tag">IA</span><span class="tag">2025</span><span class="tag">Estado: activo</span></div>
        <div class="lines"><div class="line title" style="width:70%;height:30px"></div><div class="line title" style="width:50%;height:30px"></div></div>
        <p class="note">[H1] Título del proyecto</p>
        <div class="lines"><div class="line long"></div><div class="line med"></div></div>
        <div class="row"><div class="btn btn--primary btn--ext">Ver demo</div><div class="btn btn--ghost">Visitar marca</div></div>
      </div>
    `)}

    ${wfSection('02','Media destacada','imagen / video principal', `
      <div class="box box--img" style="min-height:340px"><span class="box__label">IMG / VIDEO · placeholder principal</span></div>
    `)}

    ${wfSection('03','Descripción','contexto + qué hace', `
      <div class="grid grid--2">
        <div class="stack">
          <div class="line h2"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <p class="note note--dim">Resumen ejecutivo del proyecto.</p>
        </div>
        <div class="stack">
          <span class="box__label">META</span>
          <div class="row"><span class="cms-pill">project.unidad</span><span class="cms-pill">project.fecha</span><span class="cms-pill">project.estado</span></div>
          <span class="box__label" style="margin-top:10px">EQUIPO</span>
          <div class="row">
            <div class="author"><div class="author__avatar"></div><div><div class="author__name">Lead</div><div class="author__role">Rol</div></div></div>
            <div class="author"><div class="author__avatar"></div><div><div class="author__name">Build</div><div class="author__role">Rol</div></div></div>
          </div>
        </div>
      </div>
    `)}

    ${wfSection('04','Métricas del proyecto','KPIs principales', `
      <div class="grid grid--4">
        ${kpi('XX%','Mejora', 'sobre baseline')}
        ${kpi('XX','Procesos automatizados','flujos activos')}
        ${kpi('XX h','Tiempo ahorrado','por semana')}
        ${kpi('XX','Integraciones','sistemas conectados')}
      </div>
    `)}

    ${wfSection('05','Galería','grid de capturas', `
      <div class="grid grid--3">
        <div class="box box--img" style="min-height:160px"></div>
        <div class="box box--img" style="min-height:160px"></div>
        <div class="box box--img" style="min-height:160px"></div>
      </div>
    `)}

    ${wfSection('06','Stack y tecnologías','herramientas utilizadas', `
      <div class="row">
        ${['Stack 01','Stack 02','API X','LLM Y','Framework Z','Observabilidad','Database'].map(s=>`<span class="tag">${s}</span>`).join('')}
      </div>
      <p class="note note--dim" style="margin-top:10px">↳ Definido por unidad ejecutora.</p>
    `)}

    ${wfSection('07','Marca relacionada · CTA','link a unidad y a su web', `
      <div class="ext-cta">
        <div><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>
          <div class="ext-cta__dom" style="margin-top:6px">→ <em>pagurai.com</em></div>
        </div>
        <div class="row"><div class="btn btn--ghost">Ver overview</div><div class="btn btn--primary btn--ext">visitar marca</div></div>
      </div>
    `)}

    ${wfSection('08','Proyectos relacionados','related content block', `
      <div class="grid grid--3">
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>',[])}
        ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>',[])}
        ${card('<span class="tag">IA</span>',[])}
      </div>
    `)}

    ${closeCta({
      title:'¿Querés algo similar para tu organización?',
      hand:'Habla con la unidad que lideró este proyecto.',
      primary:'Contacto estratégico',
      secondaries:['Ver más proyectos','Visitar marca']
    })}
  `)
);

/* ==========================================================================
   05 · CASOS (índice)
   ========================================================================== */
PAGE_HTML.casos = pageShell(
  'casos', '08 Casos', '/casos', 'Casos',
  '05 — CASOS',
  'Mostrar resultados, aprendizajes o validaciones.',
  'Casos = evidencia narrativa. Cada uno tiene problema · solución · sistema · resultado.',
  frame('/casos', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><span>Casos</span></div>

    ${wfSection('01','Hero de casos','intro corta', `
      <div class="hero-wf" style="min-height:200px">
        <span class="tag">CASOS · APRENDIZAJES</span>
        <div class="lines"><div class="line title" style="width:60%;height:24px"></div></div>
        <p class="note">[H1] "Sistemas en acción. Resultados que validan."</p>
      </div>
      <div class="stat-row" style="margin-top:18px">
        ${stat('+XX','Casos publicados')}
        ${stat('3','Unidades')}
        ${stat('XX%','Mejora promedio')}
        ${stat('XX','Metodologías')}
      </div>
    `)}

    ${wfSection('02','Caso destacado','feature ancho', `
      <div class="spotlight">
        <div class="spotlight__media"></div>
        <div class="spotlight__body">
          <div class="row"><span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><span class="tag">Resultado +XX%</span></div>
          <div class="line title" style="width:85%;height:22px"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <p class="note note--dim">Caso narrativo: problema → solución → sistema → resultado.</p>
          <div class="row"><div class="btn btn--primary" data-route="caso-detalle">Leer caso →</div></div>
        </div>
      </div>
    `)}

    ${wfSection('03','Filtros por unidad','tag system', `
      <div class="filter-bar">
        <div class="filter-chip is-active">Todos</div>
        <div class="filter-chip">Pagurai</div>
        <div class="filter-chip">Pagureo</div>
        <div class="filter-chip">Ermitaño Pep</div>
      </div>
    `)}

    ${wfSection('04','Grid de casos','cards detallados', `
      <div class="grid grid--2">
        ${[
          'tag--pagurai','tag--pagureo','tag--ermitano','tag--pagurai'
        ].map(t=>`
          <div class="wf-card">
            <div class="wf-card__media"></div>
            <div class="wf-card__body">
              <div class="wf-card__tags"><span class="tag ${t}"><span class="dot"></span>Unidad</span><span class="tag">Resultado +XX%</span></div>
              <div class="line title"></div>
              <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
              <div class="row"><span class="cms-pill">case.problema</span><span class="cms-pill">case.solucion</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `)}

    ${wfSection('CMS','Esquema CMS · Cases','campos por documento', `
      <div class="row">
        ${['case.name','case.unidad','case.problema','case.solucion','case.resultado','case.metodologia','case.link','case.fecha']
          .map(f=>`<span class="cms-pill">${f}</span>`).join(' ')}
      </div>
    `)}

    ${closeCta({
      title:'Cada caso es una hipótesis validada.',
      hand:'Si querés aplicar el método en tu organización, hablemos.',
      primary:'Contacto estratégico',
      secondaries:['Ver proyectos','Leer insights']
    })}
  `)
);

/* ==========================================================================
   05b · CASO DETALLE
   ========================================================================== */
PAGE_HTML['caso-detalle'] = pageShell(
  'caso-detalle', '08b Caso · detalle', '/casos/[slug]', 'Casos / Detalle',
  '05b — CASO · DETALLE',
  'Narrar problema → solución → sistema → resultado.',
  null,
  frame('/casos/[slug]', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><a data-route="casos">Casos</a><span class="sep">/</span><span>[slug del caso]</span></div>

    ${wfSection('01','Hero del caso','meta + título', `
      <div class="hero-wf">
        <div class="row"><span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><span class="tag">Commerce</span><span class="tag">2025</span></div>
        <div class="lines"><div class="line title" style="width:70%;height:30px"></div><div class="line title" style="width:55%;height:30px"></div></div>
        <p class="note">[H1] Título narrativo del caso</p>
        <p class="note note--dim">Subtítulo: hipótesis validada • metodología usada</p>
      </div>
    `)}

    ${wfSection('02','Métricas clave','KPIs del resultado', `
      <div class="grid grid--4">
        ${kpi('+XX%','Mejora principal','vs baseline')}
        ${kpi('XX d','Tiempo de implementación','start → ship')}
        ${kpi('XX','Procesos rediseñados','operativos')}
        ${kpi('XX×','ROI','medido a 6 meses')}
      </div>
    `)}

    ${wfSection('03','Estructura del caso','4 bloques narrativos', `
      <div class="grid grid--2">
        <div class="box"><span class="box__label">01 · PROBLEMA</span><div class="lines" style="margin-top:10px"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div></div>
        <div class="box"><span class="box__label">02 · SOLUCIÓN</span><div class="lines" style="margin-top:10px"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div></div>
        <div class="box"><span class="box__label">03 · SISTEMA APLICADO</span><div class="lines" style="margin-top:10px"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div></div>
        <div class="box"><span class="box__label">04 · RESULTADO</span><div class="lines" style="margin-top:10px"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div></div>
      </div>
    `)}

    ${wfSection('04','Tecnología / metodología','stack utilizado', `
      <div class="row">
        ${['Stack 01','Stack 02','Método X','Framework Y','Tool Z'].map(s=>`<span class="tag">${s}</span>`).join('')}
      </div>
    `)}

    ${wfSection('05','Voz del cliente','testimonio', `
      <div class="quote">
        <div class="quote__text">"Testimonio del cliente sobre el resultado y el proceso."</div>
        <div class="quote__attr">— Cliente · Cargo · Empresa</div>
      </div>
    `)}

    ${wfSection('06','Galería / evidencia','imágenes del caso', `
      <div class="grid grid--3">
        <div class="box box--img" style="min-height:160px"></div>
        <div class="box box--img" style="min-height:160px"></div>
        <div class="box box--img" style="min-height:160px"></div>
      </div>
    `)}

    ${wfSection('07','CTA · marca relacionada','salida', `
      <div class="ext-cta">
        <div><span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>
          <div class="ext-cta__dom" style="margin-top:6px">→ <em>pagureo.com</em></div>
        </div>
        <div class="btn btn--primary btn--ext">visitar marca</div>
      </div>
    `)}

    ${wfSection('08','Casos relacionados','related', `
      <div class="grid grid--3">
        ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>',[])}
        ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>',[])}
        ${card('<span class="tag">Commerce</span>',[])}
      </div>
    `)}

    ${closeCta({
      title:'¿Reconocés tu problema en este caso?',
      hand:'El sistema se puede aplicar — con ajustes a tu contexto.',
      primary:'Hablar con el holding',
      secondaries:['Ver más casos','Visitar marca']
    })}
  `)
);

/* ==========================================================================
   06 · INSIGHTS / LAB
   ========================================================================== */
PAGE_HTML.insights = pageShell(
  'insights', '09 Insights / Lab', '/insights', 'Insights / Lab',
  '06 — INSIGHTS / LAB',
  'Demostrar pensamiento estratégico y capacidad intelectual.',
  'Tono <strong>editorial</strong>. Categorizable, filtrable. Soporta la percepción de superioridad.',
  frame('/insights', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><span>Insights / Lab</span></div>

    ${wfSection('01','Hero editorial','tono publicación', `
      <div class="hero-wf" style="min-height:240px">
        <span class="tag">LAB · PENSAMIENTO</span>
        <div class="lines"><div class="line title" style="width:80%;height:30px"></div><div class="line title" style="width:55%;height:30px"></div></div>
        <p class="note">[H1] "Antes de ejecutar, pensamos."</p>
        <div class="lines"><div class="line long"></div><div class="line med"></div></div>
      </div>
    `)}

    ${wfSection('02','Artículo destacado','feature largo', `
      <div class="grid grid--2">
        <div class="box box--img" style="min-height:280px"></div>
        <div class="stack">
          <span class="tag">IA</span>
          <div class="line title" style="width:90%"></div>
          <div class="line title" style="width:70%"></div>
          <div class="lines"><div class="line long"></div><div class="line long"></div><div class="line med"></div></div>
          <p class="note note--dim">Autor · Fecha · Tiempo de lectura</p>
          <div class="row"><div class="btn btn--ghost">Leer artículo →</div></div>
        </div>
      </div>
    `)}

    ${wfSection('03','Categorías filtrables','filter bar', `
      <div class="filter-bar">
        <div class="filter-chip is-active">Todos</div>
        <div class="filter-chip">IA</div>
        <div class="filter-chip">Automatización</div>
        <div class="filter-chip">Branding</div>
        <div class="filter-chip">eCommerce</div>
        <div class="filter-chip">Innovación</div>
        <div class="filter-chip">Método Paguro</div>
      </div>
    `)}

    ${wfSection('04','Grid de artículos','3 columnas', `
      <div class="grid grid--3">
        ${[1,2,3,4,5,6].map(i=>`
          <div class="wf-card">
            <div class="wf-card__media"></div>
            <div class="wf-card__body">
              <div class="wf-card__tags"><span class="tag">Categoría ${i}</span></div>
              <div class="line title"></div>
              <div class="lines"><div class="line long"></div><div class="line med"></div></div>
              <p class="note note--dim">Autor · Fecha</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="row row--end" style="margin-top:14px"><span class="btn btn--ghost">Ver más artículos →</span></div>
    `)}

    ${wfSection('CMS','Esquema CMS · Insights','campos por documento', `
      <div class="row">
        ${['insight.titulo','insight.categoria','insight.autor','insight.fecha','insight.resumen','insight.contenido','insight.unidadRelacionada']
          .map(f=>`<span class="cms-pill">${f}</span>`).join(' ')}
      </div>
    `)}

    ${wfSection('05','Autores del Lab','rail de personas', `
      <div class="row">
        ${[1,2,3,4,5].map(()=>`
          <div class="author">
            <div class="author__avatar"></div>
            <div><div class="author__name">Nombre Autor</div><div class="author__role">Rol · Unidad</div></div>
          </div>
        `).join('')}
      </div>
    `)}

    ${wfSection('06','Tags populares','navegación por tema', `
      <div class="row">
        ${['IA','Automatización','Branding','eCommerce','Innovación','Método Paguro','Holding','Cultura','Producto','Estrategia','Operaciones','Tecnología']
          .map(t=>`<span class="tag">${t}</span>`).join('')}
      </div>
    `)}

    ${wfSection('07','Newsletter','suscripción al Lab', `
      <div class="newsletter">
        <div class="stack-tight">
          <span class="box__label">SUSCRIPCIÓN · LAB</span>
          <p class="note" style="color:var(--ink)">Recibe pensamiento estratégico cada mes.</p>
          <p class="note note--dim">Sin spam. Cancelable en 1 click.</p>
        </div>
        <div class="newsletter__row">
          <div class="newsletter__input"></div>
          <div class="btn btn--primary">Suscribirme</div>
        </div>
      </div>
    `)}

    ${closeCta({
      title:'¿Tenés un ángulo intelectual sobre estos temas?',
      hand:'El Lab acepta colaboraciones editoriales seleccionadas.',
      primary:'Proponer colaboración',
      secondaries:['Ver ecosistema','Contacto']
    })}
  `)
);

/* ==========================================================================
   06b · ARTÍCULO
   ========================================================================== */
PAGE_HTML.articulo = pageShell(
  'articulo', '09b Artículo · detalle', '/insights/[slug]', 'Insights / Artículo',
  '06b — ARTÍCULO · DETALLE',
  'Plantilla editorial limpia para lectura larga.',
  null,
  frame('/insights/[slug]', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><a data-route="insights">Insights</a><span class="sep">/</span><span>[slug del artículo]</span></div>

    ${wfSection('01','Cabecera editorial','meta + título', `
      <div class="hero-wf">
        <div class="row"><span class="tag">IA</span><span class="tag">Método Paguro</span><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span></div>
        <div class="lines"><div class="line title" style="width:85%;height:32px"></div><div class="line title" style="width:60%;height:32px"></div></div>
        <p class="note">[H1] Título del artículo</p>
        <div class="row">
          <div class="author"><div class="author__avatar"></div><div><div class="author__name">Nombre Autor</div><div class="author__role">Rol · Unidad</div></div></div>
          <p class="note note--dim">Fecha · 8 min de lectura</p>
        </div>
      </div>
    `)}

    ${wfSection('02','Cover','imagen principal', `
      <div class="box box--img" style="min-height:360px"></div>
    `)}

    ${wfSection('03','Cuerpo del artículo','medida cómoda · ~680px + TOC lateral', `
      <div class="grid" style="grid-template-columns: 200px 1fr; gap:32px">
        <aside class="stack stack--sm" style="position:sticky;top:80px;align-self:start">
          <span class="box__label">EN ESTA PÁGINA</span>
          <div class="stack stack--sm" style="gap:6px">
            <span class="note note--dim">· Introducción</span>
            <span class="note note--dim">· Punto clave 01</span>
            <span class="note note--dim">· Punto clave 02</span>
            <span class="note note--dim">· Conclusión</span>
          </div>
          <span class="box__label" style="margin-top:10px">COMPARTIR</span>
          <div class="row" style="gap:6px">
            <span class="tag">X</span><span class="tag">LinkedIn</span><span class="tag">Link</span>
          </div>
        </aside>
        <div style="max-width:680px">
          <div class="lines">
            <div class="line long"></div><div class="line long"></div><div class="line long"></div><div class="line med"></div>
          </div>
          <div class="line h2" style="margin-top:24px"></div>
          <div class="lines" style="margin-top:14px">
            <div class="line long"></div><div class="line long"></div><div class="line long"></div><div class="line med"></div>
          </div>
          <div class="box" style="margin-top:18px;border-left:2px solid var(--c-orange)"><p class="note">Cita destacada · pull quote</p></div>
          <div class="lines" style="margin-top:14px">
            <div class="line long"></div><div class="line long"></div><div class="line med"></div>
          </div>
        </div>
      </div>
    `)}

    ${wfSection('04','Sobre el autor','bio breve', `
      <div class="grid grid--2">
        <div class="row">
          <div class="author" style="padding:14px 16px"><div class="author__avatar" style="width:48px;height:48px"></div><div><div class="author__name">Nombre Autor</div><div class="author__role">Rol · Unidad</div></div></div>
        </div>
        <div class="stack stack--sm">
          <div class="lines"><div class="line long"></div><div class="line med"></div></div>
          <div class="row"><span class="tag">Ver perfil</span><span class="tag">Otros artículos</span></div>
        </div>
      </div>
    `)}

    ${wfSection('05','Relacionados','related content block', `
      <div class="grid grid--3">
        ${[1,2,3].map(()=>`
          <div class="wf-card"><div class="wf-card__media"></div><div class="wf-card__body">
            <div class="wf-card__tags"><span class="tag">Cat.</span></div>
            <div class="line title"></div><div class="lines"><div class="line long"></div></div>
          </div></div>
        `).join('')}
      </div>
    `)}

    ${closeCta({
      title:'¿Te interesa el método Paguro aplicado a tu industria?',
      hand:'El Lab publica mensualmente. Suscribite o conversemos.',
      primary:'Suscribirme',
      secondaries:['Ver más artículos','Contacto']
    })}
  `)
);

/* ==========================================================================
   07 · CONTACTO ESTRATÉGICO
   ========================================================================== */
PAGE_HTML.contacto = pageShell(
  'contacto', '10 Contacto estratégico', '/contacto', 'Contacto',
  '07 — CONTACTO ESTRATÉGICO',
  'Atraer partners e inversionistas sin parecer formulario genérico.',
  'No es un "contact us". Es un <strong>filtro de oportunidades</strong>.',
  frame('/contacto', `
    <div class="bc"><a data-route="">Inicio</a><span class="sep">/</span><span>Contacto estratégico</span></div>

    ${wfSection('01','Hero contacto estratégico','tono institucional', `
      <div class="hero-wf">
        <span class="tag">CONTACTO ESTRATÉGICO</span>
        <div class="lines"><div class="line title" style="width:70%;height:30px"></div><div class="line title" style="width:50%;height:30px"></div></div>
        <p class="note">[H1] "Si vienes con un sistema, conversemos."</p>
        <div class="lines"><div class="line long"></div><div class="line med"></div></div>
      </div>
    `)}

    ${wfSection('02','Tipos de colaboración','segmentación clara', `
      <div class="grid grid--3">
        <div class="box">
          <span class="box__label">01 · PARTNERSHIPS</span>
          <div class="line title" style="margin-top:10px"></div>
          <p class="note note--dim" style="margin-top:6px">Marcas que pueden integrarse al ecosistema.</p>
        </div>
        <div class="box">
          <span class="box__label">02 · INVERSIÓN</span>
          <div class="line title" style="margin-top:10px"></div>
          <p class="note note--dim" style="margin-top:6px">Capital estratégico para escalar unidades.</p>
        </div>
        <div class="box">
          <span class="box__label">03 · COLABORADORES</span>
          <div class="line title" style="margin-top:10px"></div>
          <p class="note note--dim" style="margin-top:6px">Talento estratégico que se alinea con el método.</p>
        </div>
      </div>
    `)}

    ${wfSection('03','Formulario breve','no genérico — 5 campos máximo', `
      <div class="form-mock">
        <div class="field"><label>Nombre</label><div class="input"></div></div>
        <div class="field"><label>Organización</label><div class="input"></div></div>
        <div class="field"><label>Email</label><div class="input"></div></div>
        <div class="field"><label>Tipo de conversación</label><div class="input"></div></div>
        <div class="field field--full"><label>¿De qué quieres hablar?</label><div class="input"></div></div>
        <div class="field field--full"><div class="row row--between">
          <p class="note note--dim">Respondemos en menos de 48h hábiles.</p>
          <div class="btn btn--primary">Enviar →</div>
        </div></div>
      </div>
    `)}

    ${wfSection('04','Links a marcas','salida alternativa', `
      <div class="grid grid--3">
        <div class="ext-cta"><div><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><div class="ext-cta__dom" style="margin-top:6px">→ <em>pagurai.com</em></div></div><div class="btn btn--ghost btn--ext">visitar</div></div>
        <div class="ext-cta"><div><span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span><div class="ext-cta__dom" style="margin-top:6px">→ <em>pagureo.com</em></div></div><div class="btn btn--ghost btn--ext">visitar</div></div>
        <div class="ext-cta"><div><span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span><div class="ext-cta__dom" style="margin-top:6px">→ <em>canales</em></div></div><div class="btn btn--ghost btn--ext">visitar</div></div>
      </div>
    `)}

    ${wfSection('05','Email corporativo','fallback institucional', `
      <div class="box" style="display:flex;align-items:center;justify-content:space-between">
        <div>
          <span class="box__label">EMAIL CORPORATIVO</span>
          <p class="note" style="margin-top:6px;color:var(--ink)">hola@pagurocorp.com</p>
        </div>
        <span class="btn btn--ghost">copiar</span>
      </div>
    `)}

    ${wfSection('06','Canales por tipo de conversación','rutas especializadas', `
      <div class="grid grid--3">
        <div class="box">
          <span class="box__label">PARTNERSHIPS</span>
          <p class="note" style="margin-top:8px;color:var(--ink)">partners@pagurocorp.com</p>
          <p class="note note--dim" style="margin-top:4px">↳ Marcas / integraciones</p>
        </div>
        <div class="box">
          <span class="box__label">INVERSIÓN</span>
          <p class="note" style="margin-top:8px;color:var(--ink)">invest@pagurocorp.com</p>
          <p class="note note--dim" style="margin-top:4px">↳ Solo con tesis previa</p>
        </div>
        <div class="box">
          <span class="box__label">TALENTO</span>
          <p class="note" style="margin-top:8px;color:var(--ink)">people@pagurocorp.com</p>
          <p class="note note--dim" style="margin-top:4px">↳ Roles estratégicos</p>
        </div>
      </div>
    `)}

    ${wfSection('07','Preguntas frecuentes','FAQ · filtra ruido', `
      <div class="stack">
        <div class="faq-item">
          <div class="q"><span class="label">¿Hacen servicios para terceros desde Paguro Corp?</span><span class="toggle">+</span></div>
          <div class="a"><p class="note note--dim">Las unidades operan sus propios servicios. Paguro Corp coordina partnerships estratégicos.</p></div>
        </div>
        <div class="faq-item">
          <div class="q"><span class="label">¿Puedo invertir en una unidad específica?</span><span class="toggle">+</span></div>
          <div class="a"><p class="note note--dim">La estructura permite inversión por unidad o por holding. Conversemos.</p></div>
        </div>
        <div class="faq-item">
          <div class="q"><span class="label">¿Cómo proponer una colaboración entre marcas?</span><span class="toggle">+</span></div>
          <div class="a"><p class="note note--dim">Envía propuesta a partners@. Si encaja, conecta con la unidad relevante.</p></div>
        </div>
        <div class="faq-item">
          <div class="q"><span class="label">¿Tienen oficinas físicas?</span><span class="toggle">+</span></div>
          <div class="a"><p class="note note--dim">Operación remote-first con base en Bogotá, Colombia.</p></div>
        </div>
      </div>
    `)}

    ${wfSection('08','Localización','contexto geográfico', `
      <div class="grid grid--2">
        <div class="box" style="min-height:180px;display:flex;align-items:center;justify-content:center">
          <span class="box__label">MAPA · Bogotá, Colombia (placeholder)</span>
        </div>
        <div class="stack">
          <span class="box__label">SEDE</span>
          <p class="note" style="color:var(--ink)">Bogotá, Colombia</p>
          <p class="note note--dim">Operación remote-first · horario LATAM</p>
          <div class="row">
            <span class="tag">UTC-5</span>
            <span class="tag">ES / EN</span>
            <span class="tag">Remote-first</span>
          </div>
        </div>
      </div>
    `)}

    ${closeCta({
      title:'¿Seguimos hablando?',
      hand:'Respondemos en menos de 48h hábiles. Sin formulario genérico, sin ruido.',
      primary:'Enviar mensaje',
      secondaries:['Conocer ecosistema','Leer insights']
    })}
  `)
);

/* ==========================================================================
   COMPONENTES — librería visual
   ========================================================================== */
PAGE_HTML.components = `
  <section class="page" data-page="components" data-screen-label="CMP Componentes">
    <div class="page__topbar">
      <div class="page__crumbs">FASE 01 · <span>sistema</span> · <em>Componentes reutilizables</em></div>
      <div class="page__route">/components</div>
    </div>
    <div class="page__body">
      <div class="page__title">
        <h1>COMPONENTES — biblioteca reutilizable</h1>
        <span class="id">CMP</span>
      </div>
      <p class="page__objective">Inventario de componentes para construir todas las páginas con consistencia estructural.</p>

      <div class="comp-grid">
        <div class="comp">
          <div class="comp__head"><span class="comp__name">Navbar</span><span class="comp__id">cmp.nav</span></div>
          <div class="comp__body">
            ${NAV_HTML}
            <p class="comp__desc">5 links + dropdown Ecosistema + CTA. Sticky.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Footer</span><span class="comp__id">cmp.footer</span></div>
          <div class="comp__body">
            ${FOOTER_HTML}
            <p class="comp__desc">5 columnas: brand, holding, marcas, contenido, legal.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Hero</span><span class="comp__id">cmp.hero</span></div>
          <div class="comp__body">
            <div class="hero-wf" style="min-height:200px">
              <span class="tag">CONTEXTO</span>
              <div class="line title" style="width:70%;height:24px"></div>
              <div class="lines"><div class="line long"></div><div class="line med"></div></div>
              <div class="row"><div class="btn btn--primary">CTA principal →</div><div class="btn btn--ghost">CTA secundaria</div></div>
            </div>
            <p class="comp__desc">Variantes: institucional, unidad, editorial, sección.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Section header</span><span class="comp__id">cmp.section-header</span></div>
          <div class="comp__body">
            <div class="wf-section" style="margin:0">
              <span class="wf-section__label"><span class="num">XX</span>Etiqueta de sección</span>
              <span class="wf-section__note">nota opcional →</span>
              <div class="line title"></div>
              <div class="lines" style="margin-top:8px"><div class="line long"></div><div class="line med"></div></div>
            </div>
            <p class="comp__desc">Numerada + etiqueta + nota lateral.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Ecosystem card · Unit overview card</span><span class="comp__id">cmp.unit-card</span></div>
          <div class="comp__body">
            <div class="grid grid--2">
              <div class="unit-card unit-card--pagurai">
                <div class="unit-card__accent"></div>
                <span class="tag tag--pagurai"><span class="dot"></span>UNIDAD</span>
                <div class="line title"></div>
                <div class="lines"><div class="line long"></div><div class="line med"></div></div>
                <div style="margin-top:auto"><div class="btn btn--ghost btn--ext">dominio.com</div></div>
              </div>
              <div class="unit-card unit-card--pagureo">
                <div class="unit-card__accent"></div>
                <span class="tag tag--pagureo"><span class="dot"></span>UNIDAD</span>
                <div class="line title"></div>
                <div class="lines"><div class="line long"></div><div class="line med"></div></div>
                <div style="margin-top:auto"><div class="btn btn--ghost btn--ext">dominio.com</div></div>
              </div>
            </div>
            <p class="comp__desc">Acento por unidad: azul · naranja · rosa.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Project card · Case card · Insight card</span><span class="comp__id">cmp.content-card</span></div>
          <div class="comp__body">
            <div class="grid grid--3">
              ${card('<span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>',['cms.field'])}
              ${card('<span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>',['cms.field'])}
              ${card('<span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span>',['cms.field'])}
            </div>
            <p class="comp__desc">Patrón único, variantes por tags. Reutilizable en proyectos / casos / insights.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">CTA block</span><span class="comp__id">cmp.cta</span></div>
          <div class="comp__body">
            <div class="hero-wf" style="min-height:130px">
              <div class="line title"></div>
              <div class="row"><div class="btn btn--primary">Acción primaria →</div><div class="btn btn--ghost">Acción secundaria</div></div>
            </div>
            <p class="comp__desc">Cierre de página · invita al siguiente paso.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">External website CTA</span><span class="comp__id">cmp.ext-cta</span></div>
          <div class="comp__body">
            <div class="ext-cta">
              <div><span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span><div class="ext-cta__dom" style="margin-top:6px">→ <em>pagurai.com</em></div></div>
              <div class="btn btn--primary btn--ext">visitar</div>
            </div>
            <p class="comp__desc">Salida explícita al sitio independiente de cada marca.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Filter bar</span><span class="comp__id">cmp.filter-bar</span></div>
          <div class="comp__body">
            <div class="filter-bar">
              <div class="filter-chip is-active">Todos</div>
              <div class="filter-chip">Categoría A</div>
              <div class="filter-chip">Categoría B</div>
              <div class="filter-chip">Categoría C</div>
            </div>
            <p class="comp__desc">Filtros horizontales · chips · estado activo invertido.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Tag system</span><span class="comp__id">cmp.tag</span></div>
          <div class="comp__body">
            <div class="row">
              <span class="tag">DEFAULT</span>
              <span class="tag tag--pagurai"><span class="dot"></span>Pagurai</span>
              <span class="tag tag--pagureo"><span class="dot"></span>Pagureo</span>
              <span class="tag tag--ermitano"><span class="dot"></span>Ermitaño Pep</span>
              <span class="tag">IA</span>
              <span class="tag">Commerce</span>
              <span class="tag">Media</span>
            </div>
            <p class="comp__desc">Tag base + variantes por unidad. Sistema unificado de etiquetado.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Breadcrumbs</span><span class="comp__id">cmp.breadcrumbs</span></div>
          <div class="comp__body">
            <div class="bc"><a>Inicio</a><span class="sep">/</span><a>Sección</a><span class="sep">/</span><span>Página actual</span></div>
            <p class="comp__desc">Solo en páginas de detalle: proyecto, caso, artículo, unidad.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Related content block</span><span class="comp__id">cmp.related</span></div>
          <div class="comp__body">
            <div class="grid grid--3">
              <div class="wf-card"><div class="wf-card__media"></div><div class="wf-card__body"><div class="line title"></div><div class="lines"><div class="line long"></div></div></div></div>
              <div class="wf-card"><div class="wf-card__media"></div><div class="wf-card__body"><div class="line title"></div><div class="lines"><div class="line long"></div></div></div></div>
              <div class="wf-card"><div class="wf-card__media"></div><div class="wf-card__body"><div class="line title"></div><div class="lines"><div class="line long"></div></div></div></div>
            </div>
            <p class="comp__desc">Reutiliza el patrón de card. Cierra páginas de detalle.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Method strip</span><span class="comp__id">cmp.method</span></div>
          <div class="comp__body">
            <div class="method">
              <div class="method__step"><span class="method__num">01</span><span class="method__verb">Diseñar</span><span class="box__caption">antes de ejecutar.</span></div>
              <div class="method__step"><span class="method__num">02</span><span class="method__verb">Automatizar</span><span class="box__caption">antes de contratar.</span></div>
              <div class="method__step"><span class="method__num">03</span><span class="method__verb">Optimizar</span><span class="box__caption">antes de expandir.</span></div>
              <div class="method__step"><span class="method__num">04</span><span class="method__verb">Evolucionar</span><span class="box__caption">antes de estancarse.</span></div>
            </div>
            <p class="comp__desc">Visualización del mantra. Tipografía handwritten = humano. Numeración mono = sistema.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">CMS pill</span><span class="comp__id">cmp.cms</span></div>
          <div class="comp__body">
            <div class="row">
              <span class="cms-pill">project.name</span>
              <span class="cms-pill">project.unidad</span>
              <span class="cms-pill">case.problema</span>
              <span class="cms-pill">insight.autor</span>
            </div>
            <p class="comp__desc">Marcador de campo dinámico. Solo visible en wireframes — desaparece en producción.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Manifesto · pull quote</span><span class="comp__id">cmp.manifesto</span></div>
          <div class="comp__body">
            <div class="manifesto" style="padding:22px">
              <span class="manifesto__kicker">— Mantra</span>
              <div class="manifesto__line"><span class="em">Verbo</span> conector y resto de la frase.</div>
              <div class="manifesto__line"><span class="em">Verbo</span> conector y resto de la frase.</div>
            </div>
            <p class="comp__desc">Bloque dramático para Sobre Paguro · 4 líneas del mantra.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Timeline · hitos</span><span class="comp__id">cmp.timeline</span></div>
          <div class="comp__body">
            <div class="timeline" style="grid-template-columns:repeat(4,1fr)">
              <div class="tl-step"><span class="year">AÑO 01</span><span class="label">Hito</span><span class="desc">Descripción corta.</span></div>
              <div class="tl-step"><span class="year">AÑO 01</span><span class="label">Hito</span><span class="desc">Descripción corta.</span></div>
              <div class="tl-step"><span class="year">AÑO 02</span><span class="label">Hito</span><span class="desc">Descripción corta.</span></div>
              <div class="tl-step"><span class="year">EN CURSO</span><span class="label">Hito</span><span class="desc">Descripción corta.</span></div>
            </div>
            <p class="comp__desc">Hitos horizontales con punto + año + label + caption hand.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Matrix · comparativa</span><span class="comp__id">cmp.matrix</span></div>
          <div class="comp__body">
            <table class="matrix">
              <thead><tr><th>Dim.</th><th>Col A</th><th>Col B</th><th>Col C</th></tr></thead>
              <tbody>
                <tr><td>Fila 01</td><td>valor</td><td>valor</td><td>valor</td></tr>
                <tr><td>Fila 02</td><td>valor</td><td>valor</td><td>valor</td></tr>
                <tr><td>Fila 03</td><td>valor</td><td>valor</td><td>valor</td></tr>
              </tbody>
            </table>
            <p class="comp__desc">Tabla para comparar unidades / opciones / ofertas.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">KPI · métrica</span><span class="comp__id">cmp.kpi</span></div>
          <div class="comp__body">
            <div class="grid grid--3">
              ${kpi('+XX%','Mejora','vs baseline')}
              ${kpi('XX h','Tiempo ahorrado','por semana')}
              ${kpi('XX×','ROI','medido a 6 meses')}
            </div>
            <p class="comp__desc">Valor mono grande · label uppercase · caption hand.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Stat row</span><span class="comp__id">cmp.stat-row</span></div>
          <div class="comp__body">
            <div class="stat-row">
              ${stat('+XX','Indicador')}
              ${stat('3','Indicador')}
              ${stat('XX%','Indicador')}
              ${stat('XX','Indicador')}
            </div>
            <p class="comp__desc">Resumen numérico inline · top de página.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Spotlight · feature</span><span class="comp__id">cmp.spotlight</span></div>
          <div class="comp__body">
            <div class="spotlight" style="min-height:200px">
              <div class="spotlight__media" style="min-height:200px"></div>
              <div class="spotlight__body">
                <span class="tag">DESTACADO</span>
                <div class="line title"></div>
                <div class="lines"><div class="line long"></div><div class="line med"></div></div>
                <div class="row"><div class="btn btn--primary">Ver →</div></div>
              </div>
            </div>
            <p class="comp__desc">Pieza destacada · 1 media + body grande. Para hero de índices.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Quote · cita / testimonio</span><span class="comp__id">cmp.quote</span></div>
          <div class="comp__body">
            <div class="quote">
              <div class="quote__text">"Texto de cita representativa."</div>
              <div class="quote__attr">— Atribución</div>
            </div>
            <p class="comp__desc">Cita de cliente / partner / autor. Acento rosa.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">FAQ item</span><span class="comp__id">cmp.faq</span></div>
          <div class="comp__body">
            <div class="stack">
              <div class="faq-item">
                <div class="q"><span class="label">Pregunta 01</span><span class="toggle">+</span></div>
                <div class="a"><p class="note note--dim">Respuesta breve y clara.</p></div>
              </div>
              <div class="faq-item">
                <div class="q"><span class="label">Pregunta 02</span><span class="toggle">+</span></div>
                <div class="a"><p class="note note--dim">Respuesta breve y clara.</p></div>
              </div>
            </div>
            <p class="comp__desc">Acordeón visual · filtra dudas antes del contacto.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Newsletter</span><span class="comp__id">cmp.newsletter</span></div>
          <div class="comp__body">
            <div class="newsletter">
              <div class="stack-tight">
                <span class="box__label">SUSCRIPCIÓN</span>
                <p class="note" style="color:var(--ink)">Recibe contenido mensual.</p>
              </div>
              <div class="newsletter__row">
                <div class="newsletter__input"></div>
                <div class="btn btn--primary">Suscribirme</div>
              </div>
            </div>
            <p class="comp__desc">Para Insights / Lab · captura email.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Author · persona chip</span><span class="comp__id">cmp.author</span></div>
          <div class="comp__body">
            <div class="row">
              <div class="author"><div class="author__avatar"></div><div><div class="author__name">Nombre Autor</div><div class="author__role">Rol · Unidad</div></div></div>
              <div class="author"><div class="author__avatar"></div><div><div class="author__name">Otro Autor</div><div class="author__role">Rol · Unidad</div></div></div>
            </div>
            <p class="comp__desc">Para artículos · proyectos · casos. Avatar + nombre + rol.</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Page nav · anchors</span><span class="comp__id">cmp.page-nav</span></div>
          <div class="comp__body">
            <nav class="page-nav" style="position:static">
              <a><span class="num">01</span>Sección</a>
              <a><span class="num">02</span>Sección</a>
              <a><span class="num">03</span>Sección</a>
              <a><span class="num">04</span>Sección</a>
            </nav>
            <p class="comp__desc">Sticky horizontal · solo en páginas largas (Sobre, unidades).</p>
          </div>
        </div>

        <div class="comp">
          <div class="comp__head"><span class="comp__name">Close CTA · cierre unificado</span><span class="comp__id">cmp.close-cta</span></div>
          <div class="comp__body">
            ${closeCta({
              title:'Pregunta o invitación contextual.',
              hand:'Refuerzo handwritten que humaniza el cierre.',
              primary:'Acción principal',
              secondaries:['Alternativa','Alternativa']
            })}
            <p class="comp__desc">Patrón unificado de cierre · presente en todas las páginas. Asegura consistencia narrativa.</p>
          </div>
        </div>

      </div>

      <div class="callout" style="margin-top:32px">
        <strong>Siguiente fase →</strong> mediana fidelidad con copywriting estratégico, sistema tipográfico y paleta aplicada con disciplina (negro institucional como base, color por unidad solo como acento).
      </div>
    </div>
  </section>
`;