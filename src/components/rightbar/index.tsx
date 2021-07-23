import styled from 'styled-components';
import BirthdayCard from './birthdayCard';
import SponsorsCard from './sponsersCard';
import UserBioCard from '../profile/userBioCard';
import RightBarFriendListCard from '../profile/rightBarFriendListCard';

interface Props {
  profile: boolean;
}

export default function RightBar({ profile }: Props) {
  const ProfileRightBar = () => {
    return (
      <RightBarContainer>
        <UserBioCard />
        <RightBarFriendListCard />
      </RightBarContainer>
    );
  };

  const HomeRightBar = () => {
    return (
      <RightBarContainer>
        <BirthdayCard />
        <SponsorsCard />
      </RightBarContainer>
    );
  };

  return profile ? <ProfileRightBar /> : <HomeRightBar />;
}

const RightBarContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  position: sticky;
  top: 55px; /* required */

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c4c2c2;
  }
`;
