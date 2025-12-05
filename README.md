This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```
bun create next-app@latest nextjs-with-vanilla-extract-bun-runtime --yes
```

## Configuration

### Bun Runtime

Bun runtime was configured as per [docs](https://bun.com/docs/guides/ecosystem/nextjs).

### Vanilla Extract

Vanilla Extract was configured as per [docs](https://vanilla-extract.style/documentation/integrations/next/). With the following modifications:
- Code in `next.config.ts` was adjusted to TypeScript as this is the Next.js default.
- Next.js scripts in `package.json` were updated with ` --webpack` flag as Vanilla Extract does not support Turbopack (yet?)

## Styling

This project uses [vanilla-extract](https://vanilla-extract.style/) for type-safe, zero-runtime CSS-in-TypeScript styling. All CSS has been converted to vanilla-extract `.css.ts` files:

### Global Styles (`src/app/globals.css.ts`)

- Uses `createGlobalTheme` to define global CSS variables for light/dark mode
- Implements base styles with `globalStyle` for HTML elements
- Handles dark mode using CSS media queries

### Component Styles (`src/app/page.css.ts`)

- Uses `style()` to create locally scoped component classes
- Uses `createVar()` for scoped CSS variables with theme values
- Implements responsive design with `@media` queries
- Handles nested selectors using `globalStyle()` for child elements

## Known Issues

### Vanilla Extract + Bun Runtime Incompatibility

When running `bun run build` (which executes `bun --bun next build --webpack`), the build fails with:

```
NonErrorEmittedError: (Emitted value instead of an instance of Error) TypeError: undefined is not an object (evaluating 'require('@vanilla-extract/css/adapter').setAdapter')
```

**Root Cause**: The `@vanilla-extract/css/adapter` module uses Node.js-specific `require()` behavior that Bun's runtime does not fully support. When Bun tries to resolve the adapter module, it returns `undefined` instead of the expected module exports.

**Workaround**: Remove the `--bun` flag from scripts to use Node.js runtime instead:

```json
{
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "start": "next start --webpack"
  }
}
```

**Note**: This workaround means you're not using Bun's runtime, therefore you lose the performance benefits of Bun and cannot use the Bun base image (e.g., `oven/bun` Docker image) for deployment. You would need to use a Node.js base image instead.

**Status**: This issue has been reported to the vanilla-extract team. This repository serves as a minimal reproduction case.
