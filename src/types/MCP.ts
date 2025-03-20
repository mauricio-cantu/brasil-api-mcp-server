import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ZodRawShape } from "zod";

export interface McpToolDefinition<Args extends ZodRawShape = any> {
  name: string;
  description: string;
  params: Args;
  handler: ToolCallback<Args>;
}

export interface McpTextContent {
  type: "text";
  text: string;
  [key: string]: unknown;
}

export type McpContent = McpTextContent;

export interface McpResponse {
  content: McpContent[];
  _meta?: Record<string, unknown>;
  isError?: boolean;
  [key: string]: unknown;
}
