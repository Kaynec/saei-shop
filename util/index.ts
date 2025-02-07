import type { UserOutPut } from "~/api";
import { format, newDate } from "date-fns-jalali";

export function calculateDiscountPercentage(price: string, off_price: string) {
  return 100 - parseInt(price) / parseInt(off_price);
}
export function getUserName(user: UserOutPut) {
  return user.firstname + " " + user.lastname;
}

export function getUserPhoto(user: UserOutPut) {
  return user.profile_image ?? "/user.png";
}

export function padZero(str: string) {
  if (str.length == 1) return "0" + str;
  else return str;
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatJalaliToGeorgianDate(date: string): string | null {
  if (!date) return null;
  const splitted = date.split("/");
  const year = parseInt(splitted[0]);
  const month = parseInt(splitted[1]);
  const day = parseInt(splitted[2]);
  const newGeorgianDate = newDate(year, month, day);

  return formatDate(newGeorgianDate);
}
