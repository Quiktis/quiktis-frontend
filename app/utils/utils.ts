export function formatDateShort(isoString: string): string {
  const date = new Date(isoString);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  return `${month} ${day}`;
}


export function getDayFromISO(isoString: string): number {
  const date = new Date(isoString);
  return date.getDate();
}

export function getWeekday(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}


export function getTime(isoString: string): string {
  const date = new Date(isoString);

  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${time}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // e.g. Thursday
    month: "short",  // e.g. Sep
    day: "numeric",  // e.g. 23
  };

  return date.toLocaleDateString(undefined, options);
}


