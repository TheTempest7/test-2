import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "01-app":"/src/01-app",
      "03-pages":"/src/03-pages",
      "06-entities": "/src/06-entities",
      "07-shared":"/src/07-shared"
    }
  },
  server:{
    open:true
  }
})
