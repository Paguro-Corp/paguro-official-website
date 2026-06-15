/* ==========================================================================
   ROUTER — navegación hash-based entre wireframes
   ========================================================================== */

(function(){
  // Inject all pages
  const mount = document.getElementById('page-mount');
  const order = ['sobre','ecosistema','pagurai','pagureo','ermitano','proyectos','proyecto-detalle','casos','caso-detalle','insights','articulo','contacto','components'];
  mount.innerHTML = order.map(k => PAGE_HTML[k] || '').join('');

  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.nav-link, .sm-card, .sm-sub a');

  function go(route){
    if(!route) route = 'sitemap';
    pages.forEach(p => p.classList.toggle('is-active', p.dataset.page === route));
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('is-active', a.dataset.route === route);
    });
    if(location.hash.replace('#','') !== route){
      history.replaceState(null, '', '#' + route);
    }
    window.scrollTo(0, 0);
  }

  // Click handlers
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-route]');
    if(link){
      e.preventDefault();
      go(link.dataset.route);
    }
  });

  // Hash routing
  window.addEventListener('hashchange', () => go(location.hash.replace('#','')));

  // Toolbar toggles
  document.querySelectorAll('.toolbar [data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const kind = btn.dataset.toggle;
      btn.classList.toggle('is-on');
      if(kind === 'chrome'){
        document.body.classList.toggle('hide-chrome', !btn.classList.contains('is-on'));
      }
      if(kind === 'annotations'){
        document.body.classList.toggle('hide-annotations', !btn.classList.contains('is-on'));
      }
    });
  });

  // Initial route
  go(location.hash.replace('#','') || 'sitemap');
})();
