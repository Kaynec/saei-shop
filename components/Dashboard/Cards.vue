<template>
  <div>
    <Dialog
      :pt="{
        root: 'p-dialog-maximized',
      }"
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="visible"
    >
      <template #header>
        <div class="flex gap-2 items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="5" fill="#FAFAFA" />
            <path
              d="M26.2617 27.4385H21.2617"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.7617 24.998V29.998"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6609 14.5181L24.6309 14.5881L21.7309 21.3181H18.8809C18.2009 21.3181 17.5509 21.4581 16.9609 21.7081L18.7109 17.5281L18.7509 17.4281L18.8209 17.2681C18.8409 17.2081 18.8609 17.1481 18.8909 17.0981C20.2009 14.0681 21.6809 13.3781 24.6609 14.5181Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.0505 21.5186C29.6005 21.3786 29.1205 21.3186 28.6405 21.3186H21.7305L24.6305 14.5886L24.6605 14.5186C24.8105 14.5686 24.9505 14.6386 25.1005 14.6986L27.3105 15.6286C28.5405 16.1386 29.4005 16.6686 29.9205 17.3086C30.0205 17.4286 30.1005 17.5386 30.1705 17.6686C30.2605 17.8086 30.3305 17.9486 30.3705 18.0986C30.4105 18.1886 30.4405 18.2786 30.4605 18.3586C30.7305 19.1986 30.5705 20.2286 30.0505 21.5186Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5217 26.1984V28.1484C33.5217 28.3484 33.5117 28.5484 33.5017 28.7484C33.3117 32.2384 31.3617 33.9984 27.6617 33.9984H19.8617C19.6217 33.9984 19.3817 33.9784 19.1517 33.9484C15.9717 33.7384 14.2717 32.0384 14.0617 28.8584C14.0317 28.6284 14.0117 28.3884 14.0117 28.1484V26.1984C14.0117 24.1884 15.2317 22.4584 16.9717 21.7084C17.5717 21.4584 18.2117 21.3184 18.8917 21.3184H28.6517C29.1417 21.3184 29.6217 21.3884 30.0617 21.5184C32.0517 22.1284 33.5217 23.9884 33.5217 26.1984Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.71 17.5283L16.96 21.7083C15.22 22.4583 14 24.1883 14 26.1983V23.2683C14 20.4283 16.02 18.0583 18.71 17.5283Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5186 23.2677V26.1977C33.5186 23.9977 32.0586 22.1277 30.0586 21.5277C30.5786 20.2277 30.7286 19.2077 30.4786 18.3577C30.4586 18.2677 30.4286 18.1777 30.3886 18.0977C32.2486 19.0577 33.5186 21.0277 33.5186 23.2677Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="text-lg">افزودن حساب بانکی جدید</p>
        </div>
      </template>
    </Dialog>

    <div
      class="flex flex-col min-h-[min(65svh,36rem)] overflow-auto overscroll-contain"
    >
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="flex flex-col gap-2 border-[1px] border-solid border-grey-50 p-4 rounded-lg"
      >
        <div
          class="flex flex-col md:flex-row gap-2 md:items-center justify-between"
        >
          <span>
            {{ item.address_detail.split(",")[0] }}
          </span>
          <div class="flex gap-2 items-center">
            <MyButton color="bg-grey-50" class="bg-opacity-30 px-4">
              انتخاب به عنوان پیشفرض
              <Icon name="mdi-star" class="text-xl text-yellow-400" />
            </MyButton>
            <MyButton color="bg-grey-50" class="bg-opacity-30 px-4">
              حذف آدرس
              <Icon
                name="mdi-trash-can-outline"
                class="text-xl text-grey-200"
              />
            </MyButton>
          </div>
        </div>
        <Divider />
        <div
          class="flex justify-between flex-col md:flex-row gap-4 md:items-center"
        >
          <div class="space-y-4">
            <p>آدرس : {{ item.address_detail }}</p>
            <p>نشانی پستی : {{ item.postal_code }}</p>
          </div>

          <div class="relative w-full aspect-video md:w-64">
            <LMap
              ref="map"
              class="rounded-lg !border-2 !border-solid !border-grey-100"
              :zoom="16"
              :center="[item.position.lat, item.position.lng]"
            >
              <LTileLayer :url="tileProvider.url" />
            </LMap>
          </div>
        </div>
      </div>
      <Button
        @click="visible = true"
        class="my-auto w-full border-grey-100 min-h-40 bg-grey-50 bg-opacity-50 text-grey-800 border-2 border-dashed rounded-lg"
      >
        <Icon name="mdi-plus" class="text-xl text-grey-200" />
        افزودن آدرس جدید
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AddressModel } from "~/api";
import { tileProvider, zoom } from "~/const/map";
import type { Card } from "~/types";

const cards = ref<Card[]>([]);

const visible = ref(false);

const model = ref<Card>({
  depositDescription: "",
  depositNumber: "",
  iban: "",
});

function submit(data: Card) {}
</script>

<style scoped></style>
