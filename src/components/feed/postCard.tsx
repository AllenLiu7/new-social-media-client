import styled from 'styled-components';
import ProfileHead from '../common/profilePicName';
import PostCardLike from './postCardLike';
import PostCardComment from './postCardComment';

import { useEffect, useState } from 'react';

export default function PostCard({ post }) {
  console.log(post.userId);
  const [user, setUser] = useState({});
  const { userId, img, desc } = post;

  useEffect(() => {
    const fetchUser = async (userId) => {
      const response = await fetch(
        ` http://localhost:8000/api/user?userId=${userId}`
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser(userId);
  }, [userId]);

  return (
    <>
      <Container>
        <ProfileWrap>
          <ProfileHead src={user.profilePicture} name={user.username} />
          <TimeStamp>1 week ago</TimeStamp>
        </ProfileWrap>

        <PostContent>
          <DescWrap>{desc}</DescWrap>
          {img ? <StyledImg src={process.env.PUBLIC_FOLDER + img} /> : null}

          <PostBottomWrap>
            <PostCardLike />
            <PostCardComment />
          </PostBottomWrap>
        </PostContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 20px 30px;
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

const PostBottomWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px 20px 20px;
`;

const TimeStamp = styled.div`
  margin-left: 8px;
  font-size: 12px;
`;

const DescWrap = styled.div`
  margin: 0px 20px 20px 20px;
`;

const StyledImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: 'postPic',
}))`
  width: 100%;
  align-self: center;
  max-height: 800px;
  object-fit: contain;
  margin-bottom: 20px;
`;
