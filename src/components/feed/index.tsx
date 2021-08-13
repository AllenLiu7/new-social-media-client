import { useSelector } from 'react-redux';
import styled from 'styled-components';

import PostCard from './postCard';
import ShareCard from './shareCard';

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
