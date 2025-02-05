<template>
  <MyButton
    color="bg-grey-50"
    v-for="(item, index) in address"
    @click="
      address.forEach((address) => (address.selected = false)),
        (item.selected = true)
    "
    :key="index"
    class="!bg-opacity-20 ps-8 gap-2 border-[1px] border-solid border-grey-50 p-4 rounded-lg relative"
  >
    <div
      v-if="item.selected"
      class="absolute start-0 h-full w-2 md:w-4 bg-orange-400 rounded-r-lg"
    ></div>

    <div
      class="flex justify-between flex-col w-full md:flex-row gap-4 md:items-center"
    >
      <div class="space-y-4 text-start">
        <p>آدرس : {{ item.address_detail }}</p>
        <p>نشانی پستی : {{ item.postal_code }}</p>
      </div>
    </div>
  </MyButton>
</template>

<script setup lang="ts">
import { tileProvider } from "~/const/map";
import type { AddressModelWithSelected } from "~/types";

const address = defineModel<AddressModelWithSelected[]>({ required: true });
</script>
