<template>
  <div
    class="flex flex-col gap-4 items-center w-full h-full min-h-96 justify-center max-w-[min(90vw,460px)] mx-auto"
  >
    <div
      class="flex-center gap-2 rounded-lg bg-green-100 w-full py-6 shadow px-4"
    >
      <DoubleCheck /> <span>پرداخت با موفقیت انجام شد</span>
    </div>
    <div
      class="flex-center gap-2 rounded-lg bg-grey-50 bg-opacity-50 w-full py-6 shadow px-4"
    >
      <span>۶۵۷۷۸۸۷۹۸۶ کد پیگیری سفارش شما :</span>
    </div>
    <div
      class="flex-center gap-2 rounded-lg bg-grey-50 bg-opacity-50 w-full py-6 shadow px-4 text-sm"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00016 14.6668C11.6668 14.6668 14.6668 11.6668 14.6668 8.00016C14.6668 4.3335 11.6668 1.3335 8.00016 1.3335C4.3335 1.3335 1.3335 4.3335 1.3335 8.00016C1.3335 11.6668 4.3335 14.6668 8.00016 14.6668Z"
          stroke="#858585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 5.3335V8.66683"
          stroke="#858585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.99609 10.6665H8.00208"
          stroke="#858585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <span
        >برای دریافت فاکتور، به حساب کاربری و صفحه جزئیات سفارش سر بزنید</span
      >
    </div>
    <NuxtLink to="/dashboard" class="flex-1">
      <MyButton class="w-full text-white" color="bg-primary-500">
        حساب کاربری
      </MyButton>
    </NuxtLink>
  </div>
</template>
