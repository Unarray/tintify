export const isRGBValues = (red: number, green: number, blue: number): boolean => {
  return isInRGBRange(red) && isInRGBRange(green) && isInRGBRange(blue);
};

export const isInRGBRange = (value: number): boolean => value >= 0 && value <= 255;
