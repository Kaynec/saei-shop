<template>
  <div
    v-for="(hour, hIndex) in hours"
    v-show="showHours"
    :key="hour.start"
    class="p-4"
    :class="{
      'border-b-2 border-grey-50 border-solid': hIndex !== hours.length - 1,
    }"
  >
    <FormField class="flex gap-2 items-center">
      <RadioButton
        :value="true"
        v-model="hour.selected"
        @change="
          hours.forEach((item) => (item.selected = false)),
            (hour.selected = true)
        "
        :id="hour.start + hour.end"
      />
      <label :for="hour.start + hour.end">
        {{ hour.start }} تا {{ hour.end }}
      </label>
    </FormField>
  </div>
</template>

<script setup lang="ts">
const hours = defineModel<
  {
    start: string;
    end: string;
    selected: boolean;
  }[]
>({ required: true });
defineProps<{
  showHours: boolean;
}>();
</script>
