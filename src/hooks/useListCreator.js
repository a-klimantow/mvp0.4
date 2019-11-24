import React from "react"
import styled from "styled-components"
import map from "test.js"

import { Li as li } from "components"

export const useListCreator = data => {
  const list = (
    <ul>
      {data.arr.map(item => (
        <Li key={item}>
          <div>{item}</div>
          <div>{data.state[map.get(item)]}</div>
        </Li>
      ))}
    </ul>
  )

  // title: item, value: data.state[map.get(item)]</>
  // console.log(list)
  // console.log(map)

  return list
}

const Li = styled(li)`
  > div {
    width: 50%;
  }
`
