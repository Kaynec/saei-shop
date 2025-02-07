<template>
  <Form :resolver="signupResolver" class="space-y-4" @submit="onSubmit">
    <p>کاربر گرامی لطفا برای ثبت نام در سایت اطلاعات زیر را تکمیل نمایید.</p>
    <div class="space-y-4">
      <FormField
        :initialValue="signup.firstname"
        name="firstname"
        class="w-full"
      >
        <IftaLabel>
          <InputText
            v-model="signup.firstname"
            class="my-input"
            variant="outlined"
          />
          <label> نام </label>
        </IftaLabel>
      </FormField>

      <FormField name="lastname" class="w-full" :initialValue="signup.lastname">
        <IftaLabel>
          <InputText
            v-model="signup.lastname"
            class="my-input"
            variant="outlined"
          />
          <label>نام خانوادگی</label>
        </IftaLabel>
      </FormField>

      <FormField
        name="phone_number"
        class="w-full"
        :initialValue="signup.phone_number"
      >
        <IftaLabel>
          <InputText
            v-model="signup.phone_number"
            class="my-input"
            variant="outlined"
            type="tel"
          />
          <label>شماره تلفن</label>
        </IftaLabel>
      </FormField>
      <FormField name="password" class="w-full" :initialValue="signup.password">
        <PasswordInput v-model="signup.password" label="رمز عبور" />
      </FormField>
      <FormField name="confirm_password" class="w-full">
        <PasswordInput
          v-model="signup.confirm_password"
          label="تکرار رمز عبور"
        />
      </FormField>
    </div>
    <MyButton color="bg-orange-400" class="w-full text-white">
      ثبت نام
    </MyButton>
    <p>ورود شما به معنای پذیرش شرایط کلین ابزار و قوانین حریم‌ خصوصی است .</p>
  </Form>
</template>
<script setup lang="ts">
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import {
  basicValidator,
  confirmPass,
  getErrorMessage,
  passwordValidator,
} from "~/validation";
import {
  apiUserRegisterCreate,
  apiUserRequestVerifyPhoneCreate,
  type InputRegister,
} from "~/api";
import { useAuthStore } from "~/store/auth";
import { useUrlSearchParams } from "@vueuse/core";

const toast = useToast();

const authStore = useAuthStore();

const isLoading = defineModel<boolean>({ required: true });
const phone = defineModel<string>("phone", { required: true });

const signup = ref<InputRegister>({
  confirm_password: "",
  password: "",
  firstname: "",
  lastname: "",
  phone_number: "",
});

const signupResolver = zodResolver(
  z
    .object({
      ...basicValidator,
      ...passwordValidator,
    })
    .superRefine(({ password, confirm_password }, ctx) =>
      confirmPass(password, confirm_password, ctx)
    )
);

const emit = defineEmits<{
  (e: "continue"): void;
}>();

async function onSubmit({ valid, errors }: any) {
  console.log(valid, errors);
  const errmsg = getErrorMessage(errors);
  console.log(errmsg);

  if (errmsg) {
    toast.add({
      severity: "error",
      summary: errmsg,
      life: 3000,
    });
    return;
  }
  isLoading.value = true;

  try {
    const res = (await apiUserRegisterCreate(signup.value)) as any;
    console.log(res);
    authStore.setToken(res.token);
    authStore.setUser(res);
    apiUserRequestVerifyPhoneCreate({
      phone_number: res.phone_number,
    });

    phone.value = signup.value.phone_number;
    isLoading.value = false;
    emit("continue");
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "خطایی رخ داده است",
      life: 3000,
    });
    isLoading.value = false;
    return;
  }
  toast.add({
    severity: "success",
    summary: "لطفا شماره خود را تایید کنید.",
    life: 3000,
  });
}
</script>
