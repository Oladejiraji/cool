/**
 * Function to get distance from the center of an index of an array. Index starts from zero
 * @param array
 * @param index
 * @returns
 */
export const centerDistance = <T>(array: T[], index: number) => {
  return Math.abs((array.length + 1) / 2 - (index + 1));
};
