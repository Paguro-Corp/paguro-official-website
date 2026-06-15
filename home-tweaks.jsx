// home-tweaks.jsx — Tweaks panel para las 3 páginas medium-fi

const HOME_TWEAKS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "glow": 1,
  "accent": "orange",
  "showGrid": false,
  "boldHero": false,
  "showBadge": true
}/*EDITMODE-END*/;

function HomeTweaks() {
  const [t, setTweak] = useTweaks(HOME_TWEAKS);

  React.useEffect(() => {
    const body = document.body;
    if (!body) return;

    // Density
    body.classList.remove('density-cozy', 'density-regular', 'density-spacious');
    body.classList.add('density-' + t.density);

    // Accent
    body.classList.remove('accent-orange', 'accent-blue', 'accent-pink');
    body.classList.add('accent-' + t.accent);

    // Glow
    document.documentElement.style.setProperty('--glow-mult', t.glow);

    // Grid overlay
    body.classList.toggle('grid-on', !!t.showGrid);

    // Hero bold
    document.querySelectorAll('.display').forEach(el => {
      el.style.fontWeight = t.boldHero ? '600' : '400';
    });

    // Phase badge visibility (if any)
    document.querySelectorAll('.phase-badge').forEach(el => {
      el.style.display = t.showBadge ? 'inline-flex' : 'none';
    });
  }, [t]);

  return (
    <TweaksPanel title="Paguro · medium-fi">
      <TweakSection label="Layout" />
      <TweakRadio
        label="Densidad"
        value={t.density}
        options={['cozy', 'regular', 'spacious']}
        onChange={(v) => setTweak('density', v)}
      />
      <TweakToggle
        label="Grid overlay (12 cols)"
        value={t.showGrid}
        onChange={(v) => setTweak('showGrid', v)}
      />

      <TweakSection label="Acento" />
      <TweakRadio
        label="Color institucional"
        value={t.accent}
        options={['orange', 'blue', 'pink']}
        onChange={(v) => setTweak('accent', v)}
      />
      <TweakSlider
        label="Intensidad de glow"
        value={t.glow}
        min={0}
        max={2}
        step={0.1}
        onChange={(v) => setTweak('glow', v)}
      />

      <TweakSection label="Tipografía" />
      <TweakToggle
        label="Hero más bold"
        value={t.boldHero}
        onChange={(v) => setTweak('boldHero', v)}
      />

      <TweakSection label="Vista" />
      <TweakToggle
        label="Badge de fase"
        value={t.showBadge}
        onChange={(v) => setTweak('showBadge', v)}
      />
    </TweaksPanel>
  );
}

(function mount(){
  const root = document.createElement('div');
  root.id = 'tweaks-root';
  document.body.appendChild(root);
  ReactDOM.createRoot(root).render(<HomeTweaks />);
})();
