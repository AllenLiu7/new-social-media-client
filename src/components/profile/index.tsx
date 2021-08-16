import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useDefineUser } from '../../Hook/useDefineUser';
import { timelinePostsSelector } from '../../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import Feed from '../feed';
import ProfileBanner from '../profile/profileBanner';
import RightBar from '../rightbar';

export default function ProfileBar() {
  const { currentUser } = useSelector(currentUserSelector);
  const { user, isCurrentUser, paramId } = useDefineUser(currentUser);
  const timelinePosts = useSelector(timelinePostsSelector);

  const posts = timelinePosts.filter((post) => post.userId === paramId); //paramUserId can be currentUserId or others' id

  return (
    <Container>
      <ProfileBanner user={user} />
      <Content>
        <Feed posts={posts} isCurrentUser={isCurrentUser} />
        <RightBar isProfile />
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
