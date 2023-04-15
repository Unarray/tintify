import { closeANSI, openANSI } from "$src/colors/color.const";

export type ForgroundRGB = `${typeof openANSI}38;2;${number};${number};${number}${typeof closeANSI}`;

export type BackgroundRGB = `${typeof openANSI}48;2;${number};${number};${number}${typeof closeANSI}`;

export type Forground256 = `${typeof openANSI}38;5;${number}${typeof closeANSI}`;

export type Background256 = `${typeof openANSI}48;5;${number}${typeof closeANSI}`;