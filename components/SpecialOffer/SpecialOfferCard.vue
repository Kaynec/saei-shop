<template>
  <Card
    class="bg-white select-none rounded-lg special-card after:bg-orange-400"
  >
    <template #content>
      <div class="flex justify-between items-center translate-y-2">
        <div
          class="w-12 h-12 bg-orange-300 grid place-content-center font-semibold text-white"
          style="
            -webkit-mask-image: url('star.svg');
            mask-image: url('star.svg');
            mask-repeat: no-repeat;
            mask-position: center;
            mask-size: cover;
          "
        >
          {{ score }}%
        </div>
        <div class="flex items-center gap-1 text-orange-300">
          <span class="text-xl">{{ score }}</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.15523 2.33977L10.3286 4.68643C10.4886 5.0131 10.9152 5.32643 11.2752 5.38643L13.4019 5.73977C14.7619 5.96643 15.0819 6.9531 14.1019 7.92643L12.4486 9.57977C12.1686 9.85977 12.0152 10.3998 12.1019 10.7864L12.5752 12.8331C12.9486 14.4531 12.0886 15.0798 10.6552 14.2331L8.66189 13.0531C8.30189 12.8398 7.70856 12.8398 7.34189 13.0531L5.34856 14.2331C3.92189 15.0798 3.05523 14.4464 3.42856 12.8331L3.90189 10.7864C3.98856 10.3998 3.83523 9.85977 3.55523 9.57977L1.90189 7.92643C0.928559 6.9531 1.24189 5.96643 2.60189 5.73977L4.72856 5.38643C5.08189 5.32643 5.50856 5.0131 5.66856 4.68643L6.84189 2.33977C7.48189 1.06643 8.52189 1.06643 9.15523 2.33977Z"
              fill="#F8CE0B"
              stroke="#F8CE0B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <NuxtImg :src="image" alt="product image" width="140" class="mx-auto" />
      <p class="text-gray-700 text-xl">{{ name }}</p>
      <div class="mt-auto">
        <div class="flex justify-between text-xl pt-2">
          <div class="flex gap-2 items-center text-gray-500">
            <span class="line-through">{{ off_price }} </span>
            <img src="~/assets/images/Tooman.svg" alt="" />
          </div>
          <div class="flex gap-2 items-center text-gray-900">
            <span>{{ price }}</span>
            <img src="~/assets/images/Tooman.svg" alt="" />
          </div>
        </div>

        <!-- Dynamic Countdown Timer -->
        <div
          class="flex mt-1 p-1 text-gray-400 rounded-lg bg-gray-100 justify-evenly"
        >
          <div
            class="border-l-2 border-solid flex items-center text-xl flex-col flex-1 border-gray-300"
          >
            <span class="text-orange-300">{{ countdown.seconds }}</span>
            <span class="text-sm"> ثانیه</span>
          </div>
          <div
            class="border-l-2 border-solid flex items-center text-xl flex-col flex-1 border-gray-300"
          >
            <span class="text-orange-300">{{ countdown.minutes }}</span>
            <span class="text-sm"> دقیقه</span>
          </div>
          <div
            class="border-l-2 border-solid flex items-center text-xl flex-col flex-1 border-gray-300"
          >
            <span class="text-orange-300">{{ countdown.hours }}</span>
            <span class="text-sm"> ساعت</span>
          </div>

          <div class="flex items-center text-xl flex-col flex-1">
            <span class="text-orange-300">{{ countdown.days }}</span>
            <span class="text-sm"> روز</span>
          </div>
        </div>

        <!-- Button Section -->
        <div class="flex pb-3 pt-1 gap-1 mt-1">
          <MyButton
            color="bg-orange-400"
            class="basis-3/5 gap-2 text-white"
            unstyled
          >
            <Icon name="mdi:basket-outline" class="text-xl" />
            <span>افزودن به سبد</span>
          </MyButton>
          <MyButton class="basis-1/5" color="bg-gray-200">
            <Icon name="mdi:heart-outline" class="text-gray-600 text-lg" />
          </MyButton>
          <MyButton class="basis-1/5" color="bg-gray-200">
            <Icon name="mdi:basket-outline" class="text-gray-600 text-lg" />
          </MyButton>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps<{
  image: string;
  score: number;
  name: string; // Assuming name is a string (e.g., book title)
  discount_end_time?: string; // Optional prop for discount end time
  price: string;
  off_price: string;
}>();

const countdown = ref({
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
});

// Function to update countdown based on discount_end_time
const updateCountdown = () => {
  if (props.discount_end_time) {
    const endTime = new Date(props.discount_end_time).getTime();
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance > 0) {
      countdown.value.days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      ).toString();
      countdown.value.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      countdown.value.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      countdown.value.seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      ).toString();
    } else {
      // If the countdown is over, set all to zero or handle accordingly
      countdown.value.days = "0";
      countdown.value.hours = "0";
      countdown.value.minutes = "0";
      countdown.value.seconds = "0";
    }
  }
};

// Update the countdown on component mount and set interval for updates
onMounted(() => {
  updateCountdown(); // Initial call to set the countdown values

  // Update every second
  const intervalId = setInterval(() => {
    updateCountdown();
  }, 1000);

  // Clear interval on component unmount
  return () => clearInterval(intervalId);
});
</script>

<style scoped>
:deep(.p-card-body) {
  padding: 0; /* Adjusted padding */
}

:deep(.p-card-content) {
  padding: 0.25rem; /* Adjusted padding */
}

.special-card {
  position: relative; /* Establish a positioning context */
}

.special-card::after {
  content: ""; /* Set content to an empty string */
  position: absolute; /* Use absolute positioning */
  inset: 0; /* Adjusted inset for scaling */

  top: 98.5%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
