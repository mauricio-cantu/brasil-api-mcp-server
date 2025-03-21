# BrasilAPI MCP Server

[![smithery badge](https://smithery.ai/badge/@mauricio-cantu/brasil-api-mcp-server)](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server)

Query a variety of data from Brasil resources seamlessly. Access information on postal codes, area codes, banks, holidays, taxes, and more through a unified interface. Enhance your AI agents and applications with rich and updated data from [BrasilAPI](https://github.com/BrasilAPI/BrasilAPI) effortlessly.

Check the complete and official documentation from BrasilAPI [here](https://brasilapi.com.br/docs).

## Tools

This server provides tools to query every endpoint available from BrasilAPI. Under the hood, it uses this JS client to communicate with the API: https://github.com/WillianAgostini/brasilapi-js

Check the [Tools page in Smithery](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server/tools) to inspect and test each one of them.

## Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

For development with auto-rebuild:

```bash
npm run watch
```

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

To generate an updated build and inspect:

```bash
npm run build-and-inspect
```

The Inspector will provide a URL to access debugging tools in your browser.

## Integration with AI applications

### Running through Smithery

Run the server automatically via [Smithery](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server):

```bash
npx -y @smithery/cli install @mauricio-cantu/brasil-api-mcp-server
```

### Usage with Claude

```bash
npx -y @smithery/cli@latest install @mauricio-cantu/brasil-api-mcp-server --client claude
```

### Cursor and other integrations

Check the Server page in [Smithery](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server) to get other integration options such as Cursor and more.

### Running the server with a local copy

After you've downloaded this project, you can run the server using `node`:

```bash
node /absolute/path/to/brasil-api-mcp-server/build/index.js
```

At the root of the project there's also a Dockerfile to build and run the image if you'd like.

## Server's capabilities inspection

You can inspect this MCP server's capabilities using Smithery:

```bash
npx -y @smithery/cli@latest inspect @mauricio-cantu/brasil-api-mcp-server
```

This will show you all available tools, their parameters, and how to use them.

## Project structure

```
src/
  ├── apiClient/   # BrasilAPI client
  ├── tools/       # Tools implementations
  ├── types/       # Interfaces and types
  ├── utils/       # Utility functions
  └── index.ts     # MCP main file (server setup and tools listing)
```
