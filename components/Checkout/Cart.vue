<template>
  <ClientOnly>
    <Dialog
      class="block md:hidden min-w-80 max-w-max m-2"
      modal
      maximizable
      :visible="visible"
    >
      <template #header> <span></span> </template>
      <div class="p-4 gap-4 flex items-center pb-24">
        <svg
          width="36"
          height="54"
          viewBox="0 0 36 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.8539 0.78134C35.0737 1.01727 35.2445 1.29423 35.3572 1.5963C35.5756 2.20221 35.5472 2.86994 35.2776 3.45497C35.0081 4.04011 34.5191 4.49553 33.9165 4.72302L3.8137 15.9502C3.53937 16.0534 3.24849 16.1054 2.95539 16.1035C2.37974 16.1047 1.82202 15.9033 1.3799 15.5346C0.937774 15.166 0.639402 14.6535 0.537098 14.0871C0.434793 13.5206 0.534989 12.9362 0.820176 12.4362C1.10536 11.9361 1.5574 11.5523 2.09698 11.352L13.0636 7.25965C12.8118 6.20096 12.9563 5.08678 13.4699 4.12744C13.9835 3.1681 14.8306 2.43003 15.8514 2.05277C16.8721 1.6754 17.9956 1.685 19.0097 2.07945C20.0239 2.47401 20.8584 3.22632 21.3557 4.1942L32.1994 0.155488C32.5016 0.0425313 32.8227 -0.00978121 33.1448 0.00150395C33.4672 0.0127891 33.7839 0.087461 34.0771 0.221301C34.3703 0.355141 34.6344 0.545406 34.8539 0.78134ZM33.1572 46.4667L35.1881 19.8203C35.2184 19.4792 35.1774 19.1355 35.068 18.811C34.9584 18.4865 34.7829 18.1882 34.552 17.9351C34.3196 17.694 34.0411 17.5019 33.7332 17.3703C33.4251 17.2387 33.0938 17.1701 32.7588 17.1688H7.15463C6.81913 17.1666 6.4868 17.2335 6.17831 17.3654C5.86981 17.4972 5.59169 17.6911 5.36134 17.9351C5.13121 18.1863 4.95423 18.4814 4.84096 18.8028C4.72769 19.1241 4.68054 19.465 4.70227 19.8051L6.76376 46.4668C6.92534 48.5129 7.85041 50.4232 9.35534 51.8187C10.8602 53.2144 12.8349 53.9931 14.8873 54H25.0263C27.0775 53.986 29.0492 53.2054 30.5537 51.8114C32.0583 50.4174 32.9871 48.5109 33.1572 46.4667Z"
            fill="#D73333"
          />
        </svg>

        <div class="mt-2 space-y-2">
          <p class="font-semibold">آیا از حذف کل سبد خرید اطمینان دارید ؟</p>
          <p class="text-grey-300 text-sm">
            پس از حذف دیگر امکان بازگشت محصولات به سبد خرید وجود ندارد.
          </p>
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <Button @click="visible = false" class="flex-1" unstyled>انصراف</Button>
        <Button
          class="hover:bg-red-400 hover:bg-opacity-20 text-rose-700 border-rose-700 flex-1"
          color="red-300"
          variant="outlined"
          >حذف</Button
        >
      </div>
    </Dialog>
  </ClientOnly>
  <EmptyCart v-if="products.length === 0" />
  <MyCard class="flex flex-col lg:flex-row gap-4">
    <!-- Heading And Right Side -->
    <div class="flex-1">
      <div class="flex flex-1 flex-col gap-4">
        <div class="w-full">
          <div class="flex items-center max-h-10 gap-2">
            <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
              <Icon name="mdi-basket-outline" class="text-2xl text-grey-400" />
            </div>
            سبد خرید
            <span
              class="rounded-full text-white w-8 h-8 p-2 flex-center bg-orange-400"
            >
              {{ products.length }}
            </span>
          </div>
          <Divider />
        </div>

        <!--  -->
      </div>
      <div class="flex flex-col gap-4">
        <div
          v-for="(product, index) in products"
          :class="{
            'border-grey-50 border-b-[1px] border-solid':
              index < products.length - 1,
          }"
          class="flex items-start w-full py-4"
        >
          <!-- 
                :src="product.image"
                :alt="product.image"
            -->
          <NuxtImg
            src="/station.png"
            alt="/station.png"
            class="max-w-36 object-contain"
          />
          <div class="flex flex-col gap-2">
            <span class="text-lg font-bold">
              {{ product.name }}
            </span>
            <span class="flex gap-2">
              قیمت محصول: {{ product.price }}
              <img src="/Tooman.svg" alt="/Tooman.svg" />
            </span>

            <div
              class="flex items-center gap-2 bg-bgColor bg-opacity-50 rounded-lg px-4 py-3 my-4"
            >
              <span> تعداد </span>
              <div class="flex gap-4 mx-auto">
                <MyButton color="bg-grey-50" class="w-10 h-10 aspect-square">
                  <Icon
                    name="mdi-plus"
                    class="text-2xl mx-auto text-grey-400"
                  />
                </MyButton>
                <span class="mx-auto">2</span>
                <MyButton color="bg-grey-50" class="w-10 h-10 aspect-square">
                  <Icon
                    name="mdi-minus"
                    class="text-2xl mx-auto text-grey-400"
                  />
                </MyButton>
              </div>
            </div>

            <span class="flex gap-2">
              قیمت کل: {{ product.price * product.quantity }}
              <Tooman />
            </span>
          </div>
          <div class="ms-auto">
            <!-- Large Delete Button -->
            <MyButton class="px-4 gap-2 hidden lg:flex" color="bg-slate-100">
              <Icon name="mdi-trash-can-outline" class="w-6 h-6" />
              <span>حذف محصول</span>
            </MyButton>
            <!-- Small Delete Button -->
            <MyButton class="flex lg:hidden" color="bg-transparent">
              <Icon
                name="mdi-trash-can-outline"
                class="text-red-400 text-2xl"
              />
            </MyButton>
          </div>
        </div>
      </div>
    </div>
    <!-- Left Side -->
    <MyCard class="basis-1/4 !p-4 !bg-bgColor max-h-max !py-6 flex flex-col">
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

      <div class="py-8">
        <span class="text-sm font-semibold text-primary-500">
          کد تخفیف دارم
        </span>
        <FloatLabel variant="in">
          <IconField>
            <InputText class="!py-2 my-input" variant="outlined" />
            <InputIcon class="!mt-[-0.9rem]">
              <MyButton
                color="bg-orange-400  px-4 max-h-8"
                class="text-white"
                @click="submitDiscountCode"
              >
                اعمال
              </MyButton>
            </InputIcon>
          </IconField>
          <label for="password" class="text-xs"
            >کد تخفیف خود را وارد کنید</label
          >
        </FloatLabel>
      </div>
      <!--  -->
      <MyButton color="bg-orange-400 w-full" class="px-4 text-white">
        ادامه
      </MyButton>
    </MyCard>
  </MyCard>
