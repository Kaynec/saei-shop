<template>
  <div
    class="flex flex-col gap-4 max-h-[min(60svh,32rem)] overscroll-contain overflow-auto my-2"
  >
    <div
      class="p-4 border-[1px] border-grey-50 rounded-lg border-solid"
      v-for="item in orders"
      :key="item.id"
    >
      <Chip :class="[getChipColor(item.order_status)]">
        <span v-html="getChipIcon(item.order_status)"></span>
        {{ item.order_status }}
      </Chip>
      <Divider />
      <!--  -->
      <div class="flex flex-col md:flex-row gap-8 items-start py-4">
        <span
          class="w-full md:w-fit border-b-2 pb-2 md:border-b-0 md:border-l-2 border-solid border-grey-50 pe-2"
        >
          تاریخ ثبت سفارش :
          {{ new Date(item.order_date).toLocaleDateString("fa") }}
        </span>
        <span
          class="w-full md:w-fit border-b-2 pb-2 md:border-b-0 md:border-l-2 border-solid border-grey-50 pe-2"
        >
          شماره سفارش : {{ item.id }}
        </span>
        <span class="pe-2 flex-center gap-2">
          قیمت نهایی : {{ item.final_price }}
          <img src="/Tooman.svg" alt="Tooman.svg" class="w-5" />
        </span>
      </div>
      <div class="flex items-center justify-between">
        <!-- images -->
        <div class="flex overflow-auto">
          <NuxtImg
            v-for="image in item.images"
            :key="image"
            :src="image"
            alt="product image"
            width="75"
          />
        </div>
        <div class="gap-2 flex" color="bg-transparent">
          مشاهده جزییات
          <Button
            unstyled
            :class="[
              buttonClasses.disabled,
              buttonClasses.hover,
              buttonClasses.focus,
              buttonClasses.border,
              'transition-all duration-300 w-6 h-6 flex-center rounded-lg',
            ]"
          >
            <slot>
              <Icon
                :class="['text-[48px]', buttonClasses.text]"
                name="mdi:chevron-left"
              />
            </slot>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const color = "orange";
const buttonClasses = {
  hover: `hover:bg-${color}-100`,
  focus: `enabled:focus:bg-${color}-50`,
  border: `border-solid !border-2 border-${color}-400`,
  text: `text-${color}-300`,
  disabled: `disabled:bg-${color}-600 !disabled:hover:bg-${color}-600`,
};

defineProps<{
  orders: any[];
}>();

const getChipIcon = (status: string) => {
  if (status === "جاری") {
    return `<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.73742 6.61796L10.8578 0.5L11.8 1.44102L4.73742 8.5L0.5 4.26474L1.4415 3.32373L4.73742 6.61796Z" fill="#C0980A"/>
</svg>
`;
  } else if (status === "بازگشت") {
    return `<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.73742 6.61796L10.8578 0.5L11.8 1.44102L4.73742 8.5L0.5 4.26474L1.4415 3.32373L4.73742 6.61796Z" fill="#C0980A"/>
</svg>
`;
  } else if (status === "تحویل") {
    return `<svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.77151 5.67827L8.70666 6.61796L14.3135 0.98382L15.25 1.92484L8.70666 8.5L4.49189 4.26474L5.42836 3.32373L6.83571 4.73792L7.77151 5.67761V5.67827ZM7.77284 3.79623L11.0525 0.5L11.9863 1.43836L8.70666 4.73459L7.77284 3.79623ZM5.90057 7.55965L4.96476 8.5L0.75 4.26474L1.68647 3.32373L2.62227 4.26408L2.62161 4.26474L5.90057 7.55965Z" fill="#26AB6D"/>
</svg>
`;
  } else if (status === "لغو") {
    return `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3.5557L8.3057 0.25L9.25 1.1943L5.9443 4.5L9.25 7.8057L8.3057 8.75L5 5.4443L1.6943 8.75L0.75 7.8057L4.0557 4.5L0.75 1.1943L1.6943 0.25L5 3.5557Z" fill="#ED5254"/>
</svg>
`;
  }
};

const getChipColor = (status: string) => {
  if (status === "جاری") {
    return "bg-[#F0B90B1A] text-[#C0980A]";
  } else if (status === "بازگشت") {
    return "bg-[#F0B90B1A] text-[#C0980A]";
  } else if (status === "تحویل") {
    return "bg-[#26AB6D1A] text-[#26AB6D]";
  } else if (status === "لغو") {
    return "bg-[#ED52541A] text-[#ED5254]";
  }
};
</script>
