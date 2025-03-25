import { createServer } from 'node:http';

/**
 *
 * Built-in node:http module to create a simple HTTP server that responds with a JSON object
 * containing a counter. It also creates a server.
 */
export function build() {
  let count = 0;

  const server = createServer((req, res) => {
    console.log('received request', req.url);
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({ content: `from node:http createServer: ${count++}!` })
    );
  });

  return server;
}
