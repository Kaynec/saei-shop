<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
// Define props interface
interface MyButtonProps {
  color?: string;
  class?: string;
  hoverColor?: string;
}

// Use defineProps with TypeScript
const props = defineProps<MyButtonProps>();

// Computed property for button classes
const buttonClasses = computed(() => {
  const defaultColor = props.color || "bg-blue-500";

  return [
    `${defaultColor} text-inherit rounded-lg text-sm py-3  items-center flex justify-center transition-colors duration-400 hover:bg-opacity-70`,
    props.class ?? "",
  ];
});
</script>
