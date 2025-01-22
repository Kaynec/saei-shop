<template>
  <div>
    <FloatLabel variant="in">
      <IconField>
        <InputText
          class="my-input"
          id="password"
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
        />
        <InputIcon class="h-full !mt-[-1.25rem]">
          <MyButton color="transparent" @click="togglePassword">
            <Icon
              :name="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
              class="text-grey-300 text-xl"
            />
          </MyButton>
        </InputIcon>
      </IconField>
      <label for="password">رمز عبور</label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
const showPassword = ref(true);

function togglePassword() {
  console.log("xo xo");
  showPassword.value = !showPassword.value;
}

const password = defineModel<string>({ required: true });
</script>
