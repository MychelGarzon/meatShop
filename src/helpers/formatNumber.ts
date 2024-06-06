 // add a zero in front of the number if it is less than 10
 export const formatNumber = (number: number): string => {
  if (number < 10) return `0${number}`
  return `${number}`;
}