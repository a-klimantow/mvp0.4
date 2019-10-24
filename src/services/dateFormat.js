import moment from "moment"
moment.locale("ru")

console.log(moment.locale())

export const dateFormat = (date, format = "") =>
  date ? moment(date).format(format) : null
