<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { useCarousel } from "./useCarousel";

const props = defineProps<WithClassAsProps>();

const { orientation, canScrollNext, scrollNext } = useCarousel();
</script>

<template>
  <Button
    unstyled
    class="disabled:bg-orange-200 disabled:bg-opacity-80 border-2 border-solid sm:hover:bg-orange-50 focus:bg-orange-50 transition-all duration-300 border-orange-300 w-8 h-8 flex items-center justify-center rounded-lg"
    :disabled="!canScrollNext"
    :class="[
      'touch-manipulation absolute h-8 w-8 rounded-full p-0',
      orientation === 'horizontal'
        ? '-right-[1rem] top-1/2 '
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    ]"
    @click="scrollNext"
  >
    <slot>
      <Icon name="mdi:chevron-right" class="text-orange-300 text-[48px]" />
    </slot>
  </Button>
</template>
