import ContactSection from '@/components/ContactSection';
import PageBehavior from '@/components/PageBehavior';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  title: 'Contacto',
};

export default function ContactoPage() {
  return (
    <>
      <PageBehavior screenLabel="06 Contacto" />
      <SiteHeader current="contacto" />

      <main>
        <section className="sec sec--hero sec--aurora">
          <div className="canvas">
            <div className="hero__layout">
              <div className="hero__content">
                <div className="hero__meta">
                  <span className="eyebrow">
                    <span className="dot"></span>
                    <span data-copy-es="CONTACTO · PRIMER PASO" data-copy-en="CONTACT · FIRST STEP">
                      CONTACTO · PRIMER PASO
                    </span>
                  </span>
                </div>
                <h1 className="display">
                  <span data-copy-es="Hablemos del" data-copy-en="Let's talk about">
                    Hablemos del
                  </span>
                  <br />
                  <span className="em" data-copy-es="proyecto." data-copy-en="the project.">
                    proyecto.
                  </span>
                </h1>
                <p
                  className="lede hero__lede"
                  data-copy-es="Usa este formulario para iniciar una conversacion con Corporacion Paguro SAS. Revisamos cada solicitud y respondemos con el siguiente paso adecuado."
                  data-copy-en="Use this form to start a conversation with Corporacion Paguro SAS. We review each request and respond with the right next step."
                >
                  Usa este formulario para iniciar una conversacion con Corporacion Paguro SAS. Revisamos cada solicitud y
                  respondemos con el siguiente paso adecuado.
                </p>
              </div>
              <div className="diagram">
                <svg viewBox="0 0 400 400" fill="none">
                  <rect x="74" y="86" width="252" height="212" rx="10" fill="#0a0b0d" stroke="#3d4452" />
                  <path d="M112 142h176M112 184h128M112 226h158" stroke="#ee7224" strokeOpacity=".7" strokeWidth="9" />
                  <circle cx="300" cy="104" r="24" fill="#0360ab" fillOpacity=".18" stroke="#0360ab" />
                  <circle cx="104" cy="300" r="24" fill="#e72175" fillOpacity=".16" stroke="#e72175" />
                  <text x="200" y="336" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#7e848f">
                    CONTACT FLOW
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
