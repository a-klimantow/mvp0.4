import React from "react"
import { Button } from "antd"

import { Grid, Text, Title, Paper, TabMenu, Tab, Ul } from "../../components"

export const ObjDetail = () => {
  return (
    <Grid grid="2" p="16px 0">
      <div className="crumbs">
        <Button style={{ padding: "0 4px 0 0" }} type="link" onClick={() => {}}>
          Объекты /
        </Button>
        <Text>Чишмале</Text>
      </div>
      <Title weight={300}>Чишмале</Title>
      <Paper className="info">
        <TabMenu>
          <Tab title="Общие данные" id="1" />
          <Tab title="Узлы учета" id="2" />
        </TabMenu>
        <Ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </Ul>
      </Paper>
      <Paper className="r_block">
        <Title level={3} mb="32px">
          События с объектом
        </Title>
        <Ul>
          <li>1</li>
        </Ul>
      </Paper>
    </Grid>
  )
}
