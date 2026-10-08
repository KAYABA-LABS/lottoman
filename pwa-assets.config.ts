import { defineConfig, minimal2023Preset } from "@vite-pwa/assets-generator/config";

// Placeholder icons from the CSS logo ball — swap public/icon.svg for the real logo and re-run.
export default defineConfig({
  preset: {
    ...minimal2023Preset,
    maskable: { ...minimal2023Preset.maskable, resizeOptions: { background: "#1E1B4B" } },
    apple: { ...minimal2023Preset.apple, resizeOptions: { background: "#1E1B4B" } },
  },
  images: ["public/icon.svg"],
});
