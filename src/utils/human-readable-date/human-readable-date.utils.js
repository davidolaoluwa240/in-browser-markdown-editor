/**
 * Get Date In A Human Readable Format
 * @param {string|Date} date Date
 */
export const humanReadableDate = (date = new Date()) => {
  return new Intl.DateTimeFormat("en-GB", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  }).format(new Date(date));
};
