// custom-instance.ts

import { $fetch } from "ofetch";
import type { FetchError } from "ofetch";
import { usePVToastService } from "~/api/toast";
import { useAuthStore } from "~/store/auth";

const baseURL = "https://saeishop-backend.liara.run"; // Updated to point to the JSON server

const loginApis = [
  "/api/user/register/",
  "/api/user/change-password/",
  "/api/user/request-verify-phone/",
  "/api/user/request-change-password/",
  "/api/user/verify-phone/",
  "/api/auth/jwt/verify/",
  "/api/auth/jwt/customer-login/",
];

function getToken() {
  const store = useAuthStore();
  return store.token;
}
function getRefreshToken() {
  const store = useAuthStore();
  return store.refreshToken;
}
function setToken(token: string) {
  const store = useAuthStore();
  store.setToken(token);
}
function setRefreshToken(token: string) {
  const store = useAuthStore();
  store.setRefreshToken(token);
}

export const customInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: any;
  data?: unknown;
  responseType?: string;
  headers?: Record<string, string>;
}): Promise<T> => {
  const formattedHeaders = { ...headers };
  /**
   * Deletes the Content-Type header from the formattedHeaders object.
   * This ensures that the default Content-Type header will be used instead.
   */

  delete formattedHeaders["Content-Type"];

  const token = await getToken();

  if (!loginApis.includes(url) && token && typeof token === "string") {
    formattedHeaders.Authorization = `Bearer ${token}`;
  }
  const reformedUrl =
    `${baseURL}${url}` + `${params ? "?" + new URLSearchParams(params) : ""}`;

  return $fetch(reformedUrl, {
    method,
    ...(data ? { body: data } : {}),
    headers: {
      ...formattedHeaders,
    },
  })
    .then((response) => {
      console.log(response, "response");
      return response;
    })
    .catch(async (error) => {
      // console.log(error, "error");
      const errorObject = error as any;
      // 401 Error
      const refresh = await getRefreshToken();
      if (errorObject && errorObject.statusCode === 401 && refresh) {
        $fetch(`${baseURL}/api/auth/jwt/refresh`, {
          body: {
            refresh,
          },
        })
          .then((r) => {
            if (!r) return;
            if (r && r.data && r.data.access) {
              setToken(r.access || r.data.access);
            }
          })
          .catch(() => {
            setToken("");
            setRefreshToken("");
            window.location.href = "/";
          });
      } else throw error;
    });
};

export default customInstance;

export const useApiFetch = async <T>(
  cb: (...args: any) => Promise<T>,
  ...args: any[]
) => {
  const config = useRuntimeConfig();
  // Call your composable
  const toastService = usePVToastService();

  // Call the callback function with the provided arguments

  // Use useFetch with the result from cb
  const apiFetch = useAsyncData(`${args}`, async () => {
    return new Promise((resolve, reject) => {
      cb(...args)
        .then((data) => {
          return data;
        })
        .catch((error) => {
          toastService.add({
            // use 😃
            severity: "error",
            summary: "Error 😢 ",
            detail: "Error bla bla bla",
          });
          throw error;
        });
    });
  });

  return apiFetch; // Return the apiFetch result
};

// In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
export type ErrorType<Error> = FetchError<Error>;
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
