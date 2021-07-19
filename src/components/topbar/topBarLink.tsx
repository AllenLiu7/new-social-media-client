import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export default function TopBarLink({ children }: Props) {
  return (
    <>
      <LinkContainer>{children}</LinkContainer>
    </>
  );
}

const LinkContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1 1 180px;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover {
    border-bottom-style: solid;
    border-color: white;
    border-bottom-width: 5px;
  }
`;
