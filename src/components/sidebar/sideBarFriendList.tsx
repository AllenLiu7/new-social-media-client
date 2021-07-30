import styled from 'styled-components';
import ProfilePicName from '../common/profilePicName';
import { useSelector } from 'react-redux';

export default function SideBarFriendList() {
  const followings = useSelector((state) => state.followings.followings);
  // console.log(followings);
  return (
    <>
      {followings.map((user, index) => (
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
