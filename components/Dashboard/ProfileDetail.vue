<template>
  <MyCard class="shadow-none">
    <FitLoadingScreen v-if="loading" />
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
          <div
            class="col-span-full justify-center items-center flex flex-col gap-4"
          >
            <NuxtImg
              :src="imgPreview"
              alt="user photo"
              class="object-cover rounded-full w-24 h-24"
            />
            <FileUpload
              choose-label="انتخاب عکس شخصی"
              mode="basic"
              @select="onFileSelect"
              customUpload
              auto
              severity="secondary"
              class="p-button-outlined"
            />
          </div>

          <FormField
            class="col-span-6 flex flex-col gap-2"
            :initialValue="model.firstname"
            name="firstname"
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
            class="col-span-6 flex flex-col gap-2"
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

          <!-- <FormField
            class="col-span-6  flex flex-col gap-2"
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
          </FormField> -->

          <FormField
            class="col-span-6 flex flex-col gap-2"
            :initialValue="model.birthdate"
            name="birthdate"
          >
            <IftaLabel>
              <InputText
                v-model="model.birthdate"
                class="my-input"
                variant="outlined"
                data-jdp
              />
              <label>تاریخ تولد</label>
            </IftaLabel>
          </FormField>

          <FormField
            class="col-span-6 flex flex-col gap-2"
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
          :resolver="passwordResolver"
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
            <button
              type="button"
              @click="requestPasswordReset"
              class="text-primary-500 pt-2"
            >
              ارسال مجدد کد تایید
            </button>
          </FormField>

          <FormField
            :initialValue="model.password"
            name="password"
            v-slot="$field"
          >
            <PasswordInput
              :feedback="false"
              v-model="model.password"
              class="my-input"
              variant="outlined"
              name="password"
            />

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
            <PasswordInput
              :feedback="false"
              v-model="model.confirm_password"
              class="my-input"
              variant="outlined"
              name="confirm_password"
              label="تکرار رمز عبور"
            />

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
        <!-- <date-picker :value="model.birthdate" clearable></date-picker> -->
        <label>تاریخ تولد</label>
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
          @click="requestPasswordReset"
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
  otpValidator,
} from "~/validation";

import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import type { Profile } from "~/types";
import { useAuthStore } from "~/store/auth";
import { formatJalaliToGeorgianDate, getUserPhoto } from "~/util";
import {
  apiUserChangePasswordCreate,
  apiUserRequsetChangePasswordCreate,
  apiUserUserUpdate,
  type UserInput,
} from "~/api";

const toast = useToast();

const visible = ref(false);
const passwordVisible = ref(false);

const store = useAuthStore();

onMounted(async () => {
  /**
   * When component is mounted, format birthdate
   * to Persian locale if birthdate exists
   */

  // @ts-ignore
  await import("@majidh1/jalalidatepicker");

  (window as any).jalaliDatepicker.startWatch();
  setTimeout(() => {
    document.querySelector("jdp-container")?.classList.toggle("z-[10000000]");
  }, 2500);

  if (!model.value.birthdate) return;
  model.value.birthdate = new Date(model.value.birthdate).toLocaleDateString(
    "fa-Fa-u-nu-latn"
  );
});

const model = ref<Profile>({
  firstname: "برکه",
  lastname: "حسینی",
  national_code: "۰۰۲۳۵۰۴۳۴۳",
  phone_number: "09104507847",
  email: "behrad.abniki@gmail.com",
  birthdate: "",
  password: "********",
  confirm_password: "********",
  otp: "",
  ...(store.user as any),
});

const resolver = zodResolver(
  z.object({
    ...basicValidator,
    birthdate: z.string().min(1, { message: "تاریخ تولد خود را وارد کنید." }),
    // national_code: z.string().min(1, { message: "کد ملی خود را وارد کنید." }),
  })
);

const passwordResolver = zodResolver(
  z.object({
    ...passwordValidator,
    ...otpValidator,
  })
);

const onPasswordFormSubmit = ({ valid, errors }: any) => {
  const errmsg = getErrorMessage(errors);
  if (errmsg) {
    toast.add({
      severity: "error",
      summary: errmsg,
      life: 3000,
    });
    return;
  }
  loading.value = true;
  apiUserChangePasswordCreate({
    phone_number: model.value.phone_number,
    otp: model.value.otp as any,
    new_password: model.value.password,
    confirm_new_password: model.value.confirm_password,
  })
    .then(() => {
      toast.add({
        severity: "success",
        summary: "تایید شد",
        life: 3000,
      });
      passwordVisible.value = false;
    })
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "خطا در تغییر رمز عبور",
        detail: err.response.data.error,
        life: 3000,
      });
    })
    .finally(() => {
      loading.value = false;
    });
};

const loading = ref(false);
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
  loading.value = true;

  const birthDate = formatJalaliToGeorgianDate(model.value.birthdate!);
  const { profile_image, ...rest } = model.value;

  const objtosend = { ...rest } as UserInput;

  if (typeof profile_image === "object" && profile_image !== null) {
    objtosend.profile_image = profile_image;
  }

  if (birthDate) {
    objtosend.birthdate = birthDate;
  }

  apiUserUserUpdate(objtosend)
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "خطا",
        detail: err.response.data.error,
        life: 3000,
      });
    })
    .then((res) => {
      store.setUser(res!);
      toast.add({
        severity: "success",
        summary: "فرم با موفقیت ارسال شد",
        life: 3000,
      });
    })
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "خطا",
        detail: err.response.data.error,
        life: 3000,
      });
    })
    .finally(() => {
      loading.value = false;
    });
};

const imgPreview = ref(getUserPhoto(store.user!));

function onFileSelect(event: any) {
  const file = event.files[0];
  model.value.profile_image = file;
  const reader = new FileReader();

  reader.onload = async (e) => {
    imgPreview.value = (e.target as any).result;
  };

  reader.readAsDataURL(file);
}

function requestPasswordReset() {
  passwordVisible.value = true;

  apiUserRequsetChangePasswordCreate({
    phone_number: model.value.phone_number,
  });
}
</script>
