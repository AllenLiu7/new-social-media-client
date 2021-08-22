import styled from 'styled-components';
const PF = process.env.PROFILE_PIC;

export const StyledProfilePic = styled.img.attrs((props) => ({
  src: PF + props.src,
  alt: 'User',
  height: props.height || '30px',
  width: props.width || '30px',
  borderRadius: props.borderRadius || '50%',
  className: props.className,
}))`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
  cursor: pointer;
`;

// '../../public/assets/profile-pictures/3.jpg'
