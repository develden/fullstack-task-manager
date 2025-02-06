import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 