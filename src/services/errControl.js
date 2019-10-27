import { notification } from "antd"

const errMsg = (type, message, desctiption) => {
  notification[type]({
    message,
    desctiption
  })
}

export const errControl = (err) => {
  return errMsg(err, 'helle', 'fucj')

}