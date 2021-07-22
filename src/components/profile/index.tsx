import styled from 'styled-components';
import ProfileBanner from '../profile/profileBanner';

export default function ProfileBar() {
  return (
    <Container>
      <ProfileBanner />
      <Content>
        {/* <Feed /> */}
        {/* <ContentRightBar>
        <UserInfo/>
        <UserFriends/>
      </ContentRightBar> */}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  flex: 11;
`;

const Content = styled.div``;
