import { Calculator } from "../index";
import { context, storage } from "near-sdk-as";

let calc: Calculator;
describe("Counter ", () => {
  beforeEach(() => {
    calc = new Calculator();
  });

  it("get_num is the same as reading from storage", () => {
    expect(storage.getPrimitive<i8>("result", 0)).toBe(
      calc.get_num(),
      'storage.getPrimitive<i8>("result", 0) = get_num()'
    );
  });

  it("should perform addition on the input vaules", () => {
    calc.addition(1, 2);
    expect(calc.get_num()).toBe(
      3,
      "result should be addition of 1 and 2, that is 3"
    );
  });

  it("should perform subtraction on  the input vaules", () => {
    calc.subtraction(2, 6);
    expect(calc.get_num()).toBe(
      -4,
      "result should be subtraction of 2 and 6, that is -4"
    );
  });

  it("should perform multiplication on the input vaules", () => {
    calc.multiplication(2, 3);
    expect(calc.get_num()).toBe(
      6,
      "result should be multiplication of 2 and 3, that is 6"
    );
  });

  it("should perform division on the input vaules", () => {
    calc.division(6, 2);
    expect(calc.get_num()).toBe(
      3,
      "result should be division of 6 by 2, that is 3"
    );
  });

  it("should perform multiple operations", () => {
    calc.addition(5, 4);
    expect(calc.get_num()).toBe(9, "addition successfull");
    calc.multiplication(7, 1);
    expect(calc.get_num()).toBe(7, "multiplication successfull");
    calc.subtraction(8, 3);
    expect(calc.get_num()).toBe(5, "subtraction successfull");
    calc.division(4, 2);
    expect(calc.get_num()).toBe(2, "division successfull");
  });
});
