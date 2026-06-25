import { useState } from "react";
import { RefreshCw, Shuffle, Trash2, RotateCcw, Zap, X } from "lucide-react";
import { apiClient, type ImageRecord } from "./services";
import BehaviorallyLogo from "./assets/behaviorally-logo.jpeg";

// ── Types ──────────────────────────────────────────────────────────────────

// Pool items get a unique `uid` since the same snack can be fetched more
// than once (apiClient.searchImages returns the same ImageRecord ids).
interface PoolItem extends ImageRecord {
  uid: string;
}

type TierId = "S" | "A" | "B" | "C" | "D" | "pool";

interface TierDef {
  id: Exclude<TierId, "pool">;
  label: string;
  color: string;
  textColor: string;
  glow: string;
  rowBg: string;
}

// ── Tier Definitions ───────────────────────────────────────────────────────

const TIERS: TierDef[] = [
  { id: "S", label: "S", color: "#ff4655", textColor: "#fff", glow: "rgba(255,70,85,0.35)", rowBg: "rgba(255,70,85,0.07)" },
  { id: "A", label: "A", color: "#ff8c00", textColor: "#fff", glow: "rgba(255,140,0,0.35)", rowBg: "rgba(255,140,0,0.07)" },
  { id: "B", label: "B", color: "#ffd700", textColor: "#111", glow: "rgba(255,215,0,0.3)", rowBg: "rgba(255,215,0,0.06)" },
  { id: "C", label: "C", color: "#3ec16a", textColor: "#fff", glow: "rgba(62,193,106,0.35)", rowBg: "rgba(62,193,106,0.07)" },
  { id: "D", label: "D", color: "#3b82f6", textColor: "#fff", glow: "rgba(59,130,246,0.35)", rowBg: "rgba(59,130,246,0.07)" },
];

// ── Categories (snack categories served by the mock API) ───────────────────

const CATEGORIES = [
  { id: "chips", label: "Chips", emoji: "🥔" },
  { id: "tortilla-chips", label: "Tortilla Chips", emoji: "🌽" },
  { id: "corn-chips", label: "Corn Chips", emoji: "🌽" },
  { id: "popcorn-chips", label: "Popcorn Chips", emoji: "🍿" },
  { id: "cheese-snacks", label: "Cheese Snacks", emoji: "🧀" },
  { id: "wheat-snacks", label: "Wheat Snacks", emoji: "🌾" },
  { id: "corn-snacks", label: "Corn Snacks", emoji: "🌽" },
  { id: "onion-rings", label: "Onion Rings", emoji: "🧅" },
  { id: "snack-mix", label: "Snack Mix", emoji: "🥜" },
  { id: "crackers", label: "Crackers", emoji: "🍘" },
];

// ── Snack package images ────────────────────────────────────────────────────
// Maps each ImageRecord's `filename` to its bundled asset URL.

const SNACK_IMAGE_MODULES = import.meta.glob("./assets/snacks/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function getSnackImageUrl(filename: string): string | undefined {
  return SNACK_IMAGE_MODULES[`./assets/snacks/${filename}`];
}

// ── Fetch via mock API ──────────────────────────────────────────────────────

async function fetchImages(categoryId: string, count: number): Promise<PoolItem[]> {
  const { results } = await apiClient.searchImages({ category: categoryId, limit: count });
  return results.map((rec, i) => ({ ...rec, uid: `${categoryId}-${rec.id}-${Date.now()}-${i}` }));
}

// ── ImageCard ──────────────────────────────────────────────────────────────

interface CardProps {
  item: PoolItem;
  from: TierId;
  isDragging: boolean;
  onDragStart: (e: React.DragEvent, item: PoolItem, from: TierId) => void;
  onDragEnd: () => void;
  onRemove: (item: PoolItem, from: TierId) => void;
}

