import { mockApi } from "./mockApi";

// Export the appropriate API based on configuration
export const apiClient = mockApi;

export type {
  ImageRecord,
  ImageUpdateRequest,
  IndexRequest,
  SearchParams,
  SearchResponse,
} from "./mockApi";
export { ApiError } from "./mockApi";
export type { TierDef } from "./api";