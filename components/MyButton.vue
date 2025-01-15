<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";

// Define props interface
interface MyButtonProps {
  color?: string;
  hoverColor?: string;
}

// Use defineProps with TypeScript
const props = defineProps<MyButtonProps>();

// Computed property for button classes
const buttonClasses = computed(() => {
  const defaultColor = props.color || "bg-blue-500";

  return `${defaultColor} rounded-lg px-2 py-3  items-center flex justify-center transition-colors duration-400 hover:bg-opacity-70`;
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
