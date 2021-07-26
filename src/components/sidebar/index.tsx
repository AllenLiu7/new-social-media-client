import styled from 'styled-components';
import { useState } from 'react';
import SideBarLinkList from './sideBarLinkList';
import SideBarFriendList from './sideBarFriendList';
import { StyledButton } from '../common/styled-components/styledButton';
import { StyledHr } from '../common/styled-components/hr';

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
          <StyledButton color='black'>Show more</StyledButton>
        </ButtonWrapper>
        <StyledHr width='90%' />
        <SideBarFriendList />
      </SideBarContainer>
    </>
  );
}

const SideBarContainer = styled.div`
  flex: 3;
  height: calc(100vh - 55px);
  padding-left: 30px;
  overflow-y: scroll;
  position: sticky;
  top: 55px; /* required */

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c4c2c2;
  }
`;

const ButtonWrapper = styled.div`
  margin: 30px 0;
`;