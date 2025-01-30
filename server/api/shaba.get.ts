export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return fetch(
    `https://proxy.banksepah.ir/prls/api/v1/inquiry/accountInfoByCard?CardNumber=${query.cardNumber}`,
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "fa-IR",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Opera";v="116", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
      },
      referrer: "https://vbank.banksepah.ir/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  );
});
