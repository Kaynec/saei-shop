<template>
  <MyCard
    class="basis-1/4 !px-2 !bg-bgColor !bg-opacity-60 max-h-max !py-6 flex flex-col"
  >
    <div class="justify-between flex py-8">
      <span> تعداد محصولات : </span>
      <span class="font-semibold"> {{ quantityCount }} عدد </span>
    </div>
    <div class="justify-between flex">
      <span> قیمت نهایی محصولات : </span>
      <span class="flex-center gap-2 font-semibold">
        {{ fullPrice }}
        <Tooman />
      </span>
    </div>

    <p class="text-center text-xs text-grey-300">
      مبلغ نهایی سفارش شامل مالیات بر ارزش افزوده است.
    </p>

    <div class="justify-between flex py-8">
      <span> هزینه ارسال :</span>
      <span class="font-semibold flex gap-2">
        {{ costStuff.total }}
        <Tooman />
      </span>
    </div>

    <div class="justify-between flex py-8">
      <span> مجموع تخفیف :</span>
      <span class="font-semibold flex gap-2">
        {{ totalDiscount }}
        <Tooman />
      </span>
    </div>

    <div class="justify-between flex py-8">
      <span> قیمت نهایی قابل پرداخت :</span>
      <span class="font-semibold flex gap-2">
        {{ totalPriceWithDiscount }}
        <img src="/Tooman.svg" class="max-w-[22px]" alt="Tooman.svg" />
      </span>
    </div>
    <MyButton color="bg-orange-400 w-full" class="px-4 text-white">
      ادامه
    </MyButton>
  </MyCard>
</template>

<script setup lang="ts">
const quantityCount = computed(() => {
  return 13;
});

const fullPrice = computed(() => {
  return 4580000;
});

const costStuff = ref({
  total: 17000,
});

const totalDiscount = computed(() => {
  return 163868;
});

const totalPriceWithDiscount = computed(() => {
  return 1564632;
});
</script>

<style scoped></style>
