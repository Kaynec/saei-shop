<template>
  <header class="block lg:hidden">
    <div
      class="flex flex-row-reverse bg-white border-b py-3 sm:px-6 px-4 min-h-[75px] tracking-wide relative z-50"
    >
      <div class="flex flex-row-reverse max-w-screen-xl mx-auto w-full">
        <div
          class="flex flex-row-reverse flex-wrap items-center lg:gap-y-2 gap-2 w-full"
        >
          <div class="flex gap-2 items-center">
            <NuxtLink to="/" class="hidden max-sm:block"
              ><NuxtImg src="/logo.png" alt="logo" class="w-16" />
            </NuxtLink>
            <MyButton
              aria-label="bell-icon goes to notifications"
              color="bg-grey-50"
              class="aspect-square w-10 h-10"
            >
              <Icon name="mdi-bell-outline" class="text-xl text-grey-400" />
            </MyButton>
            <MyButton
              aria-label="basket icon goes to cart"
              color="bg-grey-50"
              class="aspect-square w-10 h-10"
            >
              <Icon name="mdi:basket-outline" class="text-xl text-grey-400" />
            </MyButton>

            <MyButton
              aria-label="user profile button"
              @click="
                () => {
                  if (authStore.isAuthenticated) {
                    navigateTo('/dashboard');
                  } else {
                    globalState.toggleLoginDialog();
                  }
                }
              "
              color="bg-orange-400"
              class="aspect-square w-10 h-10"
            >
              <Icon name="mdi:account-outline" class="text-xl text-grey-400" />
            </MyButton>
          </div>

          <div class="card flex justify-start flex-1">
            <Drawer v-model:visible="visible" header="   " class="relative">
              <div class="flex flex-col justify-between items-center p-3">
                <ul class="flex flex-col items-start w-full gap-4 text-sm">
                  <li v-for="link in Object.keys(Links)" :key="link">
                    <NuxtLink
                      :to="(Links as any)[link]"
                      class="text-sm text-grey-400"
                      >{{ link }}</NuxtLink
                    >
                  </li>
                  <li class="flex gap-2">
                    <span> ۰۲۱ - ۷۷۹۸۹۸00 </span>
                    <Icon
                      name="mdi-phone-outline"
                      class="text-2xl text-grey-400"
                    />
                  </li>
                  <li>
                    <NuxtLink @click="visible = false" to="/products">
                      <MyButton class="px-4" color="bg-yellow-600">
                        نمایش محصولات
                      </MyButton>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Drawer>
            <MyButton
              color="bg-grey-50"
              class="aspect-square w-10 h-10"
              @click="visible = true"
              name="hamburger menu button"
            >
              <Icon name="mdi:menu" class="text-2xl text-grey-400" />
            </MyButton>
          </div>
        </div>
      </div>
    </div>
    <HeaderInput
      model-value="هرچی میخای اینجا بنویس"
      class="!h-12 border-none"
    />
  </header>
</template>

<script setup lang="ts">
import { Links } from "~/const/SiteDetails";
import { useAuthStore } from "~/store/auth";
import { useGlobalStore } from "~/store/global";

const globalState = useGlobalStore();

const visible = ref(false);
const authStore = useAuthStore();
</script>

<style scoped></style>
