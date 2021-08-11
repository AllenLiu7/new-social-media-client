import { blue, green, red, yellow } from '@material-ui/core/colors';
import {
  EmojiEmotions,
  Label,
  LocationOn,
  PhotoCamera,
} from '@material-ui/icons';
import styled from 'styled-components';

export default function ShareOptions() {
  return (
    <>
      <Container>
        <IconWrapper>
          <InputLabel>
            <PhotoCamera style={{ color: red[500] }} />
            <InputSpan>Photo or Video</InputSpan>
            <input
              name='image'
              style={{ display: 'none' }}
              type='file'
              accept='.png,.jpeg,.jpg'
            />
          </InputLabel>
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

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputSpan = styled.span`
  margin-left: 5px;
`;
