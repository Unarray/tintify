import { background, brightBackground, brightForground, closeANSI, effect, effectReset, forground, openANSI } from "./colors.const";

export type ForgroundRGB = `${typeof openANSI}38;2;${number};${number};${number}${typeof closeANSI}`;

export type BackgroundRGB = `${typeof openANSI}48;2;${number};${number};${number}${typeof closeANSI}`;

export type Forground256 = `${typeof openANSI}38;5;${number}${typeof closeANSI}`;

export type Background256 = `${typeof openANSI}48;5;${number}${typeof closeANSI}`;

type Keys<T> = keyof T
type Values<T> = T[Keys<T>]

export type EffectKeys = Keys<typeof effect>
export type EffectValues = Values<typeof effect>

export type EffectResetKeys = Keys<typeof effectReset>
export type EffectResetValues = Values<typeof effectReset>

export type ForgroundKeys = Keys<typeof forground>
export type ForgroundValues = Values<typeof forground>

export type BrightForgroundKeys = Keys<typeof brightForground>
export type BrightForgroundValues = Values<typeof brightForground>

export type BackgroundKeys = Keys<typeof background>
export type BackgroundValues = Values<typeof background>

export type BrightBackgroundKeys = Keys<typeof brightBackground>
export type BrightBackgroundValues = Values<typeof brightBackground>