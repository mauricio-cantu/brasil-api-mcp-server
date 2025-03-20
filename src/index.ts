#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getCepTool } from "./tools/cep-v1.js";
import { getCepV2Tool } from "./tools/cep-v2.js";
import { registerTool } from "./utils/index.js";
import { getBookByISBNTool } from "./tools/isbn.js";
import { getCNPJTool } from "./tools/cnpj.js";
import { getAllBanksTool, getBankByCodeTool } from "./tools/banks.js";

/**
 * Server setup
 */
const server = new McpServer(
  {
    name: "brasil-api-mcp-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * Tools listing
 */
const tools = [
  getCepTool,
  getCepV2Tool,
  getBookByISBNTool,
  getCNPJTool,
  getAllBanksTool,
  getBankByCodeTool,
];

tools.forEach((tool) => {
  registerTool(server, tool);
});

/**
 * Server initialization
 */
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
