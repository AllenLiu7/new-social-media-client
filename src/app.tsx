import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import Home from './page/home';
import Profile from './page/profile';
import Login from './page/login';

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Home /> */}
      {/* <Profile /> */}
      <Login />
    </>
  );
}

export default hot(App);
