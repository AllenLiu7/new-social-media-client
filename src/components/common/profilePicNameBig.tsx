import styled from 'styled-components';
import { StyledProfilePic } from './styled-components/styledProfilePic';

interface Props {
  name: string;
  src: string;
}

export default function ProfilePicNameBig({ name, src }: Props) {
  return (
    <>
      <ProfileWrapper>
        <StyledProfilePic src={src} height='80px' borderRadius='10%' />
        <NameWrapper>{name}</NameWrapper>
      </ProfileWrapper>
    </>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

// const CustomProfilePic = styled(StyledProfilePic)`
//   border-radius: 10%;
//   height: 80px;
// `;

const NameWrapper = styled.span`
  margin-top: 2px;
  margin-left: 10px;
`;
