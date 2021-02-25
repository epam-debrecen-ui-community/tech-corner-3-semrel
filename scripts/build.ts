import { build } from 'esbuild';

const SOURCE = 'src/index.ts';
const DIST = 'dist/index.mjs';

build({
    entryPoints: [ SOURCE ],
    external: [
        'fastify',
        'node-fetch'
    ],
    platform: 'neutral',
    bundle: true,
    outfile: DIST
}).then(() => console.info('Build successful.')).catch(() => process.exit(1))
