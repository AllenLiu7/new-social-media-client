import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { followingUsersSelector } from '../../redux/slice/getFollowingUsers';
import ProfilePicName from '../common/profilePicName';

export default function SideBarFriendList() {
  const followingUsers = useSelector(followingUsersSelector);

  return (
    <>
      {followingUsers.map((user, index) => (
        <ProfilePicNameWrap key={index}>
          <ProfilePicName
            name={user.username}
            src={user.profilePicture}
            key={index}
          />
        </ProfilePicNameWrap>
      ))}
    </>
  );
}

const ProfilePicNameWrap = styled.div`
  margin-bottom: 20px;
`;
