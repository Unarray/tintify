export const openANSI = "\u001B[";

export const closeANSI = "m";

export const effect = {
  bold: `${openANSI}1${closeANSI}`,
  thin: `${openANSI}2${closeANSI}`,
  italic: `${openANSI}3${closeANSI}`,
  underline: `${openANSI}4${closeANSI}`,
  blink: `${openANSI}5${closeANSI}`,
  reverse: `${openANSI}7${closeANSI}`,
  hidden: `${openANSI}8${closeANSI}`,
  strikethrough: `${openANSI}9${closeANSI}`
};

export const effectReset = {
  all: `${openANSI}0${closeANSI}`,
  bold: `${openANSI}22${closeANSI}`,
  thin: `${openANSI}22${closeANSI}`,
  italic: `${openANSI}23${closeANSI}`,
  underline: `${openANSI}24${closeANSI}`,
  blink: `${openANSI}25${closeANSI}`,
  reverse: `${openANSI}27${closeANSI}`,
  hidden: `${openANSI}28${closeANSI}`,
  strikethrough: `${openANSI}29${closeANSI}`
};

export const forground = {
  black: `${openANSI}30${closeANSI}`,
  red: `${openANSI}31${closeANSI}`,
  green: `${openANSI}32${closeANSI}`,
  yellow: `${openANSI}33${closeANSI}`,
  blue: `${openANSI}34${closeANSI}`,
  magenta: `${openANSI}35${closeANSI}`,
  cyan: `${openANSI}36${closeANSI}`,
  white: `${openANSI}37${closeANSI}`,
  default: `${openANSI}39${closeANSI}`
};

export const brightForground = {
  black: `${openANSI}90${closeANSI}`,
  red: `${openANSI}91${closeANSI}`,
  green: `${openANSI}92${closeANSI}`,
  yellow: `${openANSI}93${closeANSI}`,
  blue: `${openANSI}94${closeANSI}`,
  magenta: `${openANSI}95${closeANSI}`,
  cyan: `${openANSI}96${closeANSI}`,
  white: `${openANSI}97${closeANSI}`
};

export const background = {
  black: `${openANSI}40${closeANSI}`,
  red: `${openANSI}41${closeANSI}`,
  green: `${openANSI}42${closeANSI}`,
  yellow: `${openANSI}43${closeANSI}`,
  blue: `${openANSI}44${closeANSI}`,
  magenta: `${openANSI}45${closeANSI}`,
  cyan: `${openANSI}46${closeANSI}`,
  white: `${openANSI}47${closeANSI}`,
  default: `${openANSI}49${closeANSI}`
};

export const brightBackground = {
  black: `${openANSI}100${closeANSI}`,
  red: `${openANSI}101${closeANSI}`,
  green: `${openANSI}102${closeANSI}`,
  yellow: `${openANSI}103${closeANSI}`,
  blue: `${openANSI}104${closeANSI}`,
  magenta: `${openANSI}105${closeANSI}`,
  cyan: `${openANSI}106${closeANSI}`,
  white: `${openANSI}107${closeANSI}`
};