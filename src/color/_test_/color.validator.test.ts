import { isHexColor, isInRGBRange, isRGBValues } from "$src/color";
import { describe, expect, test } from "vitest";

describe("`isRGBValues` function", () => {
  test("must be true", () => {
    expect(isRGBValues(0, 0, 0)).toBeTruthy();
    expect(isRGBValues(128, 128, 128)).toBeTruthy();
    expect(isRGBValues(255, 255, 255)).toBeTruthy();
  });

  test("must be false", () => {
    expect(isRGBValues(-1, -1, -1)).toBeFalsy();
    expect(isRGBValues(256, 256, 256)).toBeFalsy();
  });
});

describe("`isInRGBRange` function", () => {
  test("must be true", () => {
    expect(isInRGBRange(0)).toBeTruthy();
    expect(isInRGBRange(128)).toBeTruthy();
    expect(isInRGBRange(255)).toBeTruthy();
  });

  test("must be false", () => {
    expect(isInRGBRange(-1)).toBeFalsy();
    expect(isInRGBRange(256)).toBeFalsy();
  });
});

describe("`isHexColor` function", () => {
  test("must be true", () => {
    expect(isHexColor("#000")).toBeTruthy();
    expect(isHexColor("#FFF")).toBeTruthy();
    expect(isHexColor("#fff")).toBeTruthy();
    expect(isHexColor("#000000")).toBeTruthy();
    expect(isHexColor("#FFFFFF")).toBeTruthy();
    expect(isHexColor("#ffffff")).toBeTruthy();
  });

  test("must be false", () => {
    expect(isHexColor("")).toBeFalsy();
    expect(isHexColor("#")).toBeFalsy();
    expect(isHexColor("#0")).toBeFalsy();
    expect(isHexColor("#00")).toBeFalsy();
    expect(isHexColor("#0000")).toBeFalsy();
    expect(isHexColor("#00000")).toBeFalsy();
    expect(isHexColor("#0000000")).toBeFalsy();
    expect(isHexColor("#GGG")).toBeFalsy();
    expect(isHexColor("#GGGGGG")).toBeFalsy();
  });
});