import { useEffect, useState } from "react";

interface Params {
  url: string
}

export function useMakeRequest<T>({ url }: Params) {
  const [result, setResult] = useState<T>();
  const [urlSent, setUrlSent] = useState<string>(url);

  const [err, setErr] = useState<string>("");

  useEffect(() => {
    fetch(urlSent)
      .then(res => res.json())
      .then(res => setResult(res))
      .catch(err => setErr(err));
    console.log("entreee");
    console.log(urlSent);

  }, [url, urlSent])

  return { result, setResult, err, setUrlSent }
}