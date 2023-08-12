import { render, screen} from "@testing-library/react";
import {CounterTwo} from './counter-two';
import user from "@testing-library/user-event"
import { execPath } from "process";

describe('CounterTwo test one', () => {
    test('renders Correctly',() => {
        render(<CounterTwo count={0}/>);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument();

    })

    test('handlers are called', async () => {
        user.setup();
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<CounterTwo  count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
            />)

        const getIncrementButton = screen.getByRole('button', {name: 'Increment'});    
        const getDecrementButton = screen.getByRole('button', {name: 'Decrement'});    
        await user.click(getIncrementButton);    
        await user.click(getDecrementButton);    
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);


    })
})