import { act, renderHook } from "@testing-library/react";
import { useUppercase } from "../useUppercase";

describe("when rendered", () => {
    it("returns current initial value, uppercased", () => {
        const { result } = renderHook(() => useUppercase("Test string"));
          
        expect(result.current.value).toEqual("TEST STRING");
    });
});

describe("when called the `update` method", () => {
    it("changes the `value` and uppercases it", () => {
        const { result } = renderHook(() => useUppercase("Test string"));
        
        act(() => result.current.update("Updated"));
        expect(result.current.value).toEqual("UPDATED");
    });
});

describe("when re-rendered with another initial value", () => {
    it("updates the value", () => {
        const { result, rerender } = renderHook(({ text }) => useUppercase(text), {
            initialProps: { text: "Test String" },
        });
    
        rerender({ text: "Updated!" });
        expect(result.current.value).toEqual("UPDATED!");
    });
});

