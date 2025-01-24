<template>
  <div :class="getClasses()">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
const { class: className } = defineProps<{
  class?: string;
}>();

const defaultClasses = "rounded-xl text-gray-700 bg-white shadow-lg p-4";

function getClasses() {
  return [
    defaultClasses
      .split(" ")
      .filter((clas) => !className?.split(" ").includes(clas))
      .join(" "),
    className,
  ];
}
</script>
