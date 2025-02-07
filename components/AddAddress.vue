<template>
  <Form
    @submit="submit"
    ref="form"
    class="grid grid-cols-12 gap-4"
    :resolver="addressResolver"
  >
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
            :use-global-leaflet="false"
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
          <MyButton
            color="bg-primary-600"
            class="text-white ms-auto mt-4 w-56 !py-4"
            @click="submitAddressFromApi"
          >
            تایید آدرس
          </MyButton>
        </div>
      </Dialog>
    </ClientOnly>
    <FormField
      :initialValue="model.province"
      name="province"
      class="w-full col-span-4"
    >
      <IftaLabel>
        <Select
          v-model="model.province"
          :options="Object.keys(cities)"
          class="my-input"
          variant="outlined"
        />
        <label> استان</label>
      </IftaLabel>
    </FormField>

    <FormField :initialValue="model.city" name="city" class="w-full col-span-4">
      <IftaLabel>
        <Select
          v-model="model.city"
          :options="getCities"
          option-value="name"
          option-label="name"
          class="my-input"
          variant="outlined"
        >
          <template #empty> لطفا ابتدا استان را انتخاب کنید </template>
        </Select>
        <label> شهر</label>
      </IftaLabel>
    </FormField>
    <FormField
      :initialValue="model.postal_code"
      name="postal_code"
      class="w-full col-span-4"
    >
      <IftaLabel>
        <InputText
          v-model="model.postal_code"
          class="my-input"
          variant="outlined"
        />
        <label> کد پستی</label>
      </IftaLabel>
    </FormField>

    <FormField
      :initialValue="model.address_detail"
      name="address_detail"
      class="w-full col-span-full"
    >
      <IftaLabel>
        <InputText
          v-model="model.address_detail"
          class="my-input"
          variant="outlined"
        />
        <label> نشانی پستی</label>
      </IftaLabel>
      <div class="flex justify-between pt-2">
        <span> آدرس بالا بر اساس موقعیت انتخابی شما وارد شده است. </span>
        <button
          type="button"
          @click="visible = true"
          class="text-primary-500 pt-2"
        >
          ویرایش موقعیت مکانی روی نقشه
        </button>
      </div>
    </FormField>

    <div class="col-span-full">
      <MyButton
        color="bg-primary-600"
        class="text-white ms-auto mt-4 w-56 !py-4"
      >
        ثبت آدرس
      </MyButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
import cities from "~/const/cities.json";
import type { ApiAddress, Position } from "~/types";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { addressValidator, getErrorMessage } from "~/validation";
import { tileProvider } from "~/const/map";

const form = ref();

const props = defineProps<{
  address: {
    province: string;
    city: string;
    address_detail: string;
    id?: number;
    position?: Position;
    postal_code: string;
  };
}>();

const addressResolver = zodResolver(z.object(addressValidator));

const defaultLocation: Position = {
  lat: 35.676045,
  lng: 51.38752,
};
const visible = ref(false);

const getCities = computed(() => {
  return cities[model.value.province as keyof typeof cities] ?? [];
});

const emit = defineEmits(["submit"]);

const model = useState("addressModel", () => ({
  ...props.address,
  position: { ...defaultLocation },
}));

const toast = useToast();
async function submit({ valid, errors, ...rest }: any) {
  const errmsg = getErrorMessage(errors);
  if (errmsg) {
    toast.add({
      severity: "error",
      summary: "خطا",
      detail: errmsg,
      life: 3000,
    });
    return;
  }
  emit("submit", model.value);
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
}

async function submitAddressFromApi() {
  const { position } = model.value;
  try {
    const res = (await $fetch(
      `http://nominatim.openstreetmap.org/reverse?format=json&accept-language=fa&addressdetails=1&lon=${position.lng}&lat=${position.lat}`
    )) as ApiAddress;

    model.value.address_detail = res.display_name;

    const apiProvince = (res.address.state ?? res.address.province)
      .replace("استان", "")
      .trim();

    model.value.province = apiProvince;
    model.value.city =
      cities[apiProvince as keyof typeof cities].find(
        (city) =>
          res.address.city.includes(city.name) ||
          city.name.includes(res.address.city)
      )?.name ?? "";

    for (const key of Object.keys(form.value.states)) {
      form.value.states[key].touched = true;
    }

    visible.value = false;
    console.log(form.value.states);
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
