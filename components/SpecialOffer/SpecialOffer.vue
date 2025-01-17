<template>
  <main class="flex flex-col sm:flex-row bg-orange-100 rounded-lg px-2 !py-2">
    <div class="w-full mx-auto pt-22">
      <div class="max-w-[calc(100%)] mx-auto">
        <MyCarousel
          :opts="{
            align: 'start',
          }"
        >
          <MyCarouselContent>
            <MyCarouselItem
              class="basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
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
              v-for="(_, index) in 50"
              :key="index"
              class="basis-3/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
            >
              <SpecialOfferCard
                image="https://s3-alpha-sig.figma.com/img/dbb6/728f/22a4a332ae99a982afb0156d548c3492?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsBqGIsKw15RoEMKEH9yaqXwzMdq6SWXf~yirvuYyEFJmdvr6dlj-fG5rYdbEl0FETwWGNBNsJvNe~yV9dx~O-TCgCeSOI5ahk1viYD2Lb-d1ABZ1QhfeV2c9PkTNb9l1tHnZ12WWhKp9a5i~qRczDvWtoSWIx4Q28momgh0P6Be4SGF9q3Ntn9wnUC9Uw49VbPyFW0b-AYm-QkNiWHR~fDtiRCetqt-BJXbDGOMT1BDIOw-xS4X4W543XdNNn5E4USorX8x1LgCadUp5Z4vIY4iVep3uYGdmLVG5pdU1DtmPb6BgHaxR1nXcY7~RZJnWmbyC4kFBuhfgnFbOcjybA__"
                :score="70"
                name="کتاب راز"
                discount_end_time="2025-01-25T15:30:00Z"
                price="120,000"
                off_price="150,000"
              />
            </MyCarouselItem>
          </MyCarouselContent>
          <MyCarouselPrevious />
          <MyCarouselNext />
        </MyCarousel>
      </div>
    </div>
  </main>
</template>
