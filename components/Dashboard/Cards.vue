<template>
  <div>
    <Dialog
      :pt="{
        root: 'p-dialog-maximized',
      }"
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="visible"
    >
      <template #header>
        <div class="flex gap-2 items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="5" fill="#FAFAFA" />
            <path
              d="M26.2617 27.4385H21.2617"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.7617 24.998V29.998"
              stroke="#575757"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6609 14.5181L24.6309 14.5881L21.7309 21.3181H18.8809C18.2009 21.3181 17.5509 21.4581 16.9609 21.7081L18.7109 17.5281L18.7509 17.4281L18.8209 17.2681C18.8409 17.2081 18.8609 17.1481 18.8909 17.0981C20.2009 14.0681 21.6809 13.3781 24.6609 14.5181Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.0505 21.5186C29.6005 21.3786 29.1205 21.3186 28.6405 21.3186H21.7305L24.6305 14.5886L24.6605 14.5186C24.8105 14.5686 24.9505 14.6386 25.1005 14.6986L27.3105 15.6286C28.5405 16.1386 29.4005 16.6686 29.9205 17.3086C30.0205 17.4286 30.1005 17.5386 30.1705 17.6686C30.2605 17.8086 30.3305 17.9486 30.3705 18.0986C30.4105 18.1886 30.4405 18.2786 30.4605 18.3586C30.7305 19.1986 30.5705 20.2286 30.0505 21.5186Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5217 26.1984V28.1484C33.5217 28.3484 33.5117 28.5484 33.5017 28.7484C33.3117 32.2384 31.3617 33.9984 27.6617 33.9984H19.8617C19.6217 33.9984 19.3817 33.9784 19.1517 33.9484C15.9717 33.7384 14.2717 32.0384 14.0617 28.8584C14.0317 28.6284 14.0117 28.3884 14.0117 28.1484V26.1984C14.0117 24.1884 15.2317 22.4584 16.9717 21.7084C17.5717 21.4584 18.2117 21.3184 18.8917 21.3184H28.6517C29.1417 21.3184 29.6217 21.3884 30.0617 21.5184C32.0517 22.1284 33.5217 23.9884 33.5217 26.1984Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.71 17.5283L16.96 21.7083C15.22 22.4583 14 24.1883 14 26.1983V23.2683C14 20.4283 16.02 18.0583 18.71 17.5283Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M33.5186 23.2677V26.1977C33.5186 23.9977 32.0586 22.1277 30.0586 21.5277C30.5786 20.2277 30.7286 19.2077 30.4786 18.3577C30.4586 18.2677 30.4286 18.1777 30.3886 18.0977C32.2486 19.0577 33.5186 21.0277 33.5186 23.2677Z"
              stroke="#575757"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p class="text-lg">افزودن حساب بانکی جدید</p>
        </div>
      </template>

      <Transition
        enter-active-class="transform duration-500 ease-out"
        enter-from-class="translate-x-[200%]"
        enter-to-class="translate-x-[100%]"
        leave-active-class="transform duration-500 ease-in"
        leave-from-class="translate-x-[200%]"
        leave-to-class="translate-x-[100%]"
      >
        <div class="flex-flex-col-gap-4" v-if="currentStep == STEPS.STEP1">
          <p class="py-4 text-sm text-grey-300 font-semibold">
            برای محاسبه شبا، شماره کارت متصل به حسابی که می‌خواهید واریز وجه به
            آن انجام شود را وارد کنید
          </p>
          <FormField name="depositNumber" class="w-full">
            <InputText
              v-model="model.depositNumber"
              class="my-input py-2"
              variant="outlined"
              name="depositNumber"
              fuild
            />
          </FormField>
          <div class="col-span-full flex gap-2">
            <MyButton
              @click="currentStep = STEPS.STEP2"
              type="submit"
              class="text-white flex-1 !max-w-56 mt-4"
              color="bg-orange-400"
            >
              محاسبه شماره شبا
            </MyButton>
          </div>
        </div>
        <div class="flex-flex-col-gap-4" v-else>
          <p class="py-4 text-sm text-grey-300 font-semibold">
            کد ۵ رقمی به شماره‌ی ۰۹۳۰۲۶۰۸۵۳۸ ارسال گردید
          </p>
          <FormField name="otp" class="w-full">
            <IftaLabel :initialValue="model.otp">
              <InputText
                v-model="model.otp"
                class="my-input"
                variant="outlined"
                name="otp"
              />
              <label> کد تایید احراز هویت</label>
            </IftaLabel>
            <button class="text-primary-500 pt-4 text-center w-full">
              01:59 مانده تا دریافت مجدد کد
            </button>
          </FormField>
          <div class="col-span-full flex gap-2">
            <MyButton
              @click="submitOtp"
              type="submit"
              class="text-white flex-1 !max-w-56"
              color="bg-orange-400"
            >
              تایید
            </MyButton>
          </div>
        </div>
      </Transition>
    </Dialog>

    <div
      class="grid grid-cols-auto-fit-350 gap-4 min-h-[min(65svh,36rem)] overflow-auto overscroll-contain"
    >
      <div
        v-for="(item, index) in cards"
        :key="index"
        class="max-h-48 flex flex-col relative items-start text-lg gap-2 p-4 rounded-lg bg-grey-50"
      >
        <div class="absolute left-0 top-0 m-4">
          <button @click="toggle($event, index)">
            <Icon
              name="mdi-dots-vertical"
              class="text-xl absolute left-0 top-0 m-4"
            />
          </button>
          <Popover ref="op">
            <div class="flex justify-center gap-4 w-[25rem]">
              <div class="flex items-center gap-4">
                <span class="font-medium block">حدف حساب</span>
                <MyButton
                  @click="
                    cards = cards.filter((card) => card.iban !== item.iban)
                  "
                  color="bg-grey-50"
                  class="bg-opacity-30 px-4"
                >
                  <Icon
                    name="mdi-trash-can-outline"
                    class="text-xl text-grey-200"
                  />
                </MyButton>
              </div>
              <!-- <div class="flex gap-4 items-center">
                <span class="font-medium block mb-2">ویرایش حساب</span>
                <MyButton color="bg-grey-50" class="bg-opacity-30 px-4">
                  <Icon
                    name="mdi-trash-can-outline"
                    class="text-xl text-grey-200"
                  />
                </MyButton>
              </div> -->
            </div>
          </Popover>
        </div>

        <div class="flex items-center justify-center">
          <NuxtImg src="/bank-iran/sepah.png" alt="bank sepah" width="100" />
          <div class="text-lg">
            <p class="font-semibold">
              {{ item.depositDescription }}
            </p>
            <p>
              {{ item.depositNumber }}
            </p>
          </div>
        </div>
        <p class="text-center w-full tracking-widest">
          {{ item.iban }}
        </p>
      </div>
      <Button
        @click="visible = true"
        class="max-h-48 border-grey-100 h-48 bg-grey-50 bg-opacity-50 text-grey-800 border-2 border-dashed rounded-lg"
      >
        <Icon name="mdi-plus" class="text-xl text-grey-200" />
        افزودن حساب بانکی جدید
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from "~/types";

