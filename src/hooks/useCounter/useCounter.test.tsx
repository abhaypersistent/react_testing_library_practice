import { renderHook, act} from '@testing-library/react';
import { useCounter } from './useCounter';

describe("useCounter", () => {
    test("should render the inital count", () => {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    })

    test('should accept and renders the props', () => {
        const {result} = renderHook(useCounter, {
            initialProps:{
                initialCount:10,
            }
        })

        expect(result.current.count).toBe(10);
    })

    // when we update the state we need the act
    test("increment the counter", () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    })

    // when we update the state we need the act
    test("Decrement the counter", () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
})