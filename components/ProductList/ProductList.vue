<script setup lang="tsx">
import MyCarouselNext from "../CustomCarousel/MyCarouselNext.vue";
import MyCarouselPrevious from "../CustomCarousel/MyCarouselPrevious.vue";
import ViewAllBtn from "../Product/ViewAllBtn.vue";

interface CarouselOptions {
  align: string;
}

const { variant = "primary", themeColor } = defineProps<{
  headerImage: string; // URL for the header image
  headerText: string; // Text displayed in the header
  themeColor: "red" | "orange"; // Theme color options
  showNuxtImg?: boolean; // Optional flag to show the NuxtImg component
  nuxtImgUrl?: string; // Optional URL for the NuxtImg component
  variant?: "primary" | "bordered";
}>();

const carouselItems = Array.from({ length: 50 }, (_, i) => i); // Dummy data for the carousel

const MyComponent = () => {
  return (
    <div class="items-center gap-2 justify-center flex mt-4 ">
      <ViewAllBtn class={["w-max text-white px-6", `bg-${themeColor}-400`]} />
      <MyCarouselNext themeColor={themeColor} />
      <MyCarouselPrevious themeColor={themeColor} />
    </div>
  );
};
</script>

<template>
  <main class="py-8">
    <section class="flex flex-col sm:flex-row">
      <div class="w-full mx-auto">
        <div class="max-w-[calc(100%)] mx-auto">
          <MyCarousel
            :opts="{
              align: 'start',
            }"
          >
            <!-- Header Section -->
            <div class="relative flex justify-between items-center py-4">
              <div class="flex items-center gap-2">
                <img
                  :src="headerImage"
                  alt="product category picture"
                  width="50"
                />
                <span
                  :class="`text-2xl font-semibold text-${themeColor}-500`"
                  >{{ headerText }}</span
                >
              </div>

              <!-- Optional Nuxt Image -->
              <NuxtImg
                v-if="showNuxtImg && nuxtImgUrl"
                :src="nuxtImgUrl"
                class="hidden md:flex"
                alt="dynamic product category picture"
                width="350"
              />

              <MyComponent class="items-center gap-2 hidden md:flex" />
            </div>

            <!-- Carousel Content -->
            <MyCarouselContent
              :class="{
                'bg-white rounded-lg': variant == 'primary',
                '-ml-2': variant == 'bordered',
              }"
            >
              <slot name="default">
                <MyCarouselItem
                  v-for="index in carouselItems"
                  :key="index"
                  :class="[
                    ` basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/6`,
                    variant == 'bordered' ? '!pl-2 ' : '',
                  ]"
                >
                  <ProductItem
                    image="https://s3-alpha-sig.figma.com/img/dbb6/728f/22a4a332ae99a982afb0156d548c3492?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsBqGIsKw15RoEMKEH9yaqXwzMdq6SWXf~yirvuYyEFJmdvr6dlj-fG5rYdbEl0FETwWGNBNsJvNe~yV9dx~O-TCgCeSOI5ahk1viYD2Lb-d1ABZ1QhfeV2c9PkTNb9l1tHnZ12WWhKp9a5i~qRczDvWtoSWIx4Q28momgh0P6Be4SGF9q3Ntn9wnUC9Uw49VbPyFW0b-AYm-QkNiWHR~fDtiRCetqt-BJXbDGOMT1BDIOw-xS4X4W543XdNNn5E4USorX8x1LgCadUp5Z4vIY4iVep3uYGdmLVG5pdU1DtmPb6BgHaxR1nXcY7~RZJnWmbyC4kFBuhfgnFbOcjybA__"
                    :score="70"
                    name="کتاب راز"
                    discount_end_time="2025-01-25T15:30:00Z"
                    price="120,000"
                    off_price="150,000"
                    :themeColor="themeColor"
                  />
                </MyCarouselItem>
              </slot>
            </MyCarouselContent>
            <MyComponent
              class="items-center gap-2 justify-center flex mt-4 md:hidden"
            />
          </MyCarousel>
        </div>
      </div>
    </section>
  </main>
</template>
