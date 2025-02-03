<template>
  <!-- address -->
  <div class="bg-green-100 bg-opacity-30 p-4 rounded-lg">
    <span class="text-grey-200 font-semibold">آدرس فروشگاه ما:</span>

    <p class="text-black font-[500]">
      {{ SiteDetails.address }}
    </p>
    <p class="text-black font-[500]">
      کد پستی :
      {{ SiteDetails.postal_code }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { SiteDetails } from "~/const/SiteDetails";
</script>

<style scoped></style>
