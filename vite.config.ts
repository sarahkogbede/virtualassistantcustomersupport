import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyToFilename: Record<string, string> = {
  headshot_primary: 'headshot.jpg',
  project_hubspot_crm: 'hubspot-crm.jpg',
  project_google_calendar: 'google-calendar.jpg',
  project_email_management: 'email-management.jpg',
  project_trello: 'trello-management.jpg',
  project_sheets_tracker: 'sheets-tracker.jpg',
  project_forms_sheets: 'forms-sheets.jpg',
  project_data_research: 'data-research.jpg',
  project_travel_planning: 'travel-planning.jpg',
  project_canva_gallery: 'canva-presentation.jpg',
};

function saveImagesPlugin(): Plugin {
  return {
    name: 'save-images-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/save-image' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { key, dataUrl } = JSON.parse(body);
              if (!key || !dataUrl) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Missing key or dataUrl' }));
                return;
              }
              const imagesDir = path.resolve(__dirname, 'public/images');
              if (!fs.existsSync(imagesDir)) {
                fs.mkdirSync(imagesDir, { recursive: true });
              }
              const filename = keyToFilename[key] || `${key.replace(/[^a-zA-Z0-9_-]/g, '_')}.jpg`;
              const filePath = path.join(imagesDir, filename);
              const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
              fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, filename, url: `/images/${filename}` }));
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: String(err) }));
            }
          });
          return;
        }

        if (req.url === '/api/list-images' && req.method === 'GET') {
          try {
            const imagesDir = path.resolve(__dirname, 'public/images');
            if (fs.existsSync(imagesDir)) {
              const files = fs.readdirSync(imagesDir);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ files }));
              return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ files: [] }));
          } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: String(err) }));
          }
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), saveImagesPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
