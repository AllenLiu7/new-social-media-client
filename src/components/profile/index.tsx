import styled from 'styled-components';
import ProfileBanner from '../profile/profileBanner';
import Feed from '../feed';
import RightBar from '../rightbar';

import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/slice/getCurrentUser';
import { userPostsSelector } from '../../redux/slice/getUserPosts';

export default function ProfileBar() {
  const currentUser = useSelector(currentUserSelector);
  const userPosts = useSelector(userPostsSelector);

  // console.log(currentUser);
  // console.log(userPosts);
  return (
    <Container>
      <ProfileBanner currentUser={currentUser} />
      <Content>
        <Feed posts={userPosts} users={currentUser} />
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
