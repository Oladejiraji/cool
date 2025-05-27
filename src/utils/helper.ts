/**
 * Function to get distance from the center of an index of an array. Index starts from zero
 * @param array
 * @param index
 * @returns
 */
export const centerDistance = <T>(array: T[], index: number) => {
  return Math.abs((array.length + 1) / 2 - (index + 1));
};

// export function deepClone<T>(obj: T): T {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map((item) => deepClone(item)) as T;
//   }

//   const clonedObj: Record<string, any> = {};
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       clonedObj[key] = deepClone(obj[key]);
//     }
//   }

//   return clonedObj as T;
// }

// utils/splitStringUsingRegex.tsx

export function splitStringUsingRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}
