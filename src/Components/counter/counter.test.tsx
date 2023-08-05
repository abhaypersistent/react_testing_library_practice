import { render, screen} from "@testing-library/react";
import user from '@testing-library/user-event';
import { Counter } from './counter';


describe('Counter', ()=> {

    test('render correctky' , () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole('button', {
            name:"Increment"
        })
        expect(incrementButton).toBeInTheDocument();

    })

    test('render a count .of 0', () => {
        render(<Counter />);
        const constElement = screen.getByRole('heading');
        expect(constElement).toHaveTextContent("0");
    })
    
    test('Renders a count of 1 after clicking the increment', async ()=> {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name:"Increment"
        })
        await user.click(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1");
    })
    
    test('Renders a count of 2 after clicking the increment', async ()=> {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
            name:"Increment"
        })
        await user.click(incrementButton);
        await user.click(incrementButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("2");
    })
    
    test('Renders a count of 10 after clicking the set amount', async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10);
        const setButton = screen.getByRole('button', {
            name:"Set"
        })
        await user.click(setButton);;
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("10");
    })

    test("elements are focused in the right order", async () => {
        user.setup();
        render(<Counter />);
        const amountInput = screen.getByRole("spinbutton");
        const setButton = screen.getByRole("button", {name:"set"});
    })
})