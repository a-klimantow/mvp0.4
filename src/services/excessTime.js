export const excessTime = (deadline, closingTime) => {
  const result = new Date(deadline).getTime() - new Date(closingTime).getTime()

  return result > 0 ? false : Math.abs(result)
}
