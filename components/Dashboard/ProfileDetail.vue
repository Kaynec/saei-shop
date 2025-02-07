<template>
  <MyCard class="shadow-none">
    <!-- Personal Details -->
    <Dialog
      :pt="{
        root: 'p-dialog-maximized',
      }"
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="visible"
    >
      <template #default>
        <Form
          :resolver="resolver"
          class="grid grid-cols-12 gap-4 gap-y-12"
          @submit="onFormSubmit"
        >
          <FormField
            class="col-span-6 md:col-span-4 flex flex-col gap-2"
            :initialValue="model.firstname"
            name="name"
          >
            <IftaLabel>
              <InputText
                v-model="model.firstname"
                class="my-input"
                variant="outlined"
              />
              <label>نام </label>
            </IftaLabel>
          </FormField>

          <FormField
            class="col-span-6 md:col-span-4 flex flex-col gap-2"
            :initialValue="model.lastname"
            name="lastname"
          >
            <IftaLabel>
              <InputText
                v-model="model.lastname"
                class="my-input"
                variant="outlined"
              />
              <label> نام خانوادگی</label>
            </IftaLabel>
          </FormField>

          <FormField
            class="col-span-6 md:col-span-4 flex flex-col gap-2"
            :initialValue="model.national_code"
            name="national_code"
          >
            <IftaLabel>
              <InputText
                v-model="model.national_code"
                class="my-input"
                variant="outlined"
              />
              <label>کد ملی</label>
            </IftaLabel>
          </FormField>

          <FormField
            class="col-span-6 md:col-span-4 flex flex-col gap-2"
            :initialValue="model.birth_date"
            name="birth_date"
          >
            <IftaLabel>
              <InputText
                v-model="model.password"
                class="my-input"
                variant="outlined"
                data-jdp
              />
              <label>تاریخ تولد</label>
            </IftaLabel>
          </FormField>

          <FormField
            class="col-span-6 md:col-span-4 flex flex-col gap-2"
            :initialValue="model.phone_number"
            name="phone_number"
          >
            <IftaLabel>
              <InputText
                v-model="model.phone_number"
                class="my-input"
                variant="outlined"
                type="tel"
                inputmode="tel"
              />
              <label>شماره تلفن</label>
            </IftaLabel>
          </FormField>

          <div class="col-span-full flex gap-2">
            <MyButton
              type="submit"
              class="text-white flex-1 max-w-56"
              color="bg-red-600"
            >
              ویرایش اطلاعات
            </MyButton>
          </div>
        </Form>
      </template>
    </Dialog>

    <!--  -->
    <Dialog
      :pt="{
        root: 'p-dialog-maximized',
      }"
      class="block md:hidden w-full"
      modal
      maximizable
      v-model:visible="passwordVisible"
    >
      <template #default>
        <Form
          :resolver="passwordValidator"
          class="flex flex-col gap-4 gap-y-12 max-w-2xl mx-auto"
          @submit="onPasswordFormSubmit"
        >
          <FormField name="otp" class="w-full">
            <IftaLabel :initialValue="model.otp">
              <InputText
                v-model="model.otp"
                class="my-input"
                variant="outlined"
                name="otp"
              />
              <label> کد تایید احراز هویت</label>
            </IftaLabel>
            <button class="text-primary-500 pt-2">ارسال مجدد کد تایید</button>
          </FormField>

          <FormField
            :initialValue="model.password"
            name="password"
            v-slot="$field"
          >
            <IftaLabel>
              <Password
                :feedback="false"
                fluid
                v-model="model.password"
                class="my-input"
                variant="outlined"
                name="password"
              />

              <label>رمز عبور</label>
            </IftaLabel>
            <div class="py-2" v-if="$field?.invalid">
              <Message
                v-for="(error, index) of $field.errors"
                :key="index"
                severity="error"
                size="small"
                variant="simple"
                >{{ error.message }}</Message
              >
            </div>
          </FormField>

          <FormField
            v-slot="$field"
            name="confirm_password"
            :initialValue="model.confirm_password"
          >
            <IftaLabel class="col-span-12">
              <Password
                :feedback="false"
                fluid
                v-model="model.confirm_password"
                class="my-input"
                variant="outlined"
                name="confirm_password"
                :initialValue="model.confirm_password"
              />

              <label>تکرار رمز عبور</label>
            </IftaLabel>
            <div class="py-2" v-if="$field?.invalid">
              <Message
                v-for="(error, index) of $field.errors"
                :key="index"
                severity="error"
                size="small"
                variant="simple"
                >{{ error.message }}</Message
              >
            </div>
          </FormField>

          <div class="col-span-full flex gap-2">
            <MyButton
              type="submit"
              class="text-white flex-1 !max-w-56"
              color="bg-red-600"
            >
              تایید
            </MyButton>
          </div>
        </Form>
      </template>
    </Dialog>
    <!--  -->
    <div class="grid grid-cols-12 gap-4 gap-y-12" @submit.prevent="">
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.firstname"
          class="my-input"
          variant="outlined"
        />
        <label>نام و نام خانوادگی</label>
      </IftaLabel>
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.national_code"
          class="my-input"
          variant="outlined"
        />
        <label>کد ملی</label>
      </IftaLabel>
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.phone_number"
          class="my-input"
          variant="outlined"
          type="tel"
          inputmode="tel"
        />
        <label>شماره تلفن</label>
      </IftaLabel>
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.email"
          class="my-input"
          type="email"
          variant="outlined"
        />
        <label>ایمیل</label>
      </IftaLabel>
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.password"
          class="my-input"
          variant="outlined"
          data-jdp
        />
        <!-- <date-picker :value="model.birth_date" clearable></date-picker> -->
        <label>تاریخ تولد</label>
      </IftaLabel>
      <IftaLabel class="col-span-6 md:col-span-4">
        <InputText
          disabled
          :value="model.password"
          class="my-input"
          variant="outlined"
        />
        <label>رمز عبور</label>
      </IftaLabel>

      <div class="col-span-full gap-2 flex">
        <MyButton
          @click="visible = true"
          class="text-white w-56"
          color="bg-red-600"
        >
          ویرایش اطلاعات شخصی
        </MyButton>
        <MyButton
          @click="passwordVisible = true"
          class="text-white w-56"
          color="bg-primary-600"
        >
          ویرایش رمز عبور
        </MyButton>
      </div>
    </div>
  </MyCard>
