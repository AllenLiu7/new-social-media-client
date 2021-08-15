import axios from 'axios';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { currentUserSelector } from '../../redux/slice/loginUser';
import { StyledHr } from '../common/styled-components/hr';
import { Input } from '../common/styled-components/input';
import { StyledButton } from '../common/styled-components/styledButton';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import ShareOptions from './shareOptions';

export default function ShareCard() {
  const { currentUser } = useSelector(currentUserSelector);
  const desc = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const newPost = {
      userId: currentUser._id,
      desc: desc?.current?.value,
    };
    //console.log(file);

    if (file) {
      const data = new FormData();
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const fileName = uniqueSuffix + '-' + file.name;
      data.append('name', fileName);
      data.append('file', file);
      newPost.img = fileName;
      console.log(data.get('file'));
      console.log(data.get('name'));
      try {
        axios.post('http://localhost:8000/api/post_image', data);
      } catch (err) {
        console.log(err);
      }
    }

    //creat post
    try {
      axios.post('http://localhost:8000/api/post', newPost);
    } catch (err) {}
  };

  return (
    <Container>
      <TopWrapper>
        <StyledProfilePic height='45px' src={currentUser.profilePicture} />
        <InputWrapper>
          <Input placeholder='What is in your mind?' ref={desc} />
        </InputWrapper>
      </TopWrapper>
      <StyledHr />
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        name='shareForm'
      >
        <DownWrapper>
          <ShareOptions />
          <StyledButton bgColor='green' margin='0 50px' type='submit'>
            Share
          </StyledButton>
        </DownWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  margin: 8px 30px 40px 30px;
  width: 85%;
  height: 150px;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin-left: 20px;
`;
