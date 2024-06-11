export const ellipsis = (text: string, max: number = 20): string => {
  if (max <= 0) return "";

  if (text.length <= max) return text;

  return text.substring(0, max) + "...";
};
