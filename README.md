# barebone-react-typescript-boilerplate


## Setup

To start just do

```
npm i
```

The boilerplate is set up with :
- React router / React router dom (with History set)
- A Session provider without Redux (thanks to js-cookie module)
- Aliases "@/" to "sources/" to avoid redundant imports


## Folder structure 

The project need a `dist` folder for *build*

```bash
├── dist
├── package-lock.json
├── package.json
├── sources
│   ├── assets
│   ├── components
│   ├── config
│   ├── constants
│   ├── helpers
│   ├── hooks
│   ├── index.html
│   ├── index.tsx
│   ├── models
│   │   └── Session
│   │       └── index.tsx
│   ├── pages
│   │   ├── Main
│   │   │   ├── Home
│   │   │   │   ├── index.css
│   │   │   │   └── index.tsx
│   │   │   ├── Login
│   │   │   │   └── index.tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   └── providers
│       ├── History.tsx
│       └── Session.tsx
├── tsconfig.json
├── tslint.json
└── webpack.config.js
```
