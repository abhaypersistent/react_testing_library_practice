import { render, screen } from '../../test-util';
import {MuiMode } from './mui-modes';

describe('MuiMode',()=>{
    test('renders text correctly', () => {
        render(<MuiMode />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("dark mode");
    })
})