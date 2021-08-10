import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { currentUserSelector, logoutUser } from '../../redux/slice/loginUser';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import SearchBar from './searchBar';
import TopBarIcon from './topBarIcons';
import TopBarLink from './topBarLink';
import TopBarLogo from './topBarLogo';

export default function TopBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(currentUserSelector);

  const handleLogout = () => {
    dispatch(logoutUser());
    history.push('/');
  };
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
          <LogoutDiv onClick={handleLogout}>Log out</LogoutDiv>
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
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
`;

const LogoutDiv = styled.div`
  padding-left: 30px;
  color: white;
  cursor: pointer;
`;
