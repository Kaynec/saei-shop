<template>
  <MyCard class="!shadow-0 !border-none flex flex-col lg:flex-row gap-4">
    <!-- Heading And Right Side -->
    <div class="flex-1">
      <div class="flex flex-1 flex-col gap-4">
        <div class="w-full">
          <div class="flex items-center max-h-10 gap-2">
            <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
              <Icon
                name="mdi:credit-card-settings-outline"
                class="text-2xl text-grey-400 rotate-45"
              />
            </div>
            درگاه پرداخت
          </div>
          <Divider />
        </div>
        <FormField
          class="grid grid-cols-auto-fit-100 gap-4 overflow-auto overscroll-contain"
        >
          <label
            class="flex flex-col gap-4 items-center h-max"
            v-for="(item, index) in cards"
            :key="index"
          >
            <div
              class="max-h-48 w-full flex flex-col max-w-[18rem] relative items-center text-2xl gap-2 p-4 rounded-lg bg-grey-50 bg-opacity-40"
            >
              <img :src="item.logo" :alt="item.logo" width="100" />
              <span>
                {{ item.bank_name }}
              </span>
            </div>
            <RadioButton
              :value="true"
              v-model="item.selected"
              @change="toggleCard(index)"
            />
          </label>
        </FormField>
      </div>
    </div>
    <PriceInfo />

    <!-- <PaymentMessageSuccess /> -->
    <!-- <PaymentMessageFail /> -->
  </MyCard>
</template>

<script setup lang="ts">
const cards = ref([
  {
    logo: "bank-iran/saderat.png",
    selected: false,
    bank_name: "صادرات",
  },
  {
    logo: "bank-iran/tejarat.png",
    selected: false,
    bank_name: "تجارت",
  },
  {
    logo: "bank-iran/ayandeh.png",
    selected: false,
    bank_name: "آینده",
  },
]);

function toggleCard(index: number) {
  cards.value.forEach((card) => (card.selected = false));
  cards.value[index].selected = !cards.value[index].selected;
}
</script>
