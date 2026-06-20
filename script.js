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
    summary: 'Simple telemetry and status dashboards for The Garden, NukeBox, Hack-Safe, theBAK3RY, HP laptop, and local services.',
    points: ['Fast device awareness', 'Service previews and ports', 'Low-clutter workshop control']
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
    points: ['theBAK3RY + Hack-Safe', 'Field-ready experiments', 'Documented as reusable builds']
  },
  {
    name: 'DayZ / Creative Tech Roots',
    type: 'Original lane',
    accent: '#dfff6b',
    summary: 'The creative roots: DayZ server work, Discord communities, CAD/digital design, projection/music experiments, and mechanic-brain problem solving.',
    points: ['Game/server editing', 'Creative visuals and CAD', 'DIY systems thinking']
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
