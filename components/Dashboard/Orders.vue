<template>
  <MyCard class="shadow-none">
    <div class="grid grid-cols-auto-fit-150 gap-2">
      <MyButton
        v-for="tab in allTabs"
        class="flex-1 px-4 min-w-36"
        :class="
          tabValue !== tab.value
            ? 'text-black border-[2px] border-grey-50'
            : 'text-white'
        "
        :color="tabValue == tab.value ? 'bg-yellow-600' : 'bg-transparent'"
        @click="tabValue = tab.value"
      >
        <Icon :name="tab.icon" class="text-xl me-4" />
        {{ tab.label }}
      </MyButton>
    </div>
    <component
      :is="RenderOrder"
      :orders="
        filteredOrders(
          allTabs.find((tab) => tab.value === tabValue)?.label ?? ''
        )
      "
    />
  </MyCard>
</template>

<script setup lang="ts">
import RenderOrder from "./RenderOrder.vue";

const allTabs = [
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
];

const tabValue = useState("ordertab", () => allTabs[0].value);

const orders = useState("orders", () => [
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
