const projects = [
  {
    name: 'Map-Pi Trail System',
    type: 'Field app',
    accent: '#8dff6b',
    featured: true,
    summary: 'A trail-planning and hike-control app shaped around GPX/GeoJSON routes, offline field kit thinking, weather status, markers, and Raspberry Pi future deployment.',
    points: ['Plan → Prep → Hike → Review flow', 'PWA/offline trail-file direction', 'Built for real trail use, not just demo maps']
  },
  {
    name: 'Home Inventory',
    type: 'NFC family app',
    accent: '#58f3c2',
    featured: true,
    summary: 'A phone-first home inventory system with NFC tag routes, shelf/box hierarchy, Supabase-backed state, Vercel deployment, and rollback backups.',
    points: ['Item, shelf, level, and box scan routes', 'Family profiles and safe settings', 'Cloud state with local verification workflows']
  },
  {
    name: 'Ibby Auto Works',
    type: 'Business portal',
    accent: '#f9b44e',
    summary: 'A service-business app direction for auto work: customer portal, admin tooling, payments planning, Supabase data, and practical workflow automation.',
    points: ['Customer/admin app shell', 'Stripe/Supabase payment boundary', 'Built around real shop operations']
  },
  {
    name: 'MyPetID',
    type: 'Pet safety platform',
    accent: '#ff7ab6',
    summary: 'A pet-profile and NFC scan system with public finder pages, owner dashboards, medical/care records, walks, training, play logs, and Dog Pack social concepts.',
    points: ['Public profile + scan gate', 'Pet care and walk dashboards', 'Admin/user mode planning']
  },
  {
    name: 'Device Dashboards',
    type: 'Telemetry',
    accent: '#8ba4ff',
    summary: 'Simple telemetry and status dashboards for The Garden, NukeBox, Hack-Safe, theBAK3RY, HP laptop, local previews, ports, uptime, and service checks.',
    points: ['Fast device awareness', 'Service previews and ports', 'Low-clutter workshop control']
  },
  {
    name: 'Hermes / Agent Command Center',
    type: 'AI workflow',
    accent: '#76f7ff',
    summary: 'A multi-agent Garden setup where specialist profiles help coordinate devices, Discord lanes, apps, smart-home checks, and project handoffs.',
    points: ['Ganja, Maple, Disco Stu, Homie, BAK3R, CYPH3R and more', 'Profile-scoped tools and safer routing', 'Discord-first operations desk']
  },
  {
    name: 'Smart Home + Homie',
    type: 'Home automation',
    accent: '#ffd166',
    summary: 'Home Assistant experiments tied into the workshop: lights, device states, household automation ideas, and smart-home specialist support.',
    points: ['Home Assistant control path', 'Device and room awareness', 'Automation-ready project lane']
  },
  {
    name: 'Discord Bots & Agent Lanes',
    type: 'Automation',
    accent: '#b88cff',
    summary: 'Discord bots, private command channels, specialist lanes, and bot-assisted coordination for projects, devices, and server/community operations.',
    points: ['CAK3DBot heritage', 'Maple / Disco Stu style lanes', 'Practical server organization']
  },
  {
    name: 'Raspberry Pi Workshop',
    type: 'Hardware-adjacent',
    accent: '#ff6b6b',
    summary: 'A growing set of Raspberry Pi projects: Pi 5 systems, CrowPi Hack-Safe, future P4wnagotchi work, field devices, kiosks, and local servers.',
    points: ['theBAK3RY + Hack-Safe', 'Pi Zero 2 WH experiments', 'Documented as reusable builds']
  },
  {
    name: 'NukeBox / Local App Lab',
    type: 'Windows + web lab',
    accent: '#7cc9ff',
    summary: 'The GMKTec NukeBox acts as a local app bench for Windows-hosted previews, Next/Vite projects, Discord workflows, and heavier creative tools.',
    points: ['Local preview servers', 'Tailscale-connected app testing', 'Bridge between desktop tools and cloud deploys']
  },
  {
    name: 'Knowledge + Wiki Systems',
    type: 'Docs and memory',
    accent: '#caff8a',
    summary: 'Project notes, GitHub docs, wiki-style handoffs, Obsidian/Supabase knowledge-base ideas, and reusable build procedures so the work does not disappear after one session.',
    points: ['Project catalogs and docs', 'Reusable workflows', 'Low-clutter memory for active builds']
  },
  {
    name: 'DayZ / Creative Tech Roots',
    type: 'Original lane',
    accent: '#dfff6b',
    summary: 'The creative roots: DayZ server work, Discord communities, CAD/digital design, projection/music experiments, and mechanic-brain problem solving.',
    points: ['Game/server editing', 'Creative visuals, music and CAD', 'DIY systems thinking']
  }
];

const grid = document.querySelector('#projectGrid');
projects.forEach((project) => {
  const card = document.createElement('article');
  card.className = `project-card${project.featured ? ' featured' : ''}`;
  card.style.setProperty('--accent', project.accent);
  card.innerHTML = `
    <span class="tag">${project.type}</span>
    <h3>${project.name}</h3>
    <p>${project.summary}</p>
    <ul>${project.points.map((point) => `<li>${point}</li>`).join('')}</ul>
  `;
  grid.appendChild(card);
});

document.querySelector('#year').textContent = new Date().getFullYear();
