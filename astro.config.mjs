import { defineConfig } from "astro/config";
import Unocss from "@unocss/astro";
import react from "@astrojs/react";
import presetUno from "@unocss/preset-uno";
import { presetWebFonts } from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Lato",
            mono: ["Fira Code", "Fira Mono:400,700"],
            lobster: "Lobster",
            bold: "Lato:800",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
    }),
    react(),
  ],
});
