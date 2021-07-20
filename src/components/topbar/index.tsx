import styled from 'styled-components';
import SearchBar from './searchBar';
import TopBarLink from './topBarLink';
import TopBarIcon from './topBarIcons';
import TopBarLogo from './topBarLogo';
import ProfilePic from './profilePic';

export default function TopBar() {
  return (
    <>
      <Container>
        <TopBarLeft>
          <TopBarLogo />
          <SearchBar />
        </TopBarLeft>

        <TopBarCenter>
          <TopBarLink />
        </TopBarCenter>

        <TopBarRight>
          <TopBarIcon />
          <ProfilePic />
        </TopBarRight>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: lightgreen;
  position: sticky;
`;

const TopBarLeft = styled.div`
  flex: 3;
  display: flex;

  align-items: center;
`;

const TopBarCenter = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
`;

const TopBarRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;
