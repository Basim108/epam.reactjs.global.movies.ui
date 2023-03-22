import React                     from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm                from './SearchForm';
import userEvent                 from "@testing-library/user-event";

describe('<SearchForm />', () => {
    let selectHandler
    const query = 'hello'

    beforeEach(() => {
        selectHandler = jest.fn()
        render(<SearchForm query="hello" onSearch={selectHandler}/>);
    })
    afterEach(cleanup)

    test('should initialize input value with props.query', () => {
        const searchForm = screen.getByRole('textbox');
        expect(searchForm).toBeInTheDocument();
        expect(searchForm).toHaveValue(query)
    });

    test('should call onSearch callback after clicking on search btn when input has not empty value', async () => {
        await userEvent.click(screen.getByRole('button', {name: /Search/i}))
        expect(selectHandler).toHaveBeenCalledTimes(1)
        expect(selectHandler).toHaveBeenCalledWith(query)
    });

    test('should call onSearch callback after pressing Enter when input has not empty value', async () => {
        await userEvent.type(screen.getByRole('textbox'), '{enter}')
        expect(selectHandler).toHaveBeenCalledTimes(1)
        expect(selectHandler).toHaveBeenCalledWith(query)
    });

    test('should not call onSearch callback after pressing Enter when input is empty', async () => {
        const inputQuery = screen.getByRole('textbox')
        await userEvent.clear(inputQuery)
        await userEvent.type(inputQuery, '{enter}')
        expect(selectHandler).not.toHaveBeenCalled()
    });

    test('should not call onSearch callback after clicking search btn when input is empty', async () => {
        const inputQuery = screen.getByRole('textbox')
        await userEvent.clear(inputQuery)
        await userEvent.type(inputQuery, '{enter}')
        expect(selectHandler).not.toHaveBeenCalled()
    });

    test('should not call onSearch callback after clicking search btn when input is whitespace', async () => {
        const inputQuery = screen.getByRole('textbox')
        await userEvent.clear(inputQuery)
        await userEvent.type(inputQuery, '  ')
        await userEvent.type(inputQuery, '{enter}')
        await userEvent.click(inputQuery)
        expect(selectHandler).not.toHaveBeenCalled()
    });
});