</template>

<script setup lang="ts">
const products = ref([
  {
    id: 1,
    name: "کتاب راز",
    price: Math.round((120 * 1.1) / 10), // 132 Tomans
    discount_end_time: "2025-01-25T15:30:00Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب راز با توضیحات و نکات برای اندازه های مختلف در زمینه ی کاری و سرمایه های مختلف است. به شما امکان دارد که با آن یک روش خوب و مناسب برای ساخت یک پروژه ای شوید.",
    category: "کتاب های راز",
    discount: "تا 25% تخفیف از قیمت نهایی برای هر کتاب راز در سال ۲۵۵۴ میباشد.",
    rating: 4.5,
    stock: 10,
    on_sale: true,
    quantity: 2,
    vendor: "سازمان کتاب های راز",
    created_at: "2023-01-25T15:30:00Z",
    updated_at: "2023-01-25T15:30:00Z",
  },
  {
    id: 2,
    name: "کتاب موفقیت",
    price: Math.round((150 * 1.1) / 10), // 165 Tomans
    discount_end_time: "2025-02-15T10:00:00Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب موفقیت با راهکارهای عملی برای دستیابی به اهداف شخصی و حرفه‌ای. مناسب برای افرادی که به دنبال پیشرفت در زندگی هستند.",
    category: "کتاب های موفقیت",
    discount: "تا 20% تخفیف برای خریدهای بالای 100 هزار تومان.",
    rating: 4.7,
    stock: 15,
    on_sale: true,
    quantity: 1,
    vendor: "انتشارات موفقیت",
    created_at: "2023-02-10T12:00:00Z",
    updated_at: "2023-02-10T12:00:00Z",
  },
  {
    id: 3,
    name: "کتاب مدیریت زمان",
    price: Math.round((90 * 1.1) / 10), // 99 Tomans
    discount_end_time: "2025-03-10T18:00:00Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب مدیریت زمان با تکنیک‌های موثر برای برنامه‌ریزی و استفاده بهینه از زمان. مناسب برای دانشجویان و کارمندان.",
    category: "کتاب های مدیریت",
    discount: "تا 15% تخفیف برای خریدهای بالای 50 هزار تومان.",
    rating: 4.3,
    stock: 20,
    on_sale: true,
    quantity: 3,
    vendor: "انتشارات زمان",
    created_at: "2023-03-05T09:00:00Z",
    updated_at: "2023-03-05T09:00:00Z",
  },
  {
    id: 4,
    name: "کتاب روانشناسی",
    price: Math.round((200 * 1.1) / 10), // 220 Tomans
    discount_end_time: "2025-04-20T14:00:00Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب روانشناسی با بررسی عمیق رفتارهای انسانی و راهکارهای بهبود روابط شخصی و اجتماعی.",
    category: "کتاب های روانشناسی",
    discount: "تا 30% تخفیف برای خریدهای بالای 150 هزار تومان.",
    rating: 4.8,
    stock: 5,
    on_sale: true,
    quantity: 1,
    vendor: "انتشارات روانشناسی",
    created_at: "2023-04-15T11:00 :00Z",
    updated_at: "2023-04-15T11 :00 :00Z",
  },
  {
    id: 5,
    name: "کتاب برنامه‌نویسی",
    price: Math.round((250 * 1.1) / 10), //275 Tomans
    discount_end_time: "2025 -05 -05 T16 :00 :00 Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب برنامه‌نویسی با آموزش گام به گام زبان‌های برنامه‌نویسی مانند Python و JavaScript.",
    category: "کتاب های فناوری",
    discount: "تا 10% تخفیف برای خریدهای بالای 200 هزار تومان.",
    rating: 4.6,
    stock: 12,
    on_sale: true,
    quantity: 2,
    vendor: "انتشارات فناوری",
    created_at: "2023 -05 -01 T10 :00 :00 Z",
    updated_at: "2023 -05 -01 T10 :00 :00 Z",
  },
  {
    id: 6,
    name: "کتاب آشپزی",
    price: Math.round((80 * 1.1) / 10), //88 Tomans
    discount_end_time: "2025 -06 -12 T12 :00 :00 Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب آشپزی با دستورالعمل‌های ساده و خوشمزه برای تهیه غذاهای ایرانی و بین‌المللی.",
    category: "کتاب های آشپزی",
    discount: "تا 25% تخفیف برای خریدهای بالای 70 هزار تومان.",
    rating: 4.4,
    stock: 25,
    on_sale: true,
    quantity: 4,
    vendor: "انتشارات آشپزی",
    created_at: "2023 -06 -10 T08 :00 :00 Z",
    updated_at: "2023 -06 -10 T08 :00 :00 Z",
  },
  {
    id: 7,
    name: "کتاب تاریخ جهان",
    price: Math.round((300 * 1.1) / 10), //330 Tomans
    discount_end_time: "2025 -07 -18 T20 :00 :00 Z",
    image:
      "https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png",
    description:
      "کتاب تاریخ جهان با بررسی رویدادهای مهم تاریخی از دوران باستان تا عصر حاضر.",
    category: "کتاب های تاریخ",
    discount: "تا 20% تخفیف برای خریدهای بالای 250 هزار تومان.",
    rating: 4.9,
    stock: 8,
    on_sale: true,
    quantity: 1,
    vendor: "انتشارات تاریخ",
    created_at: "2023 -07 -15 T14 :00 :00 Z",
    updated_at: "2023 -07 -15 T14 :00 :00 Z",
  },
]);

const quantityCount = computed(() => {
  return products.value.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
});

const fullPrice = computed(() => {
  return products.value.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
});

async function submitDiscountCode() {
  console.log("OOps");
}

const visible = ref(false);
</script>
