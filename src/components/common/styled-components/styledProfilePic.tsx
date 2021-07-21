import styled from 'styled-components';

type ImageProps = {
  src: string;
};

export const StyledProfilePic = styled.img.attrs((props: ImageProps) => ({
  src: props.src || '../../public/assets/profile-pictures/10.jpg',
  alt: 'User',
}))`
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
