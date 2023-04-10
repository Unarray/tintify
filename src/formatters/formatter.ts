import { forgroundRGBColor } from "$src/colors";
import { RGB } from "$src/utils/color";
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

  return newMessage.join("");
};