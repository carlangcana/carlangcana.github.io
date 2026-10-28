# Carl Angcana profile

## Run locally

Use Node.js 22.12+ (Node.js 24 LTS recommended).

```sh
npm ci
npm start
```

## Checks and deployment

```sh
npm test
npm run build
npm run preview
npm run deploy
```

The deploy command publishes `build/` with gh-pages to the configured Git remote. The uploaded archive did not include Git configuration; initialize/connect your repository before deploying. The site base remains `/` for https://carlangcana.github.io.

## Dependency update notes

- Updated direct dependencies to current npm stable releases and regenerated the lockfile.
- Replaced react-scripts with Vite and replaced its Jest runner with Vitest.
- Integrated Tailwind CSS 4 using its Vite plugin.
- Migrated Web Vitals callbacks to the current API (INP replaces FID).
- Updated the profile test, which previously checked for an absent starter link.
- Added the missing HTML entry point. JSX files now use `.jsx` extensions.
- Recreated the pink background using layered CSS gradients; no JPEG is required. Nearby color regions ease toward the mouse pointer and return when it leaves the window. Touch devices show the static gradient, and reduced-motion preferences disable movement. Tune colors in `src/InteractiveBackground.css` and pointer influence in `src/InteractiveBackground.jsx`.
- The original archive did not contain custom Tailwind configuration or other public assets. Restore any such assets from your original project if needed.

`node_modules` and generated build files are excluded from the ZIP. Install using `npm ci`.

## Background troubleshooting

Replace the entire extracted project rather than only the src folder. Confirm index.html is beside package.json and start with npm ci then npm start. Use the URL printed by Vite. Move the pointer between opposite corners to see the color regions follow. System Reduce Motion disables movement intentionally.
