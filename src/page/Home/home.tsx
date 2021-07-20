import TopBar from '../../components/topbar';
import SideBar from '../../components/sidebar';
import RightBar from '../../components/rightbar';
import Feed from '../../components/feed';
import styled from 'styled-components';
export default function Home() {
  return (
    <>
      <TopBar />
      <HomeContainer>
        <SideBar />
        <Feed />
        <RightBar />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  display: flex;
`;
