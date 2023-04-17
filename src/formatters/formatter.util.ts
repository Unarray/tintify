import { RGB, isRGBValues } from "#/utils/color";

export const linearGradientIndex = (start: RGB, end: RGB, index: number): RGB => {
  if (!isRGBValues(start)) {
    throw new Error(`Invalid RGB values (start). Values must be in [0, 255]: red=\`${start.red}\`, green=\`${start.green}\`, blue=\`${start.blue}\``);
  }

  if (!isRGBValues(end)) {
    throw new Error(`Invalid RGB values (end). Values must be in [0, 255]: red=\`${end.red}\`, green=\`${end.green}\`, blue=\`${end.blue}\``);
  }

  if (index < 0 || index > 1) throw new Error(`Index must be in range [0,1]: index=\`${index}\``);

  return {
    red: Math.floor(start.red + (end.red - start.red) * index),
    green: Math.floor(start.green + (end.green - start.green) * index),
    blue: Math.floor(start.blue + (end.blue - start.blue) * index)
  };
};

export const nextRGBValue = (color: RGB, step: number): RGB => {
  if (!isRGBValues(color)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${color.red}\`, green=\`${color.green}\`, blue=\`${color.blue}\``);
  }

  const maxStep = (255 - Math.min(color.red, color.green, color.blue)) * 6; // Max different RGB values

  step = step % maxStep; // Do this to remove the unnecessary loop back to the beginning.

  const colorsArray = Object.entries(color).map(value => ({ id: value[0], color: value[1] }));
  // Init the loop values
  const max = Math.max(...colorsArray.map(v => v.color));
  const min = Math.min(...colorsArray.map(v => v.color));
  let nextMaxIndex = colorsArray.findIndex(v => v.color === max);
  let remainingSteps = step;

  while (remainingSteps > 0) {
    const previousIndex = (nextMaxIndex + 2) % colorsArray.length;
    const previousColorValue = colorsArray[previousIndex].color;

    if (previousColorValue === min) {
      const nextIndex = (nextMaxIndex + 1) % colorsArray.length;
      const nextColor = colorsArray[nextIndex].color;
      const valueToAdd = remainingSteps >= max - nextColor ? max - nextColor : remainingSteps;

      colorsArray[nextIndex].color = nextColor + valueToAdd;
      remainingSteps -= valueToAdd;
      nextMaxIndex = nextIndex;
    } else {
      const valueToRemove = remainingSteps >= previousColorValue - min ? previousColorValue - min : remainingSteps;

      colorsArray[previousIndex].color = previousColorValue - valueToRemove;
      remainingSteps -= valueToRemove;
    }
  }

  return {
    red: colorsArray[0].color,
    green: colorsArray[1].color,
    blue: colorsArray[2].color
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
  charIndexes.sort((a, b) => a - b);

  for (const index of charIndexes) {
    message = message.slice(0, index).concat([char], message.slice(index));
  }

  return message;
};