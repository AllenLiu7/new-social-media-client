import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Card } from '../common/styled-components/card';
import ProfilePicNameBig from '../common/profilePicNameBig';

export default function RightBarFriendListCard() {
  const followings = useSelector((state) => state.followings.followings);
  console.log(followings);
  return (
    <CustomCard>
      <Title>Friends</Title>
      <Content>
        {followings.map((user, i) => (
          <ProfilePicNameBig
            key={i}
            name={user.username}
            src={user.profilePicture}
          />
        ))}
      </Content>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  padding: 20px;
  margin-bottom: 30px;
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
