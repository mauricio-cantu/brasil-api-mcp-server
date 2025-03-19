import { z } from "zod";
import {
  McpResponse,
  McpTextContent,
  McpToolDefinition,
} from "../types/MCP.js";
import { brasilApiClient } from "../apiClient/brasilApiClient.js";
import { prettifyJson } from "../utils/index.js";

const getISBNToolParams = {
  ISBN: z.string().describe("The book's ISBN to query"),
};

type GetISBNToolParams = typeof getISBNToolParams;

export const getBookByISBNTool: McpToolDefinition<GetISBNToolParams> = {
  name: "get_isbn",
  description: "Get information about a book given an ISBN.",
  params: getISBNToolParams,
  handler: async ({ ISBN }): Promise<McpResponse> => {
    try {
      const result = await brasilApiClient.isbn.getBy(ISBN);
      const content: McpTextContent = {
        type: "text",
        text: `Book with ISBN ${ISBN} found:\n${prettifyJson(result.data)}`,
      };
      return {
        content: [content],
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(`Failed to fetch book with ISBN ${ISBN}`);
    }
  },
};
