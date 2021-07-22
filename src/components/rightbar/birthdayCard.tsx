import styled from 'styled-components';
import BirthydayInfo from './birthydayInfo';

export default function BirthdayCard() {
  return (
    <Container>
      <BirthydayInfo />
      <PartyImage />
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  width: 85%;
  height: 200px;
  margin-top: 30px;
`;

const PartyImage = styled.img.attrs({
  src: '../../public/assets/birthday.jpg',
  alt: 'gift',
})`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
