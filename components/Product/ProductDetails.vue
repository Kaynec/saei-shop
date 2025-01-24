<template>
  <section class="space-y-4">
    <MyCard class="grid grid-cols-3 bg-white rounded-lg gap-6">
      <h1
        class="flex col-span-full md:hidden text-xl flex-center font-semibold"
      >
        {{ data.title }}
      </h1>
      <div
        class="flex flex-col sm:flex-row col-span-full lg:col-span-2 lg:min-w-80 lg:max-w-max gap-2 min-h-56"
      >
        <div class="flex gap-2">
          <!-- Buttons -->
          <div class="flex flex-col gap-4 mt-4">
            <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
              <Icon name="mdi-heart-outline" class="text-2xl text-grey-400" />
            </MyButton>
            <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
              <Icon
                name="mdi:compare-horizontal"
                class="text-2xl text-grey-400"
              />
            </MyButton>
            <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
              <Icon name="mdi-bell-outline" class="text-2xl text-grey-400" />
            </MyButton>
          </div>

          <!-- Galleria -->
          <ClientOnly>
            <Galleria
              :value="images"
              :numVisible="3"
              containerStyle="max-width: 100%; min-width: 280px"
              containerClass="!p-4"
            >
              <!-- Main Image -->
              <template #item="slotProps">
                <NuxtImg
                  :src="slotProps.item"
                  :alt="slotProps.item"
                  width="320"
                  class="w-full h-auto max-h-[400px] object-contain"
                  style="aspect-ratio: 1 / 1"
                />
              </template>

              <!-- Thumbnails -->
              <template #thumbnail="slotProps">
                <div class="p-2 bg-bgColor rounded-lg overflow-hidden">
                  <NuxtImg
                    :src="slotProps.item"
                    :alt="slotProps.item"
                    class="w-[75px] h-[75px] object-cover"
                    style="aspect-ratio: 1 / 1"
                  />
                </div>
              </template>
            </Galleria>
          </ClientOnly>
        </div>

        <!-- Product Details -->
        <div class="flex flex-col mt-4">
          <h1 class="hidden md:flex text-lg md:text-xl font-semibold">
            {{ data.title }}
          </h1>
          <p class="md:pt-8 font-semibold">ویژگی ها</p>
          <div class="flex flex-col pt-2">
            <p
              class="text-sm md:text-base flex items-center gap-2 py-2"
              v-for="note in data.notes"
              :key="note.id"
            >
              <Bullet />
              {{ note.title }}
            </p>
          </div>

          <!-- Quantity Selector -->
          <div
            class="flex items-center gap-2 bg-bgColor bg-opacity-50 rounded-lg px-4 py-3 my-4"
          >
            <span> تعداد </span>
            <div class="flex-center gap-4 mx-auto">
              <MyButton color="bg-grey-50" class="w-10 h-10 aspect-square">
                <Icon name="mdi-plus" class="text-2xl mx-auto text-grey-400" />
              </MyButton>
              <span class="mx-auto">2</span>
              <MyButton color="bg-grey-50" class="w-10 h-10 aspect-square">
                <Icon name="mdi-minus" class="text-2xl mx-auto text-grey-400" />
              </MyButton>
            </div>
          </div>
        </div>
      </div>

      <ProductPriceInformation
        class="hidden md:col-span-full w-full lg:col-span-1 lg:max-w-max lg:min-w-80 text-sm md:flex flex-col gap-4 ms-auto !bg-bgColor !bg-opacity-50"
        :price="124000"
        :quantity="2"
        :hasGuarantee="true"
        :isAvailable="true"
        :deliveryOptions="['تحویل حضوری', 'ارسال رایگان']"
      />
    </MyCard>
    <ProductPriceInformation
      class="flex md:hidden text-sm flex-col bg-white rounded-lg gap-6"
      :price="124000"
      :quantity="2"
      :hasGuarantee="true"
      :isAvailable="true"
      :deliveryOptions="['تحویل حضوری', 'ارسال رایگان']"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { isBefore } from "date-fns-jalali";
import { ProductTypes } from "@/types";
import type { ProductDetailOutPut, ProudctOutPut } from "~/api";

const { data } = defineProps<{
  data: ProductDetailOutPut &
    ProudctOutPut & {
      included_products: ProudctOutPut[];
      notes: {
        id: string;
        title: string;
      }[];
    };
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
  return (data as any).images.map((el: { file: string }) => el.file);
});
</script>

<style scoped>
:deep(.p-galleria-thumbnail-nav-button) {
  display: none;
}
:deep(.p-galleria-thumbnail) {
  padding: 0.5rem;
}
:deep(.p-galleria) {
  border: none;
}
</style>
