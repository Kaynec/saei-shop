<template>
  <div
    class="hidden flex-col bg-white border-b min-h-[75px] z-50 tracking-tighter shadow-md p-4 lg:flex"
  >
    <div class="flex justify-between items-center p-3">
      <div class="flex gap-2 items-center">
        <NuxtImg src="/logo.png" alt="logo" width="70" />
        <IconField class="w-full min-w-[26rem] flex">
          <InputIcon>
            <Icon name="mdi:magnify" class="text-2xl" />
          </InputIcon>
          <InputText
            class="w-full text-xs h-full !py-2"
            placeholder="هرچی میخای اینجا بنویس"
          />
        </IconField>
      </div>
      <div class="flex gap-2 items-center">
        <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
          <Icon name="mdi-bell-outline" class="text-2xl text-grey-400" />
        </MyButton>

        <!-- Login Or Log Out -->
        <MyButton
          v-if="authStore.isAuthenticated"
          @click="authStore.logout()"
          color="bg-orange-400 text-white"
          class="px-2"
        >
          <span> خروج</span>
          <Icon name="mdi:close-octagon-outline" class="text-2xl" />
        </MyButton>
        <MyButton
          v-else
          @click="globalState.toggleLoginDialog()"
          color="bg-orange-400 text-white"
          class="px-2"
        >
          <span> ورود / ثبت نام </span>
          <Icon name="mdi:account-outline" class="text-2xl" />
        </MyButton>

        <!--  -->

        <MyButton color="bg-grey-50" class="aspect-square w-12 h-12">
          <Icon name="mdi:basket-outline" class="text-2xl text-grey-400" />
        </MyButton>
      </div>
    </div>
    <div class="flex justify-between items-center p-3">
      <ul class="flex gap-4 text-sm">
        <li class="border-l-2 border-solid border-grey-50 pe-2">
          <MyMegaMenu />
        </li>

        <li
          v-for="link in Object.keys(Links)"
          :key="link"
          class="border-l-2 border-solid border-grey-50 pe-2"
        >
          <NuxtLink :to="(Links as any)[link]" class="text-sm text-grey-400">{{
            link
          }}</NuxtLink>
        </li>
      </ul>
      <div class="flex gap-2">
        <span> ۰۲۱ - ۷۷۹۸۹۸00 </span>
        <Icon name="mdi-phone-outline" class="text-2xl text-grey-400" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Links } from "~/const/SiteDetails";
import { useAuthStore } from "~/store/auth";
import { useGlobalState } from "~/store/global";

const authStore = useAuthStore();

onMounted(() => {
  var toggleOpen = document.getElementById("toggleOpen");
  var toggleClose = document.getElementById("toggleClose");
  var collapseMenu = document.getElementById("collapseMenu");

  function handleClick() {
    if (!collapseMenu) {
      return;
    }
    if (collapseMenu?.style.display === "block") {
      collapseMenu.style.display = "none";
    } else {
      collapseMenu.style.display = "block";
    }
  }

  toggleOpen?.addEventListener("click", handleClick);
  toggleClose?.addEventListener("click", handleClick);
});

const globalState = useGlobalState();
</script>

<style scoped></style>
