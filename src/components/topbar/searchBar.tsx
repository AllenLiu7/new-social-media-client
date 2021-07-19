import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar() {
  return (
    <>
      <Container>
        <Icon />
        <Input />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 280px;
  overflow: hidden;
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'search...',
})`
  border: none;
  &:focus {
    outline: none;
  }
`;

const Icon = styled(SearchIcon).attrs({
  style: { fontSize: 25 },
})`
  color: grey;
  font-size: 600;
  margin-left: 10px;
`;
