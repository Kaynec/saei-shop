<template>
  <div
    class="flex flex-col gap-4 items-center w-full h-full min-h-96 justify-center max-w-[min(90vw,460px)] mx-auto"
  >
    <div
      class="flex-center gap-2 rounded-lg bg-rose-200 text-rose-900 w-full py-6 shadow px-4"
    >
      <Icon name="mdi:window-close" /> <span>پرداخت ناموفق انجام شد</span>
    </div>

    <div class="w-full flex items-center gap-2">
      <NuxtLink to="/dashboard" class="flex-1">
        <Button variant="outlined" class="w-full" color="bg-primary-500">
          حساب کاربری
        </Button>
      </NuxtLink>
      <MyButton class="flex-1 text-white" color="bg-primary-500">
        تلاش مجدد
      </MyButton>
    </div>
  </div>
</template>
