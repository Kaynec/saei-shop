<template>
  <MyCard class="min-h-full flex gap-2">
    <!-- Bread Crumbs -->

    <div class="flex flex-col gap-4">
      <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
        <Icon name="mdi-heart-outline" class="text-2xl text-grey-400" />
      </MyButton>
      <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
        <Icon name="mdi:compare-horizontal" class="text-2xl text-grey-400" />
      </MyButton>
      <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
        <Icon name="mdi-bell-outline" class="text-2xl text-grey-400" />
      </MyButton>
    </div>
    <div>
      <ClientOnly>
        <Galleria
          :value="images"
          :numVisible="3"
          containerStyle="max-width: 480px;padding-top:1rem;"
        >
          <template #item="slotProps">
            <NuxtImg
              :src="slotProps.item"
              :alt="slotProps.item"
              width="320px"
              style="object-fit: contain; max-width: 100%"
            />
          </template>
          <template #thumbnail="slotProps">
            <NuxtImg
              :src="slotProps.item"
              :alt="slotProps.item"
              class="max-w-[120px]"
            />
          </template>
          <!-- <template #item="slotProps">
          <img
            :src="slotProps.item.itemImageSrc"
            :alt="slotProps.item.alt"
            style="width: 100%"
          />
        </template>
        <template #thumbnail="slotProps">
          <img
            :src="slotProps.item.thumbnailImageSrc"
            :alt="slotProps.item.alt"
          />
        </template> -->
        </Galleria>
      </ClientOnly>
    </div>
    <div class="flex flex-col gap-4">
      <p>{{ data.title }}</p>
    </div>
    <!--  -->
  </MyCard>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { isBefore } from "date-fns-jalali";
// import { addToFavourite, shareProduct } from "@/api/basket-helper";
import { ProductTypes } from "@/types";
import type { ProductDetailOutPut, ProudctOutPut } from "~/api";

const { data } = defineProps<{
  data: ProductDetailOutPut &
    ProudctOutPut & { included_products: ProudctOutPut[] };
}>();

const time = ["22", "14", "35"];
const showImageDialog = ref(false);
const has_discount = ref(false);
const timeSplitted = ref<string[]>([]);

onBeforeMount(() => {
  if (data.discount_end_time) {
    const newTime = new Date(data.discount_end_time);

    if (!isBefore(new Date(), newTime)) return;

    has_discount.value = true;
    setInterval(() => {
      const newDate = new Date();
      timeSplitted.value = new Date(newTime.getTime() - newDate.getTime())
        .toLocaleDateString("fa-Fa-u-nu-latn", {
          hour: "numeric",
          second: "numeric",
          minute: "numeric",
        })
        .split(" ")[1]
        .split(":")
        .reverse();
      console.log(newDate);
    }, 1000);
  }
});

const images = computed(() => {
  // IF ITS PACKAGE
  if (data.product_type === ProductTypes.PACKAGE) {
    return data.included_products.map((el: any) => el.main_image);
  }
  return data.images.map((el) => el.file);
});
</script>
<style scoped>
:deep(.p-galleria-thumbnail-nav-button) {
  display: none;
}
:deep(.p-galleria-thumbnail) {
  padding: 0.5rem;
}
</style>
