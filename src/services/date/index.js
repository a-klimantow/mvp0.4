export const getFormattedDate = ({ value = "", format = "" }) => {
  const options = { year: "numeric", month: "numeric", day: "numeric" }
  const time = { hour: "numeric", minute: "numeric" }
  const toFormated = format === "with_time" ? { ...options, ...time } : options

  return new Date(value).toLocaleDateString("ru", toFormated)
}
