import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import { method } from "services/api"
import { Li, Text } from "components"

export const ListDevices = ({ data }) => {
  const history = useHistory()
  const params = useParams()
  const { state, setState } = data
  useEffect(() => {
    if (!state.devises) {
      method(`HousingStocks/${params.objectId}/Devices`).then(res => {
        if (!res.device) {
          const { devices, number, street } = res
          setState(state => ({ ...state, devices, number, street }))
        } else {
          setState(state => ({ ...state, ...res }))
        }
      })
    }
    return () => {
      if (params.deviceId) {
        console.log(true)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!state.devices) return <>loading</>
  return (
    <ul>
      {state.devices.map(device => (
        <Li
          key={device.id}
          link
          onClick={() =>
            history.push(`/objects/${params.objectId}/device/${device.id}`, {
              device
            })
          }
        >
          <Text icon={device.resource || "resource_device"} data-hover>
            {device.model}
          </Text>
          <Text view="secondary" ml="4px" mr="auto" data-hover>
            ({device.serialNumber})
          </Text>
          <Text icon="calendar" size="small">
            {new Date(device.futureCheckingDate).toLocaleDateString()}
          </Text>
        </Li>
      ))}
    </ul>
  )
}
