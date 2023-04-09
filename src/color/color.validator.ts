import { HexColor } from "./color.type";

export const isRGBValues = (red: number, green: number, blue: number): boolean => {
  return isInRGBRange(red) && isInRGBRange(green) && isInRGBRange(blue);
};

export const isInRGBRange = (value: number): boolean => value >= 0 && value <= 255;

export const isHexColor = (value: string): value is HexColor => (/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i).test(value);