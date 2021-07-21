import styled from 'styled-components';
import ProfileHead from '../common/profileHead';

export default function PostCard({ src, name, desc }) {
  const img = true;

  return (
    <>
      <Container>
        <ProfileHead
          src={src || '../../public/assets/profile-pictures/72.jpg'}
          name={name || 'Allen'}
        />
        <PostContent>
          <DescWrap>{desc || <p>This is my first post</p>}</DescWrap>
          {img ? <StyledImg /> : null}
        </PostContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  margin: 10px 30px;
  width: 85%;
  height: auto;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //width: 100%;
`;

const DescWrap = styled.div``;

const StyledImg = styled.img.attrs({
  src: '../../public/assets/post/sample2.jpg',
  alt: 'postPic',
})`
  width: 100%;
  align-self: center;
  max-height: 500px;
  object-fit: contain;
`;
