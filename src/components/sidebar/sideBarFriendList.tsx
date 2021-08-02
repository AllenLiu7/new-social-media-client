import styled from 'styled-components';
import ProfilePicName from '../common/profilePicName';
import { useSelector } from 'react-redux';
import { followingUsersSelector } from '../../redux/slice/getFollowingUsers';

export default function SideBarFriendList() {
  const followingUsers = useSelector(followingUsersSelector);
  // console.log(followings);
  return (
    <>
      {followingUsers.map((user, index) => (
        <ProfilePicNameWrap key={index}>
          <ProfilePicName name='allen' src={user.profilePicture} key={index} />
        </ProfilePicNameWrap>
      ))}
    </>
  );
}

const ProfilePicNameWrap = styled.div`
  margin-bottom: 20px;
`;
