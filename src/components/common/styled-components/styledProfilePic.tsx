import styled from 'styled-components';
const PF = process.env.PUBLIC_FOLDER;

export const StyledProfilePic = styled.img.attrs((props) => ({
  src: PF + props.src,
  alt: 'User',
  height: props.height || '30px',
  className: props.className,
}))`
  height: ${(props) => props.height};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

// '../../public/assets/profile-pictures/3.jpg'
