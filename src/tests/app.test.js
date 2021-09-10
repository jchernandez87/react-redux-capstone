import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/Store';
import App from '../App';

describe('See if all elements exists', () => {
  test('Display NavBar', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('covid stats')).toBeInTheDocument();
  });
  test('Test regions text', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('STATS BY REGION')).toBeInTheDocument();
  });
  test('Test Hedaer text', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('SPAIN')).toBeInTheDocument();
  });
});
