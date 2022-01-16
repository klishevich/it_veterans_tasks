import { main, calcAlphabeticCouples, findMostRareLetter, calcCharRepetitions } from "./string_couples";

describe("Test string_couples", () => {
    test("test 1", () => {
        expect(main("ZCQABA ZALMAC CRACUT")).toEqual(["C", 4]);
    });
});

describe("Test calcAlphabeticCouples", () => {
    test("test 1", () => {
        expect(calcAlphabeticCouples("ZCQABA")).toEqual(1);
        expect(calcAlphabeticCouples("ZALMAC")).toEqual(1);
        expect(calcAlphabeticCouples("CRACUT")).toEqual(0);
    });
})

describe("Test findMostRareLetter", () => {
    test("test 1", () => {
        expect(findMostRareLetter("ZCQABA")).toEqual("B");
        expect(findMostRareLetter("ZALMAC")).toEqual("C");
        expect(findMostRareLetter("CRACUT")).toEqual("A");
    })
})

describe("Test calcCharRepetitions", () => {
    test("test 1", () => {
        expect(calcCharRepetitions("ZCQABA ZALMAC CRACUT", "A")).toEqual(5);
        expect(calcCharRepetitions("ZCQABA ZALMAC CRACUT", "B")).toEqual(1);
        expect(calcCharRepetitions("ZCQABA ZALMAC CRACUT", "C")).toEqual(4);
    })
})
