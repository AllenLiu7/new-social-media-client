import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useDefineUser } from '../../Hook/useDefineUser';
import { timelinePostsSelector } from '../../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import EditBar from '../edit/editBar';
import Feed from '../feed';
import ProfileBanner from '../profile/profileBanner';
import RightBar from '../rightbar';

export default function ProfileBar() {
  const [isEdit, setEdit] = useState<boolean | null>(false);
  const { currentUser } = useSelector(currentUserSelector);
  const { user, isCurrentUser, paramId } = useDefineUser(currentUser);
  const timelinePosts = useSelector(timelinePostsSelector);

  const posts = timelinePosts.filter((post) => post.userId === paramId); //paramUserId can be currentUserId or others' id

  const handleEditButton = () => {
    setEdit(!isEdit);
    console.log('edit clicked');
  };

  return (
    <Container>
      <ProfileBanner user={user} />
      <Content>
        {isEdit ? (
          <EditBar />
        ) : (
          <Feed posts={posts} isCurrentUser={isCurrentUser} />
        )}
        <RightBar isProfile editHandler={handleEditButton} isEdit={isEdit} />
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
