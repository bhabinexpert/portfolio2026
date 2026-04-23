export const personal = {
  name: 'Bhabin Dulal',
  username: 'bhabinexpert',
  role: 'Full Stack Developer',
  tagline: 'Building scalable apps with clean code & thoughtful design',
  bio: `Dedicated BSc Computing student at Itahari International College (London Metropolitan University) with a strong academic foundation and a keen interest in software development. Currently focused on Java Full-Stack development while strengthening my MERN stack experience. I enjoy problem solving, research, and continuous learning — aiming to grow into a capable full-stack developer and computing professional.`,
  location: 'Damak-2, Jhapa, Nepal',
  email: 'bhabindulal35@gmail.com',
  phone: '+977 9824009974',
  availability: 'Open to opportunities',
  cv: '/Bhabin Dulal CV.pdf',
}

export const socials = {
  github: 'https://github.com/bhabinexpert',
  linkedin: 'https://www.linkedin.com/in/bhabindulal/',
  instagram: 'https://www.instagram.com/vabin__/',
  whatsapp: 'https://wa.me/9779824009974?text=Hello%20I%20am%20interested%20to%20work%20with%20you!!',
  portfolio: 'https://www.bhabindulal.com.np/',
}

export const skills = [
  // Frontend
  { name: 'HTML / CSS', level: 90, category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', level: 70, category: 'frontend', icon: '⚡' },
  { name: 'React', level: 65, category: 'frontend', icon: '⚛️' },
  { name: 'Tailwind CSS', level: 75, category: 'frontend', icon: '🌊' },
  { name: 'TypeScript', level: 55, category: 'frontend', icon: '📘' },
  // Backend
  { name: 'Node.js', level: 70, category: 'backend', icon: '🟢' },
  { name: 'Express', level: 65, category: 'backend', icon: '🚂' },
  { name: 'MongoDB', level: 70, category: 'backend', icon: '🍃' },
  { name: 'PostgreSQL', level: 60, category: 'backend', icon: '🐘' },
  { name: 'MySQL', level: 55, category: 'backend', icon: '🗄️' },
  { name: 'Python', level: 65, category: 'backend', icon: '🐍' },
  { name: 'Java', level: 55, category: 'backend', icon: '☕' },
  { name: 'REST APIs', level: 70, category: 'backend', icon: '🔌' },
  // Data & Analytics
  { name: 'NumPy', level: 60, category: 'data', icon: '🔢' },
  { name: 'Pandas', level: 65, category: 'data', icon: '🐼' },
  { name: 'Matplotlib', level: 60, category: 'data', icon: '📊' },
  { name: 'Power BI', level: 55, category: 'data', icon: '📈' },
  // Design
  { name: 'Figma', level: 70, category: 'design', icon: '🎭' },
  { name: 'Canva', level: 80, category: 'design', icon: '🖌️' },
  // AI & Agents
  { name: 'Claude / Anthropic', level: 75, category: 'ai', icon: '🤖' },
  { name: 'ChatGPT / OpenAI', level: 75, category: 'ai', icon: '🧠' },
  { name: 'Gemini', level: 65, category: 'ai', icon: '✨' },
  { name: 'AI Agent Design', level: 60, category: 'ai', icon: '🕹️' },
  { name: 'Prompt Engineering', level: 70, category: 'ai', icon: '💬' },
  // Tools
  { name: 'Git / GitHub', level: 90, category: 'tools', icon: '🔧' },
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
  { name: 'IntelliJ IDEA', level: 65, category: 'tools', icon: '🧩' },
  { name: 'Postman', level: 80, category: 'tools', icon: '📮' },
  { name: 'AWS', level: 45, category: 'tools', icon: '☁️' },
]

// preview.type: 'browser' | 'terminal' | 'dashboard' | 'mobile'
export const projects = [
  {
    id: 1,
    title: 'NagarSewa',
    subtitle: 'Civic Engagement Platform',
    year: '2025',
    description:
      'Digital civic platform for Nepalese municipalities — citizens report issues, join community campaigns, and interact with local government through a bilingual three-tier admin system (Super Admin, Ward Admin, User) with KYC and real-time notifications.',
    tech: ['React 18', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Vite'],
    github: 'https://github.com/bhabinexpert/NagarSewa',
    live: 'https://nagar-sewa.netlify.app/',
    color: '#f59e0b',
    featured: true,
    preview: { type: 'browser', accent: '#f59e0b', emoji: '🏛️', lines: ['Issue Report Filed', 'Ward 3 — Damak Municipality', 'Status: Under Review ✓', 'Civic Campaign Active'] },
  },
  {
    id: 2,
    title: 'Election Result 2082',
    subtitle: 'Nepal Election Data Dashboard',
    year: '2026',
    description:
      'Interactive full-stack dashboard for Nepal\'s 2082 election results — search & filter candidates by province, district, party and gender, view profiles with Wikipedia photos, and visualize voting patterns through rich charts.',
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Tailwind CSS'],
    github: 'https://github.com/bhabinexpert/Election-Result-2082',
    live: 'https://electionresult-2082.netlify.app/',
    color: '#ef4444',
    featured: true,
    preview: { type: 'dashboard', accent: '#ef4444', emoji: '🗳️', lines: ['Province 1 — 42 Candidates', 'Total Votes: 1,284,320', 'Party Distribution Chart', 'Filter by District →'] },
  },
  {
    id: 3,
    title: 'NoteBook',
    subtitle: 'Open-Source Smart Notebook',
    year: '2025',
    description:
      'MERN-stack digital notebook with full CRUD — create, edit, and delete notes through a clean REST API backed by MongoDB Atlas. Shared publicly as an open-source learning project with Tailwind + DaisyUI interface.',
    tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'DaisyUI'],
    github: 'https://github.com/bhabinexpert/NoteBook',
    live: 'https://notelekhum.netlify.app/',
    color: '#8b5cf6',
    featured: true,
    preview: { type: 'browser', accent: '#8b5cf6', emoji: '📓', lines: ['My Notes (12)', '+ New Note', 'JavaScript Revision ✎', 'React Hooks Summary ✎'] },
  },
  {
    id: 4,
    title: 'GyanKosh LMS',
    subtitle: 'Library Management System',
    year: '2025',
    description:
      'Full-stack MERN library platform with secure JWT authentication, Admin and User dashboards, book categorization, borrowing history tracking, and a live return countdown system.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/bhabinexpert/Library-Management-System',
    live: 'https://gyankosh-lms.netlify.app/',
    color: '#06b6d4',
    featured: false,
    preview: { type: 'browser', accent: '#06b6d4', emoji: '📚', lines: ['Borrow Read Learn!!!', 'Transform Your Knowledge', '1000+ Books Available', 'Start Borrowing Free →'] },
  },
  {
    id: 5,
    title: 'CineSearch',
    subtitle: 'Movie Discovery App',
    year: '2025',
    description:
      'React + TypeScript app powered by the TMDB API — displays trending movies, search results and detailed movie info with smart filtering. Shows top-ranked films with poster and metadata.',
    tech: ['TypeScript', 'React', 'TMDB API', 'Tailwind CSS'],
    github: 'https://github.com/bhabinexpert/Movie-APP',
    live: null,
    color: '#ec4899',
    featured: false,
    preview: { type: 'dashboard', accent: '#ec4899', emoji: '🎬', lines: ['Trending Movies 🔥', '#1 Bāhubali  #2 Avatar', '#3 Squid Game', 'Search any movie...'] },
  },
  {
    id: 6,
    title: 'GymTrack Java',
    subtitle: 'Gym Membership Manager',
    year: '2024',
    description:
      'GUI-based Java application for managing gym members — registration, membership categories, fee handling, membership history and activity logs using Java OOP principles with file-based storage.',
    tech: ['Java', 'Java Swing', 'OOP', 'File Storage'],
    github: 'https://github.com/bhabinexpert',
    live: null,
    color: '#f97316',
    featured: false,
    preview: { type: 'terminal', accent: '#f97316', emoji: '🏋️', lines: ['GymTrack v1.0', '> Member: Ram Thapa', '> Plan: Premium (3mo)', '> Fee Paid: ✓  Active'] },
  },
  {
    id: 7,
    title: 'ShopTrack CLI',
    subtitle: 'Inventory & Billing System',
    year: '2024',
    description:
      'CLI Python application with VAT-inclusive billing, product tracking, restocking automation, and invoice generation — built for small retailers with full admin controls using OOP principles.',
    tech: ['Python', 'CLI', 'OOP', 'File I/O'],
    github: 'https://github.com/bhabinexpert/Inventory-Management-System---second-semester-CLI-',
    live: null,
    color: '#10b981',
    featured: false,
    preview: { type: 'terminal', accent: '#10b981', emoji: '🛒', lines: ['*** WE CARE SKIN PRODUCTS ***', '1. View Products', '3. Restock Items', '> Bill Generated: Rs.450'] },
  },
]

export const stats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'GitHub Commits', value: 200, suffix: '+' },
  { label: '☕ Cups of Coffee', value: 999, suffix: '+' },
]

