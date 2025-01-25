<template>
  <MyCard>
    <Tabs :value="'details'">
      <TabList>
        <Tab value="details" class="flex-1 flex"> مشخصات </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="details">
          <div
            v-for="(item, index) in [
              {
                label: 'نام محصول',
                value: 'این محصول به نام است',
              },
              {
                label: 'توضیحات',
                value:
                  'این محصول به نام است این محصول به نام است این محصول به نام است این محصول به نام است',
              },
              {
                label: 'توضیحات',
                value:
                  'این محصول به نام است این محصول به نام است این محصول به نام است این محصول به نام است',
              },
              {
                label: 'محصول اصلی',
                value: 'در اینجا میتونید محصول را ببینید',
              },
            ]"
            class="flex w-full gap-4 items-center p-4 rounded bg-white shadow-sm"
            :class="{ '!bg-[#FAFAFA]': index % 2 == 0 }"
          >
            <span class="basis-2/6 min-h-full flex items-center"
              >{{ item.label }}
            </span>
            <span
              class="basis-5/6 min-h-full flex items-center border-r-2 border-r-[#EBEBEB] border-solid pr-4"
            >
              {{ item.value }}
            </span>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <!-- Comments -->
    <Tabs :value="'comments'">
      <TabList>
        <Tab value="comments" class="flex-1 flex"> نظرات </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="comments">
          <div class="flex flex-col md:flex-row gap-8 pt-8">
            <MyCard
              class="basis-1/4 text-sm max-h-max shadow-none border-[1px] border-grey-50"
            >
              <div class="flex flex-col gap-3">
                <!-- Review Text Section -->
                <p>نظر خود را برای ما بنویسید</p>
                <Textarea
                  v-model="reviewText"
                  placeholder="متن نظر..."
                  rows="5"
                />

                <!-- Rating Section -->
                <div class="flex flex-col gap-2">
                  <span>امتیاز شما به این محصول:</span>
                  <div class="border-2 border-solid p-4 flex-center rounded-lg">
                    <Rating v-model="rating" :cancel="false" />
                  </div>
                </div>
                <!-- Submit Button -->
                <Button label="ثبت دیدگاه" @click="submitReview" />
              </div>
            </MyCard>
            <div class="flex flex-col basis-3/4">
              <div v-for="i in 8" class="text-sm space-y-4 py-2">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Michael Gough"
                    />
                    <div class="flex flex-col">
                      <span> حسین نادری </span>
                      <span class="text-xs text-grey-300">۱۴۰۲/۰۵/۱۲</span>
                    </div>
                    <Rating :default-value="5" />
                  </div>
                  <div class="items-center gap-2 hidden md:flex">
                    <MyButton
                      class="!text-lg bg-opacity-50 aspect-[16/9] w-20 flex-center gap-2"
                      color="bg-grey-50"
                    >
                      <span> 2 </span>
                      <Icon name="mdi-dislike-outline" />
                    </MyButton>
                    <MyButton
                      class="!text-lg bg-opacity-50 aspect-[16/9] w-20 flex-center gap-2"
                      color="bg-grey-50"
                    >
                      <span> 2 </span>
                      <Icon name="mdi-like-outline" />
                    </MyButton>
                  </div>
                </div>
                <p>
                  خیلی چیز خوبیه واقعا خیلی قویه و عمرش خیلی طولانیه من الانم
                  استفاده میکنم بازم خیلی خوبه
                </p>
                <div class="items-center gap-4 pt-4 flex md:hidden">
                  <MyButton
                    class="!text-lg bg-opacity-50 aspect-square w-14 h-14 flex-center gap-2"
                    color="bg-grey-50"
                  >
                    <span> 2 </span>
                    <Icon name="mdi-dislike-outline" />
                  </MyButton>
                  <MyButton
                    class="!text-lg bg-opacity-50 aspect-square w-14 h-14 flex-center gap-2"
                    color="bg-grey-50"
                  >
                    <span> 2 </span>
                    <Icon name="mdi-like-outline" />
                  </MyButton>
                </div>
                <Divider v-if="i !== 8" />
              </div>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <!--  -->
  </MyCard>
</template>

<script setup lang="ts">
const reviewText = ref("");
const rating = ref(0);
const additionalInfo = ref("");

const submitReview = () => {
  // Handle review submission
  console.log("Review Text:", reviewText.value);
  console.log("Rating:", rating.value);
  console.log("Additional Info:", additionalInfo.value);
  // You can add your logic to submit the review to an API or store
};
</script>

<style scoped>
:deep(.p-tablist-active-bar) {
  display: none;
}
:deep(.p-tab-active) {
  border: none;
}

:deep(.p-tab-active)::before,
:deep(.p-tab-active)::after {
  content: "";
  position: absolute;
}

:deep(.p-tab-active)::before {
  width: calc(100% - 100px);
  height: 3px;
  background: #ebebeb;
  left: 0;
  bottom: 0;
  z-index: 1;
}
:deep(.p-tab-active)::after {
  width: 100px;
  background: orange;
  height: 6px;
  bottom: 0;
  right: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 2;
}
</style>
