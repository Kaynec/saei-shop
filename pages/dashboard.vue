<template>
  <div class="flex flex-col md:flex-row gap-4 w-full mx-auto p-4">
    <MyCard class="basis-1/4 md:min-w-48 md:max-w-60 w-full space-y-2 py-4">
      <div class="w-full basis-full flex justify-between py-4">
        <div class="flex items-center gap-2">
          <img
            class="w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          />
          <div class="flex flex-col">
            <span> بهراد اب نیکی</span>
            <span class="text-xs text-grey-300">09104507847</span>
          </div>
        </div>
      </div>
      <Divider />
      <div class="tabs flex md:flex-col overflow-auto">
        <MyTab
          v-for="tab in tabs"
          :key="tab.tab"
          :tab="tab.tab"
          :changeTab="changeTab"
          class="gap-2 !min-w-36"
          :active-tab="activeTab"
          :tabname="tab.tabname"
        >
          <template #icon>
            <Icon :name="tab.icon" />
          </template>
        </MyTab>
      </div>
    </MyCard>

    <MyCard class="flex-1">
      <div class="">
        <div class="flex items-center max-h-10 gap-2">
          <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
            <Icon
              :name="tabs.find(tab=>tab.tab == currentTab)?.icon!"
              class="text-2xl text-grey-400"
            />
          </div>
          {{ tabs.find((tab) => tab.tab == currentTab)?.tabname! }}
        </div>
        <Divider />

        <component :is="tabs.find(tab=>tab.tab == currentTab)?.component!" />
      </div>
    </MyCard>
  </div>
</template>

<script setup lang="ts">
import Discount from "~/components/Dashboard/Discount.vue";

const tabs = [
  {
    tabname: "داشبورد",
    tab: "dashboard",
    icon: "mdi:view-dashboard-outline",
  },
  {
    tabname: "سفارشات",
    tab: "orders",
    icon: "mdi-basket-outline",
  },
  {
    tabname: "اطلاعات شخصی",
    tab: "profile-info",
    icon: "mdi-account-outline",
  },
  {
    tabname: "علاقه مندی ها",
    tab: "favorite",
    icon: "mdi-heart-outline",
  },
  {
    tabname: "آدرس ها",
    tab: "address",
    icon: "mdi-map-marker-outline",
  },
  {
    tabname: "حساب های بانکی",
    tab: "bank-accounts",
    icon: "mdi-bank-outline",
  },
  {
    tabname: "کد تخفیف",
    tab: "discount-codes",
    component: Discount,
    icon: "mdi-sale-outline",
  },
  {
    tabname: "خروج",
    tab: "exit",
    icon: "mdi-door",
  },
];

const activeTab = useState<string>("activeTab", () => "dashboard");
const currentTab = useState<string>("currentTab", () => "dashboard");

function changeTab(tab: string) {
  activeTab.value = tab;
  currentTab.value = tab;
}

function logout() {
  // some evil code
}
</script>
