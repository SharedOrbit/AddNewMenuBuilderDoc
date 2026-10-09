# Add New Menu Builder documentation

The VitePress documentation site for [Add New Menu Builder](https://github.com/SharedOrbit/AddNewMenuBuilder), an Unreal Editor plugin by Shared Orbit.

The site follows the dark Unreal-inspired visual style used by [MeshPaintingDoc](https://sharedorbit.github.io/MeshPaintingDoc/), with content written specifically for Add New Menu Builder. The two repositories are separate.

## Local development

Requires Node.js 22 or a compatible version.

```sh
npm ci
npm run docs:dev
```

To verify the production build:

```sh
npm run docs:build
npm run docs:preview
```

## Layout

- `docs/.vitepress/config.mts` — navigation and site settings
- `docs/.vitepress/theme/` — dark site theme
- `docs/guide/` — setup and workflow guides
- `docs/reference/` — compatibility and troubleshooting
- `docs/public/` — site and product icons
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment

The deployment workflow publishes the built site from the `main` branch to GitHub Pages. The configured base path is `/AddNewMenuBuilderDoc/`.
