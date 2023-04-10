import { RGB } from "$src/utils/color";

export const linearGradientIndex = (start: RGB, end: RGB, index: number): RGB => {
  return {
    red: Math.floor(start.red + (end.red - start.red) * index),
    green: Math.floor(start.green + (end.green - start.green) * index),
    blue: Math.floor(start.blue + (end.blue - start.blue) * index)
  };
};

export const charIndexes = (message: string, char: string): number[] => {
  const spaceIndex: number[] = [];

  for (let i = 0; i < message.length; i++) {
    if (message[i] !== char) continue;

    spaceIndex.push(i);
  }

  return spaceIndex;
};

export const concatCharIndexes = (message: string[], charIndexes : number[], char: string): string[] => {
  for (const index of charIndexes) {
    message = message.slice(0, index).concat([char], message.slice(index));
  }

  return message;
};