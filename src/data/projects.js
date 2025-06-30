/// Copypasta::
// {
//   title: '',
//   image: '',
//   description: `
//     
//   `,
//   techs: 'JavaScript'.split(' ')
// }
  
export default [
  
  {
    title: 'MLS App',
    image: 'mls-app',
    description: `
      A Vue (3) application. 
      Uses Firebase for the user system/authentication layer. 
      Contains many tweaks you probably wouldn't even notice (unless they weren't there) for a better user experience. 
      Heavily optimized. Mobile friendly. 
    `,
    techs: 'Vue, Firebase, Google Maps, Vite'.split(', '),
    link: 'https://mls.alexsellrichmond.com',
    linkText: 'Check it out!'
  },

  {
    title: 'MLS Scraper',
    image: 'mls-scraper-ai',
    description: `
      A robust scraper built using Puppeteer. It simulates user interaction, 
      uses countermeasures for anti-scrape detection, and thoroughly parses content 
      to be stored in a database. Offers a real-time mode for inserting/updating on the fly, 
      batch processing for fewer DB requests, and one-shot mode where all processing is done at the end. 
      Controllable by MLS GUI but mostly runs headless via cron jobs. Notifies via email if there are problems. 
    `,
    techs: 'Puppeteer JavaScript MySQL Node'.split(' ')
  },

  {
    title: 'MLS GUI',
    image: 'mls-gui-ai',
    description: `
      A simple command center for controlling Puppeteer and "Scraper". 
      It uses SolidJS on the frontend and Express, Puppeteer, and Socket.io on the back. 
      The front and back are completely separated in /src/ to keep things tidy. 
      It uses event-driven architecture with buttons powered by "commands" (like page::refresh) 
      and updates through appropriate hooks (web sockets). 
      Nothing too fancy, just a way to control and monitor scrapes as they progress. 
    `,
    techs: 'SolidJS Vite Socket.io Nodemon Sass Tailwind Express Puppeteer'.split(' ')
  },

  {
    title: 'MLS Updater',
    image: 'mls-updater-ai',
    description: `
      A Node.js service for syncing scraped MLS listing data to the database. 
      It provides realtime quality assurance, checking if a listing exists, executing INSERT or UPDATE depending, 
      ensuring images already in the database are not overwritten in case images did not load during scrape (anti-scrape bottleneck), etcetera. 
      It also adds Google Maps data (like lat/lng) and some administrative tasks for new listings. 
      At the end it deletes expired listings (those not present in a full scrape).
    `,
    techs: 'JavaScript MySQL'.split(' ')
  },

  {
    title: 'The DSB',
    image: 'dsb-ai-customized',
    description: `
      The Dynamic Site Builder started out as just a modular way to build websites. Originally in PHP (2012), 
      ported to Node and enhanced in 2014. Creates a streamlined development platform with some "standards" 
      as to the structure of skeletal HTML, theme stylesheets, et. al.. featured HMR/live reload before React and Angular. 
      Developed alongside the 2 until 2016. Still a very useful tool for large sites and software. 
    `,
    techs: 'Node Express Webpack Pug Sass Chalk'.split(' ')
  },
    
  {
    title: 'CSS Monster',
    image: 'css-monster-ai',
    description: `
      A utility-first SCSS library for rapid prototyping. Built WAY before Tailwind started trending (circa 2013). 
      Largely abandoned because it makes otherwise clean markup look like speghetti code. 
      Intended to create a better solution in JS but discontinued it because the DSB is not as needed 
      in the age of Vue, Vite, SolidJS, etc. Still, impressive for it's time IMO. 
    `,
    techs: 'Sassy Sass'.split(' ')
  },

  {
    title: 'Sassy',
    image: 'sassy',
    description: `
      An open-source contribution. Sassy was developed during my rewrite of Monster. 
      Frustrated with the limitations of logic in Sass I developed this utility library 
      (which features advanced map manipulation, comparision tools, implode/explode, etc.). 
      Version 2 use namespacing to avoid potential problems with future releases of Sass. 
    `,
    techs: [ 'Sass' ],
    link: 'https://github.com/caseydwayne/Sassy',
    linkText: 'Project available on GitHub.'
  },

  {
    title: 'Admin Panel',
    image: 'admin-panel',
    description: `
      A powerful, portable interface for editing websites using an interface. 
      Connected other parts of my Content Mangagement System such as BLISS (WYSIWYG editor that used Monster), 
      File Manager, Database Manager, and more. Had a drag and drop system with minimize, maximize/restore, close buttons at top. 
      Built in calculator. Show Desktop button. 
    `,
    techs: [ 'JavaScript', 'PHP', 'CSS', 'MySQL', 'TinyMCE' ],
    link: 'https://vimeo.com/101086230',
    linkText: 'Proof via video.'
  },

  {
    title: 'Package Organizer',
    image: 'marketing-app',
    description: `
      A tool for managing dozens to hundreds of packages that change every 3 months or so. 
      Client needed a way for their call staff to be able to reference quickly, as well as 
      integrate with custom WordPress plugins I helped with prior (that decides the best package based on address). 
      Used Vuetify to save time. Locked production version behind authentication at client's request. 
    `,
    techs: 'Vue Vuetify Axios APIs WordPress'.split(' ')
  },

  {
    title: 'Reviews API',
    image: 'reviews-api',
    description: `
      A custom aggregator that replaced a $250/mo SaaS my client had been paying into for years. 
      Takes reviews via APIs from Zillow, Google, Facebook, etc. and stores them in a database. 
      Reviews are served in the front (in batches) with seamless animation that appears as infinite scroll. 
      Client-facing Angular frontend for authentication and administering updates. 
    `,
    techs: 'MySQL, APIs, Angular, OAuth 2.0, Lazy Loading, Infinite Scroll'.split(', '),
    hidden: !true
  },

  {
    title: 'DSB Diag',
    image: 'dsb-diag',
    description: `
      A testing platform used in conjunction with dsb-debug for unit testing 100+ modules in the DSB. 
      Provided a summary of results as well as detailed reporting if issues or errors were discovered. 
      Can be isolated to only a few modules, exclude certain modules, etc.. 
      Kept me sane while completing the DSB. 
    `,
    techs: [ 'JavaScript', 'Node', 'Chalk' ],
    hidden: true
  },

  {
    title: 'DSB Debug',
    image: 'dsb-debug',
    description: `
      A robust debugging software that creates unit tests with common-sense tooling baked in. 
      Similar to many others but this one is mine. As minimal or expansive as you want it. 
      Made testing a breeze (as easy as such a thing can be, anyway). 
    `,
    techs: [ 'JavaScript', 'Node' ],
    hidden: true
  },

  {
    title: 'DSB Screenshot',
    image: 'screenshotter',
    description: `
      A screenshot tool useful for achiving and visual testing. 
      Allowed for crawling sites and taking screenshots at different resolutions for quality assurance. 
      Also made "money shots" less annoying by automatically setting targets to fullscreen 1080 without scrollbars. 
    `,
    techs: [ 'PhantomJS', 'JavaScript' ],
    hidden: true
  },

]