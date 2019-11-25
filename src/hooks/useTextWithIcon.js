import React from "react"
import { Text, Icon, Device, Title } from "components"
import { getFormattedDate } from "services/date"

export const useTextWithIcon = data => {
  const { text, icon, date, device, title, ...props } = data
  if (!!device) return <Device {...device} />
  if (!!date) {
    return !!text ? (
      <Text {...props}>
        <Icon type={icon} />
        {text} <span className="timer">({getFormattedDate(date)})</span>
      </Text>
    ) : (
      <Text {...props}>
        <Icon type={icon} />
        {getFormattedDate(date)}
      </Text>
    )
  }
  if (!!title) return <Title {...props}>{title}</Title>

  return (
    <Text {...props}>
      <Icon type={icon} />
      {text}
    </Text>
  )
}
