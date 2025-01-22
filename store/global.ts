import { createGlobalState } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
  const loginDialog = useState<boolean>("loginDialog", () => false);

  function getLoginDialog() {
    return loginDialog.value;
  }

  function toggleLoginDialog() {
    loginDialog.value = !loginDialog.value;
  }

  return {
    getLoginDialog,
    toggleLoginDialog,
  };
});
