<template>
  <ImageSlider />
  <main class="space-y-24">
    <LatestBlog />
    <LatestBlog />
  </main>
</template>

<script setup lang="ts">
// can do auto complete
function sumtwo();
const redCarouselData = {
  //   headerImage:
  //     "https://s8.uupload.ir/files/kisspng-old-magic-book-children-s-literature-magic-book-5b0dc6aa555dc0_1_to0p.png",
  headerText: "کتاب و لوازم التحریر",
  themeColor: "red" as const,
  opts: {
    align: "start",
  },
  showNuxtImg: false,
  //   nuxtImgUrl: "https://s8.uupload.ir/files/-children-_lc15.png",
  discount_end_time: "2025-01-25T15:30:00Z",
  //   image="https://s8.uupload.ir/files/22a4a332ae99a982afb0156d548c3492_(1)_gzn6.png",
  score: "70",
  name: "کتاب راز",
  price: "120,000",
  off_price: "150,000",
};
</script>

<style scoped></style>
