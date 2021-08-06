import TopBar from '../components/topbar';
import SideBar from '../components/sidebar';
import RightBar from '../components/rightbar';
import Feed from '../components/feed';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  timelinePostsSelector,
  fetchTimelinePosts,
} from '../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../redux/slice/loginUser';
import { fetchUserPosts } from '../redux/slice/getUserPosts';
import { fetchFollowingUsers } from '../redux/slice/getFollowingUsers';

export default function Home() {
  const dispatch = useDispatch();
  const timelinePosts = useSelector(timelinePostsSelector);
  const { currentUser } = useSelector(currentUserSelector);

  useEffect(() => {
    dispatch(fetchFollowingUsers());
    dispatch(fetchUserPosts());
    dispatch(fetchTimelinePosts());
  }, []);

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
