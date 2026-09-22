# key-app-ui

Minimal Quasar App UI served by a Node.js Express starter, ready for Vercel hosting.

## Local development

```bash
npm install
npm run dev
```

Server starts on `http://localhost:3000`.

Requires Node.js 22+.

## Vercel deployment

This repository includes `vercel.json` that routes all requests to the Express starter in `server/index.js`.
The install step is required because `postinstall` copies Vue/Quasar distributable files into `public/vendor` for static serving.
