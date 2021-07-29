import styled from 'styled-components';
import ProfileBanner from '../profile/profileBanner';
import Feed from '../feed';
import RightBar from '../rightbar';

import { useSelector } from 'react-redux';

export default function ProfileBar() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <ProfileBanner currentUser={currentUser} />
      <Content>
        <Feed />
        <RightBar profile />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  flex: 11;
`;

const Content = styled.div`
  display: flex;
`;
