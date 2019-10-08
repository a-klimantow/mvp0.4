import React from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
// import PropTypes from "prop-types"
import moment from "moment"
//
import { Title, Text as text, Icon as icon, resourceIconMap } from "../../atoms"
import { useTimer } from "../../../hooks"

export const TaskItemList = ({
  address,
  closingTime,
  creationTime,
  expectedCompletionTime,
  device,
  name,
  currentStageName,
  number
}) => {
  const { model, serialNumber, resource } = device
  const timeCreate = moment(creationTime).format("DD.MM.YYYY HH:mm")
  const deadline = moment(expectedCompletionTime).format("DD.MM.YY")
  const timer = useTimer(expectedCompletionTime)

  const deviceIcon = resource
    ? resourceIconMap[resource]
    : resourceIconMap["Calculator"]

  return (
    <ItemWrap>
      <Row
        align="middle"
        justify="space-between"
        type="flex"
        style={{ marginBottom: 8 }}
      >
        <Col>
          <Title level={4}>
            {currentStageName || "Заголовок активного этапа"}
          </Title>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <Text view="second">
            <Icon type="calendar" />
            {timeCreate}
          </Text>
          <Text view="second">
            <Icon type="number" />
            {number}
          </Text>
        </Col>
      </Row>
      <Row align="middle" justify="space-between" type="flex">
        <Col span={12}>
          <Text>{name}</Text>
          {closingTime ? (
            <Text>
              <IconOk /> Выполнено
            </Text>
          ) : (
            <>
              <Text className="timer">{timer}</Text>
              <Text view="second">({deadline})</Text>
            </>
          )}
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Text>
            <Icon {...deviceIcon} />
            {model}
          </Text>
          <Text view="second">({serialNumber})</Text>
          <Text>
            <Icon type="map" />
            {address}
          </Text>
        </Col>
      </Row>
    </ItemWrap>
  )
}

const ItemWrap = styled.div`
  width: 100%;
`

const Icon = styled(icon)`
  transform: translateY(2.6px);
  margin-left: 12px;
  margin-right: 2px;
`
const IconOk = styled(Icon).attrs(props => ({
  fill: p => p.theme.color.success,
  type: "ok"
}))`
  margin-right: 0;
`

const Text = styled(text)`
  font-size: 12px;
  line-height: 20px;
  margin-left: 4px;
  &.timer {
    margin: 0;
  }
`

// TaskItemList.propTypes = {
//   address: PropTypes.string.isRequired,
//   closingTime: PropTypes.string.isRequired,
//   creationTime: PropTypes.string.isRequired,
//   expectedCompletionTime: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   currentStageName: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
//   device: PropTypes.shape({
//     serialNumber: PropTypes.string.isRequired,
//     model: PropTypes.string.isRequired,
//     resource: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
//   })
// }
