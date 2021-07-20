import styled from 'styled-components';
export default function ProfilePic() {
  return (
    <>
      <StyledImage />
    </>
  );
}

type ImageProps = {
  src: string;
};

const StyledImage = styled.img.attrs((props: ImageProps) => ({
  src: props.src || '../../public/assets/profile-pictures/10.jpg',
  alt: 'User',
}))`
  height: 30px;
  border-radius: 50%;
  margin: 0 20px;
  object-fit: cover;
  cursor: pointer;
`;
