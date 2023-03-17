import {render, screen} from '@testing-library/react';
import Counter          from "./Counter";
import {act}            from "react-dom/test-utils";
import '@testing-library/jest-dom/extend-expect';

describe('<Counter />', () => {
    test('it should mount', () => {
        render(<Counter initialValue={1}/>);
        const counter = screen.getByTestId('Counter');
        expect(counter).toBeInTheDocument();
    })

    test('given initial value should render it', () => {
        render(<Counter initialValue={5}/>);
        const counter = screen.getByTestId('Counter');
        expect(counter).toHaveTextContent('5');
    })

    test('when click on increase btn should increment value', () => {
        render(<Counter initialValue={5}/>);
        const increaseBtn = screen.getByRole('button', {name: /\+/i})
        act(() => {
            increaseBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        const counter = screen.getByTestId('Counter');
        expect(counter).toHaveTextContent('6');
    })

    test('when click on decrease btn should decrement value', () => {
        render(<Counter initialValue={5}/>);
        const decreaseBtn = screen.getByRole('button', {name: /-/i})
        act(() => {
            decreaseBtn.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        });
        const counter = screen.getByTestId('Counter');
        expect(counter).toHaveTextContent('4');
    })
})