<template>
  <MyButton
    @click="changeTab(tab)"
    class="!flex flex-col md:flex-row !items-center !justify-start px-4"
    :color="activeTab == tab ? 'bg-orange-400' : 'bg-transparent'"
    :class="activeTab == tab ? 'text-white font-semibold' : 'text-grey-300'"
  >
    <div
      class="icon flex-center text-2xl gap-2"
      :class="{
        'text-grey-300': activeTab !== tab,
      }"
    >
      <slot name="icon"> </slot>
    </div>

    <span>
      {{ tabname }}
    </span>
  </MyButton>
</template>

<script setup lang="ts">
defineProps<{
  activeTab: string;
  changeTab: (newTab: string) => void;
  tab: string;
  tabname: string;
}>();
</script>
