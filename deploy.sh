#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f node_modules/.bin/wrangler ]]; then npm install; fi
echo "Building St. John's Shore Excursions..."
npm run build
echo "Deploying to Cloudflare..."
npx wrangler deploy
echo ""
echo "Done. If saintjohnsshoreexcursions.com still shows 404:"
echo "  Workers & Pages → saint-johns-shore-excursions → Settings → Domains"
echo "  → Add saintjohnsshoreexcursions.com and www.saintjohnsshoreexcursions.com"
