import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Poppins',
            styles: 'wght@200;300;400;500;600;700'
          },
          {
            name: 'Roboto',
            styles: 'wght@200;300;400;500;600;700'
          },
        ]
      }
    })
  ]
})
