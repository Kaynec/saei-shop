<script setup lang="ts">
const carouselItems = Array.from(
  { length: 10 },
  (_, i) => "https://s8.uupload.ir/files/slider_(1)_m9g4.png"
); // Dummy data for the carousel
</script>

<template>
  <main>
    <section class="flex flex-col sm:flex-row">
      <div class="w-full mx-auto">
        <h1 class="max-w-[calc(100%)] mx-auto">
          <MyCarousel
            :opts="{
              align: 'start',
            }"
            :autoplay="true"
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
                  alt="فروشگاه ساعی"
                  width="1200"
                  class="w-full min-h-[60vh] max-h-[36rem] aspect-[16/9] object-cover"
                />
              </MyCarouselItem>
            </MyCarouselContent>

            <MyCarouselDots />
          </MyCarousel>
        </h1>
      </div>
    </section>
  </main>
</template>
