import styled from 'styled-components';
import ProfileBanner from '../profile/profileBanner';
import Feed from '../feed';
import RightBar from '../rightbar';

import { useSelector } from 'react-redux';
import { userPostsSelector, userSelector } from '../../redux/selectors';

export default function ProfileBar() {
  const currentUser = useSelector(userSelector);
  const posts = useSelector(userPostsSelector);

  console.log(posts);
  return (
    <Container>
      <ProfileBanner currentUser={currentUser} />
      <Content>
        <Feed posts={posts} />
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
