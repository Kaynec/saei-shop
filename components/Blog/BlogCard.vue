<template>
  <Card class="bg-white shadow-md rounded-lg overflow-hidden text-sm">
    <template #header>
      <div class="p-2">
        <NuxtImg
          :alt="`تصویر مقاله ${title}`"
          :src="image"
          class="w-full object-cover rounded-lg"
        />
      </div>
    </template>

    <template #title>
      <p class="text-lg font-bold text-gray-700">{{ title }}</p>
      <!-- Dynamic title -->
    </template>

    <template #content>
      <p class="m-0 text-gray-400">{{ content }}</p>
      <!-- Dynamic content -->
    </template>

    <template #footer>
      <div class="flex justify-between mt-4">
        <p class="text-sm text-gray-400">{{ date }}</p>

        <RouterLink class="flex-center gap-2 text-sm text-gray-400" to="#">
          <span> مطالعه مقاله </span>
          <div
            class="gap-2 flex-center !border-2 !border-grey-100 !border-solid text-grey-300 rounded-md w-8 h-8 aspect-[1]"
          >
            <Icon name="mdi:chevron-left" class="text-2xl" />
          </div>
        </RouterLink>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  title: string;
  date: string;
  content: string;
  onReadMore: () => void;
  onShare: () => void;
}>();
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.02);
}
</style>
