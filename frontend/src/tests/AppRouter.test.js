import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRouter from '../AppRouter';
import { Provider } from 'react-redux';
import store from '../store/store';
import { MemoryRouter } from 'react-router-dom';

test('renders Home route with Task Manager header', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();
}); 