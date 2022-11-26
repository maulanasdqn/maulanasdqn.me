import { defineConfig } from "astro/config";
import { presetWebFonts } from "unocss";
import Unocss from "@unocss/astro";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  integrations: [Unocss({
    presets: [presetUno(), presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Lato",
        mono: ["Fira Code", "Fira Mono:400,700"],
        lobster: "Lobster",
        bold: "Lato:800",
        lato: [{
          name: "Lato",
          weights: ["400", "700"],
          italic: true
        }, {
          name: "sans-serif",
          provider: "none"
        }]
      }
    })]
  }), react(), vue()]
});
