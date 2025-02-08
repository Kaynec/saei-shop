<script setup lang="ts">
import type { WithClassAsProps } from "./interface";
import { useCarousel } from "./useCarousel";

// Define a prop to set the theme color
const props = defineProps<WithClassAsProps & { themeColor?: string }>();

const { orientation, canScrollNext, scrollNext } = useCarousel();

// Use a computed property to generate dynamic class names
const buttonClasses = computed(() => {
  const color = props.themeColor || "orange";
  return {
    hover: `hover:bg-${color}-100`,
    focus: `enabled:focus:bg-${color}-50`,
    border: `border-solid !border-2 border-${color}-400`,
    text: `text-${color}-300`,
    disabled: `disabled:bg-${color}-600 !disabled:hover:bg-${color}-600`,
  };
});
</script>

<template>
  <Button
    unstyled
    :class="[
      buttonClasses.disabled,
      buttonClasses.hover,
      buttonClasses.focus,
      buttonClasses.border,
      'transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-lg',
    ]"
    :disabled="!canScrollNext"
    @click="scrollNext"
    aria-label="next button carousel"
  >
    <slot>
      <Icon
        :class="['text-[48px]', buttonClasses.text]"
        name="mdi:chevron-right"
      />
    </slot>
  </Button>
</template>
