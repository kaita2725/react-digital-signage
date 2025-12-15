import { useEffect, useState } from "react";

export const useSignageState = () => {
  const [message, setMessage] = useState<string>("");
  const [timing, setTiming] = useState<number>(10);

  useEffect(() => {
    const intervalCheck = setInterval(() => {
      fetch("/config.json?cache=" + Date.now())
        .then((response) => response.json())
        .then((data) => {
          const msg = data.signage.message;
          const tm = data.signage.timing;
          if (message !== msg) setMessage(msg);
          if (timing !== tm) setTiming(tm);
        });
    }, 1000);

    return () => {
      clearInterval(intervalCheck);
    };
  }, []);

  return { message, setMessage, timing, setTiming };
};
