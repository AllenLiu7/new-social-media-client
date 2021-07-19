import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import TopBarLink from './topBarLink';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export default function TopBar() {
  return (
    <>
      <Container>
        <TopBarLeft>
          <Logo>Doggy</Logo>
          <SearchBar>
            <StyledSearchIcon />
            <StyledInput />
          </SearchBar>
        </TopBarLeft>

        <TopBarCenter>
          <TopBarLink>
            <HomeIcon />
          </TopBarLink>
          <TopBarLink>
            <PeopleAltIcon />
          </TopBarLink>
          <TopBarLink>
            <VideoLibraryIcon />
          </TopBarLink>
        </TopBarCenter>

        <NoticeContainer />

        <ProfileContainer />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: lightgreen;
`;

const TopBarLeft = styled.div`
  flex: 3;
  display: flex;

  align-items: center;
`;

const Logo = styled.span`
  color: white;
  font-size: 20px;
  margin: 0 20px;
`;

const SearchBar = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 280px;
  overflow: hidden;
`;

const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: 'search...',
})`
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon).attrs({
  style: { fontSize: 25 },
})`
  color: grey;
  font-size: 600;
  margin-left: 10px;
`;

const TopBarCenter = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
`;

const NoticeContainer = styled.div`
  flex: 2;
`;

const ProfileContainer = styled.div`
  flex: 1;
`;
