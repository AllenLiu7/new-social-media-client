import TopBar from '../components/topbar';
import SideBar from '../components/sidebar';
import RightBar from '../components/rightbar';
import Feed from '../components/feed';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { timelinePostsSelector } from '../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../redux/slice/getCurrentUser';

export default function Home() {
  const timelinePosts = useSelector(timelinePostsSelector);
  const currentUser = useSelector(currentUserSelector);
  //console.log(timelinePosts);
  return (
    <>
      <TopBar currentUser={currentUser} />
      <HomeContainer>
        <SideBar />
        <Feed posts={timelinePosts} />
        <RightBar />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
