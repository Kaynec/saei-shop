import { z } from "zod";

export const passwordValidator = {
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "رمز عبور باید شامل حروف بزرگ باشد",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "رمز عبور باید شامل حروف کوچک باشد",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "رمز عبور باید شامل اعداد باشد",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "رمز عبور باید شامل سیمبل باشد",
    }),
  confirm_password: z.string({ message: "تکرار رمز عبور خود را وارد کنید." }),
};

export const basicValidator = {
  firstname: z.string().min(2, { message: "لطفا نام خود را را وارد کنید." }),
  lastname: z
    .string()
    .min(2, { message: "لطفا نام خانوادگی خود را وارد کنید." }),
  phone_number: z
    .string()
    .min(11, { message: "شماره تلفن خود را وارد کنید." })
    .max(13, { message: "شماره تلفن باید بین 11 تا سیزده رقم باشد" }),
};
export const loginValidator = {
  phone_number: z
    .string()
    .min(11, { message: "شماره تلفن خود را وارد کنید." })
    .max(13, { message: "شماره تلفن باید بین 11 تا سیزده رقم باشد" }),
  password: z
    .string()
    .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "رمز عبور باید شامل حروف بزرگ باشد",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "رمز عبور باید شامل حروف کوچک باشد",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "رمز عبور باید شامل اعداد باشد",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "رمز عبور باید شامل سیمبل باشد",
    }),
};
export const otpValidator = {
  otp: z
    .string()
    .min(5, { message: "کد تایید باید حداقل 6 رقم باشد" })
    .max(6, { message: "کد تایید باید حداکثر 6 رقم باشد" }),
};

export function getErrorMessage(errors: any) {
  for (const [key, value] of Object.entries(errors)) {
    const errmsgs = (value as { message: string }[])?.map((el) => el.message);
    if (errmsgs?.length > 0) {
      return errmsgs[0];
    }
  }
}

export function confirmPass(
  confirm_password: string,
  password: string,
  ctx: any
) {
  if (confirm_password !== password)
    ctx.addIssue({
      code: "custom",
      message: "رمز عبور و تکرار رمز عبور مطابقت ندارند",
      path: ["confirm_password"],
    });
}
