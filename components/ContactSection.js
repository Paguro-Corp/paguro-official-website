export default function ContactSection() {
  return (
    <section className="sec sec--contact sec--with-divider" id="contacto">
      <div className="canvas">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="contact-intro__kicker" data-i18n="contact-kicker">
              CONTACTO · PRIMER PASO
            </p>
            <h2 className="contact-intro__title" data-i18n="contact-title">
              Hablemos del proyecto.
            </h2>
            <p className="contact-intro__body" data-i18n="contact-body">
              Si tienes una idea, un reto empresarial o quieres saber como opera una arquitectura adaptativa, escribenos.
              Respondemos en 24-48h.
            </p>
            <div className="contact-meta">
              <div className="contact-meta-item">
                <span className="contact-meta-item__label" data-i18n="contact-loc-label">
                  Sede
                </span>
                <span className="contact-meta-item__val">Bogota, Colombia</span>
              </div>
              <div className="contact-meta-item">
                <span className="contact-meta-item__label" data-i18n="contact-email-label">
                  Email
                </span>
                <span className="contact-meta-item__val">hola@pagurocorp.com</span>
              </div>
            </div>
          </div>

          <form className="contact-form" id="contact-form" noValidate>
            <div className="form-row--2">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-nombre">
                  <span data-i18n="field-nombre">Nombre</span>
                  <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="cf-nombre" name="nombre" required autoComplete="given-name" data-i18n-ph="ph-nombre" placeholder="Tu nombre" />
                <span className="form-error-msg"></span>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-apellido">
                  <span data-i18n="field-apellido">Apellido</span>
                  <span className="req">*</span>
                </label>
                <input className="form-input" type="text" id="cf-apellido" name="apellido" required autoComplete="family-name" data-i18n-ph="ph-apellido" placeholder="Tu apellido" />
                <span className="form-error-msg"></span>
              </div>
            </div>

            <div className="form-row--2">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-email">
                  Email<span className="req">*</span>
                </label>
                <input className="form-input" type="email" id="cf-email" name="email" required autoComplete="email" data-i18n-ph="ph-email" placeholder="correo@ejemplo.com" />
                <span className="form-error-msg"></span>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-telefono">
                  <span data-i18n="field-telefono">Telefono</span>
                  <span className="req">*</span>
                </label>
                <input className="form-input" type="tel" id="cf-telefono" name="telefono" required autoComplete="tel" data-i18n-ph="ph-telefono" placeholder="+57 300 000 0000" />
                <span className="form-error-msg"></span>
              </div>
            </div>

            <div className="form-row--2">
              <div className="form-group">
                <label className="form-label" htmlFor="cf-website">
                  <span data-i18n="field-website">Website</span>
                  <span className="opt" data-i18n="opt">
                    (opcional)
                  </span>
                </label>
                <input className="form-input" type="url" id="cf-website" name="website" autoComplete="url" data-i18n-ph="ph-website" placeholder="https://tuempresa.com" />
                <span className="form-error-msg"></span>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-empresa">
                  <span data-i18n="field-empresa">Nombre empresa</span>
                  <span className="opt" data-i18n="opt">
                    (opcional)
                  </span>
                </label>
                <input className="form-input" type="text" id="cf-empresa" name="empresa" autoComplete="organization" data-i18n-ph="ph-empresa" placeholder="Tu empresa" />
                <span className="form-error-msg"></span>
              </div>
            </div>

            <div className="form-footer">
              <p className="form-req-note">
                <span className="req">*</span>&nbsp;<span data-i18n="req-note">Campos obligatorios</span>
              </p>
              <button className="btn btn--accent form-submit" type="submit">
                <span data-i18n="submit-btn">Enviar contacto</span>&nbsp;<span className="arr">→</span>
              </button>
            </div>

            <div className="form-success">
              <em className="form-success__ico">✓</em>
              <p data-i18n="success-msg">Mensaje enviado. Te contactamos pronto.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
