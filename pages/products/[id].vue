<template>
  <div class="my-3rem" v-if="data">
    <!-- Desktop Version: 60% Product Details, 40% Product Guaranty -->
    <div class="hidden md:grid">
      <div class="col-12 md:col-9">
        <ProductDetails :data="data" />
      </div>
      <!-- <div class="col-12 md:col-3">
        <LazyProductGaranty :data="data" />
      </div> -->
    </div>

    <!-- Mobile Version: Combined Product Details and Guaranty -->
    <!-- <LazyProductDetailsMobile :data="data" class="block md:hidden" /> -->

    <!-- Tabs -->
    <!-- <LazyProductTabs :data="data" /> -->

    <!-- Related Products -->
    <!-- <RelatedProducts v-if="data" :data="data" /> -->
  </div>
</template>
<script setup lang="ts">
import {
  apiProductProductDetailRetrieve,
  type ProductDetailOutPut,
} from "@/api";
import type { Review } from "@/types";

const router = useRouter();

const id = (router.currentRoute.value.params as { id: string }).id;

const { data } = await useAsyncData(`product-${id}`, async () => {
  try {
    return (await apiProductProductDetailRetrieve(id)) as Record<string, any>;
  } catch (error) {
    throw error;
  }
});

// Defining Page Schema After The Blog Data is Fetched
useSchemaOrg([
  defineProduct({
    name: data.value?.title,
    image: data.value?.main_image,
    offers: [{ price: data.value?.off_price }],
    aggregateRating: {
      ratingValue: data.value?.score,
    },
    review: data.value?.reviews.map((el: Review) => ({
      name: el.comment,
      author: {
        name: el.user.firstname + " " + el.user.lastname,
      },
    })),
  }),
]);

useSeoMeta({
  title: `Cheats - محصولات  - ${id}`,
  ogTitle: `Cheats - محصولات  - ${id}`,
  description: "صفحه محصول" + " " + id,
  ogDescription: "صفحه محصول" + " " + id,
});
</script>
