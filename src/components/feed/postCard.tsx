import styled from 'styled-components';
import ProfileHead from '../common/profilePicName';
import PostCardLike from './postCardLike';
import PostCardComment from './postCardComment';
import { useUserInfo } from '../../Hook/useUserInfo';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { currentUserSelector } from '../../redux/slice/getCurrentUser';

export default function PostCard({ post }) {
  const { _id: currentUserId } = useSelector(currentUserSelector);
  const { userId, img, desc, likes, _id: postId } = post;
  const {
    user: { profilePicture, username },
  } = useUserInfo(userId);

  const [isLiked, setIsLiked] = useState(likes.includes(currentUserId));
  const [like, setLike] = useState(likes.length);

  const handleLikeClick = () => {
    const updateLike = async (postId: string, currentUserId: string) => {
      try {
        await fetch(`http://localhost:8000/api/post/${postId}/like`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: currentUserId,
          }),
        });
        console.log('updateLike');
      } catch (err) {
        console.log(err);
      }
    };

    setIsLiked(!isLiked);
    setLike(isLiked ? like - 1 : like + 1);
    updateLike(postId, currentUserId);
  };

  return (
    <>
      <Container>
        <ProfileWrap>
          <ProfileHead src={profilePicture} name={username} />
          <TimeStamp>1 week ago</TimeStamp>
        </ProfileWrap>

        <PostContent>
          <DescWrap>{desc}</DescWrap>
          {img ? <StyledImg src={process.env.PUBLIC_FOLDER + img} /> : null}

          <PostBottomWrap>
            <PostCardLike like={like} handleLikeClick={handleLikeClick} />
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
