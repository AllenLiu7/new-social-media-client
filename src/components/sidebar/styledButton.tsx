import styled from 'styled-components';

type Props = {
  color?: string;
  bgColor?: string;
};

export const StyledButton = styled.button<Props>`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || 'lightgrey'};
  border-radius: 5px;
  border-style: none;
  height: 30px;
  width: 100px;
  cursor: pointer;
`;
