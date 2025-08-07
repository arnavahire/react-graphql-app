import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.zaius.com/v3/graphql',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            // Add custom headers here
            proxyReq.setHeader('x-api-key', 'c3-znxkfodim9i0ycEw15Q.jyHQARFgSx0qzaA0t-AGeWXDZHsHjhycT17ryiD6UJ0');
            proxyReq.setHeader('Content-Type', 'application/json');
          });
        },
      },
    },
  },
});
