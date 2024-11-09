export const centerDistance = <T>(array: T[], index: number) => {
  return Math.abs((array.length + 1) / 2 - (index + 1));
};

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
