import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

import {
  Ul,
  ListEl as li,
  Loader,
  Empty,
  Title,
  Address,
  TaskCounter
} from "../../components"

export const ListObject = ({ data }) => {
  const { push } = useHistory()
  if (!data) return <Loader />
  if (data.length === 0) return <Empty />

  return (
    <Ul mt="24px">
      {data.map(item => (
        <Li
          key={item.id}
          onClick={() => push(`objects/${item.id}`, { ...item })}
        >
          <div>
            <Title level={4} weight={600} className="title">
              {item.street}, {item.number}
            </Title>
          </div>
          <div>
            <Address address={item.city} />
          </div>
          <div>
            {!!item.numberOfTasks && <TaskCounter count={item.numberOfTasks} />}
          </div>
        </Li>
      ))}
    </Ul>
  )
}

const Li = styled(li)`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  div:nth-child(2) {
    justify-self: center;
  }
  div:last-child {
    justify-self: end;
  }
  .title {
    transition: color 0.3s ease-in-out;
  }

  &:hover .title {
    color: ${p => p.theme.color.primary};
  }
`
