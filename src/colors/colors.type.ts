import { background, brightBackground, brightForground, closeANSI, effect, effectReset, forground, openANSI } from "./colors.const";

export type ForgroundRGB = `${typeof openANSI}38;2;${number};${number};${number}${typeof closeANSI}`;

export type BackgroundRGB = `${typeof openANSI}48;2;${number};${number};${number}${typeof closeANSI}`;

export type Forground256 = `${typeof openANSI}38;5;${number}${typeof closeANSI}`;

export type Background256 = `${typeof openANSI}48;5;${number}${typeof closeANSI}`;

export type EffectKeys = keyof typeof effect
export type EffectValues = typeof effect[EffectKeys]

export type EffectResetKeys = keyof typeof effectReset
export type EffectResetValues = typeof effectReset[EffectResetKeys]

export type ForgroundKeys = keyof typeof forground
export type ForgroundValues = typeof forground[ForgroundKeys]

export type BrightForgroundKeys = keyof typeof brightForground
export type BrightForgroundValues = typeof brightForground[BrightForgroundKeys]

export type BackgroundKeys = keyof typeof background
export type BackgroundValues = typeof background[BackgroundKeys]

export type BrightBackgroundKeys = keyof typeof brightBackground
export type BrightBackgroundValues = typeof brightBackground[BrightBackgroundKeys]