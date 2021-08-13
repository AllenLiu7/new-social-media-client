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
  const { userId } = useParams();
  console.log(userId);
  const { currentUser } = useSelector(currentUserSelector);
  const timelinePosts = useSelector(timelinePostsSelector);
  //const user = currentUser;
  const posts = timelinePosts.filter((post) => post.userId === currentUser._id);

  useEffect(() => {
    const defineUser = async () => {
      if (currentUser._id !== userId) {
        const response = await _getUser(userId);
        const user = response.data;
        return setUser(user);
      }
      const user = currentUser;
      setUser(user);
    };
    defineUser();
  }, [currentUser, userId]);

  //console.log(user);
  // console.log(currentUser);
  // console.log(userPosts);
  return (
    <Container>
      <ProfileBanner user={user} />
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
