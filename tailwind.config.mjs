import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#fbb4a8",
  600: "#ca0b00",
  900: "#640300",
  950: "#440d08",
};
const gray = {
  100: "#fff3f1",
  200: "#ffe8e3",
  300: "#ffa897",
  400: "#fd2a00",
  500: "#a41700",
  700: "#6c0b00",
  800: "#4e0600",
  900: "#340300",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
