import styled from 'styled-components';

import { StyledProfilePic } from '../common/styled-components/styledProfilePic';


const PF = process.env.PUBLIC_FOLDER;

export default function ProfileBanner({ currentUser }) {
  //console.log(currentUser);
  const { username, profilePicture } = currentUser;

  return (
    <Container>
      <BannerBackground />
      <CusStyledProfilePic src={profilePicture} />
      <NameWrap>
        <Name>{username}</Name>
        <Greeting>I feel so happy right now! Let's eat!</Greeting>
      </NameWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BannerBackground = styled.img.attrs({
  src: `${PF}cover/1.jpg`,
  alt: 'banner',
})`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const CusStyledProfilePic = styled(StyledProfilePic)`
  position: absolute;
  height: 130px;
  width: 130px;
  border: 3px solid white;
  top: 270px;
`;

const NameWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
const Name = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Greeting = styled.div`
  color: #a1a1a1;
`;
