import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Feed from '../components/feed';
import RightBar from '../components/rightbar';
import SideBar from '../components/sidebar';
import TopBar from '../components/topbar';
import { fetchFollowingUsers } from '../redux/slice/getFollowingUsers';
import {
  fetchTimelinePosts,
  timelinePostsSelector,
} from '../redux/slice/getTimelinePosts';

export default function Home() {
  const dispatch = useDispatch();
  const timelinePosts = useSelector(timelinePostsSelector);

  useEffect(() => {
    dispatch(fetchFollowingUsers());
    dispatch(fetchTimelinePosts());
  }, []);

  return (
    <>
      <TopBar />
      <HomeContainer>
        <SideBar />
        <Feed posts={timelinePosts} isHome isCurrentUser />
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
