<template>
  <div class="flex flex-col md:flex-row gap-4 w-full mx-auto p-4">
    <MyCard class="basis-1/4 md:min-w-48 md:max-w-60 w-full space-y-2 py-4">
      <div class="w-full basis-full flex justify-between py-4">
        <div class="flex items-center gap-2">
          <img
            class="w-12 h-12 rounded-full"
            :src="getUserPhoto(user)"
            :alt="getUserPhoto(user)"
          />
          <div class="flex flex-col">
            <span> {{ getUserName(user) }}</span>
            <span class="text-xs text-grey-300">{{ user?.phone_number }}</span>
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

    <MyCard
      :class="
        activeTab === 'tickets' ? '!bg-transparent !shadow-none !p-0 !m-0' : ''
      "
      class="flex-1"
    >
      <div>
        <template v-if="activeTab !== 'tickets'">
          <div class="flex items-center max-h-10 gap-2">
            <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
              <Icon
                :name="tabs.find((tab) => tab.tab == activeTab)?.icon!"
                class="text-2xl text-grey-400"
              />
            </div>
            {{ tabs.find((tab) => tab.tab == activeTab)?.tabname! }}
          </div>
          <Divider />
        </template>

        <component :is="tabs.find((tab) => tab.tab == activeTab)?.component!" />
      </div>
    </MyCard>
  </div>
</template>

<script setup lang="ts">
const Address = defineAsyncComponent(
  () => import("~/components/Dashboard/Address.vue")
);
const Cards = defineAsyncComponent(
  () => import("~/components/Dashboard/Cards.vue")
);
const Discount = defineAsyncComponent(
  () => import("~/components/Dashboard/Discount.vue")
);
const Favourite = defineAsyncComponent(
  () => import("~/components/Dashboard/Favourite.vue")
);
const Orders = defineAsyncComponent(
  () => import("~/components/Dashboard/Orders.vue")
);
const ProfileDetail = defineAsyncComponent(
  () => import("~/components/Dashboard/ProfileDetail.vue")
);
const Ticket = defineAsyncComponent(
  () => import("~/components/Dashboard/Ticket/Ticket.vue")
);
import { useAuthStore } from "~/store/auth";
import { getUserName, getUserPhoto } from "~/util";

const store = useAuthStore();

const user = store.user!;

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
    component: Orders,
  },
  {
    tabname: "اطلاعات شخصی",
    tab: "profile-info",
    icon: "mdi-account-outline",
    component: ProfileDetail,
  },
  {
    tabname: "علاقه مندی ها",
    tab: "Favourite",
    icon: "mdi-heart-outline",
    component: Favourite,
  },
  {
    tabname: "آدرس ها",
    tab: "address",
    icon: "mdi-map-marker-outline",
    component: Address,
  },
  {
    tabname: "حساب های بانکی",
    tab: "bank-accounts",
    icon: "mdi-bank-outline",
    component: Cards,
  },
  {
    tabname: "تیکت ها",
    tab: "tickets",
    icon: "mdi-message-outline",
    component: Ticket,
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

const activeTab = useCookie<string>("dashboardTab", {
  default() {
    return "dashboard";
  },
});

function changeTab(tab: string) {
  activeTab.value = tab;
}
</script>
