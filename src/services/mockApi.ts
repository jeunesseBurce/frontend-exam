// Mock implementation of the "Product Packaging Image API" described in
// src/data/openapi.json. Backed by src/data/snack_metadata_complete.json,
// mapped onto the ImageRecord schema so it can stand in for the real API.
import snackData from "../data/snack_metadata_complete.json";

export const USE_MOCK_DATA = true;

// ── Types (mirrors components/schemas in openapi.json) ─────────────────────

export interface ImageRecord {
  id: string;
  filename: string;
  file_path: string;
  storage_path: string | null;
  public_url: string | null;
  brand: string | null;
  product_name: string | null;
  variant: string | null;
  barcode: string | null;
  country_of_origin: string | null;
  category: string | null;
  sub_category: string | null;
  flavor: string | null;
  target_audience: string | null;
  season_edition: string | null;
  net_weight: number | null;
  net_weight_unit: string | null;
  packaging_type: string | null;
  packaging_material: string | null;
  primary_colors: string[] | null;
  dietary_claims: string[] | null;
  allergens: string[] | null;
  certifications: string[] | null;
  languages: string[] | null;
  image_angle: string | null;
  image_quality: string | null;
  description: string | null;
  tags: string[] | null;
  metadata: Record<string, unknown> | null;
  indexed_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface ImageUpdateRequest {
  brand?: string | null;
  product_name?: string | null;
  variant?: string | null;
  barcode?: string | null;
  country_of_origin?: string | null;
  category?: string | null;
  sub_category?: string | null;
  flavor?: string | null;
  target_audience?: string | null;
  season_edition?: string | null;
  net_weight?: number | null;
  net_weight_unit?: string | null;
  packaging_type?: string | null;
  packaging_material?: string | null;
  primary_colors?: string[] | null;
  dietary_claims?: string[] | null;
  allergens?: string[] | null;
  certifications?: string[] | null;
  languages?: string[] | null;
  image_angle?: string | null;
  image_quality?: string | null;
  description?: string | null;
  tags?: string[] | null;
  metadata?: Record<string, unknown> | null;
}

export interface IndexRequest {
  file_paths?: string[] | null;
  folder_path?: string | null;
}

export interface SearchParams {
  q?: string;
  brand?: string;
  category?: string;
  sub_category?: string;
  flavor?: string;
  variant?: string;
  packaging_type?: string;
  packaging_material?: string;
  min_weight?: number;
  max_weight?: number;
  weight_unit?: string;
  dietary_claims?: string[];
  allergens?: string[];
  certifications?: string[];
  image_angle?: string;
  image_quality?: string;
  tags?: string[];
  limit?: number;
  offset?: number;
}

export interface SearchResponse {
  results: ImageRecord[];
  total: number;
}

export class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// ── Mock data: map snack_metadata_complete.json onto ImageRecord ───────────

interface SnackImageItem {
  id: string;
  filename: string;
  filepath: string;
  brand: string;
  category: string;
  flavor: string[];
  package_color: string[];
  size: string;
  dietary: string[];
  package_type: string;
  notes: string;
}

const now = new Date().toISOString();

function toImageRecord(item: SnackImageItem): ImageRecord {
  return {
    id: item.id,
    filename: item.filename,
    file_path: item.filepath,
    storage_path: null,
    public_url: null,
    brand: item.brand ?? null,
    product_name: [item.brand, item.flavor[0]].filter(Boolean).join(" ") || null,
    variant: item.flavor[0] ?? null,
    barcode: null,
    country_of_origin: null,
    category: item.category ?? null,
    sub_category: item.package_type ?? null,
    flavor: item.flavor.length ? item.flavor.join(", ") : null,
    target_audience: null,
    season_edition: null,
    net_weight: null,
    net_weight_unit: null,
    packaging_type: item.package_type ?? null,
    packaging_material: null,
    primary_colors: item.package_color.length ? item.package_color : null,
    dietary_claims: item.dietary.length ? item.dietary : null,
    allergens: null,
    certifications: null,
    languages: null,
    image_angle: null,
    image_quality: "high",
    description: item.notes ?? null,
    tags: [item.category, item.size, item.package_type].filter(Boolean) as string[],
    metadata: { size: item.size },
    indexed_at: now,
    created_at: now,
    updated_at: now,
  };
}

let records: ImageRecord[] = (snackData.images as SnackImageItem[]).map(toImageRecord);

// ── Helpers ──────────────────────────────────────────────────────────────

function delay<T>(value: T, ms = 300 + Math.random() * 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function matchesArray(recordValues: string[] | null, filterValues?: string[]): boolean {
  if (!filterValues || filterValues.length === 0) return true;
  if (!recordValues) return false;
  return filterValues.every((v) => recordValues.includes(v));
}

function matchesText(recordValue: string | null, filterValue?: string): boolean {
  if (!filterValue) return true;
  if (!recordValue) return false;
  return recordValue.toLowerCase().includes(filterValue.toLowerCase());
}

// ── Mock API (mirrors paths in openapi.json) ────────────────────────────────

export const mockApi = {
  // GET /images/search
  async searchImages(params: SearchParams = {}): Promise<SearchResponse> {
    const {
      q,
      brand,
      category,
      sub_category,
      flavor,
      variant,
      packaging_type,
      packaging_material,
      dietary_claims,
      allergens,
      certifications,
      image_angle,
      image_quality,
      tags,
      limit = 20,
      offset = 0,
    } = params;

    const filtered = records.filter((r) => {
      if (q) {
        const haystack = [r.brand, r.product_name, r.description, r.flavor].filter(Boolean).join(" ").toLowerCase();
        if (!haystack.includes(q.toLowerCase())) return false;
      }
      if (!matchesText(r.brand, brand)) return false;
      if (!matchesText(r.category, category)) return false;
      if (!matchesText(r.sub_category, sub_category)) return false;
      if (!matchesText(r.flavor, flavor)) return false;
      if (!matchesText(r.variant, variant)) return false;
      if (!matchesText(r.packaging_type, packaging_type)) return false;
      if (!matchesText(r.packaging_material, packaging_material)) return false;
      if (image_angle && r.image_angle !== image_angle) return false;
      if (image_quality && r.image_quality !== image_quality) return false;
      if (!matchesArray(r.dietary_claims, dietary_claims)) return false;
      if (!matchesArray(r.allergens, allergens)) return false;
      if (!matchesArray(r.certifications, certifications)) return false;
      if (!matchesArray(r.tags, tags)) return false;
      return true;
    });

    const page = filtered.slice(offset, offset + limit);
    return delay({ results: page, total: filtered.length });
  },

  // GET /images/{image_id}
  async getImage(imageId: string): Promise<ImageRecord> {
    const record = records.find((r) => r.id === imageId);
    if (!record) return delay(undefined as never).then(() => {
      throw new ApiError(404, `Image ${imageId} not found`);
    });
    return delay(record);
  },

  // DELETE /images/{image_id}
  async deleteImage(imageId: string): Promise<void> {
    const exists = records.some((r) => r.id === imageId);
    if (!exists) throw new ApiError(404, `Image ${imageId} not found`);
    records = records.filter((r) => r.id !== imageId);
    return delay(undefined);
  },

  // PUT /images/{image_id}/attributes
  async updateAttributes(imageId: string, updates: ImageUpdateRequest): Promise<ImageRecord> {
    const index = records.findIndex((r) => r.id === imageId);
    if (index === -1) throw new ApiError(404, `Image ${imageId} not found`);
    const updated: ImageRecord = {
      ...records[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    records[index] = updated;
    return delay(updated);
  },

  // POST /images/index
  async indexImages(request: IndexRequest): Promise<Record<string, unknown>> {
    const paths = request.file_paths ?? [];
    return delay({ indexed: paths.length, folder_path: request.folder_path ?? null });
  },
};
