<template>
  <div class="flex max-h-[50svh] overflow-auto flex-wrap -mx-2 -my-2 p-4">
    <div
      v-for="i in 12"
      class="basis-full sm:basis-1/2 sm:md:basis-full lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4 px-2 py-2"
    >
      <ProductItem
        image="https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png"
        :score="70"
        name="کتاب راز"
        discount_end_time="2025-01-25T15:30:00Z"
        price="120,000"
        off_price="150,000"
        themeColor="orange"
        class="!shadow !border-2 !border-solid border-slate-200"
        hearted
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
