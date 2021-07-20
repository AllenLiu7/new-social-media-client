import styled from 'styled-components';
import { useState } from 'react';
import SideBarLinkList from './sideBarLinkList';
import { StyledButton } from './styledButton';

export default function SideBar() {
  const [show, setShow] = useState(true);
  const handdleShowMore = () => {
    setShow(!show);
  };

  return (
    <>
      <SideBarContainer>
        <SideBarLinkList show={show} />
        <ButtonWrapper onClick={() => handdleShowMore()}>
          <StyledButton>Show more</StyledButton>
        </ButtonWrapper>
      </SideBarContainer>
    </>
  );
}

const SideBarContainer = styled.div`
  flex: 3;
  height: 100vh;
  outline: none;
`;

const ButtonWrapper = styled.div`
  margin: 0 20px;
`;
