<template>
  <main class="space-y-8 pb-12">
    <ImageSlider />
    <div class="px-2 md:px-4 lg:px-6 xl:px-10">
      <SpecialOffer />

      <ProductList
        v-bind="redCarouselData"
        variant="bordered"
        theme-color="red"
      />

      <ProductList
        v-bind="orangeCarouselData"
        variant="primary"
        theme-color="orange"
      />

      <MyCard class="grid grid-cols-4 bg-white py-8 my-8 text-xs">
        <div class="flex-center flex-col md:flex-row text-center">
          <img src="/home/badge.png" alt="badge category picture" width="100" />
          <span>ضمانت اصلات کالا</span>
        </div>
        <div class="flex-center flex-col md:flex-row text-center">
          <img src="/home/truck.png" alt="truck category picture" width="100" />

          <span>ارسال به سراسر کشور</span>
        </div>
        <div class="flex-center flex-col md:flex-row text-center">
          <img src="/home/cart.png" alt="cart category picture" width="100" />

          <span>ضمانت اصلات کالا</span>
        </div>
        <div class="flex-center flex-col md:flex-row text-center">
          <img
            src="/home/headphone.png"
            alt="headphone category picture"
            width="100"
          />
          <span>مشاوره رایگان خرید</span>
        </div>
      </MyCard>

      <LatestBlog />
    </div>
  </main>
</template>

<script setup lang="ts">
import Login from "~/components/Login/Login.vue";

const redCarouselData = {
  headerImage: "/pencil.png",
  headerText: "کتاب و لوازم التحریر",
  themeColor: "red",
  showNuxtImg: true,
  nuxtImgUrl: "/child.png",
};

const orangeCarouselData = {
  headerImage: "/book.png",

  headerText: "لوازم التحریر و ابزار",
  themeColor: "orange",
  showNuxtImg: false,
  nuxtImgUrl: "/child.png",
};
</script>
