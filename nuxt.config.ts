import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/styles/main.css"],
  ssr: true,
  nitro: {
    preset: "vercel",
  },
});
