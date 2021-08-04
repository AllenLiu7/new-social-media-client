import styled from 'styled-components';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import ShareOptions from './shareOptions';
import { Input } from '../common/styled-components/input';
import { StyledHr } from '../common/styled-components/hr';
import { StyledButton } from '../common/styled-components/styledButton';

import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/slice/getCurrentUser';

export default function ShareCard() {
  const currentUser = useSelector(currentUserSelector);

  return (
    <Container>
      <TopWrapper>
        <StyledProfilePic height='45px' src={currentUser.profilePicture} />
        <InputWrapper>
          <Input placeholder='What is in your mind?' />
        </InputWrapper>
      </TopWrapper>
      <StyledHr />
      <DownWrapper>
        <ShareOptions />
        <StyledButton bgColor='green' margin='0 50px'>
          Share
        </StyledButton>
      </DownWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  margin: 40px 30px;
  width: 85%;
  height: 150px;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin-left: 20px;
`;
