import { HexColor, RGB, hexToRgb, isInRGBRange, isRGBValues } from "$src/utils/color";

export const forgroundRGBColor = (color: RGB): string => {
  if (!isRGBValues(color)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${color.red}\`, green=\`${color.green}\`, blue=\`${color.blue}\``);
  }

  return `\x1b[38;2;${color.red};${color.green};${color.blue}m`;
};

export const backgroundRGBColor = (color: RGB): string => {
  if (!isRGBValues(color)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${color.red}\`, green=\`${color.green}\`, blue=\`${color.blue}\``);
  }

  return `\x1b[48;2;${color.red};${color.green};${color.blue}m`;
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

export const forgroundHexColor = (hex: HexColor): string => forgroundRGBColor(hexToRgb(hex));

export const backgroundHexColor = (hex: HexColor): string => backgroundRGBColor(hexToRgb(hex));