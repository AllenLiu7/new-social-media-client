import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export default function TopBarLink() {
  return (
    <>
      <LinkContainer>
        <HomeIcon />
      </LinkContainer>
      <LinkContainer>
        <PeopleAltOutlinedIcon />
      </LinkContainer>
      <LinkContainer>
        <VideoLibraryIcon />
      </LinkContainer>
    </>
  );
}

const LinkContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1 1 180px;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    border-bottom-style: solid;
    border-color: white;
    border-bottom-width: 5px;
  }
`;
