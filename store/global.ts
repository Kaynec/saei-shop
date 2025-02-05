import { createGlobalState } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
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
  };
});
