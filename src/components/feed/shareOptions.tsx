import styled from 'styled-components';

import {
  PhotoCamera,
  Label,
  LocationOn,
  EmojiEmotions,
} from '@material-ui/icons';

import { green, blue, yellow, red } from '@material-ui/core/colors';

export default function ShareOptions() {
  return (
    <>
      <Container>
        <IconWrapper>
          <PhotoCamera style={{ color: red[500] }} />
          <Link>Photo or Video</Link>
        </IconWrapper>
        <IconWrapper>
          <Label style={{ color: blue[500] }} />
          <Link>Tag</Link>
        </IconWrapper>
        <IconWrapper>
          <LocationOn style={{ color: green[500] }} />
          <Link>Location</Link>
        </IconWrapper>
        <IconWrapper>
          <EmojiEmotions style={{ color: yellow[500] }} />
          <Link>Feelings</Link>
        </IconWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Link = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;
