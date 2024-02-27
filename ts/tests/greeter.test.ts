import { test, expect, jest } from "@jest/globals"
import assert from 'node:assert'
import Greeter, {SystemClock} from "../greeter"


test('should say "good night" at midnight', () => {
    const spy = jest.spyOn(SystemClock.prototype, 'currentHour')
        .mockImplementation(() => 0);
    const greeter = new Greeter();
    expect(greeter.greet()).toBe('Good night');
    spy.mockRestore()

})

test('should never return undefined', () => {
const spy = jest.spyOn(SystemClock.prototype, 'currentHour')
    for (let i = 0; i < 24; i++) {
        spy.mockImplementation(() => i);
        const greeter = new Greeter();
        expect(greeter.greet()).not.toBeUndefined();
    }
    spy.mockRestore()

})
