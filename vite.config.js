import { defineConfig } from 'vite'
import vitePugPlugin from 'vite-plugin-pug-transformer'

const locals = {} // optional: pass in variables

export default defineConfig({
  plugins: [ vitePugPlugin( { pugLocals: locals, pugOptions: { pretty: true } } ) ],
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: 'src/index.pug'
      }
    }
  }
})
