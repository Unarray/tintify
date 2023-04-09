import { HexColor } from "./color.type";
import { hexToRgb } from "$src/util/function";
import { isInRGBRange, isRGBValues } from "./color.validator";

export const forgroundRGBColor = (red: number, green: number, blue: number): string => {
  if (!isRGBValues(red, green, blue)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${red}\`, green=\`${green}\`, blue=\`${blue}\``);
  }

  return `\x1b[38;2;${red};${green};${blue}m`;
};

export const backgroundRGBColor = (red: number, green: number, blue: number): string => {
  if (!isRGBValues(red, green, blue)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${red}\`, green=\`${green}\`, blue=\`${blue}\``);
  }

  return `\x1b[48;2;${red};${green};${blue}m`;
};

export const forground256Color = (colorId: number): string => {
  if (!isInRGBRange(colorId)) {
    throw new Error(`Invalid colorId. Value must be in [0, 255]: colorId=\`${colorId}\``);
  }

  return `\x1b[38;5;${colorId}m`;
};

export const background256Color = (colorId: number): string => {
  if (!isInRGBRange(colorId)) {
    throw new Error(`Invalid colorId. Value must be in [0, 255]: colorId=\`${colorId}\``);
  }

  return `\x1b[48;5;${colorId}m`;
};

export const forgroundHexColor = (hex: HexColor): string => {
  const rgb = hexToRgb(hex);

  return forgroundRGBColor(rgb.red, rgb.green, rgb.blue);
};

export const backgroundHexColor = (hex: HexColor): string => {
  const rgb = hexToRgb(hex);

  return backgroundRGBColor(rgb.red, rgb.green, rgb.blue);
};