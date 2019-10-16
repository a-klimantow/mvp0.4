import React, { useContext } from 'react'
import { Steps, Button } from 'antd'
import styled from 'styled-components'

import { Paper as paper, Title } from '../../components'
import { dateFormat } from '../../services/dateFormat'
import { TaskDetailContext } from './store'

const { Step } = Steps

export const Stages = () => {
  const {
    state: { stages, userOperatingStatus },
    revertStage
  } = useContext(TaskDetailContext)

  return (
    <Paper className="r_block">
      <Title level={4} mb="16px">
        Этапы выполнения
      </Title>
      <Steps direction="vertical">
        {stages.map(
          ({ id, name, perpetrator, status, closingTime, number }, i) => (
            <Step
              key={id}
              title={<span className="title">{name}</span>}
              description={
                <div className="body">
                  {perpetrator}
                  <span className="timeCreate">
                    {closingTime && dateFormat(closingTime, 'DD.MM.YYYY HH:mm')}
                  </span>
                  {userOperatingStatus === 'Executor' &&
                  status === 'InProgress' ? (
                    <div className="button">
                      <Button size="small" onClick={revertStage}>
                        Вернуть задачу
                      </Button>
                    </div>
                  ) : null}
                </div>
              }
              status={
                status === 'InProgress'
                  ? 'process'
                  : status === 'Done'
                  ? 'finish'
                  : 'wait'
              }
            />
          )
        )}
      </Steps>
    </Paper>
  )
}

const Paper = styled(paper)`
  span.title {
    font-size: 14px;
    line-height: 22px;
  }

  div.body {
    color: ${p => p.theme.text.color.primary};
    font-size: 12px;
    line-height: 20px;
  }
  span.timeCreate {
    margin-left: 16px;
  }

  div.button {
    margin-top: 8px;
  }
`

// import React, { useContext } from 'react'
// import styled, { css } from 'styled-components'
// import { Button } from 'antd'

// import { Paper, Title, Ul, Icon as icon } from '../../components'
// import { dateFormat } from '../../services/dateFormat'

// import { TaskDetailContext } from './store'

// export const Stages = () => {
//   const {
//     state: { stages, userOperatingStatus },
//     revertStage
//   } = useContext(TaskDetailContext)

//   console.log(stages)

//   const lenStg = stages.length

//   return (
//     <Paper className="r_block">
//       <Title level={3} mb="16px">
//         Этапы выполнения
//       </Title>
//       <Ul>
//         {stages.map((stage, i) => {
//           if (
//             i !== 0 &&
//             stage.status === 'InProgress' &&
//             userOperatingStatus === 'Executor'
//           ) {
//             return (
//               <Stage key={stage.id} {...stage} length={lenStg}>
//                 <Button
//                   size="small"
//                   onClick={revertStage}
//                   style={{ marginTop: 8 }}
//                 >
//                   Вернуть этап
//                 </Button>
//               </Stage>
//             )
//           }
//           return <Stage key={stage.id} {...stage} length={lenStg} />
//         })}
//       </Ul>
//     </Paper>
//   )
// }

// const Stage = ({
//   length,
//   status,
//   number,
//   name,
//   perpetrator,
//   closingTime,
//   children
// }) => (
//   <StageEl status={status}>
//     {number < length - 1 && <Line />}
//     <IndexStage>
//       {status === 'Done' ? <Icon type="ok" /> : number + 1}
//     </IndexStage>
//     <div className="title">{name}</div>
//     {status === 'Done' && (
//       <div className="text">
//         {perpetrator} {dateFormat(closingTime, 'DD.MM.YY HH:mm')}
//       </div>
//     )}
//     {children}
//   </StageEl>
// )

// const StageEl = styled.li`
//   position: relative;
//   padding-left: 40px;
//   padding-bottom: 16px;
//   margin-bottom: 6px;
//   font-size: 12px;
//   line-height: 20px;
//   min-height: 50px;

//   div.title {
//     color: ${p => p.theme.text.color.primary};
//     font-size: 14px;
//     line-height: 22px;
//   }

//   div.text {
//     color: ${p => p.theme.text.color.secondary};
//   }

//   ${p =>
//     p.status === 'InProgress' &&
//     css`
//       div.title {
//         color: ${p => p.theme.title.color};
//         font-weight: 600;
//       }

//       ${IndexStage} {
//         background-color: ${p => p.theme.color.primary};
//         border-color: ${p => p.theme.color.primary};
//         color: #fff;
//       }

//       ${Line} {
//         background-color: ${p => p.theme.color.primary};
//       }
//     `}

//   ${p =>
//     p.status === 'Done' &&
//     css`
//       div.title {
//         color: ${p => p.theme.title.color};
//       }

//       ${IndexStage} {
//         color: ${p => p.theme.color.primary};
//         border-color: ${p => p.theme.color.primary};
//       }

//       ${Line} {
//         background-color: ${p => p.theme.color.primary};
//       }
//     `}
// `

// const IndexStage = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: 1px solid;
//   border-color: ${p => p.theme.text.color.disable};
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   color: ${p => p.theme.text.color.disable};
// `
// const Icon = styled(icon)`
//   transform: translateY(1px);
// `

// const Line = styled.div`
//   width: 2px;
//   height: calc(100% - 30px);
//   background-color: ${p => p.theme.text.color.disable};
//   position: absolute;
//   left: 11px;
//   bottom: 0;
// `
