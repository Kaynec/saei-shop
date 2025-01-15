<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

// Carousel configuration
const config = {
  itemsToShow: 1,
  snapAlign: "center",

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: "carousel",

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 2,
      snapAlign: "center",
    },
    // 400px and up
    400: {
      itemsToShow: 3,
      snapAlign: "start",
    },
    // 500px and up
    500: {
      itemsToShow: 4,
      snapAlign: "start",
    },
  },
};
</script>

<template>
  <!-- Resizable container for testing 'carousel' breakpointMode -->
  <!-- Drag the right edge to adjust the width and see the breakpoints change -->
  <div class="carousel__wrapper">
    <Carousel v-bind="config">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
