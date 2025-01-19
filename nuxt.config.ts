import Aura from "@primevue/themes/Aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  tailwindcss: {
    cssPath: "~/styles/index.css",
  },

  imports: {},

  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
      // global: true,
    },
  ],

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/mdc",
    "@nuxtjs/seo",
  ],

  icon: {
    serverBundle: {
      collections: ["mdi"], // <!--- this
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
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
  compatibilityDate: "2025-01-19",
});