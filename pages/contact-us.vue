<script setup lang="ts">
const model = ref({
  name: "",
  lastname: "",
  ticket: "",
});
</script>

<template>
  <main class="p-2 lg-p4 grid grid-cols-2 container mx-auto py-8 gap-4">
    <Card class="text-start bg-white text-gray-800 col-span-2 lg:col-span-1">
      <template #content>
        <div class="space-y-8">
          <h1 class="text-2xl text-orange-300 flex items-center gap-2">
            <Icon name="mdi:headphones-settings" />
            پشتیبانی
          </h1>
          <p>۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.</p>

          <div class="space-y-4">
            <div
              class="justify-between items-center flex border-b-2 border-gray-100 pb-2"
            >
              <span>پشتیبانی</span>
              <span>خانم اب نیکی</span>
              <span class="flex-center gap-2"
                >۰۹۱۰۴۶۰۸۰۰
                <Icon class="text-2xl text-orange-500" name="mdi:phone" />
              </span>
            </div>
            <div
              class="justify-between items-center flex border-b-2 border-gray-100 pb-4"
            >
              <span>پشتیبانی</span>
              <span>خانم اب نیکی</span>
              <span class="flex-center gap-2"
                >۰۹۱۰۴۶۰۸۰۰
                <Icon class="text-2xl text-orange-500" name="mdi:phone" />
              </span>
            </div>
            <div
              class="justify-between items-center flex border-b-2 border-gray-100 pb-4"
            >
              <span>پشتیبانی</span>
              <span>خانم اب نیکی</span>
              <span class="flex-center gap-2"
                >۰۹۱۰۴۶۰۸۰۰
                <Icon class="text-2xl text-orange-500" name="mdi:phone" />
              </span>
            </div>
          </div>

          <h2 class="text-2xl text-orange-300 flex items-center gap-2">
            <Icon name="mdi:map-marker" />
            آدرس
          </h2>

          تهران، خیابان دماوند ، خیابان ولیعصر (عج)، کوچه ولیعصر ، طبقه 3
          <NuxtImg
            src="/map.png"
            width="800"
            class="w-full object-cover"
            alt="map"
          />
        </div>
      </template>
    </Card>
    <Card class="text-start bg-white text-gray-800 col-span-2 lg:col-span-1">
      <template #content class="">
        <h2 class="mb-8 text-2xl text-orange-300 flex items-center gap-2">
          <Icon name="mdi:message-text" class="" />
          ارسال پیام
        </h2>
        <p>با ما در تماس باشید.</p>
        <form class="lg:min-h-full grid grid-cols-2 gap-2">
          <IftaLabel>
            <InputText
              class="my-input"
              id="username"
              v-model="model.name"
              variant="outlined"
            />
            <label for="username">نام</label>
          </IftaLabel>

          <IftaLabel>
            <InputText
              class="my-input"
              id="username"
              v-model="model.name"
              variant="outlined"
            />
            <label for="username">نام خانوادگی</label>
          </IftaLabel>
          <IftaLabel class="col-span-2">
            <Textarea
              id="username"
              v-model="model.ticket"
              class="my-input"
              rows="8"
              el="model.name"
              variant="outlined"
            />
            <label for="username">متن تیکت</label>
          </IftaLabel>
          <MyButton color="bg-orange-400 col-span-2  mt-auto">
            ارسال تیکت
          </MyButton>
        </form>
      </template>
    </Card>
  </main>
</template>
<style scoped>
:deep(.p-card-body) {
  min-height: 80%;
}
:deep(.p-card-content) {
  height: 100%;
}
</style>
