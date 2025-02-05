<template>
  <MyCard class="!shadow-0 !border-none flex flex-col lg:flex-row gap-4">
    <!-- Heading And Right Side -->
    <div class="flex-1">
      <div class="flex flex-1 flex-col gap-4">
        <div class="w-full">
          <div class="flex items-center max-h-10 gap-2">
            <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
              <Icon name="mdi:basket-outline" class="text-2xl text-grey-400" />
            </div>
            محصولات
          </div>
          <Divider />
        </div>
        <!-- Right Side -->

        <div class="flex flex-col">
          <div
            v-for="(product, index) in products"
            :class="{
              'border-grey-50 border-b-[1px] border-solid':
                index < products.length - 1,
              'bg-grey-50 bg-opacity-50': index % 2 !== 0,
            }"
            class="flex items-center w-full px-4 rounded-lg"
          >
            <!-- 
                :src="product.image"
                :alt="product.image"
            -->
            <NuxtImg
              src="/station.png"
              alt="/station.png"
              class="max-w-24 object-contain"
            />
            <div class="flex flex-col gap-2 basis-full">
              <span class="text-lg font-bold">
                {{ product.name }}
              </span>

              <div class="flex justify-between basis-full">
                <span class="flex gap-2">
                  قیمت محصول: {{ product.price }}
                  <img src="/Tooman.svg" alt="/Tooman.svg" />
                </span>

                <span class="flex gap-2">
                  تعداد محصول: {{ product.quantity }} عدد
                </span>

                <span class="flex gap-2">
                  قیمت کل: {{ product.price * product.quantity }}
                  <img src="/Tooman.svg" alt="/Tooman.svg" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="flex flex-col gap-2 pt-6">
          <div class="flex items-center max-h-10 gap-2">
            <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
              <Icon name="mdi:truck-outline" class="text-2xl text-grey-400" />
            </div>
            تحویل
          </div>
          <Divider class="my-1" />

          <div
            class="flex justify-between flex-col md:flex-row gap-4 md:items-center !bg-opacity-20 ps-8 border-[1px] border-solid border-grey-50 p-4 rounded-lg relative"
          >
            <!-- TODO make this dynamic xo xo -->
            <div class="space-y-4 text-start">
              <p>
                آدرس : تهران ، خیابان انقلاب ، چهارراه ولیعصر (عج) ، میدان
                ولیعصر (عج) ،‌ خیابان محمودی ،‌پلاک ۱۲
              </p>
              <p>محمد غلامی</p>
            </div>
          </div>

          <!-- TODO make this dynamic xo xo -->
          <div
            class="space-y-4 text-start border-[1px] border-solid border-grey-50 p-4 rounded-lg"
          >
            <p class="flex gap-6">
              <span class="flex items-center gap-2">
                <Icon name="mdi-calendar-outline" class="text-xl" />
                <span>دوشنبه ۱۴۰۲/۰۵/۱۲</span>
              </span>

              <span class="flex items-center gap-2">
                <Icon name="mdi-clock-outline" class="text-xl" />
                <span>۱۵:۰۰ الی ۱۷:۰۰</span>
              </span>
            </p>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!-- Left Side -->
    <PriceInfo />
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
]);
</script>
