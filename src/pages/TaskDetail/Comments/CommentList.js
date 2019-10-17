import React from "react"
import { List, Comment, Avatar } from "antd"
import moment from "moment"

import { Text } from "../../../components"
import { Content } from "./Content"

export const CommentList = ({ comments }) => {
  return (
    <List
      dataSource={comments}
      itemLayout="horizontal"
      renderItem={({ createdAt, author, ...rest }) => (
        <Comment
          avatar={<Avatar />}
          content={<Content {...rest} />}
          author={<Text size="small">{author}</Text>}
          datetime={
            <Text size="small" view="second">
              {moment(createdAt).format("DD.MM.YYYY HH:mm:ss")}
            </Text>
          }
        />
      )}
    />
  )
}
