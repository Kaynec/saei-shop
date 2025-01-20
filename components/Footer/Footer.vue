<script setup lang="tsx">
import { SiteDetails } from "~/const/SiteDetails";
import { links } from "~/layout/links";
import { Icon, MyButton, NuxtLink } from "#components";

function RenderLinks() {
  return (
    <section class="flex flex-wrap gap-2 justify-between order-last h-full">
      <div class="flex flex-col gap-2 text-sm my-auto h-full md:h-fit min-h-36">
        <span class="text-yellow-500 border-b-2 border-yellow-500 border-solid">
          راهنمای خرید
        </span>

        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink to="/">شیوه های پرداخت</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">نحوه ثبت سفارش</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">پیگیری سفارش</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">رویه ارسال</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-2 text-sm my-auto h-full md:h-fit min-h-36">
        <span class="text-yellow-500 border-b-2 border-yellow-500 border-solid">
          خدمات مشتریان
        </span>

        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink to="/">پرسش های متداول</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">حریم خصوصی</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">محصولات</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-2 text-sm my-auto h-full md:h-fit min-h-36">
        <span class="text-yellow-500 border-b-2 border-yellow-500 border-solid">
          فروشگاه ساعی
        </span>

        <ul class="flex flex-col gap-2">
          <li>
            <NuxtLink to="/">تماس با ساعی</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">درباره ساعی</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">بلاگ</NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function UpwardAngle() {
  return (
    <MyButton color="bg-white" class="max!-12 !h-12 aspect-square ">
      <Icon name="mdi:arrow-up" class="text-orange-400 text-2xl" />
    </MyButton>
  );
}
</script>
<template>
  <footer
    class="mt-auto bg-bgColor relative py-8 px-4 lg:px-6 text-sm text-grey-400"
  >
    <div class="grid grid-cols-auto-fit-350 items-start">
      <UpwardAngle
        @click="scrollToTop"
        class="block md:hidden absolute left-4 top-4"
      />

      <div class="flex flex-col md:max-w-[60ch]">
        <Image
          src="/logo.png"
          alt="logo"
          width="120"
          class="mx-auto md:mx-0 pb-8 hidden md:block"
        />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
        </p>
        <div class="flex flex-col gap-2 py-8">
          <p class="text-grey-400 font-semibold text-xs flex gap-1">
            <Icon name="mdi-map-marker" class="text-xl" />
            خیابان شریعتی، خیابان سهروردی شمالی، ک، پلاک ، واحد ۳
          </p>
          <p class="text-grey-400 font-semibold text-xs flex gap-1">
            <Icon name="mdi-phone" class="text-xl" />
            023 - 909009
          </p>
        </div>
      </div>

      <RenderLinks class="hidden xl:flex" />

      <div
        class="flex items-center gap-4 py-4 md:items-end flex-col order-first md:order-last"
      >
        <UpwardAngle @click="scrollToTop" class="hidden md:block" />

        <NuxtImg
          src="/logo.png"
          alt="logo"
          width="120"
          class="mx-auto md:mx-0 pb-8 block md:hidden"
        />
        <div class="flex gap-2">
          <img src="/e-namad.svg" alt="e-namad.svg" width="100" />
          <img src="/e-namad.svg" alt="e-namad.svg" width="100" />
          <img src="/e-namad.svg" alt="e-namad.svg" width="100" />
        </div>
      </div>
    </div>
    <RenderLinks class="flex sm:flex xl:hidden" />
  </footer>
</template>
