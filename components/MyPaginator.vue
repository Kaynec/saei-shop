<template>
  <div
    class="flex items-center gap-4 bg-transparent rounded-full w-full py-1 px-2 justify-between"
  >
    <div class="text-color font-medium w-full flex-center gap-4">
      <MyButton
        class="w-12 h-12 border-2 border-surface"
        color="bg-transparent"
        @click="firstPageCallback"
        :disabled="page === 0"
      >
        <Icon
          name="mdi:chevron-double-right"
          class="text-orange-300 text-2xl"
          rounded
          text
        />
      </MyButton>
      <MyButton
        class="w-12 h-12 border-2 border-primary"
        color="bg-transparent"
        @click="prevPageCallback"
        :disabled="page === 0"
      >
        <Icon
          name="mdi:chevron-right"
          class="text-orange-300 text-2xl"
          rounded
          text
        />
      </MyButton>
      <span class="hidden sm:block"
        >نمایش {{ first }} تا {{ last }} از {{ totalRecords }}</span
      >
      <MyButton
        class="w-12 h-12 border-2 border-primary"
        color="bg-transparent"
        @click="nextPageCallback"
        :disabled="page === pageCount - 1"
      >
        <Icon
          name="mdi:chevron-left"
          class="text-orange-300 text-2xl"
          rounded
          text
        />
      </MyButton>
      <MyButton
        class="w-12 h-12 border-2 border-surface"
        color="bg-transparent"
        @click="lastPageCallback"
        :disabled="page === pageCount - 1"
      >
        <Icon
          name="mdi:chevron-double-left"
          class="text-orange-300 text-2xl"
          rounded
          text
        />
      </MyButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PaginatorProps {
  first: number;
  last: number;
  page: number;
  pageCount: number;
  totalRecords: number;
  prevPageCallback: () => void;
  nextPageCallback: () => void;
  lastPageCallback: () => void;
  firstPageCallback: () => void;
}

const {
  first,
  last,
  page,
  pageCount,
  totalRecords,
  prevPageCallback,
  nextPageCallback,
  lastPageCallback,
  firstPageCallback,
} = defineProps<PaginatorProps>();
</script>

<style scoped>
:deep(.p-paginator) {
  margin-top: 4rem;
  background: transparent;
}
</style>
