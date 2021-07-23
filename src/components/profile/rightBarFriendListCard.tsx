import styled from 'styled-components';
import { Card } from '../common/styled-components/card';
import ProfilePicNameBig from '../common/profilePicNameBig';

export default function RightBarFriendListCard() {
  return (
    <CustomCard>
      <Title>Friends</Title>
      <Content>
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
        <ProfilePicNameBig />
      </Content>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 15px;
`;
