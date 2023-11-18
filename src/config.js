module.exports = {
  siteTitle: 'Allan Juma | Software Developer | Content Writer',
  siteDescription:
    'Allan Juma is a Software Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Allan Juma, Allan, Juma, allanXQ, software developer, software engineer, hashnode, allanjuma, fullstack developer, web developer, javascript developer',
  siteUrl: 'https://allanjuma.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Allan Juma',
  location: 'Nairobi, Kenya',
  email: 'allancjuma@gmail.com',
  github: 'https://github.com/allanXQ',
  twitterHandle: '@allancjuma',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/allanXQ',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/allan-juma/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com//allancjuma',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
