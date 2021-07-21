import styled from 'styled-components';

type Props = {
  color?: string;
  bgColor?: string;
  width?: string;
  margin?: string;
};

export const StyledButton = styled.button<Props>`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || 'lightgrey'};
  border-radius: 5px;
  border-style: none;
  height: 30px;
  width: ${(props) => props.width || '100px'};
  margin: ${(props) => props.margin || '0 0'};
  cursor: pointer;
`;
