import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/store';

test('renders Task Manager header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/Task Manager/i);
  expect(headerElement).toBeInTheDocument();
}); 