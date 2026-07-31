/**
 * Resolves static asset paths reliably across subdomains, subpaths, and root domains.
 * Ensures relative path resolution works on any hosting environment.
 */
export function getAssetUrl(relativePath?: string): string {
  if (!relativePath) return '';

  // If it's an absolute external URL or data URI, return as is
  if (/^(https?:|data:|\/\/)/i.test(relativePath)) {
    return relativePath;
  }

  // Remove leading ./ or /
  let cleanPath = relativePath;
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(2);
  } else if (cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : base + '/';

  return `${normalizedBase}${cleanPath}`;
}
