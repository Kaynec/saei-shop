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
              d="M21.25 23H26.75"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M24 25.75V20.25"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M15.6178 20.49C17.5878 11.83 30.4178 11.84 32.3778 20.5C33.5278 25.58 30.3678 29.88 27.5978 32.54C25.5878 34.48 22.4078 34.48 20.3878 32.54C17.6278 29.88 14.4678 25.57 15.6178 20.49Z"
              stroke="#575757"
              stroke-width="1.5"
            />
          </svg>

          <p class="text-lg">ثبت آدرس جدید</p>
        </div>
      </template>
      <AddAddress @submit="submit" :address="model" />
    </Dialog>

    <div
      class="flex flex-col min-h-[min(65svh,36rem)] overflow-auto overscroll-contain"
    >
      <div
        v-for="(item, index) in address"
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

const address = ref<AddressModel[]>([
  {
    address_detail:
      "استان تهران , بخش مرکزی شهرستان تهران ,  ایران ,  شهر تهران ,   منطقه ۱۱ شهر تهران , کلانتری , امیریه",
    city: 291,
    postal_code:
      "کلانتری, امیریه, منطقه ۱۱ شهر تهران, شهر تهران, بخش مرکزی شهرستان تهران, شهرستان تهران, استان تهران, 13356-63393, ایران",
    province: 8,
    position: { lat: 35.676045, lng: 51.38752 },
  },
]);

const visible = ref(false);

const model = ref({
  address_detail: "",
  city: "",
  postal_code: "",
  province: "",
  position: { lat: 35.676045, lng: 51.38752 },
});

function submit(data: AddressModel) {
  address.value.push(data);
  // objectToSend.city = (model.value.city as any)?.name ?? model.value.city;
  // objectToSend.province =
  //   (model.value.province as any)?.name ?? model.value.province;

  // if (model.value?.id) {
  //   // Update Address
  //   apiUserAddressDetailUpdate(model.value.id, objectToSend).finally(() =>
  //     closeTheDialog()
  //   );

  //   return;
  // }
  // // Create Address
  // apiUserCreateAddressCreate(objectToSend as AddressInPut).finally(() =>
  //   closeTheDialog()
  // );
}
</script>

<style scoped></style>
