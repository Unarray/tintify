export enum Effect {
  Bold = "\x1b[1m",
  Thin = "\x1b[2m",
  Italic = "\x1b[3m",
  Underline = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
  Strikethrough = "\x1b[9m"
}

export enum EffectReset {
  All = "\x1b[0m",
  Bold = "\x1b[22m",
  Thin = "\x1b[22m",
  Italic = "\x1b[23m",
  Underline = "\x1b[24m",
  Blink = "\x1b[25m",
  Reverse = "\x1b[27m",
  Hidden = "\x1b[28m",
  Strikethrough = "\x1b[29m"
}

export enum Forground {
  Black = "\x1b[30m",
  Red = "\x1b[31m",
  Green = "\x1b[32m",
  Yellow = "\x1b[33m",
  Blue = "\x1b[34m",
  Magenta = "\x1b[35m",
  Cyan = "\x1b[36m",
  White = "\x1b[37m",
  Default = "\x1b[39m"
}

export enum BrightForground {
  Black = "\x1b[90m",
  Red = "\x1b[91m",
  Green = "\x1b[92m",
  Yellow = "\x1b[93m",
  Blue = "\x1b[94m",
  Magenta = "\x1b[95m",
  Cyan = "\x1b[96m",
  White = "\x1b[97m",
  Default = "\x1b[99m"
}

export enum Background {
  Black = "\x1b[40m",
  Red = "\x1b[41m",
  Green = "\x1b[42m",
  Yellow = "\x1b[43m",
  Blue = "\x1b[44m",
  Magenta = "\x1b[45m",
  Cyan = "\x1b[46m",
  White = "\x1b[47m",
  Default = "\x1b[49m"
}

export enum BrightBackground {
  Black = "\x1b[100m",
  Red = "\x1b[101m",
  Green = "\x1b[102m",
  Yellow = "\x1b[103m",
  Blue = "\x1b[104m",
  Magenta = "\x1b[105m",
  Cyan = "\x1b[106m",
  White = "\x1b[107m",
  Default = "\x1b[109m"
}