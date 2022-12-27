import { useReducer } from 'react';

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStateProvider>
        <Route exact path="/" component={Homepage} />
        <Route path="/checkout" component={Checkout} />
      </GlobalStateProvider>
    </BrowserRouter>
  );
};
