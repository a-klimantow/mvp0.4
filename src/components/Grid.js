import styled, { css } from 'styled-components'
//
import { addPadding } from './styles'

export const Grid = styled.section`
  ${addPadding};
  display: grid;
  grid-gap: 24px;

  ${p =>
    p.grid === '1' &&
    css`
      grid-template-areas:
        'crumbs crumbs'
        'title title'
        'panel panel'
        'comment r_block'
        'info r_block';
      grid-template-columns: 8fr 4fr;
    `}

  ${p =>
    p.grid === '2' &&
    css`
      grid-template-areas:
        'crumbs crumbs'
        'title title'
        'info r_block';
      grid-template-columns: 8fr 4fr;
    `}
  .crumbs {
    grid-area: crumbs;
  }

  .title {
    grid-area: title;
  }

  .panel {
    grid-area: panel;
  }

  .comment {
    grid-area: comment;
    align-self: start;
  }

  .info {
    grid-area: info;
  }

  .r_block {
    grid-area: r_block;
    align-self: start;
  }
`
