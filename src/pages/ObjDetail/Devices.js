import React, { useState, useEffect } from "react"
import { Input } from "antd"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Empty } from "antd"

import { Row, ListEl, Ul, Device, TimeCreate } from "../../components"
import { useAxios } from "../../hooks"

export const Devices = () => {
  const {
    location: { pathname }
  } = useHistory()
  const { get, source } = useAxios()
  const [devices, setDevices] = useState(null)

  useEffect(() => {
    get(pathname).then(setDevices)
    return () => source.cancel("cancel device")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
  .time {
    text-align: right;
  }
`
