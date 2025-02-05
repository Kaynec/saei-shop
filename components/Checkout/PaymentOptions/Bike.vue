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
      class="flex flex-col gap-6 min-h-[min(65svh,36rem)] overflow-auto overscroll-contain"
    >
      <RenderAddress v-model="address" />
      <Button
        @click="visible = true"
        class="my-auto w-full border-grey-100 min-h-40 bg-grey-50 bg-opacity-50 text-grey-800 border-2 border-dashed rounded-lg"
      >
        <Icon name="mdi-plus" class="text-xl text-grey-200" />
        افزودن آدرس جدید
      </Button>
    </div>
    <!-- flex-nowrap md:flex-wrap -->
    <div class="py-6 grid grid-cols-auto-fit-100 gap-2">
      <MyButton
        :color="address.selected ? 'bg-orange-500' : 'bg-slate-50'"
        :class="[
          address.available ? 'text-black' : 'text-grey-200',
          address.selected ? 'text-white' : '',
        ]"
        class="flex !flex-col gap-4 min-h-24"
        @click="
          availableDaysForPickUp.forEach(
            (address) => (address.selected = false)
          );
          address.selected = true;
        "
        v-for="address in availableDaysForPickUp"
        :key="address.toString()"
      >
        <p>
          {{
            new Date(address.date).toLocaleDateString("fa", {
              weekday: "long",
            })
          }}
        </p>
        <p>{{ new Date(address.date).toLocaleDateString("fa") }}</p>
      </MyButton>
    </div>

    <!--  -->
    <div
      :class="{ 'border-2 border-grey-50 border-solid': showHours }"
      class="min-h-48 my-4 flex flex-col rounded-lg p-4"
    >
      <RenderHours v-model="hours" :show-hours="showHours" />
    </div>
    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { tileProvider } from "~/const/map";
import type { AddressModelWithSelected } from "~/types";

const address = ref<AddressModelWithSelected[]>([
  {
    address_detail:
      "استان تهران , بخش مرکزی شهرستان تهران ,  ایران ,  شهر تهران ,   منطقه ۱۱ شهر تهران , کلانتری , امیریه",
    city: 291,
    postal_code:
      "کلانتری, امیریه, منطقه ۱۱ شهر تهران, شهر تهران, بخش مرکزی شهرستان تهران, شهرستان تهران, استان تهران, 13356-63393, ایران",
    province: 8,
    position: { lat: 35.676045, lng: 51.38752 },
    selected: false,
  },
  {
    address_detail:
      "استان تهران , بخش مرکزی شهرستان تهران ,  ایران ,  شهر تهران ,   منطقه ۱۱ شهر تهران , کلانتری , امیریه",
    city: 291,
    postal_code:
      "کلانتری, امیریه, منطقه ۱۱ شهر تهران, شهر تهران, بخش مرکزی شهرستان تهران, شهرستان تهران, استان تهران, 13356-63393, ایران",
    province: 8,
    position: { lat: 35.676045, lng: 51.38752 },
    selected: false,
  },
  {
    address_detail:
      "استان تهران , بخش مرکزی شهرستان تهران ,  ایران ,  شهر تهران ,   منطقه ۱۱ شهر تهران , کلانتری , امیریه",
    city: 291,
    postal_code:
      "کلانتری, امیریه, منطقه ۱۱ شهر تهران, شهر تهران, بخش مرکزی شهرستان تهران, شهرستان تهران, استان تهران, 13356-63393, ایران",
    province: 8,
    position: { lat: 35.676045, lng: 51.38752 },
    selected: false,
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

function submit(data: AddressModelWithSelected) {
  address.value.push(data);
  // do your thing
}

const availableDaysForPickUp = ref<
  {
    date: Date;
    available: boolean;
    selected: boolean;
  }[]
>([]);

const currentDate = new Date();

for (let i = 0; i < 7; i++) {
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + i);
  availableDaysForPickUp.value.push({
    available: true,
    selected: false,
    date: newDate,
  });
}

const showHours = computed(() =>
  availableDaysForPickUp.value.some((el) => el.selected)
);

// this is gonna be different later on
// we are gonna have this come from the backend and be a computed value
const hours = ref([
  {
    selected: false,
    start: "8:00",
    end: "12:00",
  },
  {
    selected: false,
    start: "14:00",
    end: "17:00",
  },
  {
    selected: false,
    start: "18:00",
    end: "22:00",
  },
]);
</script>

<style scoped></style>
