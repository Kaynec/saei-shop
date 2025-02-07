<template>
  <Form :resolver="loginResolver" class="space-y-4" @submit="onSubmit">
    <p>کاربر گرامی لطفا برای ثبت نام در سایت اطلاعات زیر را تکمیل نمایید.</p>
    <div class="space-y-4">
      <FormField name="phone_number" class="w-full" :initialValue="phone">
        <IftaLabel>
          <InputText
            type="tel"
            class="my-input"
            id="phone"
            variant="outlined"
            v-model="phone"
          />
          <label for="phone">شماره تلفن همراه</label>
        </IftaLabel>
      </FormField>

      <FormField name="password" class="w-full" :initialValue="password">
        <PasswordInput v-model="password" label="رمز عبور" />
      </FormField>
    </div>
    <MyButton color="bg-orange-400" class="w-full text-white"> ورود </MyButton>
    <p>ورود شما به معنای پذیرش شرایط کلین ابزار و قوانین حریم‌ خصوصی است .</p>
  </Form>
</template>

<script setup lang="ts">
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import {
  apiAuthJwtCustomerLoginCreate,
  apiUserRequestVerifyPhoneCreate,
  apiUserUserRetrieve,
} from "~/api";
import { useAuthStore } from "~/store/auth";
import { getErrorMessage, loginValidator } from "~/validation";

const password = ref("");

const isLoading = defineModel<boolean>({ required: true });
const phone = defineModel<string>("phone", { required: true });

const loginResolver = zodResolver(
  z.object({
    ...loginValidator,
  })
);

const toast = useToast();

const authStore = useAuthStore();

console.log(authStore);

const emit = defineEmits<{
  (e: "continue"): void;
  (e: "success"): void;
}>();

async function getUserData() {
  const res = await apiUserUserRetrieve();
  console.log(res, "user");
  authStore.setUser(res);
}

async function onSubmit({ valid, errors }: any) {
  const errmsg = getErrorMessage(errors);
  isLoading.value = true;
  if (errmsg) {
    toast.add({
      severity: "error",
      summary: errmsg,
      life: 3000,
    });
    return;
  }

  try {
    const res = (await apiAuthJwtCustomerLoginCreate({
      phone_number: phone.value,
      password: password.value,
    })) as any;
    console.log("XO XO");
    console.log(res?.token?.access);
    authStore.setToken(res?.token?.access);
    console.log("XO XO");
    console.log(res?.token?.access);

    authStore.setRefreshToken(res?.token?.refresh);
    console.log("XO XO");
    console.log(res?.token?.access);

    getUserData();

    console.log("XO XO");
    emit("success");
  } catch (error) {
    const err = error as any;

    const logonErr = err?.response?._data?.error ?? "";

    // verify phone xo xo
    if (logonErr == "ابتدا شماره خود را تایید کنید.") {
      apiUserRequestVerifyPhoneCreate({
        phone_number: phone.value,
      });

      toast.add({
        severity: "success",
        summary: logonErr,
        life: 3000,
      });

      emit("continue");
    }

    toast.add({
      severity: "error",
      summary: "خطایی رخ داده است",
      life: 3000,
    });
  }
  isLoading.value = false;
}
</script>
