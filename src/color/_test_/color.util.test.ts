import { background256Color, backgroundRGBColor, forground256Color, forgroundRGBColor, backgroundHexColor, forgroundHexColor } from "..";
import { describe, expect, test } from "vitest";

describe("`forgroundRGBColor` function", () => {
  test("return an escape sequence", () => {
    expect(forgroundRGBColor(0, 0, 0)).toBe("\x1b[38;2;0;0;0m");
    expect(forgroundRGBColor(128, 128, 128)).toBe("\x1b[38;2;128;128;128m");
    expect(forgroundRGBColor(255, 255, 255)).toBe("\x1b[38;2;255;255;255m");
    expect(forgroundRGBColor(128, 0, 0)).toBe("\x1b[38;2;128;0;0m");
    expect(forgroundRGBColor(0, 128, 0)).toBe("\x1b[38;2;0;128;0m");
    expect(forgroundRGBColor(0, 0, 128)).toBe("\x1b[38;2;0;0;128m");
    expect(forgroundRGBColor(128, 128, 0)).toBe("\x1b[38;2;128;128;0m");
    expect(forgroundRGBColor(128, 0, 128)).toBe("\x1b[38;2;128;0;128m");
    expect(forgroundRGBColor(0, 128, 128)).toBe("\x1b[38;2;0;128;128m");
  });

  test("throw an error", () => {
    expect(() => forgroundRGBColor(-1, -1, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`-1`, blue=`-1`");
    expect(() => forgroundRGBColor(256, 256, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`256`, blue=`256`");
    expect(() => forgroundRGBColor(-1, 256, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`256`, blue=`256`");
    expect(() => forgroundRGBColor(256, -1, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`-1`, blue=`256`");
    expect(() => forgroundRGBColor(256, 256, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`256`, blue=`-1`");
    expect(() => forgroundRGBColor(256, -1, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`-1`, blue=`-1`");
    expect(() => forgroundRGBColor(-1, 256, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`256`, blue=`-1`");
    expect(() => forgroundRGBColor(-1, -1, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`-1`, blue=`256`");
  });
});

describe("`backgroundRGBColor` function", () => {
  test("return an escape sequence", () => {
    expect(backgroundRGBColor(0, 0, 0)).toBe("\x1b[48;2;0;0;0m");
    expect(backgroundRGBColor(128, 128, 128)).toBe("\x1b[48;2;128;128;128m");
    expect(backgroundRGBColor(255, 255, 255)).toBe("\x1b[48;2;255;255;255m");
    expect(backgroundRGBColor(128, 0, 0)).toBe("\x1b[48;2;128;0;0m");
    expect(backgroundRGBColor(0, 128, 0)).toBe("\x1b[48;2;0;128;0m");
    expect(backgroundRGBColor(0, 0, 128)).toBe("\x1b[48;2;0;0;128m");
    expect(backgroundRGBColor(128, 128, 0)).toBe("\x1b[48;2;128;128;0m");
    expect(backgroundRGBColor(128, 0, 128)).toBe("\x1b[48;2;128;0;128m");
    expect(backgroundRGBColor(0, 128, 128)).toBe("\x1b[48;2;0;128;128m");
  });

  test("throw an error", () => {
    expect(() => backgroundRGBColor(-1, -1, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`-1`, blue=`-1`");
    expect(() => backgroundRGBColor(256, 256, 256))
      .toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`256`, blue=`256`");
    expect(() => backgroundRGBColor(-1, 256, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`256`, blue=`256`");
    expect(() => backgroundRGBColor(256, -1, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`-1`, blue=`256`");
    expect(() => backgroundRGBColor(256, 256, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`256`, blue=`-1`");
    expect(() => backgroundRGBColor(256, -1, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`256`, green=`-1`, blue=`-1`");
    expect(() => backgroundRGBColor(-1, 256, -1)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`256`, blue=`-1`");
    expect(() => backgroundRGBColor(-1, -1, 256)).toThrow("Invalid RGB values. Values must be in [0, 255]: red=`-1`, green=`-1`, blue=`256`");
  });
});

describe("`forground256Color` function", () => {
  test("return an escape sequence", () => {
    expect(forground256Color(0)).toBe("\x1b[38;5;0m");
    expect(forground256Color(128)).toBe("\x1b[38;5;128m");
    expect(forground256Color(255)).toBe("\x1b[38;5;255m");
  });

  test("throw an error", () => {
    expect(() => forground256Color(-1)).toThrow("Invalid colorId. Value must be in [0, 255]: colorId=`-1`");
    expect(() => forground256Color(256)).toThrow("Invalid colorId. Value must be in [0, 255]: colorId=`256`");
  });
});

describe("`backround256Color` function", () => {
  test("return an escape sequence", () => {
    expect(background256Color(0)).toBe("\x1b[48;5;0m");
    expect(background256Color(128)).toBe("\x1b[48;5;128m");
    expect(background256Color(255)).toBe("\x1b[48;5;255m");
  });

  test("throw an error", () => {
    expect(() => background256Color(-1)).toThrow("Invalid colorId. Value must be in [0, 255]: colorId=`-1`");
    expect(() => background256Color(256)).toThrow("Invalid colorId. Value must be in [0, 255]: colorId=`256`");
  });
});

describe("`forgroundHexColor` function", () => {
  test("return an escape sequence", () => {
    expect(forgroundHexColor("#000")).toBe("\x1b[38;2;0;0;0m");
    expect(forgroundHexColor("#Fff")).toBe("\x1b[38;2;255;255;255m");
    expect(forgroundHexColor("#000000")).toBe("\x1b[38;2;0;0;0m");
    expect(forgroundHexColor("#4b9976")).toBe("\x1b[38;2;75;153;118m");
    expect(forgroundHexColor("#FFFFFF")).toBe("\x1b[38;2;255;255;255m");
  });

  test("throw an error", () => {
    expect(() => forgroundHexColor("#")).toThrow("`#` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#00")).toThrow("`#00` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#0000")).toThrow("`#0000` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#00000")).toThrow("`#00000` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#GGG")).toThrow("`#GGG` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#GGGGGG")).toThrow("`#GGGGGG` isn't a hexadecimal color code");
    expect(() => forgroundHexColor("#FFFFFFF")).toThrow("`#FFFFFFF` isn't a hexadecimal color code");
  });
});

describe("`backgroundHexColor` function", () => {
  test("return an escape sequence", () => {
    expect(backgroundHexColor("#000")).toBe("\x1b[48;2;0;0;0m");
    expect(backgroundHexColor("#Fff")).toBe("\x1b[48;2;255;255;255m");
    expect(backgroundHexColor("#000000")).toBe("\x1b[48;2;0;0;0m");
    expect(backgroundHexColor("#4b9976")).toBe("\x1b[48;2;75;153;118m");
    expect(backgroundHexColor("#FFFFFF")).toBe("\x1b[48;2;255;255;255m");
  });

  test("throw an error", () => {
    expect(() => backgroundHexColor("#")).toThrow("`#` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#00")).toThrow("`#00` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#0000")).toThrow("`#0000` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#00000")).toThrow("`#00000` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#GGG")).toThrow("`#GGG` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#GGGGGG")).toThrow("`#GGGGGG` isn't a hexadecimal color code");
    expect(() => backgroundHexColor("#FFFFFFF")).toThrow("`#FFFFFFF` isn't a hexadecimal color code");
  });
});