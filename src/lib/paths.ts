const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function withBase(path = ''): string {
  if (!path || path === '/') return base;
  if (path.startsWith('#')) return `${base}${path}`;
  return `${base}${path.replace(/^\//, '')}`;
}
