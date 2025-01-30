<template>
  <MyCard class="shadow-none">
    <Tabs v-model:value="tabValue" scrollable>
      <TabList>
        <Tab :value="tab.value" class="flex-1 flex" v-for="tab in allTabs">
          <MyButton
            class="flex-1 px-4 min-w-36"
            :class="
              tabValue !== tab.value
                ? 'text-black border-[2px] border-grey-50'
                : 'text-white'
            "
            :color="tabValue == tab.value ? 'bg-yellow-600' : 'bg-transparent'"
          >
            <Icon :name="tab.icon" class="text-xl me-4" />
            {{ tab.label }}
          </MyButton>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in allTabs" :key="tab.value" :value="tab.value">
          <div
            class="flex flex-col gap-4 max-h-[min(60svh,32rem)] overscroll-contain overflow-auto my-2"
          >
            <div
              class="p-4 border-[1px] border-grey-50 rounded-lg border-solid"
              v-for="item in filteredOrders(tab.label)"
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
                <MyButton class="gap-2" color="bg-transparent">
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
                </MyButton>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </MyCard>
</template>

<script setup lang="ts">
const buttonClasses = computed(() => {
  const color = "orange";
  return {
    hover: `hover:bg-${color}-100`,
    focus: `enabled:focus:bg-${color}-50`,
    border: `border-solid !border-2 border-${color}-400`,
    text: `text-${color}-300`,
    disabled: `disabled:bg-${color}-600 !disabled:hover:bg-${color}-600`,
  };
});

const allTabs = ref([
  {
    value: "all",
    label: "همه",
    icon: "mdi:invoice-text-multiple-outline",
  },
  {
    value: "current",
    label: "جاری",
    icon: "mdi:clock-time-four-outline",
  },
  {
    value: "returned",
    label: "بازگشت",
    icon: "mdi:keyboard-return",
  },
  {
    value: "delivered",
    label: "تحویل",
    icon: "mdi:tooltip-check-outline",
  },
  {
    value: "canceled",
    label: "لغو",
    icon: "mdi:window-close",
  },
]);

const tabValue = ref(allTabs.value[0].value);

const orders = ref([
  {
    id: 1,
    final_price: 10000,
    order_date: "2022-01-01",
    order_status: "جاری",
    images: [
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    ],
  },
  {
    id: 2,
    final_price: 20000,
    order_date: "2022-01-02",
    order_status: "جاری",
    images: [
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    ],
  },
  {
    id: 3,
    final_price: 30000,
    order_date: "2022-01-03",
    order_status: "لغو",
    images: [
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    ],
  },
  {
    id: 4,
    final_price: 40000,
    order_date: "2022-01-04",
    order_status: "تحویل",
    images: [
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    ],
  },
  {
    id: 5,
    final_price: 50000,
    order_date: "2022-01-05",
    order_status: "بازگشت",
    images: [
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    ],
  },
]);

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

function filteredOrders(order_status: string) {
  if (order_status === "همه") {
    return orders.value;
  }
  return orders.value.filter((item) => item.order_status === order_status);
}
</script>

<style scoped>
:deep(.p-tablist-tab-list) {
  border-radius: 12px;
  border: none !important;
  gap: 1rem;
}

:deep(.p-tab) {
  padding: 0;
}
:deep(.p-tablist-tab-list) {
  border-radius: 12px;
  border: 2px solid #cccccc3f;
}
:deep(.p-tablist-active-bar) {
  border-color: transparent !important;
  border-width: 0 !important;
  border-style: hidden !important;
  display: none;
}
:deep(.p-tab-active) {
  border-color: transparent !important;
  border-width: 0 !important;
  border-style: hidden !important;
}
:deep(.p-tab) {
  border-color: transparent !important;
  border-width: 0 !important;
  border-style: hidden !important;
}
:deep(.p-tabpanels) {
  padding: 0;
}
:deep(.p-tablist-next-button),
:deep(.p-tablist-prev-button) {
  display: none;
}
</style>
