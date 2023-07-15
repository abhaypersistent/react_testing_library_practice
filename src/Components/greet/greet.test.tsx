import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

describe('Greet', () => {
    it('Great renders correctly', () => {
        render(<Greet />);
        const textField = screen.getByText(/hello/i);
        expect(textField).toBeInTheDocument();
    })
    
    it('Greet renders with the name passed', () => {
        render(<Greet name="abhay"/>);
        const textField = screen.getByText('Hello abhay');
        expect(textField).toBeInTheDocument();
    })
})
