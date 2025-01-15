<template>
  <div
    class="max-w-65rem pt-12 bg-red-100 sm:bg-red-200 md:bg-orange-300 lg:bg-red-400"
  >
    <div
      class="!overflow-hidden flex px-2 py-6 mx-auto bg-orange-100 rounded-lg"
    >
      <div
        class="max-w-full items-center justify-between hidden md:flex flex-col mx-4 pb-8"
      >
        <img
          src="~/public/discount-pic.svg"
          class="h-full !min-w-48 aspect-1 mt-auto"
        />
        <MyButton color="bg-orange-400" class="gap-2 w-full" unstyled>
          <span>افزودن به سبد</span>
          <span
            class="bg-gray-50 bg-opacity-30 items-center flex justify-center w-8 h-8 rounded-lg"
          >
            <Icon name="mdi:arrow-top-left-thin" class="text-xl" />
          </span>
        </MyButton>
      </div>
      <div class="flex-1 w-full" dir="ltr">
        <Carousel
          :value="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
          :numVisible="5"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          :autoplayInterval="3000"
          circular
        >
          <template #nexticon>
            <Button
              unstyled
              class="border-2 border-solid hover:bg-orange-50 transition-all duration-300 border-orange-300 w-8 h-8 flex items-center justify-center rounded-lg"
            >
              <Icon
                name="mdi:chevron-right"
                class="text-orange-300 text-[48px]"
              />
            </Button>
          </template>
          <template #previcon>
            <Button
              unstyled
              class="border-2 border-solid hover:bg-orange-50 transition-all duration-300 border-orange-300 w-8 h-8 flex items-center justify-center rounded-lg"
            >
              <Icon
                name="mdi:chevron-left"
                class="text-orange-300 text-[48px]"
              />
            </Button>
          </template>
          <template #item>
            <SpecialOfferCard
              image="https://s8.uupload.ir/files/image_2025-01-15_172623635_mu7z.png"
              :score="70"
              name="کتاب راز"
              discount_end_time="2025-01-25T15:30:00Z"
              price="120,000"
              off_price="150,000"
              class="mx-1"
            />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MyButton from "~/components/MyButton.vue";
import { ProductService } from "~/service/ProductService";
import colors from "tailwindcss/colors";

onMounted(() => {
  ProductService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  );
});

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "320px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style scoped>
:deep(.p-carousel-next-button):hover {
  background: transparent;
}
:deep(.p-carousel-prev-button):hover {
  background: transparent;
}
:deep(.p-carousel-indicator-list) {
  display: none;
}
:deep(.p-carousel-item-list) {
  flex-basis: 25rem !important;
  width: auto !important;
}
</style>
