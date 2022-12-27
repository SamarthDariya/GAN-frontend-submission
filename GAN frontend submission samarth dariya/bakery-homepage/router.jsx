import { Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
};
