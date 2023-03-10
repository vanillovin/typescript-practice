{
  // JS π© β TS β¨
  // static ν νμμ μ½λ©ν  λ μ μνλ€λ κ²μ μμ μ μΈ νλ‘κ·Έλλ°μ λμμ£Όκ³ 
  // μ‘°κΈ λ λμ λ¬Έμν ν¨κ³Όμ μ§κ΄μ  μ΄ν΄!

  /*
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } 
  */

  // JavaScript =β¨=>  TypeScript
  // - Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('Stieve', 'Jobs');
  printName('Chocola');
  printName('Anna', undefined);

  // - Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage(); // default message

  // - Rest parameter
  // μ λ¬νλ λͺ¨λ  μ«μλ€μ λ°°μ΄λ‘ λ°μμ΄
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }
  console.log(addNumbers(1, 2)); // 3
  console.log(addNumbers(1, 2, 3, 4)); // 10
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // 15
}
