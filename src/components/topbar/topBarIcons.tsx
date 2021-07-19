import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  notice: number;
  children: ReactNode;
};

export default function TopBarIcon({ children, notice }: Props) {
  return (
    <>
      <IconContainer>
        {children}
        <IconBadge>{notice}</IconBadge>
      </IconContainer>
    </>
  );
}

const IconContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 10px;
  color: white;
  cursor: pointer;
`;

const IconBadge = styled.span`
  background-color: red;
  border-radius: 50px;
  height: 15px;
  width: 15px;
  position: absolute;
  right: -10px;
  top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: 700;
`;
