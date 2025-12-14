import path from 'path';

// Types
import type { NextConfig } from 'next';

const STYLES_DIR = path.join(__dirname, 'src/app');

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Provide Sass with a custom importer so it can resolve "@styles/…"
  sassOptions: {
    importer(url: string) {
      // If the import begins with "@styles/" map it into the styles folder
      if (url.startsWith('@styles/')) {
        const newPath = path.join(STYLES_DIR, url.replace('@styles/', ''));

        return {
          file: newPath,
        };
      }

      // For everything else let Sass handle it normally
      return null;
    },
  },

  images: {
    formats: [ 'image/avif', 'image/webp' ],
    qualities: [ 100 ],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
