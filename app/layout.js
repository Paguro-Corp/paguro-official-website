import './globals.css';

export const metadata = {
  title: {
    default: 'Paguro Corp',
    template: '%s | Paguro Corp',
  },
  description:
    'Corporación Paguro SAS: arquitectura empresarial adaptativa, automatización e inteligencia sistémica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="density-regular accent-orange">{children}</body>
    </html>
  );
}
