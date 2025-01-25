<template>
  <form @submit.prevent="" class="space-y-4">
    <p>کاربر گرامی لطفا برای ثبت نام در سایت اطلاعات زیر را تکمیل نمایید.</p>
    <div class="space-y-4">
      <IftaLabel>
        <InputText type="tel" class="my-input" id="phone" variant="outlined" />
        <label for="phone">شماره تلفن همراه</label>
      </IftaLabel>
      <PasswordInput v-model="password" />
    </div>
    <MyButton color="bg-orange-400" class="w-full text-white"> ورود </MyButton>
    <p>ورود شما به معنای پذیرش شرایط کلین ابزار و قوانین حریم‌ خصوصی است .</p>
  </form>
</template>

<script setup lang="ts">
const password = ref("");
</script>
