import Aura from "@primevue/themes/aura";

import { definePreset } from "@primevue/themes";
import { SiteDetails } from "./const/SiteDetails";

const MyPreset = definePreset(Aura, {
  semantic: {
    surface: {
      50: "rgb(234 234 234)",
      100: "rgb(190 190 190)",
      200: "rgb(159 159 159)",
      300: "rgb(115 115 115)",
      400: "rgb(88 88 88)",
      500: "rgb(46 46 46)",
      600: "rgb(42 42 42)",
      700: "rgb(33 33 33)",
      800: "rgb(25 25 25)",
      900: "rgb(19 19 19)",
    },
    primary: {
      50: "rgb(255 247 237)",
      100: "rgb(254 230 199)",
      200: "rgb(254 218 172)",
      300: "rgb(254 201 134)",
      400: "rgb(253 191 111)",
      500: "rgb(253 175 75)",
      600: "rgb(230 159 68)",
      700: "rgb(180 124 53)",
      800: "rgb(139 96 41)",
      900: "rgb(106 74 32)",
    },
  },
});
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: ".fake-dark-selector", // trying to also force a non-usage of the dark mode
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },

  ssr: true,
  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  site: {
    // TODO change the url
    url: "",
    name: "فروشگاه ساعی",
    title: "فروشگاه ساعی",
    description:
      "فروشگاه ساعی فروشگاه خرید و خرید کالا با ایده های مختلف و موارد جدید برای شماست",
    address: SiteDetails.address,
    postal_code: SiteDetails.postal_code,
    phone: SiteDetails.phone_number,
  },

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
    "@pinia/nuxt",
    "@nuxtjs/leaflet",
  ],

  icon: {
    serverBundle: {
      collections: ["mdi"], // <!--- this
    },
  },

  devtools: { enabled: true },
  compatibilityDate: "2025-01-19",
});
