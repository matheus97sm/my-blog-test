import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import { LoginProvider } from './LoginContext';
import { Admin } from './pages/Admin';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { PrivateRoute } from './pages/PrivateRoute';

import { GlobalStyles } from './styles/Global';

export function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Admin} />
          <Route path="/blog" exact component={Blog} />

          <Route path="/blog/:id" component={BlogPost} />

          <PrivateRoute path="/admin/create-post" exact component={CreatePost} />
        </Switch>

        <GlobalStyles />

        <ToastContainer />
      </BrowserRouter>
    </LoginProvider>
  );
}
