
// Mock Data Service - Use this for development/testing
// Switch to real API by setting USE_MOCK_DATA = false
import type {  TierDef } from "./api";
export const USE_MOCK_DATA = false; // Set to false to use real backend


// ── Tier Definitions ───────────────────────────────────────────────────────
const TIERS: TierDef[] = [
  { id: "S", label: "S", color: "#ff4655", textColor: "#fff", glow: "rgba(255,70,85,0.35)", rowBg: "rgba(255,70,85,0.07)" },
  { id: "A", label: "A", color: "#ff8c00", textColor: "#fff", glow: "rgba(255,140,0,0.35)", rowBg: "rgba(255,140,0,0.07)" },
  { id: "B", label: "B", color: "#ffd700", textColor: "#111", glow: "rgba(255,215,0,0.3)", rowBg: "rgba(255,215,0,0.06)" },
  { id: "C", label: "C", color: "#3ec16a", textColor: "#fff", glow: "rgba(62,193,106,0.35)", rowBg: "rgba(62,193,106,0.07)" },
  { id: "D", label: "D", color: "#3b82f6", textColor: "#fff", glow: "rgba(59,130,246,0.35)", rowBg: "rgba(59,130,246,0.07)" },
];



interface ImageItem {
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

// Image Item --------- 
let Images: ImageItem[] = [
  {
      "id": "snack_001",
      "filename": "snack_001.jpg",
      "filepath": "../assets/snacks/snack_001.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese", "original", "sour-cream-onion", "cheddar-sour-cream", "bbq", "pizza"],
      "package_color": ["red", "orange", "green", "blue", "purple", "white"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "27 cups variety pack, 6 flavors"
    },
    {
      "id": "snack_002",
      "filename": "snack_002.jpg",
      "filepath": "../assets/snacks/snack_002.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["classic", "barbecue", "sour-cream-onion", "salt-vinegar", "dill-pickle"],
      "package_color": ["yellow", "red", "white"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags, 1 oz each, 5 flavors"
    },
    {
      "id": "snack_003",
      "filename": "snack_003.jpg",
      "filepath": "../assets/snacks/snack_003.jpg",
      "brand": "Great Value",
      "category": "chips",
      "flavor": ["cheese-crunch", "crunchy-tortilla", "bbq", "original", "cheese-tortilla", "salted-original"],
      "package_color": ["green", "yellow", "blue", "red"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "30 bags, 1 oz each, 6 flavors, family variety pack"
    },
    {
      "id": "snack_004",
      "filename": "snack_004.jpg",
      "filepath": "../assets/snacks/snack_004.jpg",
      "brand": "SunChips",
      "category": "chips",
      "flavor": ["harvest-cheddar", "garden-salsa", "original", "french-onion"],
      "package_color": ["orange", "yellow", "white"],
      "size": "variety-pack",
      "dietary": ["whole-grain"],
      "package_type": "multi-pack",
      "notes": "18 bags, 1 oz each, 100% whole grain"
    },
    {
      "id": "snack_005",
      "filename": "snack_005.jpg",
      "filepath": "../assets/snacks/snack_005.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["classic"],
      "package_color": ["yellow", "red", "white"],
      "size": "multi-pack",
      "dietary": ["gluten-free"],
      "package_type": "multi-pack",
      "notes": "10 bags, 1 oz each"
    },
    {
      "id": "snack_006",
      "filename": "snack_006.jpg",
      "filepath": "../assets/snacks/snack_006.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese", "cool-ranch", "spicy-sweet-chili", "spicy-nacho", "sweet-tangy-bbq"],
      "package_color": ["red", "orange", "yellow"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags, 1 oz each, 5 flavors"
    },
    {
      "id": "snack_007",
      "filename": "snack_007.jpg",
      "filepath": "../assets/snacks/snack_007.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese"],
      "package_color": ["red", "yellow", "orange"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "10 bags, 1 oz each"
    },
    {
      "id": "snack_008",
      "filename": "snack_008.jpg",
      "filepath": "../assets/snacks/snack_008.jpg",
      "brand": "Funyuns",
      "category": "onion-rings",
      "flavor": ["onion"],
      "package_color": ["yellow", "green"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "10 bags, 3/4 oz each"
    },
    {
      "id": "snack_009",
      "filename": "snack_009.jpg",
      "filepath": "../assets/snacks/snack_009.jpg",
      "brand": "Miss Vickie's",
      "category": "chips",
      "flavor": ["jalapeno", "sea-salt", "sour-cream-onion", "applewood-smoked-bbq"],
      "package_color": ["red", "gold", "cream"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "15 bags, 1 oz each, kettle cooked, 4 flavors"
    },
    {
      "id": "snack_010",
      "filename": "snack_010.jpg",
      "filepath": "../assets/snacks/snack_010.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["red", "white", "yellow"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "12 snack cups, original"
    },
    {
      "id": "snack_011",
      "filename": "snack_011.jpg",
      "filepath": "../assets/snacks/snack_011.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["classic"],
      "package_color": ["yellow", "gold"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz single bag"
    },
    {
      "id": "snack_012",
      "filename": "snack_012.jpg",
      "filepath": "../assets/snacks/snack_012.jpg",
      "brand": "Great Value",
      "category": "chips",
      "flavor": ["salted-original", "bbq", "sour-cream-onion", "cheddar-sour-cream"],
      "package_color": ["blue", "yellow", "white"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "20 bags, 1 oz each, 4 flavors, classic variety pack"
    },
    {
      "id": "snack_013",
      "filename": "snack_013.jpg",
      "filepath": "../assets/snacks/snack_013.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese", "original", "sour-cream-onion"],
      "package_color": ["red", "orange", "green", "yellow"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "27 snack cups, 3 flavors (9 each)"
    },
    {
      "id": "snack_014",
      "filename": "snack_014.jpg",
      "filepath": "../assets/snacks/snack_014.jpg",
      "brand": "Ruffles",
      "category": "chips",
      "flavor": ["cheddar-sour-cream"],
      "package_color": ["blue", "red", "white"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz single bag"
    },
    {
      "id": "snack_015",
      "filename": "snack_015.jpg",
      "filepath": "../assets/snacks/snack_015.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "doritos-nacho-cheese", "doritos-cool-ranch", "fritos-original", "lays-classic", "ruffles-original"],
      "package_color": ["blue", "white"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags classic mix, 6 varieties"
    },
    {
      "id": "snack_016",
      "filename": "snack_016.jpg",
      "filepath": "../assets/snacks/snack_016.jpg",
      "brand": "PopCorners",
      "category": "popcorn-chips",
      "flavor": ["kettle-corn", "white-cheddar", "sea-salt"],
      "package_color": ["navy", "white", "red", "blue", "teal"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "15 bags, popped never fried, 3 flavors"
    },
    {
      "id": "snack_017",
      "filename": "snack_017.jpg",
      "filepath": "../assets/snacks/snack_017.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["doritos-cool-ranch", "doritos-nacho-cheese", "cheetos-puffs", "cheetos-crunchy"],
      "package_color": ["red", "orange"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags Doritos & Cheetos mix"
    },
    {
      "id": "snack_018",
      "filename": "snack_018.jpg",
      "filepath": "../assets/snacks/snack_018.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "doritos-nacho-cheese", "doritos-cool-ranch", "fritos-original", "funyuns-onion", "lays-classic", "ruffles-original", "smartfood-white-cheddar"],
      "package_color": ["blue", "white"],
      "size": "bulk-box",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "42 bags classic mix, 8 varieties"
    },
    {
      "id": "snack_019",
      "filename": "snack_019.jpg",
      "filepath": "../assets/snacks/snack_019.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "doritos-nacho-cheese", "doritos-cool-ranch", "fritos-chili-cheese", "lays-bbq", "lays-sour-cream-onion"],
      "package_color": ["purple", "magenta", "white"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags flavor mix, 6 varieties"
    },
    {
      "id": "snack_020",
      "filename": "snack_020.jpg",
      "filepath": "../assets/snacks/snack_020.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["cool-ranch"],
      "package_color": ["blue", "black"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz single bag"
    },
    {
      "id": "snack_021",
      "filename": "snack_021.jpg",
      "filepath": "../assets/snacks/snack_021.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["sour-cream-onion"],
      "package_color": ["green", "white"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "12 snack cups, sour cream & onion"
    },
    {
      "id": "snack_022",
      "filename": "snack_022.jpg",
      "filepath": "../assets/snacks/snack_022.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["original", "cheddar-cheese", "sour-cream-onion", "bbq"],
      "package_color": ["red", "yellow", "green", "purple"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "16 cans variety pack, 22 oz total"
    },
    {
      "id": "snack_023",
      "filename": "snack_023.jpg",
      "filepath": "../assets/snacks/snack_023.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["cheese-puffs"],
      "package_color": ["orange", "blue"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "7/8 oz single bag, puffs"
    },
    {
      "id": "snack_024",
      "filename": "snack_024.jpg",
      "filepath": "../assets/snacks/snack_024.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy-cheese", "cheetos-puffs-cheese", "doritos-nacho-cheese", "fritos-chili-cheese", "sunchips-harvest-cheddar"],
      "package_color": ["orange"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags cheesy mix, 5 varieties"
    },
    {
      "id": "snack_025",
      "filename": "snack_025.jpg",
      "filepath": "../assets/snacks/snack_025.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["red"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.2 oz can"
    },
    {
      "id": "snack_026",
      "filename": "snack_026.jpg",
      "filepath": "../assets/snacks/snack_026.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["cheese-puffs"],
      "package_color": ["orange", "blue"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "8 oz bag, puffs"
    },
    {
      "id": "snack_027",
      "filename": "snack_027.jpg",
      "filepath": "../assets/snacks/snack_027.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["sour-cream-onion"],
      "package_color": ["green"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz can"
    },
    {
      "id": "snack_028",
      "filename": "snack_028.jpg",
      "filepath": "../assets/snacks/snack_028.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "cheetos-puffs", "fritos-honey-bbq-twists", "funyuns-onion", "lays-classic", "ruffles-sour-cream-onion"],
      "package_color": ["pink"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags family fun mix, 6 varieties"
    },
    {
      "id": "snack_029",
      "filename": "snack_029.jpg",
      "filepath": "../assets/snacks/snack_029.jpg",
      "brand": "PopCorners",
      "category": "popcorn-chips",
      "flavor": ["sea-salt", "kettle-corn", "white-cheddar"],
      "package_color": ["white", "navy", "teal"],
      "size": "variety-pack",
      "dietary": ["gluten-free"],
      "package_type": "multi-pack",
      "notes": "15 bags, popped never fried, 3 flavors"
    },
    {
      "id": "snack_030",
      "filename": "snack_030.jpg",
      "filepath": "../assets/snacks/snack_030.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["flamin-hot-crunchy"],
      "package_color": ["orange", "yellow", "red", "black"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz single bag, flamin' hot crunchy"
    },
    {
      "id": "snack_031",
      "filename": "snack_031.jpg",
      "filepath": "../assets/snacks/snack_031.jpg",
      "brand": "Takis",
      "category": "tortilla-chips",
      "flavor": ["blue-heat"],
      "package_color": ["purple", "blue"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.9 oz rolled tortilla chips"
    },
    {
      "id": "snack_032",
      "filename": "snack_032.jpg",
      "filepath": "../assets/snacks/snack_032.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy-flamin-hot", "cheetos-puffs-flamin-hot", "fritos-flamin-hot", "doritos-flamin-hot-nacho", "chesters-fries-flamin-hot"],
      "package_color": ["red", "black", "orange"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags flamin' hot mix, 5 varieties"
    },
    {
      "id": "snack_033",
      "filename": "snack_033.jpg",
      "filepath": "../assets/snacks/snack_033.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese"],
      "package_color": ["red"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz single bag"
    },
    {
      "id": "snack_034",
      "filename": "snack_034.jpg",
      "filepath": "../assets/snacks/snack_034.jpg",
      "brand": "Great Value",
      "category": "snack-mix",
      "flavor": ["tortilla-chips", "potato-chips", "ranch-tortilla-chips", "cheese-crunch"],
      "package_color": ["pink", "orange", "blue"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "20 bags, 1 oz each, 4 flavors, flavor variety pack"
    },
    {
      "id": "snack_035",
      "filename": "snack_035.jpg",
      "filepath": "../assets/snacks/snack_035.jpg",
      "brand": "Funyuns",
      "category": "onion-rings",
      "flavor": ["onion"],
      "package_color": ["yellow", "green"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "3/4 oz single bag"
    },
    {
      "id": "snack_036",
      "filename": "snack_036.jpg",
      "filepath": "../assets/snacks/snack_036.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese"],
      "package_color": ["red"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "14.5 oz party size"
    },
    {
      "id": "snack_037",
      "filename": "snack_037.jpg",
      "filepath": "../assets/snacks/snack_037.jpg",
      "brand": "Munchos",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["copper", "orange"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "4.25 oz potato crisps"
    },
    {
      "id": "snack_038",
      "filename": "snack_038.jpg",
      "filepath": "../assets/snacks/snack_038.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["white-cheddar"],
      "package_color": ["orange", "yellow"],
      "size": "standard",
      "dietary": ["gluten-free"],
      "package_type": "single",
      "notes": "5 oz Poppables white cheddar"
    },
    {
      "id": "snack_039",
      "filename": "snack_039.jpg",
      "filepath": "../assets/snacks/snack_039.jpg",
      "brand": "Takis",
      "category": "tortilla-chips",
      "flavor": ["fuego"],
      "package_color": ["purple", "red", "yellow"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "25 mini bags, rolled tortilla chips"
    },
    {
      "id": "snack_040",
      "filename": "snack_040.jpg",
      "filepath": "../assets/snacks/snack_040.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["cheese-crunchy"],
      "package_color": ["orange", "red"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "8.5 oz crunchy"
    },
    {
      "id": "snack_041",
      "filename": "snack_041.jpg",
      "filepath": "../assets/snacks/snack_041.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "cheetos-puffs", "lays-sour-cream-onion", "lays-barbecue", "ruffles-cheddar-sour-cream", "fritos-chili-cheese", "doritos-nacho-cheese", "doritos-cool-ranch"],
      "package_color": ["purple", "yellow"],
      "size": "bulk-box",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "42 bags flavor mix mega size, 8 varieties"
    },
    {
      "id": "snack_042",
      "filename": "snack_042.jpg",
      "filepath": "../assets/snacks/snack_042.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["salt-vinegar"],
      "package_color": ["blue", "yellow"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "7.75 oz salt & vinegar"
    },
    {
      "id": "snack_043",
      "filename": "snack_043.jpg",
      "filepath": "../assets/snacks/snack_043.jpg",
      "brand": "Sabritones",
      "category": "wheat-../assets/snacks",
      "flavor": ["chile-lime"],
      "package_color": ["red", "yellow", "green"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "4 oz puffed wheat ../assets/snacks"
    },
    {
      "id": "snack_044",
      "filename": "snack_044.jpg",
      "filepath": "../assets/snacks/snack_044.jpg",
      "brand": "Simply Doritos",
      "category": "tortilla-chips",
      "flavor": ["white-cheddar-nacho"],
      "package_color": ["white", "green", "red"],
      "size": "standard",
      "dietary": ["whole-grain"],
      "package_type": "single",
      "notes": "5.5 oz, no artificial colors or flavors"
    },
    {
      "id": "snack_045",
      "filename": "snack_045.jpg",
      "filepath": "../assets/snacks/snack_045.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["red", "yellow"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "2.3 oz grab n' go canister"
    },
    {
      "id": "snack_046",
      "filename": "snack_046.jpg",
      "filepath": "../assets/snacks/snack_046.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese"],
      "package_color": ["red", "black"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "5.125 oz minis nacho cheese canister"
    },
    {
      "id": "snack_047",
      "filename": "snack_047.jpg",
      "filepath": "../assets/snacks/snack_047.jpg",
      "brand": "Fritos",
      "category": "corn-chips",
      "flavor": ["chili-cheese"],
      "package_color": ["gold", "brown", "red"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.25 oz chili cheese corn chips"
    },
    {
      "id": "snack_048",
      "filename": "snack_048.jpg",
      "filepath": "../assets/snacks/snack_048.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["spicy-nacho"],
      "package_color": ["dark-red", "black", "blue"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "14.5 oz party size"
    },
    {
      "id": "snack_049",
      "filename": "snack_049.jpg",
      "filepath": "../assets/snacks/snack_049.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["classic"],
      "package_color": ["yellow", "gold"],
      "size": "single",
      "dietary": ["gluten-free"],
      "package_type": "single",
      "notes": "2.5 oz single bag"
    },
    {
      "id": "snack_050",
      "filename": "snack_050.jpg",
      "filepath": "../assets/snacks/snack_050.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-flamin-hot", "doritos-spicy-sweet-chili", "doritos-spicy-nacho", "funyuns-onion", "lays-salt-vinegar"],
      "package_color": ["black", "dark-blue"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags bold mix, 5 varieties"
    },
    {
      "id": "snack_051",
      "filename": "snack_051.jpg",
      "filepath": "../assets/snacks/snack_051.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["philly-cheesesteak"],
      "package_color": ["blue", "red", "white"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz philly cheesesteak flavor"
    },
    {
      "id": "snack_052",
      "filename": "snack_052.jpg",
      "filepath": "../assets/snacks/snack_052.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["cheese-puffs"],
      "package_color": ["orange", "blue"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "13.5 oz party size puffs"
    },
    {
      "id": "snack_053",
      "filename": "snack_053.jpg",
      "filepath": "../assets/snacks/snack_053.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["red", "yellow"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "1.3 oz grab n' go canister"
    },
    {
      "id": "snack_054",
      "filename": "snack_054.jpg",
      "filepath": "../assets/snacks/snack_054.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese", "original", "sour-cream-onion"],
      "package_color": ["red", "orange", "green"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 snack cups, 3 flavors (6 each)"
    },
    {
      "id": "snack_055",
      "filename": "snack_055.jpg",
      "filepath": "../assets/snacks/snack_055.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["cool-ranch"],
      "package_color": ["blue", "dark-blue"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.25 oz cool ranch"
    },
    {
      "id": "snack_056",
      "filename": "snack_056.jpg",
      "filepath": "../assets/snacks/snack_056.jpg",
      "brand": "Ritz",
      "category": "crackers",
      "flavor": ["original"],
      "package_color": ["red", "blue", "yellow"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "Toasted chips original flavor"
    },
    {
      "id": "snack_057",
      "filename": "snack_057.jpg",
      "filepath": "../assets/snacks/snack_057.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "cheetos-puffs", "doritos-nacho-cheese", "doritos-cool-ranch", "lays-sour-cream-onion", "rold-gold-pretzels", "smartfood-white-cheddar", "sunchips-harvest-cheddar"],
      "package_color": ["pink", "magenta"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "28 bags flavor mix, 8 varieties"
    },
    {
      "id": "snack_058",
      "filename": "snack_058.jpg",
      "filepath": "../assets/snacks/snack_058.jpg",
      "brand": "Utz",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["red", "yellow", "white"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "10 bags, 1 oz each"
    },
    {
      "id": "snack_059",
      "filename": "snack_059.jpg",
      "filepath": "../assets/snacks/snack_059.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["spicy-sweet-chili"],
      "package_color": ["purple", "black"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.25 oz spicy sweet chili"
    },
    {
      "id": "snack_060",
      "filename": "snack_060.jpg",
      "filepath": "../assets/snacks/snack_060.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy", "doritos-nacho-cheese", "doritos-cool-ranch", "fritos-original", "lays-classic", "lays-barbecue", "ruffles-original", "smartfood-white-cheddar"],
      "package_color": ["blue", "dark-blue"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "28 bags classic mix, 8 varieties"
    },
    {
      "id": "snack_061",
      "filename": "snack_061.jpg",
      "filepath": "../assets/snacks/snack_061.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-flamin-hot-crunchy", "cheetos-cheddar-jalapeno", "doritos-dinamita-chile-limon", "funyuns-flamin-hot"],
      "package_color": ["dark-red", "black"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 bags fiery mix"
    },
    {
      "id": "snack_062",
      "filename": "snack_062.jpg",
      "filepath": "../assets/snacks/snack_062.jpg",
      "brand": "Munchies",
      "category": "snack-mix",
      "flavor": ["cheese-fix"],
      "package_color": ["red", "orange", "blue"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "13 oz party size cheese fix mix"
    },
    {
      "id": "snack_063",
      "filename": "snack_063.jpg",
      "filepath": "../assets/snacks/snack_063.jpg",
      "brand": "Hangry Outlaw Snax",
      "category": "tortilla-chips",
      "flavor": ["crazy-queso"],
      "package_color": ["black", "orange", "white"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "Crazy queso flavored tortilla chips"
    },
    {
      "id": "snack_064",
      "filename": "snack_064.jpg",
      "filepath": "../assets/snacks/snack_064.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["flamin-hot-crunchy"],
      "package_color": ["orange", "black", "yellow"],
      "size": "multi-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "10 bags, 1 oz each, flamin' hot crunchy"
    },
    {
      "id": "snack_065",
      "filename": "snack_065.jpg",
      "filepath": "../assets/snacks/snack_065.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["dinamita-chile-limon"],
      "package_color": ["green", "yellow"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "3.25 oz rolled tortilla chips"
    },
    {
      "id": "snack_066",
      "filename": "snack_066.jpg",
      "filepath": "../assets/snacks/snack_066.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["pizza"],
      "package_color": ["white", "red"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz pizza flavor can"
    },
    {
      "id": "snack_067",
      "filename": "snack_067.jpg",
      "filepath": "../assets/snacks/snack_067.jpg",
      "brand": "Ruffles",
      "category": "chips",
      "flavor": ["cheddar-sour-cream"],
      "package_color": ["blue", "red", "white"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "8 oz cheddar & sour cream"
    },
    {
      "id": "snack_068",
      "filename": "snack_068.jpg",
      "filepath": "../assets/snacks/snack_068.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese"],
      "package_color": ["orange"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz cheddar cheese can"
    },
    {
      "id": "snack_069",
      "filename": "snack_069.jpg",
      "filepath": "../assets/snacks/snack_069.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["bbq"],
      "package_color": ["dark-purple", "maroon"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz bbq can"
    },
    {
      "id": "snack_070",
      "filename": "snack_070.jpg",
      "filepath": "../assets/snacks/snack_070.jpg",
      "brand": "Gardetto's",
      "category": "snack-mix",
      "flavor": ["garlic-rye"],
      "package_color": ["brown", "gold", "cream"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "14 oz garlic rye chips"
    },
    {
      "id": "snack_071",
      "filename": "snack_071.jpg",
      "filepath": "../assets/snacks/snack_071.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["sour-cream-onion"],
      "package_color": ["green"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "1.4 oz grab n' go canister"
    },
    {
      "id": "snack_072",
      "filename": "snack_072.jpg",
      "filepath": "../assets/snacks/snack_072.jpg",
      "brand": "Fritos",
      "category": "corn-chips",
      "flavor": ["honey-bbq-twists"],
      "package_color": ["gold", "blue"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.25 oz flavor twists honey bbq"
    },
    {
      "id": "snack_073",
      "filename": "snack_073.jpg",
      "filepath": "../assets/snacks/snack_073.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["dill-pickle"],
      "package_color": ["green", "olive-green"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz dill pickle can"
    },
    {
      "id": "snack_074",
      "filename": "snack_074.jpg",
      "filepath": "../assets/snacks/snack_074.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["salt-vinegar"],
      "package_color": ["blue"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz salt & vinegar can"
    },
    {
      "id": "snack_075",
      "filename": "snack_075.jpg",
      "filepath": "../assets/snacks/snack_075.jpg",
      "brand": "SunChips",
      "category": "chips",
      "flavor": ["harvest-cheddar"],
      "package_color": ["orange"],
      "size": "standard",
      "dietary": ["whole-grain"],
      "package_type": "single",
      "notes": "7 oz harvest cheddar, 100% whole grain"
    },
    {
      "id": "snack_076",
      "filename": "snack_076.jpg",
      "filepath": "../assets/snacks/snack_076.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["hot-honey"],
      "package_color": ["yellow", "gold"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz hot honey can"
    },
    {
      "id": "snack_077",
      "filename": "snack_077.jpg",
      "filepath": "../assets/snacks/snack_077.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["dill-pickle"],
      "package_color": ["green", "olive-green"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "7.75 oz dill pickle"
    },
    {
      "id": "snack_078",
      "filename": "snack_078.jpg",
      "filepath": "../assets/snacks/snack_078.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["bbq"],
      "package_color": ["purple", "maroon"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "1.4 oz grab n' go bbq"
    },
    {
      "id": "snack_079",
      "filename": "snack_079.jpg",
      "filepath": "../assets/snacks/snack_079.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["nacho-cheese"],
      "package_color": ["red", "orange"],
      "size": "bulk-box",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "50 bags, 1 oz each, exclusive item"
    },
    {
      "id": "snack_080",
      "filename": "snack_080.jpg",
      "filepath": "../assets/snacks/snack_080.jpg",
      "brand": "Cheetos",
      "category": "cheese-../assets/snacks",
      "flavor": ["cheddar"],
      "package_color": ["orange", "yellow", "white"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "3.625 oz minis cheddar canister"
    },
    {
      "id": "snack_081",
      "filename": "snack_081.jpg",
      "filepath": "../assets/snacks/snack_081.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese", "original", "sour-cream-onion", "bbq"],
      "package_color": ["red", "orange", "green", "purple"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "15 cans variety pack"
    },
    {
      "id": "snack_082",
      "filename": "snack_082.jpg",
      "filepath": "../assets/snacks/snack_082.jpg",
      "brand": "Ritz",
      "category": "crackers",
      "flavor": ["veggie"],
      "package_color": ["red", "yellow"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "Toasted chips veggie flavor"
    },
    {
      "id": "snack_083",
      "filename": "snack_083.jpg",
      "filepath": "../assets/snacks/snack_083.jpg",
      "brand": "Funyuns",
      "category": "onion-rings",
      "flavor": ["onion"],
      "package_color": ["yellow", "green"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "6 oz onion flavored rings"
    },
    {
      "id": "snack_084",
      "filename": "snack_084.jpg",
      "filepath": "../assets/snacks/snack_084.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["beer-can-chicken"],
      "package_color": ["white", "gold"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz beer can chicken limited edition"
    },
    {
      "id": "snack_085",
      "filename": "snack_085.jpg",
      "filepath": "../assets/snacks/snack_085.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["everything-bagel"],
      "package_color": ["blue", "purple"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz everything bagel flavor"
    },
    {
      "id": "snack_086",
      "filename": "snack_086.jpg",
      "filepath": "../assets/snacks/snack_086.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["salt-vinegar"],
      "package_color": ["blue"],
      "size": "single",
      "dietary": [],
      "package_type": "single",
      "notes": "1 oz salt & vinegar"
    },
    {
      "id": "snack_087",
      "filename": "snack_087.jpg",
      "filepath": "../assets/snacks/snack_087.jpg",
      "brand": "SunChips",
      "category": "chips",
      "flavor": ["harvest-cheddar"],
      "package_color": ["orange"],
      "size": "mini-canister",
      "dietary": ["whole-grain"],
      "package_type": "single",
      "notes": "3.19 oz minis harvest cheddar, 100% whole grain"
    },
    {
      "id": "snack_088",
      "filename": "snack_088.jpg",
      "filepath": "../assets/snacks/snack_088.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["lightly-salted-original"],
      "package_color": ["red", "white"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.2 oz lightly salted original"
    },
    {
      "id": "snack_089",
      "filename": "snack_089.jpg",
      "filepath": "../assets/snacks/snack_089.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy-flamin-hot", "cheetos-crunchy-flamin-hot-limon", "cheetos-puffs-flamin-hot", "doritos-flamin-hot-nacho", "funyuns-flamin-hot", "ruffles-flamin-hot-cheddar-sour-cream"],
      "package_color": ["red", "black", "orange"],
      "size": "bulk-box",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "42 bags flamin' hot mix, 6 varieties"
    },
    {
      "id": "snack_090",
      "filename": "snack_090.jpg",
      "filepath": "../assets/snacks/snack_090.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese"],
      "package_color": ["orange"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "2.5 oz grab n' go cheddar cheese"
    },
    {
      "id": "snack_091",
      "filename": "snack_091.jpg",
      "filepath": "../assets/snacks/snack_091.jpg",
      "brand": "SunChips",
      "category": "chips",
      "flavor": ["garden-salsa"],
      "package_color": ["red"],
      "size": "standard",
      "dietary": ["whole-grain"],
      "package_type": "single",
      "notes": "7 oz garden salsa, 100% whole grain"
    },
    {
      "id": "snack_092",
      "filename": "snack_092.jpg",
      "filepath": "../assets/snacks/snack_092.jpg",
      "brand": "Doritos",
      "category": "tortilla-chips",
      "flavor": ["sweet-tangy-bbq"],
      "package_color": ["black"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "9.25 oz sweet & tangy bbq"
    },
    {
      "id": "snack_093",
      "filename": "snack_093.jpg",
      "filepath": "../assets/snacks/snack_093.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["cheddar-cheese"],
      "package_color": ["orange"],
      "size": "mini-canister",
      "dietary": [],
      "package_type": "single",
      "notes": "1.4 oz grab n' go cheddar cheese"
    },
    {
      "id": "snack_094",
      "filename": "snack_094.jpg",
      "filepath": "../assets/snacks/snack_094.jpg",
      "brand": "Ruffles",
      "category": "chips",
      "flavor": ["original"],
      "package_color": ["blue", "white"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "13 oz party size original ridged chips"
    },
    {
      "id": "snack_095",
      "filename": "snack_095.jpg",
      "filepath": "../assets/snacks/snack_095.jpg",
      "brand": "Lay's",
      "category": "chips",
      "flavor": ["classic"],
      "package_color": ["yellow"],
      "size": "bulk-box",
      "dietary": ["gluten-free"],
      "package_type": "multi-pack",
      "notes": "50 bags, 1 oz each"
    },
    {
      "id": "snack_096",
      "filename": "snack_096.jpg",
      "filepath": "../assets/snacks/snack_096.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["cheetos-crunchy-flamin-hot", "cheetos-cheddar-jalapeno", "doritos-spicy-nacho", "doritos-spicy-sweet-chili", "fritos-honey-bbq-twists", "funyuns-onion", "lays-salt-vinegar", "lays-limon"],
      "package_color": ["black", "green", "blue", "orange"],
      "size": "bulk-box",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "42 bags bold variety, 8 varieties"
    },
    {
      "id": "snack_097",
      "filename": "snack_097.jpg",
      "filepath": "../assets/snacks/snack_097.jpg",
      "brand": "Bugles",
      "category": "corn-snacks",
      "flavor": ["original"],
      "package_color": ["red", "yellow", "blue"],
      "size": "party-size",
      "dietary": [],
      "package_type": "single",
      "notes": "14.5 oz family size cone-shaped corn snacks"
    },
    {
      "id": "snack_098",
      "filename": "snack_098.jpg",
      "filepath": "snacks/snack_098.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["mexican-street-corn"],
      "package_color": ["yellow"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz mexican street corn (elote) flavor"
    },
    {
      "id": "snack_099",
      "filename": "snack_099.jpg",
      "filepath": "../assets/snacks/snack_099.jpg",
      "brand": "Pringles",
      "category": "chips",
      "flavor": ["honey-mustard"],
      "package_color": ["gold", "brown"],
      "size": "standard",
      "dietary": [],
      "package_type": "single",
      "notes": "5.5 oz honey mustard flavor"
    },
    {
      "id": "snack_100",
      "filename": "snack_100.jpg",
      "filepath": "../assets/snacks/snack_100.jpg",
      "brand": "Frito-Lay",
      "category": "snack-mix",
      "flavor": ["doritos-minis-nacho-cheese", "sunchips-minis-harvest-cheddar", "cheetos-minis-cheddar"],
      "package_color": ["black", "red", "orange"],
      "size": "variety-pack",
      "dietary": [],
      "package_type": "multi-pack",
      "notes": "18 snack size cups minis variety pack, 3 varieties"
    }
]


// ── Categories sourced from JSON ───────────────────────────────────────────

const CATEGORIES = Images.category;

// ── Mock API ───────────────────────────────────────────────────────────────
export const mockApi = {
async function fetchImages(category: string): Promise<ImageItem[]> {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 600));
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return [];
  const shuffled = [...cat.photos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((p, i) => ({
    id: `${categoryId}-${p.unsplashId.slice(-8)}-${Date.now()}-${i}`,
    unsplashId: p.unsplashId,
    alt: p.alt,
    category: categoryId,
  }));
}

// ── ImageCard ──────────────────────────────────────────────────────────────

interface CardProps {
  item: ImageItem;
  from: TierId;
  isDragging: boolean;
  onDragStart: (e: React.DragEvent, item: ImageItem, from: TierId) => void;
  onDragEnd: () => void;
  onRemove: (item: ImageItem, from: TierId) => void;
}

function ImageCard({ item, from, isDragging, onDragStart, onDragEnd, onRemove }: CardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, item, from)}
      onDragEnd={onDragEnd}
      className={[
        "group relative w-[84px] h-[84px] rounded shrink-0 overflow-hidden border cursor-grab active:cursor-grabbing transition-all duration-150",
        isDragging
          ? "opacity-25 scale-95 border-white/20"
          : "border-white/10 hover:border-white/35 hover:scale-105",
      ].join(" ")}
    >
      <img
        src={`https://images.unsplash.com/photo-${item.unsplashId}?w=168&h=168&fit=crop&auto=format`}
        alt={item.alt}
        className="w-full h-full object-cover pointer-events-none bg-muted"
        draggable={false}
      />
      <button
        onClick={() => onRemove(item, from)}
        className="absolute top-1 right-1 w-[18px] h-[18px] rounded-full bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive"
        title={from === "pool" ? "Remove" : "Send back to pool"}
      >
        <X size={10} />
      </button>
      <div className="absolute bottom-0 left-0 right-0 px-1 py-0.5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[9px] text-white/80 truncate leading-tight">{item.alt}</p>
      </div>
    </div>
  );
}
}