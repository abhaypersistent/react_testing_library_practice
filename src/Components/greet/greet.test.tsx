import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

test('Great renders correctly', () => {
    render(<Greet />);
    const textField = screen.getByText(/hello/i);
    expect(textField).toBeInTheDocument();
})

test('Greet renders with the name passed', () => {
    render(<Greet name="abhay"/>);
    const textField = screen.getByText('Hello abhay');
    expect(textField).toBeInTheDocument();
})