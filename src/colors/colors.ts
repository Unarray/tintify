import { Background256, BackgroundRGB, Forground256, ForgroundRGB } from "./colors.type";
import { closeANSI, openANSI } from "./color.const";
import { RGB, isInRGBRange, isRGBValues } from "#/utils/color";

export const forgroundRGBColor = (color: RGB): ForgroundRGB => {
  if (!isRGBValues(color)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${color.red}\`, green=\`${color.green}\`, blue=\`${color.blue}\``);
  }

  return `${openANSI}38;2;${color.red};${color.green};${color.blue}${closeANSI}`;
};

export const backgroundRGBColor = (color: RGB): BackgroundRGB => {
  if (!isRGBValues(color)) {
    throw new Error(`Invalid RGB values. Values must be in [0, 255]: red=\`${color.red}\`, green=\`${color.green}\`, blue=\`${color.blue}\``);
  }

  return `${openANSI}48;2;${color.red};${color.green};${color.blue}${closeANSI}`;
};

export const forground256Color = (colorId: number): Forground256 => {
  if (!isInRGBRange(colorId)) {
    throw new Error(`Invalid colorId. Value must be in [0, 255]: colorId=\`${colorId}\``);
  }

  return `${openANSI}38;5;${colorId}${closeANSI}`;
};

export const background256Color = (colorId: number): Background256 => {
  if (!isInRGBRange(colorId)) {
    throw new Error(`Invalid colorId. Value must be in [0, 255]: colorId=\`${colorId}\``);
  }

  return `${openANSI}48;5;${colorId}${closeANSI}`;
};