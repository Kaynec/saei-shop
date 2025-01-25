<template>
  <div class="space-y-4">
    <p>کاربر گرامی لطفا برای ثبت نام در سایت اطلاعات زیر را تکمیل نمایید.</p>
    <div class="space-y-4">
      <IftaLabel>
        <InputText class="my-input" id="username" variant="outlined" />
        <label for="username">نام و نام خانوادگی</label>
      </IftaLabel>
      <PasswordInput v-model="password" />
    </div>
    <MyButton color="bg-orange-400" class="w-full text-white">
      ثبت نام
    </MyButton>
    <p>ورود شما به معنای پذیرش شرایط کلین ابزار و قوانین حریم‌ خصوصی است .</p>
  </div>
</template>
<script setup lang="ts">
const password = ref("");
</script>
