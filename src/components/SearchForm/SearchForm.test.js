import React                       from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm       from './SearchForm';
import {act}            from "react-dom/test-utils";

describe('<SearchForm />', () => {
    test('given query in props should have query in input value', () => {
        render(<SearchForm query="hello" onSearch={() => null}/>);
        const searchForm = screen.getByRole('textbox', {value: /hello/i});
        expect(searchForm).toBeInTheDocument();
    });

    test('given value in input when click on search btn should call onSearch callback', () => {
        const onSearch = jest.fn()
        render(<SearchForm onSearch={onSearch}/>);
        
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
        fireEvent.change(searchInput, {target: {value: 'test-value'}})
        
        const searchBtn = screen.getByRole('button', { name: /Search/i});
        expect(searchBtn).toBeInTheDocument();
        
        act(() => {
            searchBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });

        expect(onSearch).toHaveBeenCalledTimes(1)
        expect(onSearch).toHaveBeenCalledWith('test-value')
    });

    test('given value in input when press Enter should call onSearch callback', () => {
        const onSearch = jest.fn()
        render(<SearchForm onSearch={onSearch}/>);
        
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
        fireEvent.change(searchInput, {target: {value: 'test-value'}})
        
        act(() => {
            fireEvent.keyDown(searchInput, {key: 'Enter', code: 'Enter', charCode: 13})
        });

        expect(onSearch).toHaveBeenCalledTimes(1)
        expect(onSearch).toHaveBeenCalledWith('test-value')
    });
});