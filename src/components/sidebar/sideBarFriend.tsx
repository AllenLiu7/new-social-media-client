import styled from 'styled-components';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';

interface Props {
  name: string;
  src: string;
}

export default function SideBarFriend({ name, src }: Props) {
  return (
    <>
      <ProfileWrapper>
        <StyledProfilePic src={src} />
        <NameWrapper>{name}</NameWrapper>
      </ProfileWrapper>
    </>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const NameWrapper = styled.span`
  margin-left: 10px;
`;
