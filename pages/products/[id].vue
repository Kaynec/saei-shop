<template>
  <div class="my-[1rem] md:my-[2rem] lg:my-[3rem] space-y-4 px-4" v-if="data">
    <!-- Desktop Version: 60% Product Details, 40% Product Guaranty -->
    <ProductDetails :data="data" />
    <MyCard
      class="grid grid-cols-4 p-0 gap-2 bg-transparent md:bg-white !md:py-2"
    >
      <div
        class="col-span-full rounded-xl md:col-span-1 bg-white md:bg-transparent flex gap-1 items-center"
      >
        <img src="/home/badge.png" alt="badge category picture" width="100" />
        <span>ضمانت اصالت کالا</span>
      </div>
      <div
        class="col-span-full rounded-xl md:col-span-1 bg-white md:bg-transparent flex gap-1 items-center"
      >
        <img src="/home/truck.png" alt="truck category picture" width="100" />

        <span>ارسال به سراسر کشور</span>
      </div>
      <div
        class="col-span-full rounded-xl md:col-span-1 bg-white md:bg-transparent flex gap-1 items-center"
      >
        <img src="/home/cart.png" alt="cart category picture" width="100" />

        <span>ضمانت اصالت کالا</span>
      </div>
      <div
        class="col-span-full rounded-xl md:col-span-1 bg-white md:bg-transparent flex gap-1 items-center"
      >
        <img
          src="/home/headphone.png"
          alt="headphone category picture"
          width="100"
        />
        <span>مشاوره رایگان خرید</span>
      </div>
    </MyCard>
    <ProductDescription />
    <!--  -->
    <ProductList
      v-bind="redCarouselData"
      variant="bordered"
      theme-color="red"
    />
    <!--  -->
  </div>
</template>
<script setup lang="ts">
import {
  apiProductProductDetailRetrieve,
  type ProductDetailOutPut,
} from "@/api";
import type { Review } from "@/types";
import ProductDescription from "~/components/Product/ProductDescription.vue";

const router = useRouter();

const id = (router.currentRoute.value.params as { id: string }).id;

const { data } = await useAsyncData(`product-${id}`, async () => {
  try {
    return (await apiProductProductDetailRetrieve(id)) as Record<string, any>;
  } catch (error) {
    throw error;
  }
});

const redCarouselData = {
  headerImage: "/pencil.png",
  headerText: "کتاب و لوازم التحریر",
  themeColor: "red",
  showNuxtImg: true,
  nuxtImgUrl: "/child.png",
};

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
