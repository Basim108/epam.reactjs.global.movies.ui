import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SortControl from './SortControl';

describe('<SortControl />', () => {
  test('it should mount', () => {
    render(<SortControl />);
    
    const sortControl = screen.getByTestId('SortControl');

    expect(sortControl).toBeInTheDocument();
  });
});