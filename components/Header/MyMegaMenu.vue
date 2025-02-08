<template>
  <MegaMenu :model="items" style="border: none; padding: 0">
    <template #item="{ item }">
      <!-- TODO change this to links later -->
      <p
        class="flex items-center cursor-pointer overflow-hidden relative"
        style="border-radius: 2rem"
        :class="!item.root ? 'px-4 py-2' : ''"
      >
        <Icon
          v-if="item.root"
          name="mdi-chevron-down"
          class="text-2xl text-grey-400"
        />
        <span>{{ item.label }}</span>
      </p>
    </template>
  </MegaMenu>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "دسته بندی محصولات",
    root: true,
    items: [
      [
        {
          items: [
            {
              label: "Features",
              icon: "pi pi-list",
              subtext: "Subtext of item",
            },
            {
              label: "Customers",
              icon: "pi pi-users",
              subtext: "Subtext of item",
            },
            {
              label: "Case Studies",
              icon: "pi pi-file",
              subtext: "Subtext of item",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              label: "Solutions",
              icon: "pi pi-shield",
              subtext: "Subtext of item",
            },
            {
              label: "Faq",
              icon: "pi pi-question",
              subtext: "Subtext of item",
            },
            {
              label: "Library",
              icon: "pi pi-search",
              subtext: "Subtext of item",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              label: "Community",
              icon: "pi pi-comments",
              subtext: "Subtext of item",
            },
            {
              label: "Rewards",
              icon: "pi pi-star",
              subtext: "Subtext of item",
            },
            {
              label: "Investors",
              icon: "pi pi-globe",
              subtext: "Subtext of item",
            },
          ],
        },
      ],
      [
        {
          items: [
            {
              image:
                "https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png",
              label: "GET STARTED",
              subtext: "Build spectacular apps in no time.",
            },
          ],
        },
      ],
    ],
  },
]);
</script>

<style scoped>
:deep(.p-megamenu-overlay) {
  /* left: -91.7svw; */
  /* box-shadow: none; */
  border: none;
  position: fixed;
  left: 0;
  top: 8rem;
}
</style>
