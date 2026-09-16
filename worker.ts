/**
 * Phase 1B canonical host enforcement.
 * One-hop 301: http/www → https://apex + trailing-slash path + query.
 */
const APEX = "saintjohnsshoreexcursions.com";

type AssetEnv = { ASSETS: { fetch: (request: Request) => Promise<Response> } };

function canonicalPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  if (/\.[a-zA-Z0-9]{1,8}$/.test(pathname)) return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export default {
  async fetch(request: Request, env: AssetEnv): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const isApex = host === APEX;
    const isWww = host === `www.${APEX}`;
    if ((isApex || isWww) && (url.protocol === "http:" || isWww)) {
      const dest = new URL(
        canonicalPath(url.pathname) + url.search,
        `https://${APEX}`,
      );
      return Response.redirect(dest.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
