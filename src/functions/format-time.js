export function formatTime(time) {
  const isValid = String(time).length === 2;

  if (isValid) return time;

  const newTime = `0${time}`;
  return newTime;
}
