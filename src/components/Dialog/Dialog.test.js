import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dialog from './Dialog';
import userEvent from "@testing-library/user-event";

describe('<Dialog />', () => {
    test('should mount it', () => {
        render(<Dialog/>);
        expect(screen.getByTestId('Dialog')).toBeInTheDocument();
    });

    test('should mount title', () => {
        render(<Dialog title='TestTitle'/>);
        expect(screen.getByText('TestTitle')).toBeInTheDocument();
    });

    test('should mount submit button', () => {
        render(<Dialog submitText='TestSubmit'/>);
        expect(screen.getByText('TestSubmit')).toBeInTheDocument();
    });

    test('should not mount reset button when no onReset props passed', () => {
        render(<Dialog resetText='TestReset'/>);
        expect(screen.queryByText('TestReset')).not.toBeInTheDocument();
    });

    test('should mount reset button when no onReset props passed', () => {
        render(<Dialog resetText='TestReset' onReset={() => null}/>);
        expect(screen.getByText('TestReset')).toBeInTheDocument();
    });

    test('should bind onReset handler', () => {
        const resetHandler = jest.fn()
        render(<Dialog resetText='TestReset' onReset={resetHandler} />);

        const resetBtn = screen.getByText('TestReset')
        expect(resetBtn).toBeInTheDocument();
        userEvent.click(resetBtn)

        expect(resetHandler).toBeCalledTimes(1)
    });

    test('should set default reset caption', () => {
        render(<Dialog onReset={() => null} />);
        expect(screen.getByText('Reset')).toBeInTheDocument();
    });

    test('should set default submit caption', () => {
        render(<Dialog />);
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });

    test('should bind onSubmit handler', () => {
        const submitHandler = jest.fn()
        render(<Dialog onSubmit={submitHandler}/>);

        const submitBtn = screen.getByText('Submit')
        expect(submitBtn).toBeInTheDocument();
        userEvent.click(submitBtn)

        expect(submitHandler).toBeCalledTimes(1)
    });

    test('should bind onClose handler', () => {
        const closeHandler = jest.fn()
        render(<Dialog onClose={closeHandler}/>);

        const closeBtn = screen.getByTestId('CloseDialogBtn')
        expect(closeBtn).toBeInTheDocument();
        userEvent.click(closeBtn)

        expect(closeHandler).toBeCalledTimes(1)
    });

    test('should not call other handlers when clicked on close button', () => {
        const submitHandler = jest.fn()
        const resetHandler = jest.fn()
        const closeHandler = jest.fn()

        render(<Dialog onClose={closeHandler} onReset={resetHandler} onSubmit={submitHandler}/>);

        const closeBtn = screen.getByTestId('CloseDialogBtn')
        expect(closeBtn).toBeInTheDocument();
        userEvent.click(closeBtn)

        expect(closeHandler).toBeCalledTimes(1)
        expect(resetHandler).not.toBeCalled()
        expect(submitHandler).not.toBeCalled()
    });

    test('should not call other handlers when clicked on reset button', () => {
        const submitHandler = jest.fn()
        const resetHandler = jest.fn()
        const closeHandler = jest.fn()

        render(<Dialog onClose={closeHandler} onReset={resetHandler} onSubmit={submitHandler}/>);

        const resetBtn = screen.getByText('Reset')
        expect(resetBtn).toBeInTheDocument();
        userEvent.click(resetBtn)

        expect(resetHandler).toBeCalledTimes(1)
        expect(closeHandler).not.toBeCalled()
        expect(submitHandler).not.toBeCalled()
    });

    test('should not call other handlers when clicked on submit button', () => {
        const submitHandler = jest.fn()
        const resetHandler = jest.fn()
        const closeHandler = jest.fn()

        render(<Dialog onClose={closeHandler} onReset={resetHandler} onSubmit={submitHandler}/>);

        const submitBtn = screen.getByText('Submit')
        expect(submitBtn).toBeInTheDocument();
        userEvent.click(submitBtn)

        expect(submitHandler).toBeCalledTimes(1)
        expect(closeHandler).not.toBeCalled()
        expect(resetHandler).not.toBeCalled()
    });

    test('should render children', () => {
        render(<Dialog><div>TestChildren</div></Dialog>);
        expect(screen.getByText('TestChildren')).toBeInTheDocument();
    });
});