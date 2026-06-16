import PageBehavior from '@/components/PageBehavior';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  title: 'Privacidad',
};

const sections = [
  {
    titleEs: 'Datos que recopilamos',
    titleEn: 'Data we collect',
    bodyEs: 'Cuando usas el formulario de contacto podemos recibir nombre, apellido, correo, telefono, website y nombre de empresa. Tambien podemos recibir datos tecnicos basicos del navegador para seguridad y funcionamiento del sitio.',
    bodyEn: 'When you use the contact form, we may receive first name, last name, email, phone, website and company name. We may also receive basic browser technical data for site security and operation.',
  },
  {
    titleEs: 'Uso de la informacion',
    titleEn: 'How we use information',
    bodyEs: 'Usamos la informacion para responder solicitudes, evaluar oportunidades comerciales, coordinar reuniones y mejorar la experiencia del sitio. No vendemos datos personales.',
    bodyEn: 'We use information to answer requests, evaluate business opportunities, coordinate meetings and improve the site experience. We do not sell personal data.',
  },
  {
    titleEs: 'Conservacion',
    titleEn: 'Retention',
    bodyEs: 'Conservamos la informacion solo durante el tiempo necesario para gestionar la relacion, cumplir obligaciones legales o mantener registros operativos razonables.',
    bodyEn: 'We keep information only for as long as needed to manage the relationship, comply with legal obligations or maintain reasonable operational records.',
  },
  {
    titleEs: 'Derechos del usuario',
    titleEn: 'User rights',
    bodyEs: 'Puedes solicitar acceso, correccion, actualizacion o eliminacion de tus datos escribiendo a hola@pagurocorp.com.',
    bodyEn: 'You can request access, correction, update or deletion of your data by writing to hola@pagurocorp.com.',
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageBehavior screenLabel="07 Privacidad" />
      <SiteHeader />

      <main>
        <section className="sec sec--hero sec--aurora">
          <div className="canvas canvas--narrow">
            <div className="hero__content">
              <div className="hero__meta">
                <span className="eyebrow"><span className="dot"></span>LEGAL</span>
              </div>
              <h1 className="display" data-copy-es="Politica de privacidad." data-copy-en="Privacy policy.">
                Politica de privacidad.
              </h1>
              <p
                className="lede hero__lede"
                data-copy-es="Esta pagina explica como Corporacion Paguro SAS trata la informacion enviada a traves de este sitio."
                data-copy-en="This page explains how Corporacion Paguro SAS handles information submitted through this site."
              >
                Esta pagina explica como Corporacion Paguro SAS trata la informacion enviada a traves de este sitio.
              </p>
            </div>
          </div>
        </section>

        <section className="sec sec--with-divider">
          <div className="canvas canvas--narrow">
            <div className="method-grid" style={{ gridTemplateColumns: '1fr' }}>
              {sections.map((section, index) => (
                <div className="method-step" key={section.titleEs}>
                  <span className="method-step__num">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="method-step__verb" data-copy-es={section.titleEs} data-copy-en={section.titleEn}>
                    {section.titleEs}
                  </h2>
                  <p className="method-step__desc" data-copy-es={section.bodyEs} data-copy-en={section.bodyEn}>
                    {section.bodyEs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
