<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { useCarousel } from "./useCarousel";

const props = defineProps<WithClassAsProps>();

const { orientation } = useCarousel();
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="[
      'min-w-0 shrink-0 grow-0',
      orientation === 'horizontal' ? 'pl-2' : 'pt-4',
      props.class,
    ]"
  >
    <slot />
  </div>
</template>
