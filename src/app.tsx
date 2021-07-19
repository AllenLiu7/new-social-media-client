import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import Home from './page/Home/home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default hot(App);
