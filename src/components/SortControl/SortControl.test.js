import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, within } from '@testing-library/react';
import SortControl from './SortControl';

describe('<SortControl />', () => {
  test('should mount SortControl', () => {
    render(<SortControl />);
    expect(screen.getByTestId('SortControl')).toBeInTheDocument();
  });

  test('should mount sort by label', () => {
    render(<SortControl />);
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  test('should set sorting field to Title from props', () => {
    render(<SortControl value="Title" />);
    expect(screen.getByDisplayValue('Title').value).toEqual('Title');
  });

  test('should set sorting field to Release Date from props', () => {
    render(<SortControl value="Release Date" />);
    expect(screen.getByDisplayValue('Release Date').value).toEqual('Release Date');
  });

  test('should invoke onChange callback when sorting field is changed', async () => {
    const changeHandler = jest.fn();
    render(<SortControl onChange={changeHandler} value="Release Date" />);
    fireEvent.mouseDown(screen.getByRole('button'));
    const listbox = within(screen.getByRole('listbox'));
    fireEvent.click(listbox.getByText('Title'));

    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledWith('Title');
  });
});