</template>

<script setup lang="ts">
import {
  basicValidator,
  passwordValidator,
  getErrorMessage,
} from "~/validation";

import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";

type Profile = {
  firstname: string;
  lastname: string;
  national_code: string;
  phone_number: string;
  email: string;
  birth_date: string;
  password: string;
  confirm_password: string;
  otp: string;
};

const toast = useToast();

const visible = ref(false);
const passwordVisible = ref(false);

onMounted(async () => {
  // @ts-ignore
  await import("@majidh1/jalalidatepicker");

  (window as any).jalaliDatepicker.startWatch();
  setTimeout(() => {
    document.querySelector("jdp-container")?.classList.toggle("z-[10000000]");
  }, 2500);
});

const model = ref<Profile>({
  firstname: "برکه",
  lastname: "حسینی",
  national_code: "۰۰۲۳۵۰۴۳۴۳",
  phone_number: "09104507847",
  email: "behrad.abniki@gmail.com",
  birth_date: "",
  password: "********",
  confirm_password: "********",
  otp: "",
});

const resolver = zodResolver(
  z.object({
    ...basicValidator,
    national_code: z.string().min(1, { message: "کد ملی خود را وارد کنید." }),
    birth_date: z.string().min(1, { message: "تاریخ تولد خود را وارد کنید." }),
    otp: z
      .string()
      .min(6, { message: "کد احراز هویت باید حداقل 6 کاراکتر باشد" })
      .max(6, { message: "کد احراز هویت باید حداکثر 6 کاراکتر باشد" }),
  })
);

const onPasswordFormSubmit = ({ valid, errors }: any) => {
  if (valid) {
    // do your thing xo xo
  }
};

const onFormSubmit = ({ valid, errors }: any) => {
  const errmsg = getErrorMessage(errors);
  if (errmsg) {
    toast.add({
      severity: "error",
      summary: errmsg,
      life: 3000,
    });
    return;
  }
  toast.add({
    severity: "success",
    summary: "فرم با موفقیت ارسال شد",
    life: 3000,
  });
};
</script>
