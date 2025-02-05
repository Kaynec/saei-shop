<template>
  <main
    class="max-w-full flex flex-col sm:flex-row bg-orange-100 !relative rounded-lg px-2 !py-2"
  >
    <div class="w-full mx-auto pt-22">
      <div class="mx-auto">
        <MyCarousel
          :opts="{
            align: 'start',
          }"
        >
          <div
            class="transform top-1/2 bottom-1/2 -translate-y-1/2 absolute z-50 border-r-orange-600 -left-4"
          >
            <MyCarouselPrevious />
          </div>
          <div
            class="transform top-1/2 bottom-1/2 -translate-y-1/2 absolute z-50 border-r-orange-600 -right-4"
            c
          >
            <MyCarouselNext />
          </div>
          <MyCarouselContent class="relative">
            <MyCarouselItem
              class="basis-2/6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
            >
              <div class="flex flex-col items-center h-full justify-center">
                <img
                  src="/public/discount-pic.svg"
                  width="200"
                  class="py-2 mt-auto"
                />
                <ViewAllBtn />
              </div>
            </MyCarouselItem>
            <MyCarouselItem
              v-for="(_, index) in 8"
              :key="index"
              class="basis-4/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
            >
              <SpecialOfferCard
                image="https://storage.iran.liara.space/cheatsgame-storage/product_images/wd-_ssd-1tr-back.png"
                :score="70"
                name="کتاب راز"
                discount_end_time="2025-01-25T15:30:00Z"
                price="120,000"
                off_price="150,000"
              />
            </MyCarouselItem>
          </MyCarouselContent>
        </MyCarousel>
      </div>
    </div>
  </main>
</template>
