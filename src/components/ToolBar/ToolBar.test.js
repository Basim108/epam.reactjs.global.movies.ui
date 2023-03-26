import React            from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToolBar          from './ToolBar';

describe('<ToolBar />', () => {
    test('should mount it', () => {
        render(<ToolBar/>);
        const toolBar = screen.getByTestId('ToolBar')
        expect(toolBar).toBeInTheDocument()
    });

    test('should mount children it', () => {
        render(<ToolBar><span>My test text</span></ToolBar>)
        expect(screen.getByText('My test text')).toBeInTheDocument()
    });
});