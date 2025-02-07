<template>
  <!-- Login Signup happens after ssr anyway -->
  <ClientOnly>
    <Transition
      enter-active-class="transform duration-500 ease-out"
      enter-from-class="scale-0"
      enter-to-class="scale-[1]"
      leave-active-class="transform duration-500 ease-in"
      leave-from-class="scale-[1]"
      leave-to-class="scale-0"
    >
      <div
        v-if="globalState.getLoginDialog()"
        class="no-doc-scroll left-0 top-0 w-screen h-screen flex absolute z-50 bg-bgColor text-sm"
      >
        <FitLoadingScreen v-if="isLoading" />
        <MyButton
          @click="globalState.toggleLoginDialog()"
          class="absolute left-0 top-0 m-3 w-12 h-12 aspect-square"
          color="bg-primary-600"
        >
          <Icon name="mdi:close" class="text-2xl" />
        </MyButton>
        <div
          class="flex-center flex-1 md:basis-2/4 xl:basis-2/5 !rounded-none p-4"
        >
          <MyCard class="text-center space-y-2">
            <p class="text-lg" v-if="tabValue !== 'submit_code'">
              ورود / ثبت نام
            </p>
            <div class="flex gap-2">
              <Tabs v-model:value="tabValue">
                <TabList v-if="tabValue !== 'submit_code'">
                  <Tab value="signup" class="flex-1 flex">
                    <MyButton
                      class="flex-1"
                      :class="
                        tabValue !== 'signup'
                          ? 'text-black border-[2px] border-grey-50'
                          : 'text-white'
                      "
                      :color="
                        tabValue == 'signup'
                          ? 'bg-yellow-600'
                          : 'bg-transparent'
                      "
                    >
                      ثبت نام
                    </MyButton>
                  </Tab>
                  <Tab value="login" class="flex flex-1">
                    <MyButton
                      class="flex-1"
                      :class="
                        tabValue !== 'login'
                          ? 'text-black border-[2px] border-grey-50'
                          : 'text-white'
                      "
                      :color="
                        tabValue == 'login' ? 'bg-yellow-600' : 'bg-transparent'
                      "
                    >
                      ورود
                    </MyButton>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel value="signup">
                    <Signup
                      v-model="isLoading"
                      v-model:phone="phone"
                      @continue="tabValue = 'submit_code'"
                    />
                  </TabPanel>
                  <TabPanel value="submit_code">
                    <SubmitCode
                      @continue="tabValue = 'login'"
                      :phone="phone"
                      v-model:isLoading="isLoading"
                    />
                  </TabPanel>
                  <TabPanel value="login">
                    <Login
                      v-model="isLoading"
                      v-model:phone="phone"
                      @success="successLogin"
                      @continue="tabValue = 'submit_code'"
                    />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </MyCard>
        </div>
        <div
          class="flex-1 hidden md:flex md:basis-2/4 xl:basis-3/5 p-0 !rounded-none bg-no-repeat bg-center"
          style="
            background: url(&quot;/login-bg.png&quot;);
            background-size: contain;
          "
        ></div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useGlobalStore } from "~/store/global";

const tabValue = ref("login");

const globalState = useGlobalStore();

const isLoading = ref(false);
const phone = ref("");

const toast = useToast();
function successLogin() {
  globalState.toggleLoginDialog();
  toast.add({
    severity: "success",
    summary: "ورود به سیستم با موفقیت انجام شد",
    life: 3000,
  });
}
</script>

<style scoped>
:deep(.p-tablist-tab-list) {
  border-radius: 12px;
  border: 2px solid #cccccc3f;
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
</style>
