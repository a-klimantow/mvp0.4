import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
//
import {
  Title,
  Text,
  TimeLine,
  Address,
  Device,
  TimeCreate,
  Number,
  Row,
  Timer,
  TimeCompleted,
  User
} from '../../components'

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
  const { push } = useHistory()

  return (
    <ItemWrap
      onClick={() =>
        push(`/Tasks/${id}`, {
          name,
          currentStageName,
          expectedCompletionTime,
          creationTime,
          isResponsible,
          isArchived: closingTime !== null
        })
      }
    >
      {isResponsible && !closingTime ? (
        <TimeLine finish={expectedCompletionTime} start={creationTime} />
      ) : null}
      {closingTime && <TimeCompleted time={closingTime} />}
      <Row mb="8px">
        {!closingTime ? (
          <>
            <Title level={4} className="title" mr="auto">
              {currentStageName}
            </Title>
            <Text>{name}</Text>
          </>
        ) : (
          <Title level={4} className="title">
            {name}
          </Title>
        )}
      </Row>
      {!closingTime && (
        <Row mb="16px">
          <Timer
            text="Времени на этап:"
            finishTime={expectedCompletionTime}
            mr="16px"
          />

          {tabUrl === 'Observing' && <User perpetrator={perpetrator} />}
        </Row>
      )}
      <Row>
        <Device device={device} mr="16px" />
        <Address address={address} mr="auto" />
        <TimeCreate time={creationTime} mr="16px" />
        <Number number={number} />
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

TaskItemList.propTypes = {
  address: PropTypes.string.isRequired,
  closingTime: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  creationTime: PropTypes.string.isRequired,
  expectedCompletionTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentStageName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null])
  ]),
  number: PropTypes.number.isRequired,
  device: PropTypes.shape({
    serialNumber: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    resource: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
  })
}
