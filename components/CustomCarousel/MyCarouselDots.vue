<template>
  <div class="relative ms-24 -translate-y-12 flex gap-2 items-center">
    <Button
      unstyled
      :class="[
        'text-grey-200 transition-all duration-300 w-8 h-8 flex items-center justify-center enabled:bg-white shadow-lg border-2 border-solid border-grey-50 rounded-full disabled:bg-grey-100',
      ]"
      :disabled="!canScrollNext"
      @click="scrollNext()"
    >
      <Icon :class="['text-[48px]']" name="mdi:chevron-right" />
    </Button>

    <button
      v-for="(_, index) in carouselApi?.scrollSnapList() || []"
      :key="index"
      :aria-label="'Slide ' + (index + 1)"
      :class="[
        'bg-white w-3 h-3 rounded-full transition-all duration-300',
        selected === index ? '!bg-gray-300 !w-8 !rounded-lg' : '',
      ]"
      @click="carouselApi?.scrollTo(index)"
    ></button>

    <Button
      unstyled
      :class="[
        'text-grey-200 transition-all duration-300 w-8 h-8 flex items-center justify-center enabled:bg-white shadow-lg border-2 border-solid border-grey-50 rounded-full disabled:bg-grey-100',
      ]"
      :disabled="!canScrollPrev"
      @click="scrollPrev()"
    >
      <Icon :class="['text-[48px]']" name="mdi:chevron-left" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCarousel } from "./useCarousel";

const {
  carouselApi,
  canScrollNext,
  canScrollPrev,
  scrollNext,
  scrollPrev,
  onSelect,
} = useCarousel();
const selected = ref(0);

carouselApi.value?.on("select", (newdata) => {
  selected.value = newdata.selectedScrollSnap();
});
watchEffect(() => {
  if (carouselApi.value) {
    carouselApi.value.on("select", (newdata) => {
      selected.value = newdata.selectedScrollSnap();
    });

    // Optionally handle the initial state
    const currentSnap = carouselApi.value?.selectedScrollSnap();
    if (currentSnap !== undefined) {
      selected.value = currentSnap;
    }
  }
});
</script>
