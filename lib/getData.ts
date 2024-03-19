import { headers } from "next/headers";

const useFetch = async (gclid: any) => {
  const ip = headers().get("x-forwarded-for");

  const url = `https://testapi-tawny.vercel.app/logic`;

  const res = await fetch(url, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: ip,
      gclid: gclid,
      status: false,
      country: "Austria",
      code: "at51",
    }),
  });
  const data = await res.json();
  return data;
};

export default useFetch;
