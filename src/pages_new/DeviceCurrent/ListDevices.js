import React from "react"
// import { Input } from "antd"
import styled from "styled-components"
import { useHistory, useParams } from "react-router-dom"

import { ListEl, Ul, Device, TimeCreate, Loader, Empty } from "../../components"

export const ListDevices = ({ data, cb }) => {
  const { push } = useHistory()
  const { objectId } = useParams()
  if (!data) return <Loader />
  if (data.length === 0) return <Empty center />

  return (
    <>
      {/* <Filter>
        <Input.Search placeholder="Введите серийный номер прибора" />
        <Row>
          <div>
            <Input placeholder="Все типы приборов" />
          </div>
          <div>
            <Input placeholder="Все типы приборов" />
          </div>
        </Row>
      </Filter> */}
      <Ul mt="24px">
        {data.map(device => (
          <ElDevice
            key={device.id}
            onClick={() => {
              push(`/objects/${objectId}/device/${device.id}`, { ...device })
              cb({ tab: "info" })
            }}
          >
            <Device device={device} className="device" />
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

// const Filter = styled.div`
//   margin: 24px 0;
//   ${Row} {
//     margin-top: 8px;
//   }
//   ${Row} > div {
//     width: 50%;
//     &:not(:last-child) {
//       margin-right: 8px;
//     }
//   }
// `

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
