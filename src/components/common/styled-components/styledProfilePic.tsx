import styled from 'styled-components';

export const StyledProfilePic = styled.img.attrs((props) => ({
  src: props.src || '../../public/assets/profile-pictures/10.jpg',
  alt: 'User',
  height: props.height || '30px',
}))`
  height: ${(props) => props.height};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
