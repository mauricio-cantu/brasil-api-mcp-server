import { z } from "zod";
import { brasilApiClient } from "../apiClient/brasilApiClient.js";
import { McpTextContent, McpToolDefinition } from "../types/MCP.js";
import { prettifyJson } from "../utils/index.js";

const getCepToolParams = {
  cep: z.string().describe("The CEP to query"),
};

type GetCepToolParams = typeof getCepToolParams;

export const getCepTool: McpToolDefinition<GetCepToolParams> = {
  name: "get_postal_code_v1",
  description: "Get a location data given a CEP (postal code).",
  params: getCepToolParams,
  handler: async ({ cep }) => {
    try {
      const result = await brasilApiClient.cepV1.getBy(cep);
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
