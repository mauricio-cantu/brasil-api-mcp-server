import { z } from "zod";
import {
  McpResponse,
  McpTextContent,
  McpToolDefinition,
} from "../types/MCP.js";
import { brasilApiClient } from "../apiClient/brasilApiClient.js";
import { prettifyJson } from "../utils/index.js";

const getCepV2ToolParams = {
  cep: z.string().describe("The CEP to query"),
};

type GetCepV2ToolParams = typeof getCepV2ToolParams;

export const getCepV2Tool: McpToolDefinition<GetCepV2ToolParams> = {
  name: "get_postal_code_v2",
  description: "Version 2 of get a location data given a CEP (postal code).",
  params: getCepV2ToolParams,
  handler: async ({ cep }): Promise<McpResponse> => {
    try {
      const result = await brasilApiClient.cep.getBy(cep);
      const content: McpTextContent = {
        type: "text",
        text: `CEP found:\n${prettifyJson(result.data)}`,
      };
      return {
        content: [content],
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Failed to fetch cep ${cep}`);
    }
  },
};
