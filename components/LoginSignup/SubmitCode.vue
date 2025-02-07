<template>
  <form class="space-y-4" @submit.prevent="onSubmit">
    <p>کد تایید</p>

    <p>
      حساب کاربری با شماره موبایل {{ phone }} وجود ندارد. برای ساخت حساب جدید،
      کد تایید برای این شماره ارسال گردید.
    </p>

    <div class="space-y-4">
      <InputOtp
        v-model="otp.otp"
        class="my-input flex justify-center"
        variant="outlined"
        :length="6"
        dir="ltr"
      />

      <Button
        unstyled
        :class="canSendAgain ? '' : 'opacity-50'"
        @click="
          () => {
            if (canSendAgain) {
              setTimer(), resend();
            }
          }
        "
      >
        <p>مانده تا دریافت مجدد کد {{ timer }} : ۰۰</p>
      </Button>
    </div>
    <MyButton color="bg-orange-400" class="w-full text-white">
      ثبت نام
    </MyButton>
    <p>ورود شما به معنای پذیرش شرایط کلین ابزار و قوانین حریم‌ خصوصی است .</p>
  </form>
</template>
<script setup lang="ts">
import {
  apiUserRequestVerifyPhoneCreate,
  apiUserVerifyPhoneCreate,
} from "~/api";
import { useAuthStore } from "~/store/auth";
import InputOtp from "primevue/inputotp";

const props = defineProps<{
  phone: string;
}>();
const toast = useToast();

const timer = ref(60);

const canSendAgain = ref(false);

function resend() {
  apiUserRequestVerifyPhoneCreate({
    phone_number: props.phone,
  })
    .then((res) => {
      toast.add({
        severity: "success",
        summary: "کد تایید ارسال شد",
        life: 3000,
      });
    })
    .catch((err) => {
      toast.add({
        severity: "error",
        summary: "خطایی رخ داده است",
        life: 3000,
      });
    });
}

function setTimer() {
  timer.value = 60;

  const interval = setInterval(() => {
    timer.value--;
    if (timer.value === 0) {
      clearInterval(interval);
      canSendAgain.value = true;
    }
  }, 1000);
}

onMounted(setTimer);

const otp = ref({
  otp: "",
});

const emit = defineEmits<{
  (e: "continue"): void;
}>();

async function onSubmit() {
  if (otp.value.otp.length !== 6) {
    toast.add({
      severity: "error",
      summary: "کد تایید باید 6 رقم باشد",
      life: 3000,
    });
    return;
  }

  try {
    const res = await apiUserVerifyPhoneCreate({
      phone_number: props.phone,
      otp: otp.value.otp,
    });
    console.log(res);
  } catch (err) {
    console.error(err, "error");
    toast.add({
      severity: "error",
      summary: "خطایی رخ داده است",
      life: 3000,
    });
    return;
  }

  toast.add({
    severity: "success",
    summary: "شماره همراه تایید شد",
    life: 3000,
  });
  emit("continue");
}
</script>
