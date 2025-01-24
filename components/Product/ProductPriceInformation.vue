<template>
  <MyCard>
    <!-- Guarantee Section -->
    <p v-if="hasGuarantee" class="flex items-center gap-1">
      <Garranty />
      گارانتی و تضمین اصالت کالا
    </p>
    <Divider />

    <!-- Availability Section -->
    <div class="flex flex-col gap-2">
      <div v-if="isAvailable" class="flex gap-1">
        <Available />
        <span class="text-green-600"> موجود در انبار ما </span>
      </div>
      <div class="flex gap-2">
        <Chip v-for="option in deliveryOptions" :key="option">
          <DoubleCheck />
          {{ option }}
        </Chip>
      </div>
    </div>
    <Divider />

    <!-- Price Details -->
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <span> قیمت محصول : </span>
        <div class="flex-center gap-1">
          <span>{{ props.price.toLocaleString() }}</span>
          <img src="/Tooman.svg" alt="tooman svg" width="22" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <span> تعداد سفارش : </span>
        <span>{{ props.quantity }} عدد</span>
      </div>

      <div class="flex items-center justify-between">
        <span> قیمت نهایی محصولات : </span>
        <div class="flex-center gap-1">
          <span>{{ (props.price * props.quantity).toLocaleString() }}</span>
          <img src="/Tooman.svg" alt="tooman svg" width="22" />
        </div>
      </div>
    </div>
    <Divider />

    <!-- Add to Cart Button -->
    <MyButton :color="`bg-orange-400`" class="mt-auto gap-2 text-white">
      <Icon name="mdi:basket-outline" class="text-xl" />
      <span>افزودن به سبد</span>
    </MyButton>
  </MyCard>
</template>

<script setup lang="ts">
const props = defineProps({
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  hasGuarantee: {
    type: Boolean,
    default: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  deliveryOptions: {
    type: Array as () => string[],
    default: () => ["تحویل حضوری", "ارسال رایگان"],
  },
});
</script>
