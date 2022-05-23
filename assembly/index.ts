import { storage, logging } from "near-sdk-as";

@nearBindgen
export class Calculator {
  private result: i8 = 0;

  addition(num1: i8, num2: i8): void {
    this.result = num1 + num2;
    logging.log(" addition of input value is" + this.result.toString());
  }

  subtraction(num1: i8, num2: i8): void {
    this.result = num1 - num2;
    logging.log(" subtraction of input value is " + this.result.toString());
  }

  multiplication(num1: i8, num2: i8): void {
    this.result = num1 * num2;
    logging.log(" multiplication of input value is " + this.result.toString());
  }

  division(num1: i8, num2: i8): void {
    this.result = num1 / num2;
    logging.log(" division of input value is " + this.result.toString());
  }

  get_num(): i8 {
    return this.result;
  }
}