export const education = [
  {
    degree: 'BSc (Hons) Computing',
    institution: 'Itahari International College',
    affiliation: 'London Metropolitan University',
    location: 'Sundarharaicha-4, Dulari, Morang',
    year: '2023 – 2027',
    description: 'Currently pursuing an undergraduate degree in Information Technology with focus on software engineering, algorithms, databases, and full-stack development.',
    current: true,
  },
  {
    degree: 'Higher Secondary Education (+2, Science)',
    institution: 'Siddhartha Boarding Secondary School',
    location: 'Damak, Jhapa',
    year: '2021',
    description: 'Completed higher secondary education with a science major.',
    current: false,
  },
]

export const certifications = [
  {
    title: 'Essentials of Prompt Engineering',
    issuer: 'AWS Training & Certification',
    date: 'August 24, 2025',
    description: 'Completed training on prompt engineering fundamentals, best practices, and techniques for working with AI language models.',
    icon: '☁️',
    color: '#f59e0b',
  },
  {
    title: 'Full-Stack Web & Mobile Development with MERN',
    issuer: 'Innovation Lab, Itahari International College',
    date: 'June 23 – August 29, 2025',
    description: 'Completed intensive training in full-stack web development and MERN-based project development.',
    icon: '🌐',
    color: '#8b5cf6',
  },
  {
    title: 'React JS Certification Course',
    issuer: 'GeeksforGeeks',
    date: '2025',
    description: 'Completed an 8-week certification course focusing on component-based development, hooks, and frontend architecture.',
    icon: '⚛️',
    color: '#06b6d4',
  },
  {
    title: 'JavaScript Full Course',
    issuer: 'GeeksforGeeks',
    date: '2025',
    description: 'Completed an 8-week course covering core JavaScript concepts, ES6+ features, DOM manipulation, and practical application development.',
    icon: '⚡',
    color: '#10b981',
  },
]

export const softSkills = [
  { label: 'Communication & Presentation', icon: '🗣️' },
  { label: 'Team Collaboration & Adaptability', icon: '🤝' },
  { label: 'Time Management & Prioritization', icon: '⏱️' },
  { label: 'Leadership & Initiative', icon: '🚀' },
  { label: 'Continuous Learning', icon: '📖' },
  { label: 'Problem Solving', icon: '🧩' },
]

export const roles = [
  'Full Stack Developer',
  'BSc (Hons)Computing Student',
  'React Developer',
  'MERN Stack Developer',
  'Java Developer',
  'Problem Solver',
]