function ImageCard({ item, from, isDragging, onDragStart, onDragEnd, onRemove }: CardProps) {
  const label = item.product_name ?? item.brand ?? item.filename;
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
        src={getSnackImageUrl(item.filename)}
        alt={label ?? ""}
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
        <p className="text-[9px] text-white/80 truncate leading-tight">{label}</p>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────────────────────────

export default function App() {
  const [tierData, setTierData] = useState<Record<TierId, PoolItem[]>>({
    S: [], A: [], B: [], C: [], D: [], pool: [],
  });
  const [selectedCats, setSelectedCats] = useState<Set<string>>(new Set(["chips"]));
  const [fetchCount, setFetchCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [dragState, setDragState] = useState<{ item: PoolItem; from: TierId } | null>(null);
  const [dropTarget, setDropTarget] = useState<TierId | null>(null);

  const toggleCat = (id: string) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleFetch = async () => {
    if (loading || selectedCats.size === 0) return;
    setLoading(true);
    try {
      const results = await Promise.all(
        [...selectedCats].map((cat) => fetchImages(cat, fetchCount))
      );
      const newImgs = results.flat();
      setTierData((prev) => ({ ...prev, pool: [...prev.pool, ...newImgs] }));
    } finally {
      setLoading(false);
    }
  };

  const handleDragStart = (e: React.DragEvent, item: PoolItem, from: TierId) => {
    setDragState({ item, from });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, tierId: TierId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dropTarget !== tierId) setDropTarget(tierId);
  };

  const handleDrop = (e: React.DragEvent, to: TierId) => {
    e.preventDefault();
    if (!dragState) return;
    const { item, from } = dragState;
    if (from !== to) {
      setTierData((prev) => ({
        ...prev,
        [from]: prev[from].filter((img) => img.uid !== item.uid),
        [to]: [...prev[to], item],
      }));
    }
    setDragState(null);
    setDropTarget(null);
  };

  const handleDragEnd = () => {
    setDragState(null);
    setDropTarget(null);
  };

  const handleRemove = (item: PoolItem, from: TierId) => {
    if (from === "pool") {
      setTierData((prev) => ({ ...prev, pool: prev.pool.filter((i) => i.uid !== item.uid) }));
    } else {
      setTierData((prev) => ({
        ...prev,
        [from]: prev[from].filter((i) => i.uid !== item.uid),
        pool: [...prev.pool, item],
      }));
    }
  };

  const handleReset = () => {
    const all = Object.values(tierData).flat();
    setTierData({ S: [], A: [], B: [], C: [], D: [], pool: all });
  };

  const handleClear = () => {
    setTierData({ S: [], A: [], B: [], C: [], D: [], pool: [] });
  };

  const shufflePool = () => {
    setTierData((prev) => ({ ...prev, pool: [...prev.pool].sort(() => Math.random() - 0.5) }));
  };

  const totalRanked = TIERS.reduce((sum, t) => sum + tierData[t.id].length, 0);

  return (
    <div
      className="h-screen flex flex-col overflow-hidden bg-background text-foreground select-none"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="shrink-0 border-b border-border px-5 h-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #ff4655 0%, #ff8c00 100%)" }}
          >
            <img src={BehaviorallyLogo} />
          </div>
          <span
            className="text-xl font-black tracking-[0.18em] uppercase text-foreground"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Tier List
          </span>
          <span className="hidden sm:block text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5 ml-1">
            {totalRanked} ranked · {tierData.pool.length} in pool
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            disabled={totalRanked === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <RotateCcw size={12} />
            Reset
          </button>
          <button
            onClick={handleClear}
            disabled={Object.values(tierData).flat().length === 0}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Trash2 size={12} />
            Clear All
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <aside className="w-52 shrink-0 border-r border-border flex flex-col overflow-y-auto">
          <div className="p-3 flex flex-col gap-4">
            {/* Category picker */}
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2 px-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Categories
              </p>
              <div className="flex flex-col gap-0.5">
                {CATEGORIES.map((cat) => {
                  const active = selectedCats.has(cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleCat(cat.id)}
                      className={[
                        "flex items-center gap-2 px-2.5 py-1.5 rounded text-sm text-left transition-all",
                        active
                          ? "bg-primary/15 text-foreground border border-primary/25"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent",
                      ].join(" ")}
                    >
                      <span className="text-base leading-none">{cat.emoji}</span>
                      <span className="font-medium">{cat.label}</span>
                      {active && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Count picker */}
            <div>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2 px-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Images per category
              </p>
              <div className="flex gap-1.5">
                {[4, 6, 8].map((n) => (
                  <button
                    key={n}
                    onClick={() => setFetchCount(n)}
                    className={[
                      "flex-1 py-1.5 rounded text-sm font-semibold transition-all",
                      fetchCount === n
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary",
                    ].join(" ")}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Fetch button */}
            <button
              onClick={handleFetch}
              disabled={loading || selectedCats.size === 0}
              className="w-full py-2.5 rounded-md text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-white"
              style={
                loading || selectedCats.size === 0
                  ? { background: "#2a2a34" }
                  : { background: "linear-gradient(135deg, #ff00ff 0%, #28334A 100%)" }
              }
            >
              {loading ? (
                <>
                  <RefreshCw size={13} className="animate-spin" />
                  Fetching…
                </>
              ) : (
                <>
                  <Zap size={13} />
                  Fetch Images
                </>
              )}
            </button>

            {selectedCats.size === 0 && (
              <p className="text-[11px] text-muted-foreground text-center -mt-2">
                Select at least one category
              </p>
            )}
          </div>
        </aside>

        {/* ── Main Content ─────────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Tier rows */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1.5">
            {TIERS.map((tier) => {
              const isActiveTarget =
                dropTarget === tier.id && dragState !== null && dragState.from !== tier.id;

              return (
                <div
                  key={tier.id}
                  onDragOver={(e) => handleDragOver(e, tier.id)}
                  onDragLeave={() => setDropTarget(null)}
                  onDrop={(e) => handleDrop(e, tier.id)}
                  className="flex rounded-md overflow-hidden border transition-all duration-150"
                  style={{
                    borderColor: isActiveTarget ? tier.color : "rgba(255,255,255,0.08)",
                    boxShadow: isActiveTarget ? `0 0 0 1px ${tier.color}, 0 0 24px ${tier.glow}` : "none",
                  }}
                >
                  {/* Tier label */}
                  <div
                    className="w-16 shrink-0 flex items-center justify-center text-4xl font-black select-none"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      backgroundColor: tier.color,
                      color: tier.textColor,
                      minHeight: 96,
                      textShadow: tier.id !== "B" ? "0 2px 8px rgba(0,0,0,0.5)" : "none",
                    }}
                  >
                    {tier.label}
                  </div>

                  {/* Image drop zone */}
                  <div
                    className="flex-1 flex flex-wrap gap-2 p-2 content-start items-start min-h-[96px] transition-colors duration-150"
                    style={{ backgroundColor: isActiveTarget ? tier.rowBg : "rgba(255,255,255,0.02)" }}
                  >
                    {tierData[tier.id].map((img) => (
                      <ImageCard
                        key={img.uid}
                        item={img}
                        from={tier.id}
                        isDragging={dragState?.item.uid === img.uid}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onRemove={handleRemove}
                      />
                    ))}
                    {isActiveTarget && (
                      <div
                        className="w-[84px] h-[84px] rounded border-2 border-dashed flex items-center justify-center shrink-0 text-2xl font-bold"
                        style={{ borderColor: tier.color, color: tier.color }}
                      >
                        +
                      </div>
                    )}
                    {tierData[tier.id].length === 0 && !isActiveTarget && (
                      <span className="text-[11px] text-muted-foreground/35 self-center ml-2">
                        Drop images here
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Image Pool ───────────────────────────────────────────────── */}
          <div
            className="border-t border-border shrink-0"
            onDragOver={(e) => handleDragOver(e, "pool")}
            onDragLeave={() => setDropTarget(null)}
            onDrop={(e) => handleDrop(e, "pool")}
          >
            <div className="px-4 py-2 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Image Pool
                </span>
                <span className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded font-mono">
                  {tierData.pool.length}
                </span>
              </div>
              <button
                onClick={shufflePool}
                disabled={tierData.pool.length < 2}
                className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Shuffle size={11} />
                Shuffle
              </button>
            </div>

            <div
              className={[
                "px-3 pb-3 flex flex-wrap gap-2 content-start transition-colors duration-150 overflow-y-auto",
                dropTarget === "pool" && dragState?.from !== "pool"
                  ? "bg-white/[0.035]"
                  : "",
              ].join(" ")}
              style={{ minHeight: 110, maxHeight: 210 }}
            >
              {tierData.pool.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center text-muted-foreground/40 py-6 gap-1">
                  <Zap size={22} className="opacity-40" />
                  <p className="text-xs">Select categories and fetch images to begin ranking</p>
                </div>
              ) : (
                tierData.pool.map((img) => (
                  <ImageCard
                    key={img.uid}
                    item={img}
                    from="pool"
                    isDragging={dragState?.item.uid === img.uid}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onRemove={handleRemove}
                  />
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
