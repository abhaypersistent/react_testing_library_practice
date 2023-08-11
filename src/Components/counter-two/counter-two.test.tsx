import { render, screen} from "@testing-library/react";
import {CounterTwo} from './counter-two';

describe('CounterTwo', () => {
    test('renders Correctly',() => {
        render(<CounterTwo count={0}/>);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument();

    })
})