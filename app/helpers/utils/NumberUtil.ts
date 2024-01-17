function modifyNumByRndPerc(number: number, percentage: number): number {
  if (percentage < -100 || percentage > 100) {
    throw new Error("Percentage must be between -100 and 100.")
  }

  const randChange = Math.random() * 200 - 100
  return number * (1 + (percentage + randChange) / 100)
}

export const NumberUtil = { modifyNumByRndPerc }
