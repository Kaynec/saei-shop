<template>
  <IconField class="w-full lg:min-w-[26rem] flex">
    <InputIcon>
      <Icon name="mdi:magnify" class="text-2xl" />
    </InputIcon>
    <InputText
      :class="['w-full text-xs h-full !py-2', className]"
      placeholder="هرچی میخای اینجا بنویس"
      v-model="text"
    />
  </IconField>
</template>
<script setup lang="ts">
const text = defineModel<string>({ required: true });
const { class: className } = defineProps<{
  class: string;
}>();
</script>
