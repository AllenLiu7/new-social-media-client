import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ShareCard from './shareCard';
import PostCard from './postCard';

export default function Feed({ posts }) {
  const postsLoading = useSelector((state) => state.userPosts.loading);

  return (
    <>
      <FeedContainer>
        <ShareCard />

        {postsLoading ? (
          <div>Loading</div>
        ) : (
          posts.map((post, i) => <PostCard key={i} post={post} />)
        )}
      </FeedContainer>
      t
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
