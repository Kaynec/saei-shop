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
        <MyButton
          aria-label="bell-icon goes to notifications"
          color="bg-grey-50"
          class="aspect-square w-12 h-12"
        >
          <Icon name="mdi-bell-outline" class="text-2xl text-grey-400" />
        </MyButton>

        <!-- Login Or Log Out -->

        <MyButton
          @click="
            () => {
              if (authStore.isAuthenticated) {
                navigateTo('/dashboard');
              } else {
                globalState.toggleLoginDialog();
              }
            }
          "
          color="bg-orange-400 text-white"
          class="px-2 min-w-12"
        >
          <span v-if="!authStore.isAuthenticated"> ورود / ثبت نام </span>
          <Icon name="mdi:account-outline" class="text-2xl" />
        </MyButton>

        <!--  -->

        <MyButton
          aria-label="basket icon goes to cart"
          color="bg-grey-50"
          class="aspect-square w-12 h-12"
        >
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
import { useGlobalStore } from "~/store/global";

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

const globalState = useGlobalStore();
</script>

<style scoped></style>
