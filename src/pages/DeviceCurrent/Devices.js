/* eslint-disable no-unused-vars */
import React, { useContext } from "react"
import { Input } from "antd"
import styled from "styled-components"
import { useHistory, useRouteMatch } from "react-router-dom"
import { Empty } from "antd"

import { Row, ListEl, Ul, Device, TimeCreate } from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"
import { ContextDevice } from "./context"

export const Devices = () => {
  const {
    url,
    params: { id }
  } = useRouteMatch()
  const { push } = useHistory()
  const { get, source } = useAxios()
  const { state, updateState } = useContext(ContextDevice)
  useEffectOnce(() => {
    get(url).then(updateState)

    return () => source.cancel("cancel device")
  })

  return (
    <>
      <Filter>
        <Input.Search placeholder="Введите серийный номер прибора" />
        <Row>
          <div>
            <Input placeholder="Все типы приборов" />
          </div>
          <div>
            <Input placeholder="Все типы приборов" />
          </div>
        </Row>
      </Filter>
      <Ul>
        {state.devices ? (
          state.devices.map((device, i) => (
            <ElDevice
              key={i}
              onClick={() => push(`/HousingStocks/${id}/Devices/${device.id}`)}
            >
              <Device device={device} className="device" />
              <TimeCreate
                time={device.futureCheckingDate}
                fullTime={false}
                text="до"
                className="time"
              />
            </ElDevice>
          ))
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Ul>
    </>
  )
}

const Filter = styled.div`
  margin: 24px 0;
  ${Row} {
    margin-top: 8px;
  }
  ${Row} > div {
    width: 50%;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

const ElDevice = styled(ListEl)`
  & > * {
    width: 50%;
  }
  .time {
    text-align: right;
  }

  cursor: pointer;

  .device > span {
    transition: color 0.3s;
  }

  &:hover .device > span {
    color: ${p => p.theme.color.primary};
  }
`
