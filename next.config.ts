import type { NextConfig } from "next";

/**
 * Menu item slugs that changed when the menu was synced to Fremont Menu V6
 * and the doner items adopted the "Döner (Shawarma)" naming. Both /menu and
 * /in-store derive their slugs from the item name, so each old slug needs a
 * redirect on both routes.
 */
const RENAMED_ITEM_SLUGS: Record<string, string> = {
  // Döner (Shawarma) naming
  "beef-lamb-turkish-pita": "beef-lamb-doner-turkish-pita",
  "chicken-turkish-pita": "chicken-doner-turkish-pita",
  "mix-turkish-pita": "mixed-doner-turkish-pita",
  "beef-lamb-pita": "beef-lamb-doner-pita",
  "chicken-pita": "chicken-doner-pita",
  "mix-pita": "mixed-doner-pita",
  "beef-lamb-wrap": "beef-lamb-doner-wrap",
  "chicken-wrap": "chicken-doner-wrap",
  "mix-wrap": "mixed-doner-wrap",
  "beef-lamb-rice-bowl": "beef-lamb-doner-rice-bowl",
  "chicken-rice-bowl": "chicken-doner-rice-bowl",
  "mix-rice-bowl": "mixed-doner-rice-bowl",
  "beef-lamb-fries-bowl": "beef-lamb-doner-fries-bowl",
  "chicken-fries-bowl": "chicken-doner-fries-bowl",
  "mix-fries-bowl": "mixed-doner-fries-bowl",
  "beef-lamb-salad-bowl": "beef-lamb-doner-salad-bowl",
  "chicken-salad-bowl": "chicken-doner-salad-bowl",
  "mix-salad-bowl": "mixed-doner-salad-bowl",
  // Menu V6 renames
  "spinach-feta-pide": "spinach-cheese-pide",
  "istanbul-salad": "mediterranean-greek-salad",
  "feta-mozzarella-omelette": "spinach-cheese-omelet",
  // Three pogaca items collapsed into one
  "classic-pogaca": "pogaca",
  "cheese-pogaca": "pogaca",
  "potato-pogaca": "pogaca",
};

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    // Next's defaults emit 8 device + 8 image widths, so a single <Image>
    // advertises ~16 srcset URLs. A browser fetches one; a crawler that walks
    // the srcset fetches all of them, and every one is an edge request plus an
    // optimizer transform. /menu alone advertised 1,061 image URLs for 66
    // images. These widths still cover phone through 2x desktop.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
  },

  async redirects() {
    return Object.entries(RENAMED_ITEM_SLUGS).flatMap(([from, to]) =>
      ["/menu", "/in-store"].map((base) => ({
        source: `${base}/${from}`,
        destination: `${base}/${to}`,
        permanent: true,
      }))
    );
  },
};

export default nextConfig;
