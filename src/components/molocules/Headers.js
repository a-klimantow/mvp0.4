import React from "react"

import { Title, Text } from "../atoms"

export const Headers = ({ currentStageName, name }) => (
  <div className="title">
    {" "}
    <Title weight={300} mb="8px">
      {currentStageName}
    </Title>
    <Text view="second">{name}</Text>
  </div>
)
