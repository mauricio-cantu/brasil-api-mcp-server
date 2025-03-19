# BrasilAPI MCP Server MCP Server

[![smithery badge](https://smithery.ai/badge/@mauricio-cantu/brasil-api-mcp-server)](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server)

MCP server that provides tools to query [BrasilAPI](https://github.com/BrasilAPI/BrasilAPI) across different clients and LLMs. Give the ability to LLMs to consume a variety of data from Brasil resources, including CEP (postal codes), DDD (area codes), Banks, Holidays, Taxes, CNPJ (Companies), BR domains and more.

Check the complete and official documentation from BrasilAPI [here](https://brasilapi.com.br/docs).

## Tools

This server provides tools to query every endpoint available from BrasilAPI. Under the hood, it uses this JS client to communicate with the API: https://github.com/WillianAgostini/brasilapi-js

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

### Running the server with a local copy

After you've downloaded this repo, you can run the server using `node`:

```bash
node /absolute/path/to/brasil-api-mcp-server/build/index.js
```

### Usage with Claude

```bash
npx -y @smithery/cli@latest install @mauricio-cantu/brasil-api-mcp-server --client claude
```

### Cursor and other integrations

Check the Server page in [Smithery](https://smithery.ai/server/@mauricio-cantu/brasil-api-mcp-server) to get other integration options such as Cursor and more.

## Server's capabilities inspection

You can inspect this MCP server's capabilities using Smithery:

```bash
npx -y @smithery/cli@latest inspect @mauricio-cantu/brasil-api-mcp-server
```

This will show you all available tools, their parameters, and how to use them.
