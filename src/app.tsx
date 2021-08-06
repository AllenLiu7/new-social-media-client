//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './page/home';
import Profile from './page/profile';
import Login from './page/login';
import SignUp from './page/signUp';
import PrivateRoute from './route/privateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <PrivateRoute exact path='/app' component={Home} />
        <PrivateRoute exactpath='/app/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
