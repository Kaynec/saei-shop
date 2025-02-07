import { apiUserUserRetrieve, type UserOutPut } from "@/api";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const loginDialog = useState<boolean>("loginDialog", () => false);

  function getLoginDialog() {
    return loginDialog.value;
  }

  function toggleLoginDialog() {
    loginDialog.value = !loginDialog.value;
  }

  const activeStep = useCookie<number>("activeStep", {
    default: () => 1,
  });

  return {
    getLoginDialog,
    toggleLoginDialog,
    activeStep,
    changeActiveStep: (newStep: number) => (activeStep.value = newStep),
  };
});
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
