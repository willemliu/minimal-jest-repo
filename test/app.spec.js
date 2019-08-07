import testFunction from "../src/app";

describe("Testing 123", () => {
    test("should return some text", () => {
        expect(testFunction()).toEqual("Hello tester!");
    });
});
