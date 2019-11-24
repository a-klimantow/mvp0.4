import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Title, Paper, Li as li, Text } from "components"
import { method } from "services/api"

export const ObjectsAll = ({ history }) => {
  const [objects, setObjects] = useState(null)
  useEffect(() => {
    method.get("HousingStocks").then(setObjects)
  }, [])

  return (
    <>
      <Title weight={300} mt="24px" mb="24px">
        Объекты
      </Title>
      <Paper>
        {objects ? (
          <ul>
            {objects.map(object => (
              <Li
                key={object.id}
                link
                onClick={() => history.push(`objects/${object.id}`, object)}
              >
                <Title as="h4" weight={600} data-hover>
                  {object.street}, {object.number}
                </Title>
                <Text icon="map" size="small">
                  {object.city}
                </Text>
                <div>
                  {!!object.numberOfTasks && (
                    <>
                      <Text icon="alarm" view="secondary" size="small">
                        Задач:
                      </Text>
                      <Text ml="4px">{object.numberOfTasks}</Text>
                    </>
                  )}
                </div>
              </Li>
            ))}
          </ul>
        ) : (
          "loading..."
        )}
      </Paper>
    </>
  )
}

const Li = styled(li)`
  display: flex;
  align-items: center;
  /* width: 100%; */
  > * {
    width: 100%;
  }

  > span:nth-child(2) {
    justify-self: center;
    justify-content: center;
  }

  > div:last-of-type {
    display: flex;
    justify-content: flex-end;
  }
`
