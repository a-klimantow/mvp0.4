import React from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
//
import {
  Title,
  Text as text,
  Icon as icon,
  resourceIconMap,
  TimeLine
} from "../../components"
import { useTimer } from "../../hooks"
import { dateFormat } from "../../services/dateFormat"

export const TaskItemList = ({
  id,
  address,
  closingTime,
  creationTime,
  expectedCompletionTime,
  device,
  name,
  currentStageName,
  number,
  isResponsible,
  perpetrator,
  tabUrl
}) => {
  const { model, serialNumber, resource } = device
  const timer = useTimer(expectedCompletionTime)
  const { push } = useHistory()

  const deviceIcon = resource
    ? resourceIconMap[resource]
    : resourceIconMap["Calculator"]

  return (
    <ItemWrap onClick={() => push(`/task/${id}`, { name, currentStageName })}>
      {isResponsible && !closingTime ? (
        <TimeLine finish={expectedCompletionTime} start={creationTime} />
      ) : null}
      {closingTime && (
        <Text>
          <IconOk />
          Выполненно за {dateFormat(closingTime, "DDд HHч")}
        </Text>
      )}
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        style={{ marginBottom: 8 }}
      >
        <Col>
          <Title level={4} className="title">
            {closingTime ? name : currentStageName}
          </Title>
        </Col>
        {!closingTime && (
          <Col>
            <Text>{name}</Text>
          </Col>
        )}
      </Row>
      {!closingTime && (
        <Row type="flex" align="middle" style={{ marginBottom: 16 }}>
          <Text>
            <Icon type="timer" />
            Время на этап:
          </Text>
          <Text className="ml">{timer}</Text>
          <Text className="ml mr">
            (до {dateFormat(expectedCompletionTime, "DD.MM.YY")})
          </Text>
          {tabUrl === "Observing" && perpetrator ? (
            <Text>
              <Icon type="user" /> {perpetrator}
            </Text>
          ) : null}
        </Row>
      )}
      <Row>
        <Col span={12}>
          <Text>
            <Icon {...deviceIcon} />
            {model}
          </Text>
          <Text view="second" className="mr ml">
            ({serialNumber})
          </Text>
          <Text>
            <Icon type="map" />
            {address}
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          <Text view="second" className="mr">
            <Icon type="calendar" />
            {dateFormat(creationTime, "DD.MM.YYY HH:ss")}
          </Text>
          <Text view="second">
            <Icon type="number" />
            {number}
          </Text>
        </Col>
      </Row>
    </ItemWrap>
  )
}

const ItemWrap = styled.div`
  width: 100%;
  cursor: pointer;
  .title {
    transition: color 0.3s;
  }

  &:hover .title {
    color: ${p => p.theme.color.primary};
  }
`

const Icon = styled(icon)`
  transform: translateY(2.6px);
  margin-right: 4px;
`
const IconOk = styled(Icon).attrs(props => ({
  type: "ok"
}))`
  fill: #17b45a;
  margin-right: 4px;
`

const Text = styled(text)`
  font-size: 12px;
  line-height: 20px;
  &.mr {
    margin-right: 16px;
  }

  &.ml {
    margin-left: 4px;
  }
`

TaskItemList.propTypes = {
  address: PropTypes.string.isRequired,
  closingTime: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  creationTime: PropTypes.string.isRequired,
  expectedCompletionTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentStageName: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  device: PropTypes.shape({
    serialNumber: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    resource: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
  })
}
