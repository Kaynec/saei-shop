<template>
  <section class="grid grid-cols-12 gap-2">
    <MyCard
      class="card overflow-x-auto whitespace-nowrap col-span-full lg:col-span-6"
    >
      <div class="flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <div class="text bg-grey-50 shadow-lg rounded w-9 h-9 flex-center">
            <Icon name="mdi-message-outline" class="text-2xl text-grey-300" />
          </div>
          تیکت ها
        </div>

        <MyButton
          @click="$emit('change')"
          color="bg-grey-50"
          class="!bg-opacity-40 px-4 flex gap-2"
        >
          <span class="text-yellow-500"> ثبت تیکت جدید </span>
          <Icon name="mdi-message-outline" class="text-yellow-500 text-2xl" />
        </MyButton>
      </div>

      <Divider />
      <div class="flex"></div>
      <DataTable :value="discount" tableStyle="min-width: 40rem">
        <Column header="تاریخ" field="date">
          <template #body="slotProps">
            <span>
              {{ new Date(slotProps.data.date).toLocaleDateString("fa") }}
            </span>
          </template></Column
        >
        <Column header="عنوان" field="title"></Column>
        <Column header="وضعیت" field="status">
          <template #body="slotProps">
            <Chip
              :value="slotProps.data.status"
              :class="getStatusClass(slotProps.data.status)"
              readonly
            >
              {{ slotProps.data.status }}
            </Chip>
          </template>
        </Column>
      </DataTable>
    </MyCard>
    <MyCard
      class="card col-span-full lg:col-span-6 h-[clamp(28rem,80svh,824px)] flex flex-col"
    >
      <div class="text-sm lg:text-base flex flex-col gap-2 p-4">
        <div class="flex items-center justify-between">
          <p>
            تیکت شماره {{ currentSelectedTicket.id }} - تاریخ
            {{ new Date(currentSelectedTicket.date).toLocaleDateString("fa") }}
          </p>
          <MyButton
            class="px-4 border-2 border-solid rounded-lg"
            color="transparent"
          >
            بستن تیکت
          </MyButton>
        </div>
        <p>موضوع تیکت: {{ currentSelectedTicket.description }}</p>
      </div>
      <!-- msgs -->
      <div
        class="flex flex-col gap-8 flex-1 overscroll-contain overflow-y-auto"
      >
        <div
          :class="{
            'flex-row-reverse': msg.sender == 'support',
          }"
          class="flex gap-2.5"
          v-for="msg in currentSelectedTicket.msgs"
        >
          <img
            class="w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          />
          <div
            :class="
              msg.sender == 'self'
                ? 'bg-gray-100'
                : 'bg-yellow-100 bg-opacity-70'
            "
            class="w-full max-w-[320px] text-sm p-4 rounded-xl"
          >
            <p class="py-2.5 text-gray-900">
              {{ msg.text }}
            </p>
            <span class="text-gray-500">{{
              new Date(msg.date).toLocaleDateString("fa")
            }}</span>
          </div>
        </div>
      </div>
      <div class="send py-4">
        <IconField class="w-full lg:min-w-[26rem] flex">
          <InputText
            fluid
            class="py-4 rounded-xl shadow-xl"
            variant="outlined"
            placeholder="پیام حود را اینجا بنویسید..."
          />
          <InputIcon>
            <button class="-translate-y-2 px-1">
              <Icon
                name="mdi:attachment"
                class="-rotate-45 text-2xl text-orange-300"
              />
            </button>
            <button class="-translate-y-2 px-1">
              <Icon
                name="mdi:send"
                class="rotate-180 text-2xl text-orange-300"
              />
            </button>
          </InputIcon>
        </IconField>
      </div>
    </MyCard>
  </section>
</template>

<script setup lang="ts">
const discount = ref([
  {
    id: 1,
    date: "2022-01-31",
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    status: "در انتظار پاسخ",
  },
  {
    id: 2,
    date: "2022-01-31",
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    status: "پاسخ داده شده",
  },
  {
    id: 3,
    date: "2022-01-31",
    title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
    status: "بسته شده",
  },
]);

function getStatusClass(status: string) {
  switch (status) {
    case "پاسخ داده شده":
      return "bg-green-100 bg-opacity-70 text-green-500";
    case "بسته شده":
      return "bg-grey-50 bg-opacity-70 text-grey-500";
    default:
      return "bg-yellow-100 bg-opacity-70 text-yellow-600";
  }
}

const currentSelectedTicket = ref({
  id: "۱۳۷۹۰۵۱۲",
  date: "2022-01-31",
  title: "تخفیف کالا به مبلغ ۱۰۰۰ تومان",
  status: "در انتظار پاسخ",
  description:
    "تخفیف کالا به مبلغ ۱۰۰۰ تومان در مورد هر کالای که به روز رسانی شده است",
  msgs: [
    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "self",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "support",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "self",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "support",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "self",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "support",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "self",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "support",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "self",
      date: "2022-01-31",
    },

    {
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",

      sender: "support",
      date: "2022-01-31",
    },
  ],
});
</script>

<style scoped></style>
