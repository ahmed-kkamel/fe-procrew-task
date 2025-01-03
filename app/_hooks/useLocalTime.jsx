import { useEffect, useState } from "react";

export default function useLocalTime() {
  const utcTime = new Date().toISOString();
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const date = new Date(utcTime);
    const localTimeString = date
      .toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/\s?[APM]{2}$/i, "");
    setLocalTime(localTimeString);
  }, [utcTime]);

  return localTime;
}
