<template>
  <main class="space-y-8">
    <ImageSlider />

    <!-- <ProductList v-bind="orangeCarouselData" variant="primary">
      <MyCarouselItem
        v-for="index in 50"
        :key="index"
        :class="[
          ` basis-3/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6`,
        ]"
      >
        <ProductItem
          image="https://s8.uupload.ir/files/22a4a332ae99a982afb0156d548c3492_(1)_gzn6.png"
          :score="70"
          name="کتاب راز"
          discount_end_time="2025-01-25T15:30:00Z"
          price="120,000"
          off_price="150,000"
          theme-color="red"
        />
      </MyCarouselItem>
    </ProductList>

    <ProductList v-bind="redCarouselData" variant="bordered" /> -->
  </main>
</template>

<script setup lang="ts">
const redCarouselData = {
  headerImage:
    "https://s8.uupload.ir/files/kisspng-old-magic-book-children-s-literature-magic-book-5b0dc6aa555dc0_1_to0p.png",
  headerText: "کتاب و لوازم التحریر",
  themeColor: "red" as const,
  opts: {
    align: "start",
  },
  showNuxtImg: false,
  nuxtImgUrl: "https://s8.uupload.ir/files/-children-_lc15.png",
};

const orangeCarouselData = {
  headerImage:
    "https://s8.uupload.ir/files/kisspng-colored-pencil-vector-pencil-and-pen-5aa8d4cbd6c650_1_nb3p.png",
  headerText: "لوازم التحریر و ابزار",
  themeColor: "orange" as const,
  opts: {
    align: "start",
  },
  showNuxtImg: true,
  nuxtImgUrl: "https://s8.uupload.ir/files/-children-_lc15.png",
};

// import emblaCarouselVue from "embla-carousel-vue";
// import Carousel from "~/components/Carousel/Carousel.vue";
// import MyCarouselContent from "~/components/Carousel/MyCarouselContent.vue";
// const [emblaRef] = emblaCarouselVue();
</script>
