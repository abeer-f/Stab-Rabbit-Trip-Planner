import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../client/Components/Dashboard.js';
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup)

it('Inputing text updates the state', () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/Change/i).textContent).toBe('default');
  fireEvent.change(getByLabelText("Input Text:"), {target: {value: 'Text' } } )
  expect(getByText(/Change/i).textContent).not.toBe('default')
});
