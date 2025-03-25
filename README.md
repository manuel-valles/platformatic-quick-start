# Platformatic Quick Start

This is an intro to [Platformatic](https://platformatic.dev/), a Node.js App Server.

## 0. Stack

- **_Next.js_**
- Generic NodeJS app with `node:http createServer`
- **_Platformatic Composer_**, to coordinate/expose them all

## 1. Install Watt and Set up Node Server

- `npx wattpm@latest init`
- `mkdir web/node` and create the following files:
  - [package](./web/node/package.json)
  - [server](./web/node/server.js)
  - `npx wattpm import web/node`. This will update the `package.json` and generate the [watt](./web/node/watt.json) JSON file
- Run the server: `npm run dev`
