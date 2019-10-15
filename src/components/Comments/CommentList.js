import React from "react"
import { List, Comment, Avatar } from "antd"
import moment from "moment"

import { Text } from "../Text"
import { Content } from "./Content"

export const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={({ datetime, author, ...rest }) => (
      <Comment
        avatar={<Avatar />}
        content={<Content {...rest} />}
        author={<Text size="small">{author}</Text>}
        datetime={
          <Text size="small" view="second">
            {moment(datetime).format("DD.MM.YYYY HH:mm:ss")}
          </Text>
        }
      />
    )}
  />
)
