import { isInRGBRange, isRGBValues } from "./color.validator";

export const forgroundRGBColor = (red: number, green: number, blue: number): string => {
  if (!isRGBValues(red, green, blue)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red: \`${red}\`, green: \`${green}\`, blue: \`${blue}\``);
  }

  return `\x1b[38;2;${red};${green};${blue}m`;
};

export const backgroundRGBColor = (red: number, green: number, blue: number): string => {
  if (!isRGBValues(red, green, blue)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${red}\`, green=\`${green}\`, blue=\`${blue}\``);
  }

  return `\x1b[48;2;${red};${green};${blue}m`;
};
