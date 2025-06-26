import { defineConfig } from 'vite'
import vitePugPlugin from 'vite-plugin-pug-transformer'

import projects from './src/data/projects'

const locals = { projects } // optional: pass in variables

export default defineConfig({
  plugins: [ vitePugPlugin( { pugLocals: locals, pugOptions: { pretty: true } } ) ],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true, 
  }
})
