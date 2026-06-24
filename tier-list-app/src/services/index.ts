import { mockApi } from "./mockApi";

// Export the appropriate API based on configuration
export const apiClient = mockApi;

export type { ImageItem, ImagesData, TierDef } from "./api";