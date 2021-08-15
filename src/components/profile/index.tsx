import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { timelinePostsSelector } from '../../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import { _getUser } from '../../service/api/user';
import Feed from '../feed';
import ProfileBanner from '../profile/profileBanner';
import RightBar from '../rightbar';

export default function ProfileBar() {
  const [user, setUser] = useState({});
  const [isCurrentUser, setIsCurrentUser] = useState(true);

  const { userId: paramUserId } = useParams();
  const { currentUser } = useSelector(currentUserSelector);
  const timelinePosts = useSelector(timelinePostsSelector);

  const posts = timelinePosts.filter((post) => post.userId === paramUserId);

  useEffect(() => {
    const defineUser = async () => {
      if (currentUser._id !== paramUserId) {
        const response = await _getUser(paramUserId);
        const user = response.data;
        setIsCurrentUser(false);
        return setUser(user);
      }
      const user = currentUser;
      setIsCurrentUser(true);
      setUser(user);
    };
    defineUser();
  }, [currentUser, paramUserId]);

  //console.log(user);
  // console.log(currentUser);
  // console.log(userPosts);
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
