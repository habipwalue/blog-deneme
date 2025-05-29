// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      host: '0.0.0.0',
      port: 53736,
      cors: true,
      strictPort: true,
      // Allow access from any host
      allowedHosts: 'all'
    }
  }
});
