import { formatTime } from "./format-time";

export function getCurrentTime() {
  const today = new Date();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return {
    hours: formatTime(hours),
    minutes: formatTime(minutes),
    seconds: formatTime(seconds),
  };
}
