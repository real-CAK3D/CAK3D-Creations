import { readFileSync, existsSync } from 'node:fs';

const required = ['index.html', 'styles.css', 'script.js', 'README.md', 'vercel.json', 'docs/projects.md', 'docs/stripe-vercel-notes.md'];
const missing = required.filter((file) => !existsSync(file));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(', ')}`);
  process.exit(1);
}

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('styles.css', 'utf8');
const js = readFileSync('script.js', 'utf8');
const combined = `${html}\n${css}\n${js}`;

const needles = [
  'CAK3D-Creations',
  'Map-Pi',
  'Home Inventory',
  'Ibby Auto Works',
  'MyPetID',
  'Raspberry Pi',
  'Stripe',
  'Vercel'
];
for (const needle of needles) {
  if (!combined.includes(needle)) {
    console.error(`Missing expected site text: ${needle}`);
    process.exit(1);
  }
}

const forbidden = [
  'sk_live_',
  'sk_test_',
  'ghp_',
  'sb_secret_',
  'service_role'
];
for (const bad of forbidden) {
  if (combined.includes(bad)) {
    console.error(`Forbidden secret-like token found: ${bad}`);
    process.exit(1);
  }
}

console.log('PASS CAK3D-Creations static site validation');
