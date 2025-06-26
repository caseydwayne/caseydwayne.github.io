import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'

const locals = {} // optional: pass in variables

export default defineConfig({
  plugins: [ pugPlugin( { pugLocals: locals, pretty: true } ) ],
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
