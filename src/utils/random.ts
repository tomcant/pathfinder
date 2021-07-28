export const random = (max: number): number => Math.floor(Math.random() * max);

export const randomEven = (max: number): number => 2 * random(Math.ceil(max / 2));

export const randomElement = <T>(elements: T[]): T => elements[random(elements.length)];

export const shuffle = <T>(arr: T[]): T[] => {
  let currIdx = arr.length;

  while (currIdx > 0) {
    const randIdx = random(currIdx--);
    [arr[currIdx], arr[randIdx]] = [arr[randIdx], arr[currIdx]];
  }

  return arr;
};
