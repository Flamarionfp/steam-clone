
export function calcRemToPx(rem: number) {
  const root = 16
  return rem * root
}

export function convertRemStringToNumber(rem: string): number {
  const formatedString = rem.replace('rem', '');
  return Number(formatedString);
}