export const openANSI = "\u001B[";

export const closeANSI = "m";

export enum Effect {
  Bold          = `${openANSI}1${closeANSI}`,
  Thin          = `${openANSI}2${closeANSI}`,
  Italic        = `${openANSI}3${closeANSI}`,
  Underline     = `${openANSI}4${closeANSI}`,
  Blink         = `${openANSI}5${closeANSI}`,
  Reverse       = `${openANSI}7${closeANSI}`,
  Hidden        = `${openANSI}8${closeANSI}`,
  Strikethrough = `${openANSI}9${closeANSI}`
}

export enum EffectReset {
  All           = `${openANSI}0${closeANSI}`,
  Bold          = `${openANSI}22${closeANSI}`,
  Thin          = `${openANSI}22${closeANSI}`,
  Italic        = `${openANSI}23${closeANSI}`,
  Underline     = `${openANSI}24${closeANSI}`,
  Blink         = `${openANSI}25${closeANSI}`,
  Reverse       = `${openANSI}27${closeANSI}`,
  Hidden        = `${openANSI}28${closeANSI}`,
  Strikethrough = `${openANSI}29${closeANSI}`
}

export enum Forground {
  Black   = `${openANSI}30${closeANSI}`,
  Red     = `${openANSI}31${closeANSI}`,
  Green   = `${openANSI}32${closeANSI}`,
  Yellow  = `${openANSI}33${closeANSI}`,
  Blue    = `${openANSI}34${closeANSI}`,
  Magenta = `${openANSI}35${closeANSI}`,
  Cyan    = `${openANSI}36${closeANSI}`,
  White   = `${openANSI}37${closeANSI}`,
  Default = `${openANSI}39${closeANSI}`
}

export enum BrightForground {
  Black   = `${openANSI}90${closeANSI}`,
  Red     = `${openANSI}91${closeANSI}`,
  Green   = `${openANSI}92${closeANSI}`,
  Yellow  = `${openANSI}93${closeANSI}`,
  Blue    = `${openANSI}94${closeANSI}`,
  Magenta = `${openANSI}95${closeANSI}`,
  Cyan    = `${openANSI}96${closeANSI}`,
  White   = `${openANSI}97${closeANSI}`
}

export enum Background {
  Black   = `${openANSI}40${closeANSI}`,
  Red     = `${openANSI}41${closeANSI}`,
  Green   = `${openANSI}42${closeANSI}`,
  Yellow  = `${openANSI}43${closeANSI}`,
  Blue    = `${openANSI}44${closeANSI}`,
  Magenta = `${openANSI}45${closeANSI}`,
  Cyan    = `${openANSI}46${closeANSI}`,
  White   = `${openANSI}47${closeANSI}`,
  Default = `${openANSI}49${closeANSI}`
}

export enum BrightBackground {
  Black   = `${openANSI}100${closeANSI}`,
  Red     = `${openANSI}101${closeANSI}`,
  Green   = `${openANSI}102${closeANSI}`,
  Yellow  = `${openANSI}103${closeANSI}`,
  Blue    = `${openANSI}104${closeANSI}`,
  Magenta = `${openANSI}105${closeANSI}`,
  Cyan    = `${openANSI}106${closeANSI}`,
  White   = `${openANSI}107${closeANSI}`
}