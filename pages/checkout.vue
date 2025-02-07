<template>
  <div class="card flex justify-center w-full">
    <Stepper :value="store.activeStep" class="w-full pt-4 pb-12 space-y-4">
      <div
        class="w-full bg-white shadow container mx-auto p-8 rounded-lg min-h-24"
      >
        <!-- v-if="!hydration" -->
        <div
          v-if="!hydration"
          class="flex flex-col items-center justify-center"
        >
          <div role="status" class="w-full animate-pulse">
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <ClientOnly>
          <StepList>
            <Step
              v-for="tab in tabs"
              :key="tab.value"
              v-slot="{ activateCallback, value }"
              asChild
              :value="tab.value"
            >
              <div class="flex flex-row flex-auto gap-2">
                <div class="flex flex-col items-center relative">
                  <button
                    class="bg-transparent border-0 inline-flex flex-col gap-2 relative"
                    @click="
                      activateCallback();
                      store.changeActiveStep(tab.value);
                    "
                  >
                    <span
                      class="text-primary border-primary rounded-full border-2 w-8 h-8 inline-flex items-center justify-center"
                      :class="[
                        {
                          'bg-primary text-primary-contrast border-primary':
                            value === store.activeStep,
                        },
                      ]"
                    >
                      <Icon :name="tab.iconName" class="text-2xl" />
                    </span>
                  </button>
                  <span
                    class="whitespace-nowrap absolute top-8 text-sm text-primary"
                  >
                    {{ tab.name }}
                  </span>
                </div>
                <Divider id="step-divider" />
              </div>
            </Step>
          </StepList>
        </ClientOnly>
      </div>

      <div class="shadow-lg rounded-xl container w-full mx-auto">
        <StepPanel class="!rounded-lg" v-for="tab in tabs" :value="tab.value">
          <component :is="tab.component" />
        </StepPanel>
      </div>
    </Stepper>
  </div>
</template>
<script setup lang="ts">
import Cart from "~/components/Checkout/Cart.vue";
import CartReview from "~/components/Checkout/CartReview.vue";
import PaymentSelect from "~/components/Checkout/PaymentSelect.vue";
import SendOptions from "~/components/Checkout/SendOptions.vue";
import { useGlobalStore } from "~/store/global";

const hydration = useState<boolean>("hydration", () => false);

onMounted(() => {
  hydration.value = true;
});

const store = useGlobalStore();

const tabs = [
  {
    name: "سبد خرید",
    iconName: "mdi-basket-outline",
    value: 1,
    component: Cart,
  },
  {
    name: "حمل و نقل",
    iconName: "mdi:truck-fast-outline",
    value: 2,
    component: SendOptions,
  },
  {
    name: "بررسی سفارش",
    iconName: "mdi:checkbox-marked-outline",
    value: 3,
    component: CartReview,
  },
  {
    name: "پرداخت",
    iconName: "mdi:wallet-bifold-outline",
    value: 4,
    component: PaymentSelect,
  },
];
</script>
<style scoped>
:deep(#step-divider.p-divider) {
  --p-divider-border-color: orange;
}
:deep(.p-steplist) {
  overflow: visible !important;
}
</style>
