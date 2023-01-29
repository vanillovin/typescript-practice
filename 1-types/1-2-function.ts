{
  // JS 💩 → TS ✨
  // static 한 타입을 코딩할 때 정의한다는 것은 안정적인 프로그래밍을 도와주고
  // 조금 더 높은 문서화 효과와 직관적 이해!

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

  // JavaScript =✨=>  TypeScript
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
  // 전달하는 모든 숫자들을 배열로 받아옴
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }
  console.log(addNumbers(1, 2)); // 3
  console.log(addNumbers(1, 2, 3, 4)); // 10
  console.log(addNumbers(1, 2, 3, 4, 5, 0)); // 15
}
