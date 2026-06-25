export interface ImageItem {
  id: string;
  filename: string;
  filepath: string;
  brand: string;
  category: string;
  flavor: string[];
  package_color: string[];
  size: string;
  dietary: any[];
  package_type: string;
  notes: string;
}

export interface ImagesData {
  total_analyzed: number;
  total_images_in_folder: number;
  coverage_percentage: number;
  images: ImageItem[];
}

type TierId = "S" | "A" | "B" | "C" | "D" | "pool";

export interface TierDef {
  id: Exclude<TierId, "pool">;
  label: string;
  color: string;
  textColor: string;
  glow: string;
  rowBg: string;
}
