import { HexColor, isHexColor } from "$src/color";
import { RGB } from "./function.type";

export const hexToRgb = (hex: HexColor): RGB => {
  if (!isHexColor(hex)) throw new Error(`\`${hex}\` isn't a hexadecimal color code`);

  let code = hex.replace("#", "");

  if (code.length === 3) code = code.split("").map(value => `${value}${value}`).join("");

  const red = code.slice(0, 2);
  const green = code.slice(2, 4);
  const blue = code.slice(4, 6);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16)
  };
};