import styled from 'styled-components';
import ShareCard from './shareCard';
import PostCard from './postCard';

export default function Feed() {
  return (
    <>
      <FeedContainer>
        <ShareCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </FeedContainer>
    </>
  );
}

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 8;
  height: auto;
`;
