import { EffectReset, forgroundRGBColor } from "$src/colors";
import { RGB, isInRGBRange } from "$src/utils/color";
import { charIndexes, concatCharIndexes, linearGradientIndex } from "./formatter.util";

export const linearGradient = (message: string, start: RGB, end: RGB, ignoreSpaces = true): string => {
  const tempMessage = ignoreSpaces ? message.replaceAll(" ", "") : message;
  let newMessage: string[] = [];

  for (let i = 0; i < tempMessage.length; i++) {
    const color = linearGradientIndex(start, end, i / tempMessage.length);

    newMessage.push(`${forgroundRGBColor(color)}${tempMessage[i]}`);
  }

  if (ignoreSpaces) {
    newMessage = concatCharIndexes(
      newMessage,
      charIndexes(message, " "),
      " "
    );
  }

  return `${newMessage.join("")}${EffectReset.All}`;
};

export const matrix = (message: string, color: RGB, force = 100): string => {
  if (!isInRGBRange(force)) throw new Error(`Invalid force. Value must be in [0, 255]: force=\`${force}\``);

  let newMessage = "";

  for (let i = 0; i < message.length; i++) {
    const num = Math.floor(Math.random() * (force + 1 - 0) + 0); // Random number between 0 and force
    // For each value cross-product
    const colorNuance: RGB = {
      red: Math.floor((color.red * (255 - num)) / 255),
      green: Math.floor((color.green * (255 - num)) / 255),
      blue: Math.floor((color.blue * (255 - num)) / 255)
    };

    newMessage += `${forgroundRGBColor(colorNuance)}${message[i]}`;
  }

  return `${newMessage}${EffectReset.All}`;
};