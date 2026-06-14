import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// Vite config runs in Node; declare a minimal `process.env` shape for TS.
declare const process: { env: Record<string, string | undefined> };

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  // Read ANALYZE from `process.env` (available when running Node/Vite)
  if ((typeof process !== 'undefined' && process.env?.ANALYZE === 'true') || mode === 'analysis') {
    plugins.push(
      visualizer({ filename: 'dist/stats.html', open: false, gzipSize: true }) as any,
    );
  }

  return {
    plugins,
  };
});
