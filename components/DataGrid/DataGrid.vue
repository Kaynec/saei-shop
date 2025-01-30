<template>
  <section class="flex flex-col">
    <template v-if="items.length">
      <slot name="header"> </slot>

      <div
        class="container grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <slot
          v-for="item in items"
          :key="item.id"
          name="grid-item"
          :data="item"
        >
        </slot>
      </div>
    </template>
    <div v-else class="text-lg flex-col gap-4 flex-center py-4">
      <slot name="empty">
        <div class="flex-1 flex h-full w-full flex-center">
          <p>محصولاتی یافت نشد</p>
        </div>
      </slot>
    </div>

    <MyPaginator
      :page="page"
      :limit="limit"
      :pageCount="pageCount"
      :totalRecords="totalRecords"
      :prevPageCallback="prevPageCallback"
      :nextPageCallback="nextPageCallback"
      :lastPageCallback="lastPageCallback"
      :firstPageCallback="firstPageCallback"
      v-show="items.length"
    />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: any[];
  page: number;
  limit: number;
  pageCount: number;
  totalRecords: number;
  prevPageCallback: () => void;
  nextPageCallback: () => void;
  lastPageCallback: () => void;
  firstPageCallback: () => void;
}>();
</script>

<!-- <MyPaginator
  :first="first"
  :last="last"
  :page="page"
  :pageCount="pageCount"
  :totalRecords="count"
  :prevPageCallback="() => current--"
  :nextPageCallback="() => current++"
  :lastPageCallback="() => (current = max)"
  :firstPageCallback="() => (current = 1)"
/> -->
