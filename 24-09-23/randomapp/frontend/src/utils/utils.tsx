export const fetchSomething = async (URL: string) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export function formatDate(timestamp: number | null | undefined) {
  if (!timestamp) {
    return;
  }
  const date = new Date(timestamp);
  return date.toLocaleString("en-EU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
