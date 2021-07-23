import styled from 'styled-components';
import ProfileBanner from '../profile/profileBanner';
import Feed from '../feed';
import RightBar from '../rightbar';

export default function ProfileBar() {
  return (
    <Container>
      <ProfileBanner />
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
