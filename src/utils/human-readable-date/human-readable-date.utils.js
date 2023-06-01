/**
 * Get Date In A Human Readable Format
 * @param {string|Date} date Date
 */
export const humanReadableDate = (date = new Date()) => {
  return new Date(date).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
};
