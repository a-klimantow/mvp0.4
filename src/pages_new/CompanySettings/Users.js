import React from "react"
import styled from "styled-components"
import { Button } from "antd"

import { Ul, ListEl, Loader, Title, Icon as icon, Text } from "../../components"

export const Users = ({ users }) => {
  if (!users) return <Loader />
  console.log(users)
  return (
    <>
      <Button>Добавить сотрудника</Button>
      <Ul>
        {users.map(user => (
          <Li key={user.id}>
            <Title level={4} weight={600} className="title">
              {user.name}
            </Title>
            <div>
              <Icon type="phone" />
              <Text>8 999 999 99 99</Text>
            </div>
          </Li>
        ))}
      </Ul>
    </>
  )
}

const Li = styled(ListEl).attrs({
  size: "large"
})`
  justify-content: space-between;
  cursor: pointer;
  .title {
    transition: color 0.3s ease-in-out;
  }

  &:hover .title {
    color: ${p => p.theme.color.primary};
  }
  & > div {
    width: 230px;
    display: inherit;
    align-items: center;
  }
`

const Icon = styled(icon)`
  margin-right: 8px;
`
