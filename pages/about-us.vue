<script setup lang="ts">
import colors from "tailwindcss/colors";
</script>

<template>
  <main class="p-2 lg-p4 container mx-auto space-y-8 py-8">
    <Card class="text-center bg-white space-y-8 text-gray-800 py-12">
      <template #content>
        <div class="space-y-6">
          <h1 class="text-2xl font-semibold">
            فروشگاه اینترنتی <span class="text-orange-300">ساعی</span>
          </h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
          </p>
          <NuxtImg src="/about-us.png" alt="about us picture" />
        </div>
      </template>
    </Card>

    <Card class="bg-white text-center py-12">
      <template #header>
        <span class="text-2xl text-gray-800 font-semibold"
          >فروشگاه اینترنتی <span class="text-orange-300">ساعی</span></span
        >
      </template>
      <template #content>
        <div class="grid grid-cols-auto-fit-100 gap-8">
          <div
            v-for="i in 5"
            class="p-2 flex flex-col gap-6 items-center justify-center min-h-96 rounded-lg beforeclass"
          >
            <div class="border-custom-bg"></div>
            <div class="border-custom"></div>
            <img src="/about-us-ball.svg" alt="about-us-ball.svg" width="120" />

            <span class="text-gray-800 font-semibold text-2xl">
              راه پویان
            </span>
            <p class="text-gray-500 text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </p>
          </div>
        </div>
      </template>
    </Card>

    <Card class="text-center bg-white py-12 text-gray-800">
      <template #header>
        <span class="text-2xl font-semibold">گالری تصاویر</span>
      </template>
      <template #content>
        <div class="grid grid-cols-auto-fit-100 gap-8">
          <div
            class="aspect-[1] w-full rounded-lg bg-orange-300 img-with-border"
            v-for="i in 5"
          >
            <NuxtImg
              src="/about-us.png"
              class="w-full h-full rounded-lg object-cover shadow-lg"
              alt="about us picture"
            />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>
<style scoped>
.beforeclass {
  position: relative !important; /* Establish stacking context */
  z-index: 0;
}

.border-custom-bg {
  position: absolute; /* Required for z-index to work */
  inset: 0; /* Fill the parent */
  border-radius: 12px; /* Rounded corners */
  background: rgb(234 234 234); /* Semi-transparent background */
  z-index: -1; /* Lower stacking order */
}

.border-custom {
  position: absolute; /* Required for z-index to work */
  inset: 0; /* Fill the parent */
  transform: rotate(3deg); /* Correct rotation syntax */
  border: 2px solid rgba(255, 166, 0, 0.521); /* Background for visibility */

  border-radius: 12px; /* Rounded corners */
  z-index: -2; /* Higher stacking order */
}

.img-with-border {
  position: relative;
  z-index: 0;
}
.img-with-border::after {
  content: "";
  position: absolute;
  background: rgba(255, 166, 0, 0.37);
  inset: 0;
  z-index: -1;
  width: 103%;
  height: 103%;
  border-radius: 12px;
  transform: rotate(4deg); /* Correct rotation syntax */
}
</style>
