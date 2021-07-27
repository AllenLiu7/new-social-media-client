//import { hot } from 'react-hot-loader/root';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

import { RenderRoutes } from './route/RenderRoutes';
import routes from './route/routes';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <RenderRoutes routes={routes} />
    </Router>
  );
}

export default App;
