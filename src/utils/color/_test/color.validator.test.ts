import { isHexColor, isInRGBRange, isRGBValues } from "../color.validator";
import { describe, expect, it } from "vitest";

describe("`isRGBValues` function", () => {
  it("should be true", () => {
    expect(isRGBValues({ red: 0, green: 0, blue: 0 })).toBeTruthy();
    expect(isRGBValues({ red: 255, green: 255, blue: 255 })).toBeTruthy();
    expect(isRGBValues({ red: 0, green: 1, blue: 2 })).toBeTruthy();
    expect(isRGBValues({ red: 1, green: 0, blue: 2 })).toBeTruthy();
    expect(isRGBValues({ red: 1, green: 2, blue: 0 })).toBeTruthy();
  });

  it("should be false", () => {
    expect(isRGBValues({ red: -1, green: -1, blue: -1 })).toBeFalsy();
    expect(isRGBValues({ red: 256, green: 256, blue: 256 })).toBeFalsy();
    expect(isRGBValues({ red: -1, green: 0, blue: 0 })).toBeFalsy();
    expect(isRGBValues({ red: 0, green: -1, blue: 0 })).toBeFalsy();
    expect(isRGBValues({ red: 0, green: 0, blue: -1 })).toBeFalsy();
  });
});

describe("`isInRGBRange` function", () => {
  it("should be true", () => {
    expect(isInRGBRange(0)).toBeTruthy();
    expect(isInRGBRange(128)).toBeTruthy();
    expect(isInRGBRange(255)).toBeTruthy();
  });

  it("should be false", () => {
    expect(isInRGBRange(-1)).toBeFalsy();
    expect(isInRGBRange(256)).toBeFalsy();
  });
});

describe("`isHexColor` function", () => {
  it("should be true", () => {
    expect(isHexColor("#009")).toBeTruthy();
    expect(isHexColor("#AAF")).toBeTruthy();
    expect(isHexColor("#aaf")).toBeTruthy();
    expect(isHexColor("#aAf")).toBeTruthy();
    expect(isHexColor("#000999")).toBeTruthy();
    expect(isHexColor("#AAAFFF")).toBeTruthy();
    expect(isHexColor("#aaafff")).toBeTruthy();
    expect(isHexColor("#aaAFff")).toBeTruthy();
  });

  it("should be false", () => {
    expect(isHexColor("")).toBeFalsy();
    expect(isHexColor("#")).toBeFalsy();
    expect(isHexColor("#0")).toBeFalsy();
    expect(isHexColor("#00")).toBeFalsy();
    expect(isHexColor("#0000")).toBeFalsy();
    expect(isHexColor("#00000")).toBeFalsy();
    expect(isHexColor("#0000000")).toBeFalsy();
    expect(isHexColor("#0AG")).toBeFalsy();
    expect(isHexColor("#0000AG")).toBeFalsy();
    expect(isHexColor("#0-_")).toBeFalsy();
    expect(isHexColor("00000G")).toBeFalsy();
    expect(isHexColor("00G")).toBeFalsy();
  });
});