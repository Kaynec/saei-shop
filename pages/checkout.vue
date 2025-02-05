<template>
  <div class="card flex justify-center w-full">
    <Stepper :value="1" class="w-full pt-4 pb-12 space-y-4">
      <StepList class="w-full bg-white shadow container mx-auto p-8 rounded-lg">
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
                  activeStep = tab.value;
                "
              >
                <span
                  :class="[
                    'rounded-full border-2 w-8 h-8 inline-flex items-center justify-center',
                    {
                      'bg-primary text-primary-contrast border-primary':
                        value === activeStep,
                      'text-primary  border-primary': value !== activeStep,
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
import { useGlobalState } from "~/store/global";

const globalStore = useGlobalState();

const activeStep = globalStore.activeStep;

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
