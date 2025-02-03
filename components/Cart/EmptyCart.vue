<template>
  <main class="w-full mx-auto container p-4 py-8">
    <MyCard
      class="flex flex-col items-center justify-center min-h-[60vh] gap-4"
    >
      <div class="w-full">
        <div class="flex items-center max-h-10 gap-2">
          <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
            <Icon name="mdi-basket-outline" class="text-2xl text-grey-400" />
          </div>
          سبد خرید
        </div>
        <Divider />
      </div>

      <img
        alt="cart empty"
        src="/cart-emprt.svg"
        width="250"
        class="w-[clamp(8rem,18rem,450px)] mt-auto"
      />

      <NuxtLink to="/products" class="w-[clamp(8rem,18rem,450px)] mb-auto">
        <MyButton color="bg-orange-400 w-full" class="px-4 text-white">
          صفحه اصلی فروشگاه
        </MyButton>
      </NuxtLink>
    </MyCard>
  </main>
</template>
