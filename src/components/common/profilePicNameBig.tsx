import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledProfilePic } from './styled-components/styledProfilePic';

interface Props {
  name: string;
  src: string;
}

export default function ProfilePicNameBig({ user }: Props) {
  const { username, profilePicture, _id: userId } = user;
  return (
    <>
      <StyledLink to={`/app/profile/${userId}`}>
        <ProfileWrapper>
          <StyledProfilePic
            src={profilePicture}
            height='80px'
            borderRadius='10%'
          />
          <NameWrapper>{username}</NameWrapper>
        </ProfileWrapper>
      </StyledLink>
    </>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NameWrapper = styled.span`
  margin-top: 2px;
  margin-left: 10px;
  text-decoration: none;
`;
