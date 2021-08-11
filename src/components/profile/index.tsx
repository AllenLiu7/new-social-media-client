import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { userPostsSelector } from '../../redux/slice/getUserPosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import Feed from '../feed';
import ProfileBanner from '../profile/profileBanner';
import RightBar from '../rightbar';

export default function ProfileBar() {
  const { currentUser } = useSelector(currentUserSelector);
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
