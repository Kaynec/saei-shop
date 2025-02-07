import { apiUserUserRetrieve, type UserOutPut } from "@/api";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const token = useCookie("token", {
    expires: new Date(Date.now() + 1000000 * 60),
  });
  const refreshToken = useCookie("refreshToken", {
    expires: new Date(Date.now() + 1000000 * 60),
  });

  const user = useCookie<UserOutPut | null>("user", {
    expires: new Date(Date.now() + 1000000 * 60),
  });

  const phoneNumber = ref("");

  function setCurrentPhoneNumber(newPhoneNumber: string) {
    phoneNumber.value = newPhoneNumber;
  }

  function logout() {
    console.log("XO XO");
    token.value = "";
    refreshToken.value = "";
    user.value = null;
    console.log("XO XO");
  }

  async function setUserData() {
    try {
      const res = await apiUserUserRetrieve();

      user.value = res;
      return res;
    } catch (error) {
      return error;
    }
  }

  const isAuthenticated = computed(() =>
    Boolean(!!token.value && !!refreshToken.value)
  );

  const currentuser = computed(() =>
    isAuthenticated.value ? user.value : null
  );

  return {
    setToken: (newToken: string) => (token.value = newToken),
    setRefreshToken: (newToken: string) => (refreshToken.value = newToken),
    setUser: (newUser: UserOutPut) => (user.value = newUser),
    isAuthenticated,
    setUserData,
    user,
    token,
    currentuser,
    phoneNumber,
    setCurrentPhoneNumber,
    refreshToken,
    logout,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
