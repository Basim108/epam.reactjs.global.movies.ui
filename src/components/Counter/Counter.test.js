import {render, screen} from '@testing-library/react';
import Counter          from "./Counter";
import {act}            from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';
import userEvent        from "@testing-library/user-event";

describe('<Counter />', () => {
    
    beforeEach(() => {
        render(<Counter initialValue={5}/>);
    })
    
    test('should render initial value', () => {
        expect(screen.getByTestId('Counter')).toHaveTextContent('5');
    })

    test('should increment value after click on increase btn ', async () => {
        const increaseBtn = screen.getByRole('button', {name: '+'})
        await userEvent.click(increaseBtn)
        expect(screen.getByTestId('Counter')).toHaveTextContent('6');
    })

    test('should decrement value after click on decrease btn', async () => {
        const decreaseBtn = screen.getByRole('button', {name: '-'})
        await userEvent.click(decreaseBtn)
        expect(screen.getByTestId('Counter')).toHaveTextContent('4');
    })
})