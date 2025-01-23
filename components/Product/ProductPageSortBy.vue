<template>
  <section
    class="flex items-start md:items-center flex-col md:flex-row gap-2 !text-grey-500"
  >
    <MyButton color="bg-transparent" class="gap-2 hidden md:flex items-center">
      <MyButtonSvg />

      <span class="text-sm md:text-lg"> مرتب سازی : </span>
    </MyButton>

    <MyButton @click="changeSort('MostExpensive')" color="bg-transparent">
      <span
        :class="
          CurrentFilterCondition == 'MostExpensive' ? 'text-orange-300' : ''
        "
        class="text-sm md:text-lg"
      >
        گران‌ترین
      </span>
    </MyButton>
    <MyButton @click="changeSort('Cheapest')" color="bg-transparent">
      <span
        :class="CurrentFilterCondition == 'Cheapest' ? 'text-orange-300' : ''"
        class="text-sm md:text-lg"
      >
        ارزان‌ترین
      </span>
    </MyButton>
    <MyButton @click="changeSort('Newset')" color="bg-transparent">
      <span
        :class="CurrentFilterCondition == 'Newset' ? 'text-orange-300' : ''"
        class="text-sm md:text-lg"
      >
        جدید‌ترین
      </span>
    </MyButton>
    <MyButton @click="changeSort('MostPopular')" color="bg-transparent">
      <span
        :class="
          CurrentFilterCondition == 'MostPopular' ? 'text-orange-300' : ''
        "
        class="text-sm md:text-lg"
      >
        پرفروش‌ترین
      </span>
    </MyButton>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  CurrentFilterCondition: string;
  changeSort: (
    sort: "MostExpensive" | "Newset" | "Cheapest" | "All" | "MostPopular"
  ) => void;
}>();
</script>

<style scoped></style>
