import PageBehavior from '@/components/PageBehavior';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata = {
  title: 'Terminos',
};

const sections = [
  {
    titleEs: 'Uso del sitio',
    titleEn: 'Site use',
    bodyEs: 'El contenido de este sitio es informativo e institucional. Al navegarlo aceptas usarlo de forma licita y sin afectar su funcionamiento.',
    bodyEn: 'The content on this site is informational and institutional. By browsing it, you agree to use it lawfully and without affecting its operation.',
  },
  {
    titleEs: 'Propiedad intelectual',
    titleEn: 'Intellectual property',
    bodyEs: 'La marca Paguro, textos, estructura visual, identidad, logos y contenido pertenecen a Corporacion Paguro SAS o a sus respectivos titulares.',
    bodyEn: 'The Paguro brand, copy, visual structure, identity, logos and content belong to Corporacion Paguro SAS or their respective rights holders.',
  },
  {
    titleEs: 'Contenido y disponibilidad',
    titleEn: 'Content and availability',
    bodyEs: 'Podemos actualizar, corregir o retirar contenido del sitio sin aviso previo. Hacemos esfuerzos razonables para mantener informacion clara y actualizada.',
    bodyEn: 'We may update, correct or remove site content without prior notice. We make reasonable efforts to keep information clear and current.',
  },
  {
    titleEs: 'Contacto comercial',
    titleEn: 'Commercial contact',
    bodyEs: 'El envio de un formulario no crea una relacion contractual automatica. Toda colaboracion, servicio o partnership requiere validacion y acuerdo posterior.',
    bodyEn: 'Submitting a form does not automatically create a contractual relationship. Any collaboration, service or partnership requires later validation and agreement.',
  },
];

export default function TerminosPage() {
  return (
    <>
      <PageBehavior screenLabel="08 Terminos" />
      <SiteHeader />

      <main>
        <section className="sec sec--hero sec--aurora">
          <div className="canvas canvas--narrow">
            <div className="hero__content">
              <div className="hero__meta">
                <span className="eyebrow"><span className="dot"></span>LEGAL</span>
              </div>
              <h1 className="display" data-copy-es="Terminos y condiciones." data-copy-en="Terms and conditions.">
                Terminos y condiciones.
              </h1>
              <p
                className="lede hero__lede"
                data-copy-es="Reglas basicas para el uso del sitio web de Corporacion Paguro SAS."
                data-copy-en="Basic rules for using the Corporacion Paguro SAS website."
              >
                Reglas basicas para el uso del sitio web de Corporacion Paguro SAS.
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
