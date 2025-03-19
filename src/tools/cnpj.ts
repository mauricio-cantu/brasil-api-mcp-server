import { z } from "zod";
import {
  McpResponse,
  McpTextContent,
  McpToolDefinition,
} from "../types/MCP.js";
import { brasilApiClient } from "../apiClient/brasilApiClient.js";
import { prettifyJson } from "../utils/index.js";

const getCNPJToolParams = {
  CNPJ: z.string().describe("The CNPJ to query"),
};

type GetCNPJToolParams = typeof getCNPJToolParams;

export const getCNPJTool: McpToolDefinition<GetCNPJToolParams> = {
  name: "get_cnpj",
  description: "Get information about a company given a CNPJ.",
  params: getCNPJToolParams,
  handler: async ({ CNPJ }): Promise<McpResponse> => {
    try {
      const result = await brasilApiClient.cnpj.getBy(CNPJ);
      const content: McpTextContent = {
        type: "text",
        text: `CNPJ ${CNPJ} found:\n${prettifyJson(result.data)}`,
      };
      return {
        content: [content],
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Failed to fetch CNPJ ${CNPJ}`);
    }
  },
};
