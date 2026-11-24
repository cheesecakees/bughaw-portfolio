/* ============ EDIT YOUR DETAILS HERE ============ */
const portfolio = {
  nav: ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact'],
  name: 'Chesca Ayesa C. Bughaw',
  title: 'Information Technology Student | Aspiring IT Professional',
  tagline: 'Driven by curiosity, built through technology, and inspired by innovation.',
  photo: '/final.png', 
  photoLabel: 'Profile photo of Chesca Ayesa C. Bughaw',
  email: 'bughaw.chescaayesa.canaria@gmail.com',
  socials: [
    { label: 'GitHub', url: '#', icon: 'github', text: 'https://github.com/cheesecakees' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin', text: 'www.linkedin.com/in/chesca-ayesa-bughaw' },
    { label: 'Other', url: '#', icon: 'link', text: 'https://www.facebook.com/cheescakeeee.7' },
  ],
  about: {
  intro: [
    'An Information Technology student with an interest in web development, database management, and creating organized digital solutions.',
    'With experience in academic system development, database documentation, and user interface design, I enjoy exploring technologies and applying my knowledge to practical projects. I value continuous learning, collaboration, and developing solutions that are both functional and user-friendly.'
  ],
  goals: 'Interested in pursuing opportunities in database management, web development, and data-related fields. Aims to continuously improve technical skills, gain practical industry experience, and contribute to developing reliable and user-centered technology solutions.',
      organizations: [
      { name: 'LESIT', role: 'Events and Productions Committee' },
    ],
},
  skills: [
    {
    group: 'Technical skills',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Java',
      'SQL',
      'Database Management'
    ]
  },
    {
    group: 'Tools',
    items: [
      'Visual Studio Code',
      'intelliJ IDEA',
      'vercel',
      'Git & GitHub',
      'Figma',
      'Canva',
      'Microsoft Word',
      'Microsoft Excel',
      'Supabase', 
      'MySQL'
    ]
  },
    {
    group: 'Soft skills',
    items: [
      'Organization',
      'Team Collaboration',
      'Communication',
      'Time Management',
      'Documentation',
      'Problem-Solving'
    ]
  },
],
  projects: [
  {
    name: 'QRoute',
    description:
      'A route navigation application designed to help commuters find public transportation routes in Quezon City. Features include route searching, saved locations, fare contributions, and community reporting.',
    tech: ['React.js', 'Node.js', 'JavaScript', 'Supabase'],
    image: '/qr.png',
    imageLabel: 'QRoute Project Screenshot',
    role: 'Backend Developer',
  },
  {
    name: 'EduRank',
    description:
      'An e-learning ranking system designed to encourage student participation through gamification. Includes a ranking system with points, badges, levels, and leaderboards.',
    tech: ['Java', 'MySQL', 'JavaFX'],
    image: '/edu.png',
    imageLabel: 'EduRank Project Screenshot',
    role: 'Database Administrator and Backend Developer'
  },
  {
    name: 'FWD Technologies Employee Management System',
    description:
      'An employee management system designed to organize employee information and workplace processes. Contributed to database development, documentation, and system requirements.',
    tech: ['Database Management', 'SQL', 'Documentation'],
    image: '/fwd.png',
    imageLabel: 'FWD Technologies Project Screenshot',
    role: 'Documentation and Assistant Database Administrator',
  },
  {
    name: 'Kalinga PH',
    description:
      'A digital platform project focused on providing an accessible and user-friendly interface. Contributed to the user interface design and visual organization of the application.',
    tech: ['Figma', 'UI Design', 'Prototyping'],
    image: '/k.png',
    imageLabel: 'Kalinga PH Project Screenshot',
    role: 'User Interface Designer'
  },
],
  certifications: [
    { name: 'Operating Systems Basics', issuer: 'Cisco Networking Academy', date: '11-14-2016',
      image: '/os.jpeg', imageLabel: 'Operating Systems Basics Certificate', link: '' },
    { name: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: '11-11-2026',
      image: '/mi.jpeg', imageLabel: 'Introduction to Modern AI Certificate', link: '' },
    { name: 'Introduction to Git and Github', issuer: 'JPCS-QCU Chapter', date: '09-25-2026',
      image: '/g.jpeg', imageLabel: 'Introduction to Git and Github Certificate', link: '' },
    { name: 'Cloudchain Summit', issuer: 'AWS of QCU', date: '09-23-2026',
      image: '/o.jpeg', imageLabel: 'Cloudchain Summit Certificate', link: '' },
    { name: 'Networking Basics', issuer: 'Cisco Networking Academy', date: '08-30-2026',
      image: '/nb.jpeg', imageLabel: 'Networking Basics Certificate', link: '' },

  ],
  badges: [
    { name: 'Operating Systems Basics', image: '/b1.png', imageLabel: 'Badge 1', link: '' },
    { name: 'Introduction to Modern AI', image: '/b2.png', imageLabel: 'Badge 2', link: '' },
    { name: 'Networking Basics', image: '/b3.png', imageLabel: 'Badge 3', link: '' },
  ],
  experience: [
  {
    role: 'Backend Developer & Database Designer',
    org: 'QRoute',
    date: '2026',
    details:
      'Contributed to the backend development of a public transportation route navigation application. Worked on implementing backend functionalities and designing the Entity Relationship Diagram (ERD) to define the system’s database structure and relationships.'
  },
  {
    role: 'Assistant Database Administrator & UI Designer',
    org: 'FWD Technologies',
    date: '2025 – 2026',
    details:
      'Assisted in database administration tasks and technical documentation for an Employee Management System. Contributed to organizing database information, documenting system requirements, and designing user interface layouts and prototypes using Figma.'
  },
  {
    role: 'UI Designer',
    org: 'Kalinga PH',
    date: '2025 – 2026',
    details:
      'Contributed to the user interface design of Kalinga PH using Figma. Focused on organizing layouts, maintaining visual consistency, and designing an accessible and user-friendly interface.'
  },
  {
    role: 'Database Administrator & Documentation Assistant',
    org: 'EduRank',
    date: '2024 – 2025',
    details:
      'Handled database-related tasks and technical documentation for a gamified e-learning ranking system. Assisted in back-end development and worked on database structures supporting student rankings, points, badges, levels, and leaderboards.'
  },
],
  education: [
  {
    role: 'Bachelor of Science in Information Technology',
    org: 'Quezon City University',
    date: 'Currently Enrolled | 3rd Year',
    details:
      'Undergraduate student with academic interests in web development, database management, information systems, and software development.'
  },
  {
    role: 'Senior High School – STEM Strand',
    org: 'Lagro High School',
    date: '',
    details:
      'Completed the Science, Technology, Engineering, and Mathematics (STEM) strand.'
  },
  {
    role: 'Junior High School',
    org: 'Lagro High School',
    date: '',
    details:
      'Completed junior high school education.'
  },
  {
    role: 'Elementary Education',
    org: 'Kaligayahan Elementary School',
    date: '',
    details:
      'Completed primary education.'
  },
],
  closing:
  'Thank you for taking the time to explore my portfolio. I look forward to continuously learning, developing my skills, and creating meaningful solutions through technology.',
}
export default portfolio
/* ================================================= */
