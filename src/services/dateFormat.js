import moment from 'moment'

export const dateFormat = (date, format = '') =>
  date ? moment(date).format(format) : null
