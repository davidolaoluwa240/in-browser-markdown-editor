/**
 * Get Styled Component Theme Color
 * @param {string} color Theme color
 */
export const getThemeColor =
  (color) =>
  ({ theme }) =>
    theme[color];
