import Material from "@primevue/themes/Material";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/styles/index.css",
  },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  primevue: {
    options: {
      theme: {
        preset: Material,
        options: {
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
  devtools: { enabled: true },
});
