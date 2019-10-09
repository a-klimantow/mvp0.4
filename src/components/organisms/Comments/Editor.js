import React from 'react'
import { Form, Input, Button } from 'antd'

const { TextArea } = Input

export const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea autosize onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Добавить комментарии
      </Button>
    </Form.Item>
  </div>
)
