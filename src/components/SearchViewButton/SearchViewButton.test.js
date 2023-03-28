import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchViewButton from './SearchViewButton';
import userEvent        from "@testing-library/user-event";

describe('<SearchViewButton />', () => {
    test('should mount it', () => {
        render(<SearchViewButton/>)
        expect(screen.getByTestId('SearchViewButton')).toBeInTheDocument()
    });
    
    test('should trigger onClick callback when clicking on search button',async () => {
        const clickHandler = jest.fn()
        render(<SearchViewButton onClick={clickHandler}/>);
        await userEvent.click(screen.getByRole('button'))
        expect(clickHandler).toHaveBeenCalledTimes(1)
    });
});