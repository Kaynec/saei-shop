<script setup lang="ts">
const carouselItems = Array.from(
  { length: 10 },
  (_, i) =>
    "https://s8.uupload.ir/filelink/eRwwLR8wNDUD_d4dbcb560c/slider_bm85.webp"
); // Dummy data for the carousel
</script>

<template>
  <main>
    <section class="flex flex-col sm:flex-row">
      <div class="w-full mx-auto">
        <div class="max-w-[calc(100%)] mx-auto">
          <MyCarousel
            :opts="{
              align: 'start',
            }"
          >
            <!-- Carousel Content -->
            <MyCarouselContent class="-ml-0">
              <MyCarouselItem
                v-for="(src, index) in carouselItems"
                :key="index"
                :class="[` basis-full !pl-0`]"
              >
                <NuxtImg
                  :src="src"
                  width="1200"
                  class="w-full min-h-[60vh] max-h-[36rem] aspect-[16/9] object-cover"
                />
              </MyCarouselItem>
            </MyCarouselContent>

            <MyCarouselDots />
          </MyCarousel>
        </div>
      </div>
    </section>
  </main>
</template>
