export function dateFormatter(date: Date) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return formattedDate;
}
