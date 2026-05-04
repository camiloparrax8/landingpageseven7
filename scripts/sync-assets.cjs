/**
 * Copia /assets (raíz del proyecto) → public/assets
 */
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const srcDir = path.join(repoRoot, "assets");
const destDir = path.join(__dirname, "..", "public", "assets");

const allowed = /\.(png|jpe?g|webp|svg|gif|ico)$/i;

function main() {
  if (!fs.existsSync(srcDir)) {
    console.warn(
      "[sync-assets] No existe la carpeta assets en la raíz del repo:",
      srcDir,
    );
    fs.mkdirSync(destDir, { recursive: true });
    return;
  }

  fs.mkdirSync(destDir, { recursive: true });

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  let copied = 0;
  for (const ent of entries) {
    if (!ent.isFile()) continue;
    if (!allowed.test(ent.name)) continue;
    const from = path.join(srcDir, ent.name);
    const to = path.join(destDir, ent.name);
    fs.copyFileSync(from, to);
    copied += 1;
    console.log("[sync-assets]", ent.name, "→ public/assets/");
  }

  if (copied === 0) {
    console.warn(
      "[sync-assets] La carpeta assets existe pero no hay imágenes (.png, .jpg, etc.). Añade seven7-logo.png y seven7-banner.jpg.",
    );
  }
}

main();
