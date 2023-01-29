{
  /**
   * Type Assertions! 💩
   * 너무 이렇게 장담하면 실시간으로 어플리케이션이 죽음
   * 상황에 따라 정말 100% 장담할 때 뒤에 느낌표. 그 외에는 피하기
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length); // undefined

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 😱
  // TypeError: wrong.push is not a function

  // ? <-> ! (무조건null이아니야)
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 무조건배열이야 절대값이있어 진짜장담해 😱
  // const numbers = findNumbers()!;
  // numbers.push(2);

  // 좋은? 예제
  const button = document.querySelector('class')!;
  // if (button) {
  //   button.nodeValue;
  // }
}
