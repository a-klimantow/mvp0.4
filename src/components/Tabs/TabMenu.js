import styled from "styled-components"

export const TabMenu = styled.div`
  border-bottom: 1px solid;
  border-color: ${p => p.theme.colors.border};
  display: flex;
  justify-content: start;
  margin-top: -12px;
  margin-bottom: 24px;

  button {
    border: none;
    border-radius: 0;
    position: relative;
    :hover {
      color: ${p => p.theme.colors.primary};
    }

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: ${p => p.theme.colors.primary};
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.2s ease-in-out;
    }
  }

  button.active {
    color: ${p => p.theme.colors.primary};
    &::after {
      width: 100%;
    }
  }
`
