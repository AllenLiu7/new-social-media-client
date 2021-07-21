import styled from 'styled-components';
import ShareCard from './shareCard';

export default function Feed() {
  return (
    <>
      <FeedContainer>
        <ShareCard />
      </FeedContainer>
    </>
  );
}

const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 8;
  height: 100vh;
`;
