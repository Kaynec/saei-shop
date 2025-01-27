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
              <div
                v-for="(user, i) in comments"
                :key="user.id"
                class="flex flex-col"
              >
                <div class="flex flex-col w-full">
                  <div class="w-full basis-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <img
                        class="w-12 h-12 rounded-full"
                        :src="user.profile_image"
                        :alt="user.profile_name"
                      />
                      <div class="flex flex-col">
                        <span> {{ user.profile_name }}</span>
                        <span class="text-xs text-grey-300">{{
                          new Date(user.created_at).toLocaleDateString("fa-Fa")
                        }}</span>
                      </div>
                      <Rating :default-value="user.score" />
                    </div>
                    <div class="items-center gap-2 hidden md:flex">
                      <MyButton
                        class="!text-lg bg-opacity-50 aspect-[16/9] w-20 flex-center gap-2"
                        color="bg-grey-50"
                      >
                        <span> {{ user.dislike_count }} </span>

                        <Icon name="mdi-dislike-outline" />
                      </MyButton>
                      <MyButton
                        class="!text-lg bg-opacity-50 aspect-[16/9] w-20 flex-center gap-2"
                        color="bg-grey-50"
                      >
                        <span> {{ user.like_count }} </span>

                        <Icon name="mdi-like-outline" />
                      </MyButton>
                    </div>
                  </div>

                  <p>
                    {{ user.comment }}
                  </p>
                  <div class="items-center gap-4 pt-4 flex md:hidden">
                    <MyButton
                      class="!text-lg bg-opacity-50 aspect-square w-14 h-14 flex-center gap-2"
                      color="bg-grey-50"
                    >
                      <span> {{ user.like_count }} </span>
                      <Icon name="mdi-dislike-outline" />
                    </MyButton>
                    <MyButton
                      class="!text-lg bg-opacity-50 aspect-square w-14 h-14 flex-center gap-2"
                      color="bg-grey-50"
                    >
                      <span> {{ user.dislike_count }} </span>
                      <Icon name="mdi-like-outline" />
                    </MyButton>
                  </div>
                </div>

                <!-- Replies -->

                <div
                  v-for="reply in getCommentReplies(user.id)"
                  :key="reply.id"
                  class="px-8 py-4"
                >
                  <div class="w-full basis-full flex justify-between">
                    <div class="flex items-center gap-2">
                      <img
                        class="w-12 h-12 rounded-full"
                        :src="reply.profile_image"
                        :alt="reply.profile_name"
                      />
                      <div class="flex flex-col">
                        <span> {{ reply.profile_name }}</span>
                        <span class="text-xs text-grey-300">{{
                          new Date(reply.created_at).toLocaleDateString("fa-Fa")
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    {{ reply.reply }}
                  </p>
                </div>
                <Divider v-if="i !== comments.length - 1" />

                <!--  -->
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

const comments = [
  {
    id: 1,
    profile_name: "حسین نادری",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    like_count: 5,
    dislike_count: 1,
    comment: "این محصول فوق العاده است و من به همه توصیه می‌کنم.",
    reply: "",
    score: 5,
    created_at: "2025-01-01",
  },
  {
    id: 2,
    profile_name: "مریم احمدی",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    like_count: 3,
    dislike_count: 0,
    comment: "کیفیت بسیار خوبی دارد و من راضی هستم.",
    reply: "",
    score: 5,
    created_at: "2025-01-02",
  },
  {
    id: 3,
    profile_name: "علی رضایی",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    like_count: 2,
    dislike_count: 3,
    comment: "انتظار بیشتری داشتم، اما هنوز هم خوب است.",
    reply: "",
    score: 5,
    created_at: "2025-01-03",
  },
  {
    id: 4,
    profile_name: "سارا محمدی",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    like_count: 7,
    dislike_count: 1,
    comment: "عالی! من هر روز از این محصول استفاده می‌کنم.",
    reply: "",
    score: 5,
    created_at: "2025-01-04",
  },
  {
    id: 5,
    profile_name: "حسین نادری", // Reusing the name but with different content
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",

    like_count: 6,
    dislike_count: 2,
    comment:
      "خیلی چیز خوبیه واقعا خیلی قویه و عمرش خیلی طولانیه. من الانم استفاده میکنم بازم خیلی خوبه.",
    reply: "",
    score: 5,
    created_at: "2025-01-05",
  },
  {
    id: 6,
    profile_name: "کارشناس ساعی",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",

    dislike_count: 2,
    comment: "",
    reply:
      "سلام دوست عزیز ، امیدوارم در سفارش های بعدیتون تجربه بهتری داشته باشید.",
    score: 5,
    created_at: "2025-01-06",
  },
  {
    id: 7,
    profile_name: "فرزانه سلیمی",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",

    like_count: 8,
    dislike_count: 0,
    comment: "این بهترین خریدی بود که تا به حال انجام داده‌ام. واقعاً خوشحالم!",
    reply: "",
    score: 5,
    created_at: "2025-01-07",
  },
  {
    id: 8,
    profile_name: "امیر حسین زاده",
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-1.jpg",

    like_count: 1,
    dislike_count: 4,
    comment: "متاسفانه کیفیت آنطور که انتظار داشتم نبود. امیدوارم بهتر شود.",
    reply: "",
    score: 5,
    created_at: "2025-01-08",
  },

  // Reply object
  {
    id: 9, // Unique ID for the reply
    profile_name: "کارشناس ساعی", // Same name to indicate it's a reply from the same user
    profile_image:
      "https://flowbite.com/docs/images/people/profile-picture-5.jpg",

    like_count: 0, // No likes for the reply initially
    dislike_count: 0, // No dislikes for the reply initially
    comment: "", // No comment in this case
    reply:
      "ممنون از بازخورد شما! ما همیشه در تلاش برای بهبود کیفیت خدمات خود هستیم.",
    score: 5,
    created_at: "2025-01-09", // Date of the reply
    replyToId: 3, // ID of the original comment this is replying to
  },
];

function getCommentReplies(commentId: number) {
  return comments.filter((comment) => comment.replyToId === commentId);
}
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
