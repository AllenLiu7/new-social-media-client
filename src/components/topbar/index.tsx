import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import TopBarLink from './topBarLink';
import TopBarIcon from './topBarIcons';
import TopBarLogo from './topBarLogo';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/slice/getCurrentUser';

export default function TopBar() {
  const currentUser = useSelector(currentUserSelector);
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
          <Link to='/app/profile'>
            <StyledProfilePic src={currentUser.profilePicture} />
          </Link>
        </TopBarRight>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: lightblue;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const TopBarLeft = styled.div`
  flex: 3;
  display: flex;

  align-items: center;
`;

const TopBarCenter = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
`;

const TopBarRight = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
`;
