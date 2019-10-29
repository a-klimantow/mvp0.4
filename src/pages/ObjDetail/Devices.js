/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react"
import { Input } from "antd"
import styled from "styled-components"
import { useHistory, useRouteMatch } from "react-router-dom"
import { Empty } from "antd"

import { Row, ListEl, Ul, Device, TimeCreate } from "../../components"
import { useAxios, useEffectOnce } from "../../hooks"
import { ContextHouses } from "./context"

export const Devices = () => {
  const { url } = useRouteMatch()
  const { get, source } = useAxios()

  const [devices, setDevices] = useState(null)

  useEffectOnce(() => {
    get(url).then(setDevices)

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
        {!devices && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {devices &&
          devices.map((device, i) => (
            <ElDevice key={i}>
              <Device device={device} />
              <TimeCreate
                time={device.futureCheckingDate}
                fullTime={false}
                text="до"
                className="time"
              />
            </ElDevice>
          ))}
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
`
