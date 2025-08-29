# Burson UI Developer Portfolio (Industrial-Grade Monorepo)

- **Design System**: React + TypeScript + Storybook, 60+ atomic components published as `@burson/ui`.
- **Performance**: Next.js with dynamic imports & bundle analyzer. Targets **95+ Lighthouse** (config included).
- **Real-time Collaboration**: Y.js + y-websocket demo with Redux Toolkit integration (CRDT).
- **Testing**: Jest (unit), Cypress (E2E), Percy (visual regression). CI orchestrated via GitHub Actions.
- **CI/CD**: Build/Test/LHCI; deploy to S3+CloudFront (placeholders for secrets).

## Monorepo
```
apps/web             # Next.js app
packages/ui          # Design System + Storybook
server/collab-server # y-websocket server
```

## Setup
```bash
nvm use
npm ci
npm run -w @burson/ui storybook  # localhost:6006
npm run -w web dev               # localhost:3000
npm run -w collab-server start   # ws://localhost:1234
```

## Deploy
Set GH secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.

## Percy
Add `PERCY_TOKEN` to enable visual diffs during Cypress run.
