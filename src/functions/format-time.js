export function formatTime(time) {
  const timeInString = String(time);

  const isValid = timeInString.length === 2;

  if (isValid) return time;

  const newTime = timeInString.padStart(2, 0);

  return newTime;
}
