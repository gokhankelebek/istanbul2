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

/** Ordering hub subdomain — its root serves app/store. */
const STORE_HOST = "store.istanbul2.com";
const MAIN_HOSTS = ["www.istanbul2.com", "istanbul2.com"];
/** Paths store.istanbul2.com still serves itself: the hub page and the files it loads. */
const STORE_HOST_ALLOWED = [
  "store$",
  "_next/",
  "images/",
  "favicon\\.ico$",
  "icon\\.png$",
  "apple-icon\\.png$",
  "apple-touch-icon\\.png$",
].join("|");

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
    const renamed = Object.entries(RENAMED_ITEM_SLUGS).flatMap(([from, to]) =>
      ["/menu", "/in-store"].map((base) => ({
        source: `${base}/${from}`,
        destination: `${base}/${to}`,
        permanent: true,
      }))
    );
    return [
      ...renamed,
      // The ordering hub lives at store.istanbul2.com; send the main-site path there.
      ...MAIN_HOSTS.map((host) => ({
        source: "/store",
        has: [{ type: "host" as const, value: host }],
        destination: `https://${STORE_HOST}/`,
        permanent: false,
      })),
      // store.istanbul2.com only serves the hub (plus its assets); everything
      // else belongs on the main site.
      {
        source: `/:path((?!${STORE_HOST_ALLOWED}).+)`,
        has: [{ type: "host" as const, value: STORE_HOST }],
        destination: "https://www.istanbul2.com/:path",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host" as const, value: STORE_HOST }],
          destination: "/store",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
