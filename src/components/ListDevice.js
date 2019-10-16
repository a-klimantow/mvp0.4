import React from 'react'
import styled from 'styled-components'

import { dateFormat } from '../services/dateFormat'
// import {
//   ListEl,
//   Ul,
//   Text,
//   Title,
//   Icon as icon,
//   resourceIconMap
// } from '../atom
import { ListEl } from './ListEl'
import { Ul } from './Ul'
import { Text } from './Text'
import { Title } from './Title'
import { Icon as icon, createIconDevice } from './Icon'

export const ListDevice = ({
  model,
  resource,
  serialNumber,
  commercialAccountingDate,
  futureCheckingDate,
  lastCheckingDate,
  diameter,
  ...props
}) => {
  const format = 'DD.MM.YYYY'
  const deviceIcon = createIconDevice(resource)

  return (
    <>
      {model && (
        <Title level={3} mb="16px">
          <Icon {...deviceIcon} /> {model} ({serialNumber})
        </Title>
      )}
      <Ul {...props}>
        <ListEl>
          <div>
            <Text view="second">Постановка на учет</Text>
          </div>
          <div>
            <Text>{dateFormat(commercialAccountingDate, format)}</Text>
          </div>
        </ListEl>
        {diameter && (
          <ListEl>
            <div>
              <Text view="second">Диаметр</Text>
            </div>
            <div>
              <Text>{diameter}</Text>
            </div>
          </ListEl>
        )}
        <ListEl>
          <div>
            <Text view="second">Окончание срока эксплуатации</Text>
          </div>
          <div>
            <Text>{dateFormat(futureCheckingDate, format)}</Text>
          </div>
        </ListEl>
        <ListEl>
          <div>
            <Text view="second">Последняя поверка приборов</Text>
          </div>
          <div>
            <Text>{dateFormat(lastCheckingDate, format)}</Text>
          </div>
        </ListEl>
      </Ul>
    </>
  )
}

const Icon = styled(icon)`
  transform: translateY(1px);
`
// closingDate: null
// commercialAccountingDate: "2018-10-03T00:00:00"
// diameter: null
// futureCheckingDate: "2021-06-09T00:00:00"
// lastCheckingDate: "2017-06-02T00:00:00"
// model: "ТВ-7.03.1"
// resource: null
// serialNumber: "16040183"
// type: "Calculator"
