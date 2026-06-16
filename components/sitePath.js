const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function sitePath(path) {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export function withBasePathMarkup(markup) {
  if (!BASE_PATH) return markup;
  return markup.replace(/\b(href|src)="\/(?!\/)/g, `$1="${BASE_PATH}/`);
}
