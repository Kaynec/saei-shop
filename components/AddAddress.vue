<template>
  <div class="grid grid-cols-12 gap-4">
    <ClientOnly>
      <Dialog
        :pt="{
          root: 'p-dialog-maximized',
        }"
        class="block md:hidden w-full"
        modal
        maximizable
        v-model:visible="visible"
      >
        <div class="col-span-full w-full h-[min(40svh,28rem)]">
          <LMap
            ref="map"
            :zoom="zoom"
            @update:center="centerUpdated"
            :center="[
              userLocation?.lat || model.position.lat,
              userLocation?.lng || model.position.lng,
            ]"
            class="relative"
          >
            <div class="z-[100000] absolute inset-0 flex-center">
              <span
                class="w-8 h-8 rounded-full bg-blue-500 bg-opacity-30 flex-center"
              >
                <span class="w-4 h-4 rounded-full bg-blue-500 flex-center">
                </span>
              </span>
            </div>
            <LTileLayer :url="tileProvider.url" />
          </LMap>
        </div>
      </Dialog>
    </ClientOnly>
    <FormField name="otp" class="w-full col-span-full">
      <IftaLabel :initialValue="model.postal_code">
        <InputText
          v-model="model.postal_code"
          class="my-input"
          variant="outlined"
          name="otp"
        />
        <label> نشانی پستی</label>
      </IftaLabel>
      <div class="flex justify-between pt-2">
        <span> آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است. </span>
        <button @click="visible = true" class="text-primary-500 pt-2">
          ویرایش موقعیت مکانی روی نقشه
        </button>
      </div>
    </FormField>

    <!--  -->
    <FormField name="province" class="w-full col-span-6">
      <IftaLabel :initialValue="model.province">
        <Select
          :options="provinces"
          option-value="id"
          option-label="name"
          v-model="model.province"
          class="my-input"
          variant="outlined"
          name="province"
        />
        <label> استان</label>
      </IftaLabel>
    </FormField>

    <FormField name="city" class="w-full col-span-6">
      <IftaLabel :initialValue="model.city">
        <Select
          :options="getCities"
          option-value="id"
          option-label="name"
          v-model="model.city"
          class="my-input"
          variant="outlined"
          name="city"
        >
          <template #empty> لطفا ابتدا استان را انتخاب کنید </template>
        </Select>
        <label> شهر</label>
      </IftaLabel>
    </FormField>

    <FormField name="city" class="col-span-full">
      <IftaLabel :initialValue="model.address_detail">
        <InputText
          v-model="model.address_detail"
          class="my-input"
          variant="outlined"
          name="city"
        />
        <label> اطلاعات آدرس (پلاک ,خیابان , ... ) </label>
      </IftaLabel>
    </FormField>

    <div class="col-span-full">
      <MyButton
        @click="submit"
        color="bg-primary-600"
        class="text-white ms-auto mt-4 w-56 !py-4"
      >
        ثبت آدرس
      </MyButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import provinces from "~/const/provinces.json";
import cities from "~/const/cities.json";
import { type AddressDetailInPut } from "@/api";
import type { ApiAddress, Position } from "~/types";
import { tileProvider } from "~/const/map";
const props = defineProps<{
  address: {
    province: number | string;
    city: number | string;
    address_detail: string;
    id?: number;
    position?: Position;
    postal_code: string;
  };
}>();

const defaultLocation: Position = {
  lat: 35.676045,
  lng: 51.38752,
};
const visible = ref(false);

const getCities = computed(() => {
  const provinceId = (model.value.province as any)?.id ?? model.value.province;
  return cities.filter((city) => city.province_id === provinceId) ?? [];
});

const emit = defineEmits(["submit"]);

const model = ref({ ...props.address, position: { ...defaultLocation } });

async function submit() {
  const objectToSend = { ...model.value };
  emit("submit", objectToSend);
}

const map = ref();

const userLocation = ref<Position>();

const loading = ref(false);

const zoom = ref(12);

function rep(value: any, isLast = false) {
  if (!value) return "";

  return `${value}${isLast ? "" : " , "}`;
}

async function centerUpdated(value: any) {
  model.value.position = value;
  const { position } = model.value;
  try {
    const res = (await $fetch(
      `http://nominatim.openstreetmap.org/reverse?format=json&accept-language=fa&addressdetails=1&lon=${position.lng}&lat=${position.lat}`
    )) as ApiAddress;

    model.value.postal_code = res.display_name;
    model.value.address_detail = `${rep(res.address.province)}${rep(
      res.address.district
    )} ${rep(res.address.country)} ${rep(res.address.city)} ${rep(
      res.address.town
    )} ${rep(res.address.suburb)}${rep(res.address.road)}${rep(
      res.address.neighbourhood,
      true
    )}`;

    const apiProvince = (res.address.state ?? res.address.province)
      .replace("استان", "")
      .trim();

    model.value.province = provinces.find(
      (province) => province.name === apiProvince
    )?.id!;
    model.value.city = cities.find(
      (city) => city.name == res.address.city
    )?.id!;

    console.log(res.address);
  } catch (error) {
    console.warn("some problem accord when getting city name");
  }
}

function getUserPosition() {
  if (navigator?.geolocation) {
    // get GPS position
    navigator.geolocation.getCurrentPosition((pos) => {
      // set the user location
      userLocation.value = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
    });
  }
}

onMounted(() => getUserPosition);
</script>
