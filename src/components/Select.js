import React from "react"
import styled from "styled-components"
import { Select as SelectAnt } from "antd"
import PropTypes from "prop-types"
//
import { Text } from "./Text"
import { Icon } from "./Icon"

const { Option } = SelectAnt

export const Select = ({ options, ...props }) => {
  const renderOption = options.map(({ key, icon, label, taskCount }) => (
    <Option value={key} key={key}>
      {icon && <IconOpt type={icon} />}
      <TextOpt>{label}</TextOpt>
      {taskCount !== undefined ? (
        <Text view="second">(Задач в работе: {taskCount})</Text>
      ) : null}
    </Option>
  ))
  return <SelectAnt {...props}>{renderOption}</SelectAnt>
}

const IconOpt = styled(Icon)`
  transform: translateY(5px);
`
const TextOpt = styled(Text)`
  color: inherit;
  margin-left: 6px;
  margin-right: 16px;
`
Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
}

Select.defaultProps = {
  options: [
    { key: "1", label: "some text" },
    { key: "2", icon: "max", label: "hello" }
  ]
}
