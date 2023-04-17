import { linearGradientIndex } from "#/formatters/formatter.util";
import { RGB } from "#/utils/color";
import { describe, expect, it } from "vitest";

describe("`linearGradientIndex` function", () => {
  it("should return a RGB value", () => {
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 0))
      .toStrictEqual<RGB>({ red: 255, green: 0, blue: 112 });
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 0.2))
      .toStrictEqual<RGB>({ red: 209, green: 48, blue: 94 });
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 0.4))
      .toStrictEqual<RGB>({ red: 163, green: 96, blue: 76 });
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 0.6))
      .toStrictEqual<RGB>({ red: 117, green: 144, blue: 58 });
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 0.8))
      .toStrictEqual<RGB>({ red: 71, green: 192, blue: 40 });
    expect(linearGradientIndex({ red: 255, green: 0, blue: 112 }, { red: 25, green: 240, blue: 22 }, 1))
      .toStrictEqual<RGB>({ red: 25, green: 240, blue: 22 });
  });

  it("should throw an error", () => {
    expect(() => linearGradientIndex({ red: -1, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`-1`, green=`0`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: -1, blue: 0 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`0`, green=`-1`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: -1 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`0`, green=`0`, blue=`-1`");
    expect(() => linearGradientIndex({ red: 256, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`256`, green=`0`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 256, blue: 0 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`0`, green=`256`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 256 }, { red: 0, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (start). Values must be in [0, 255]: red=`0`, green=`0`, blue=`256`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: -1, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`-1`, green=`0`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: -1, blue: 0 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`0`, green=`-1`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: -1 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`0`, green=`0`, blue=`-1`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 256, green: 0, blue: 0 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`256`, green=`0`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: 256, blue: 0 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`0`, green=`256`, blue=`0`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 256 }, 0))
      .toThrow("Invalid RGB values (end). Values must be in [0, 255]: red=`0`, green=`0`, blue=`256`");

    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, -1))
      .toThrow("Index must be in range [0,1]: index=`-1`");
    expect(() => linearGradientIndex({ red: 0, green: 0, blue: 0 }, { red: 0, green: 0, blue: 0 }, 2))
      .toThrow("Index must be in range [0,1]: index=`2`");
  });
});