import React from "react"
import styled from "styled-components"

import { Ul, ListEl, Loader, Title, Icon as icon, Text } from "../../components"

export const Contractors = ({ contractors }) => {
  if (!contractors) return <Loader />
  return (
    <>
      <Ul>
        {contractors.map(item => (
          <Li key={item.id}>
            <Title weight={600} level={4} className="title">
              {item.name}
            </Title>
            <div>
              <Icon type="mail" /> <Text>{item.email}</Text>
            </div>
          </Li>
        ))}
      </Ul>
    </>
  )
}

const Li = styled(ListEl)`
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  .title {
    transition: color 0.3s ease-in-out;
  }

  &:hover .title {
    color: ${p => p.theme.color.primary};
  }
  & > div {
    width: 400px;
    display: flex;
    align-items: center;
  }
`

const Icon = styled(icon)`
  color: ${p => p.theme.text.color.primary};
  margin-right: 8px;
`
