import { HexColor, RGB } from "./color.type";

export const isRGBValues = (color: RGB): boolean => {
  return isInRGBRange(color.red) && isInRGBRange(color.green) && isInRGBRange(color.blue);
};

export const isInRGBRange = (value: number): boolean => Number.isInteger(value) && value >= 0 && value <= 255;

export const isHexColor = (value: string): value is HexColor => (/^#?([0-9a-f]{6}|[0-9a-f]{3})$/i).test(value);