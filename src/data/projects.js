export default [
  {
    title: 'MLS GUI',
    image: '',
    description: `
      A simple command center for controlling Puppeteer and "Scraper". 
      It uses SolidJS on the frontend and Express, Puppeteer, and Socket.io on the back. 
      The front and back are completely separated in /src/ to keep things tidy. 
      It uses event-driven architecture with buttons powered by "commands" (like page::refresh) 
      and updates through appropriate hooks. 
      Nothing too fancy, just a way to control and monitor scrapes as they progress. 
    `,
    techs: 'SolidJS Vite Socket.io Nodemon Sass Tailwind Express Puppeteer'.split(' ')
  }
]