<template>
  <div>
    <FitLoadingScreen v-if="loading" />
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
      class="flex flex-col gap-4 min-h-[min(65svh,36rem)] overflow-auto overscroll-contain"
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
            {{ item?.address_detail?.split(",")[0] }}
          </span>
          <div class="flex gap-2 items-center">
            <MyButton color="bg-grey-50" class="bg-opacity-30 px-4">
              انتخاب به عنوان پیشفرض
              <Icon name="mdi-star" class="text-xl text-yellow-400" />
            </MyButton>
            <MyButton
              color="bg-grey-50"
              class="bg-opacity-30 px-4"
              @click="deleteAddress(item)"
            >
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
            <p>آدرس : {{ item?.address_detail }}</p>
            <p>کد پستی : {{ item?.postal_code }}</p>
          </div>

          <!-- <div class="relative w-full aspect-video md:w-64">
            <LMap
              ref="map"
              class="rounded-lg !border-2 !border-solid !border-grey-100"
              :zoom="16"
              :use-global-leaflet="false"
              :center="[item?.position?.lat, item?.position?.lng]"
            >
              <LTileLayer :url="tileProvider?.url" />
            </LMap>
          </div> -->
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
import type { MyAddressInPut } from "~/types";
import { tileProvider } from "~/const/map";
import {
  apiUserAddressDetailDestroy,
  apiUserAddressListUserRetrieve,
  apiUserCreateAddressCreate,
} from "~/api";

const { data: address, status } = useAsyncData(
  "address",
  async () =>
    (await apiUserAddressListUserRetrieve()) as any as MyAddressInPut[],
  {
    default() {
      return [] as MyAddressInPut[];
    },
  }
);

const visible = ref(false);

const model = ref({
  address_detail: "",
  city: "",
  postal_code: "",
  province: "",
  position: { lat: 35.676045, lng: 51.38752 },
});

const loading = ref(false);

const toast = useToast();
function submit(data: MyAddressInPut) {
  address.value.push(data);

  loading.value = true;
  apiUserCreateAddressCreate({
    city: data.city,
    province: data.province,
    postal_code: data.postal_code,
    address_detail: data.address_detail,
  })
    .then(() => (visible.value = false))
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "خطا",
        detail: err.response.data.error,
        life: 3000,
      });
    })
    .finally(() => {
      loading.value = false;
      model.value.address_detail = "";
      model.value.city = "";
      model.value.postal_code = "";
      model.value.province = "";
    });
}

const confirm = useConfirm();
const deleteAddress = (item: MyAddressInPut) => {
  confirm.require({
    message: "آیا از حذف آدرس مطمئن هستید؟",
    header: "حذف آدرس",
    rejectProps: {
      label: "خیر",
      severity: "secondary",
      outlined: true,
    },
    acceptProps: {
      label: "بله",
    },
    accept: () => {
      apiUserAddressDetailDestroy(item.id!).finally(() =>
        refreshNuxtData(["address"])
      );
      toast.add({
        severity: "info",
        summary: "تایید شد",
        detail: "آدرس حذف شد",
        life: 3000,
      });
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "تایید نشد",
        detail: "آدرس حذف نشد",
        life: 3000,
      });
    },
  });
};
</script>

<style scoped></style>
