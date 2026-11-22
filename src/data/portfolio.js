/* ============ EDIT YOUR DETAILS HERE ============ */
const portfolio = {
  nav: ['Home', 'About Me', 'Skills', 'Projects', 'Experience', 'Contact'],
  name: 'CHESCA AYESA C. BUGHAW',
  title: '[YOUR PROFESSIONAL TITLE]',
  tagline: '[WRITE YOUR TAGLINE HERE]',
  photo: '/me.jpg',
  photoLabel: '[ADD YOUR PROFILE PHOTO]',
  email: '[YOUR EMAIL ADDRESS]',
  socials: [
    { label: 'GitHub', url: '#', icon: 'github', text: '[YOUR GITHUB URL]' },
    { label: 'LinkedIn', url: '#', icon: 'linkedin', text: '[YOUR LINKEDIN URL]' },
    { label: 'Other', url: '#', icon: 'link', text: '[OTHER SOCIAL LINK]' },
  ],
  about: {
    intro: ['[WRITE YOUR INTRODUCTION HERE]', '[ADD YOUR BACKGROUND HERE]'],
    education: '[ADD YOUR EDUCATIONAL BACKGROUND HERE]',
    goals: '[ADD YOUR PROFESSIONAL INTERESTS, GOALS AND CAREER DIRECTION HERE]',
  },
  skills: [
    { group: 'Technical skills', items: ['[SKILL 1]', '[SKILL 2]', '[SKILL 3]', '[SKILL 4]'] },
    { group: 'Tools', items: ['[TOOL 1]', '[TOOL 2]', '[TOOL 3]', '[TOOL 4]'] },
    { group: 'Soft skills', items: ['[SOFT SKILL 1]', '[SOFT SKILL 2]', '[SOFT SKILL 3]'] },
  ],
  projects: [1, 2, 3, 4].map((n) => ({
    name: '[PROJECT ' + n + ' NAME]',
    description: '[ADD PROJECT DETAILS HERE]',
    tech: ['[TECH 1]', '[TECH 2]', '[TECH 3]'],
    image: null, // example: '/project1.png' (inside public/)
    imageLabel: '[PROJECT ' + n + ' SCREENSHOT]',
    github: '#',
    demo: '#',
  })),
  experience: [1, 2].map((n) => ({
    role: '[JOB TITLE ' + n + ']', org: '[COMPANY ' + n + ']', date: '[START – END DATE]',
    details: '[ADD YOUR RESPONSIBILITIES AND ACHIEVEMENTS HERE]',
  })),
  education: [1, 2].map((n) => ({
    role: '[DEGREE OR PROGRAM ' + n + ']', org: '[INSTITUTION ' + n + ']', date: '[START – END DATE]',
    details: '[ADD DETAILS, HONORS OR RELEVANT COURSEWORK HERE]',
  })),
  closing: '[WRITE YOUR CLOSING STATEMENT HERE]',
}
export default portfolio
/* ================================================= */