const cards = ref<Card[]>([
  {
    depositDescription: "خماري ازبک",
    depositNumber: "535302200802",
    iban: "IR310150000000535302200802",
  },
  {
    depositDescription: "خماري ازبک",
    depositNumber: "535302200802",
    iban: "IR310150000000535302200802",
  },
  {
    depositDescription: "خماري ازبک",
    depositNumber: "535302200802",
    iban: "IR310150000000535302200802",
  },
  {
    depositDescription: "خماري ازبک",
    depositNumber: "535302200802",
    iban: "IR310150000000535302200802",
  },
  {
    depositDescription: "خماري ازبک",
    depositNumber: "535302200802",
    iban: "IR310150000000535302200802",
  },
]);

const visible = ref(false);

const model = ref<Card & { otp: string }>({
  depositDescription: "",
  depositNumber: "",
  iban: "",
  otp: "",
});

function submit(data: Card) {}

const STEPS = {
  STEP1: "OTP",
  STEP2: "SUBMIT",
};

const currentStep = ref(STEPS.STEP1);

async function submitOtp() {
  // for now just send the data to the mock and assume otp is okay
  // later we will have a real otp verification
  try {
    const res = await $fetch(
      "/api/shaba?cardNumber=" + model.value.depositNumber
    );
    console.log(res);
    cards.value.push(res as Card);
    visible.value = false;
  } catch (error) {
    console.warn("xo xo");
  }
}

const op = ref();

const toggle = (event, index: number) => {
  console.log(op.value[index]);
  op.value[index].toggle(event);
};
</script>

<style scoped></style>
