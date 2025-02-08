<template>
  <!-- Class For Container Paddings -->
  <!-- sm:px-4 md:px-6 xl:px-10 -->
  <!-- Class For Container Paddings On Y Axis -->
  <!-- py-3 sm:py-4 md:py-6 xl:py-10-->
  <!--  -->
  <NuxtLayout>
    <div class="flex min-h-[100svh] flex-col max-w-full text-gray-900">
      <Toast />
      <ConfirmDialog></ConfirmDialog>
      <LoginSignup />
      <Header />
      <!-- <NuxtPage /> -->

      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>An error occurred: {{ error }}</p>
        </template>
      </NuxtErrorBoundary>
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { SiteDetails } from "./const/SiteDetails";

useHead({
  htmlAttrs: {
    lang: "fa",
  },
});

// TODO configure this schema.org
useSchemaOrg(
  defineWebSite({
    address: SiteDetails.address,
    postalCode: SiteDetails.postal_code,
    phone: SiteDetails.phone_number,
    name: "فروشگاه ساعی",
  })
);
</script>
