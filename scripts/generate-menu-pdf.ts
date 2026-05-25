/**
 * Generates public/istanbul-2-menu.pdf from lib/menu-data.ts
 * Run: npm run generate:menu-pdf
 */
import fs from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { MENU_CATEGORIES } from "../lib/menu-data";
import { HOURS, RESTAURANT } from "../lib/constants";

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 48;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

async function main() {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  let page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  let y = PAGE_HEIGHT - MARGIN;

  const newPage = () => {
    page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    y = PAGE_HEIGHT - MARGIN;
  };

  const ensureSpace = (needed: number) => {
    if (y - needed < MARGIN) newPage();
  };

  const drawText = (
    text: string,
    size: number,
    bold = false,
    color = rgb(0.12, 0.12, 0.12)
  ) => {
    page.drawText(text, {
      x: MARGIN,
      y,
      size,
      font: bold ? fontBold : font,
      color,
    });
    y -= size + 6;
  };

  const wrapText = (text: string, maxWidth: number, size: number): string[] => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (font.widthOfTextAtSize(test, size) <= maxWidth) {
        line = test;
      } else {
        if (line) lines.push(line);
        line = word;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  // Header
  drawText("Istanbul Mediterranean Restaurant-2 (Halal)", 16, true);
  drawText("Turkish Restaurant Menu — Fremont Street", 11, false, rgb(0.35, 0.35, 0.35));
  y -= 4;
  drawText(RESTAURANT.address, 10);
  drawText(`Phone: ${RESTAURANT.phone}  |  istanbul2.com`, 10);
  drawText("100% Zabiha Halal Certified", 10, true, rgb(0.2, 0.45, 0.25));
  y -= 6;
  for (const h of HOURS) {
    drawText(`${h.days}: ${h.hours}`, 10);
  }
  y -= 10;

  for (const category of MENU_CATEGORIES) {
    ensureSpace(40);
    drawText(category.title, 13, true, rgb(0.55, 0.08, 0.12));
    if (category.subtitle) {
      for (const line of wrapText(category.subtitle, CONTENT_WIDTH, 9)) {
        ensureSpace(14);
        drawText(line, 9, false, rgb(0.4, 0.4, 0.4));
      }
    }
    y -= 4;

    for (const item of category.items) {
      ensureSpace(36);
      const nameLine = `${item.name}  —  ${item.price}`;
      drawText(nameLine, 10, true);
      if (item.description) {
        for (const line of wrapText(item.description, CONTENT_WIDTH, 9)) {
          ensureSpace(14);
          drawText(line, 9, false, rgb(0.35, 0.35, 0.35));
        }
      }
      y -= 2;
    }
    y -= 8;
  }

  ensureSpace(30);
  drawText(
    "Prices subject to change. Visit istanbul2.com/menu for the latest menu.",
    8,
    false,
    rgb(0.45, 0.45, 0.45)
  );

  const bytes = await pdf.save();
  const outPath = path.join(process.cwd(), "public", "istanbul-2-menu.pdf");
  fs.writeFileSync(outPath, bytes);
  console.log(`Wrote ${outPath} (${bytes.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
