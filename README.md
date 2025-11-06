# Monorepo Starter

A simple monorepo using [Turborepo](https://turborepo.com/). 

## What's Included

**Apps**

- `web` using [Vite + React](https://vite.dev/)
- `marketing` using [Next.js](https://nextjs.org/)
- `backend` using [NestJS](https://nestjs.com/)

**Packages**

- `ui` with setup for [shadcn/ui](https://ui.shadcn.com/)

**Tooling**

- `tailwind` configuration for v4 with styling for shadcn components
- `typescript` configuration for all apps and packages

**Other**

- Linting and formatting is done with [Biome](https://biomejs.dev/)
- [Bun](https://bun.com/) is used as the package manager and runtime (the runtime can be changed to Node.js by removing bunx --bun from any script)
- All apps and scripts are ECMAScript Modules and are easily compatible with one another.