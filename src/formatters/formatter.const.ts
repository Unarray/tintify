import { FormatConfig } from "./formatter.type";
import { RGB } from "#/utils/color";
import { effect, effectReset, forground } from "#/colors";

export const defaultRainbowStartColor: RGB = {
  red: 255,
  green: 0,
  blue: 0
} as const;

export const defaultFormatConfig: FormatConfig = {
  "§0": forground.black,
  "§1": forground.red,
  "§2": forground.green,
  "§3": forground.yellow,
  "§4": forground.blue,
  "§5": forground.magenta,
  "§6": forground.cyan,
  "§7": forground.white,
  "§8": forground.default,
  "§r": effectReset.all,
  "§b": effect.bold,
  "§i": effect.italic,
  "§u": effect.underline,
  "§s": effect.strikethrough
} as const;