import { linearGradient } from "../formatter";
import { describe, expect, it } from "vitest";

describe("`linearGradient` function", () => {
  it("should return a formatted string with ignoring spaces", () => {
    expect(linearGradient("", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0m\u001B[0m");
    expect(linearGradient("a", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0ma\u001B[0m");
    expect(linearGradient("aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aaa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;127;0;127ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aaaaa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;191;0;63ma\u001B[38;2;127;0;127ma\u001B[38;2;63;0;191ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aa     aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;170;0;85ma     \u001B[38;2;85;0;170ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("     aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }))
      .toBe("     \u001B[38;2;255;0;0ma\u001B[38;2;0;0;255ma\u001B[0m");
  });

  it("should return a formatted string without ignoring spaces", () => {
    expect(linearGradient("", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0m\u001B[0m");
    expect(linearGradient("a", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0ma\u001B[0m");
    expect(linearGradient("aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aaa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;127;0;127ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aaaaa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;191;0;63ma\u001B[38;2;127;0;127ma\u001B[38;2;63;0;191ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("aa     aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("\u001B[38;2;255;0;0ma\u001B[38;2;223;0;31ma     \u001B[38;2;31;0;223ma\u001B[38;2;0;0;255ma\u001B[0m");
    expect(linearGradient("     aa", { red: 255, green: 0, blue: 0 }, { red: 0, green: 0, blue: 255 }, false))
      .toBe("     \u001B[38;2;42;0;212ma\u001B[38;2;0;0;255ma\u001B[0m");
  });
});