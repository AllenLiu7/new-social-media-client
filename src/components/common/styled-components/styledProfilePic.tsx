import styled from 'styled-components';
const PF = process.env.PUBLIC_FOLDER;

export const StyledProfilePic = styled.img.attrs((props) => ({
  src: PF + props.src,
  alt: 'User',
  height: props.height || '30px',
  borderRadius: props.borderRadius || '50%',
  className: props.className,
}))`
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
  cursor: pointer;
`;

// '../../public/assets/profile-pictures/3.jpg'
