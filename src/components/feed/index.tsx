import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ShareCard from './shareCard';
import PostCard from './postCard';

export default function Feed({ posts, users }) {
  const userLoading = useSelector((state) => state.user.loading);
  const postsLoading = useSelector((state) => state.userPosts.loading);

  console.log(posts);
  return (
    <>
      <FeedContainer>
        <ShareCard />

        {postsLoading || userLoading ? (
          <div>Loading</div>
        ) : (
          posts.map((post, i) => <PostCard key={i} post={post} user={users} />)
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
