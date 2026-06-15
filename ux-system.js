/* ==========================================================================
   UX-SYSTEM.JS — scroll spy en sidebar
   ========================================================================== */

(function(){
  const items = document.querySelectorAll('.nav-item[href^="#"]');
  const sections = [...items].map(i => {
    const id = i.getAttribute('href').slice(1);
    return { id, el: document.getElementById(id), link: i };
  }).filter(s => s.el);

  function setActive(){
    const y = window.scrollY + 120;
    let current = sections[0];
    for(const s of sections){
      if(s.el.offsetTop <= y) current = s;
    }
    items.forEach(i => i.classList.remove('is-active'));
    if(current) current.link.classList.add('is-active');
  }

  window.addEventListener('scroll', setActive, { passive: true });
  window.addEventListener('resize', setActive);
  setActive();

  // Smooth scroll on anchor clicks
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    }
  });
})();
