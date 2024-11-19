import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  

export default defineConfig({  
  plugins: [react()],  
  server: {  
    host: '0.0.0.0', // Listen on all interfaces  
    port: 3000, // or your preferred port  
    strictPort: true // Optional: fails if the port is already in use  
  }  
});