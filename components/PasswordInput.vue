<template>
  <div>
    <FloatLabel variant="in">
      <IconField>
        <InputText
          class="my-input"
          :id="'password' + Math.random() * 10000000"
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
        />
        <InputIcon class="h-full !mt-[-1.25rem]">
          <MyButton color="transparent" type="button" @click="togglePassword">
            <Icon
              :name="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              class="text-grey-300 text-xl"
            />
          </MyButton>
        </InputIcon>
      </IconField>
      <label>{{ label ?? "رمز عبور" }}</label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string;
}>();

const showPassword = ref(false);

function togglePassword() {
  showPassword.value = !showPassword.value;
}

const password = defineModel<string>({ required: true });
</script>
