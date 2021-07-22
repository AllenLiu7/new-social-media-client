import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import Home from './page/home';
import Profile from './page/profile';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Home /> */}
      <Profile />
    </>
  );
}

export default hot(App);
