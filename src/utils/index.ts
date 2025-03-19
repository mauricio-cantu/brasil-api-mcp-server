import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpToolDefinition } from "../types/MCP.js";

export const prettifyJson = (data: any) => {
  return JSON.stringify(data, null, 2);
};

export const registerTool = (server: McpServer, tool: McpToolDefinition) => {
  server.tool(tool.name, tool.description, tool.params, tool.handler);
};
