import { z } from "zod";
import { brasilApiClient } from "../apiClient/brasilApiClient.js";
import { McpTextContent, McpToolDefinition } from "../types/MCP.js";
import { prettifyJson } from "../utils/index.js";

export const getAllBanksTool: McpToolDefinition = {
  name: "get_all_banks",
  description: "Get information of all banks from Brazil.",
  params: {},
  handler: async () => {
    try {
      const result = await brasilApiClient.bank.getAll();
      const content: McpTextContent = {
        type: "text",
        text: prettifyJson(result.data),
      };
      return {
        content: [content],
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Failed to fetch banks`);
    }
  },
};

const GetBankByCodeToolParams = {
  code: z.number(),
};

export const getBankByCodeTool: McpToolDefinition<
  typeof GetBankByCodeToolParams
> = {
  name: "get_bank_by_code",
  description:
    "Get information from a specific bank given its code. The code from each bank is returned by get_all_banks tool.",
  params: GetBankByCodeToolParams,
  handler: async ({ code }) => {
    try {
      const result = await brasilApiClient.bank.getBy(code);
      const content: McpTextContent = {
        type: "text",
        text: prettifyJson(result.data),
      };
      return {
        content: [content],
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Failed to fetch bank with code ${code}`);
    }
  },
};
