{
  /**
   * Type Assertions! ๐ฉ
   * ๋๋ฌด ์ด๋ ๊ฒ ์ฅ๋ดํ๋ฉด ์ค์๊ฐ์ผ๋ก ์ดํ๋ฆฌ์ผ์ด์์ด ์ฃฝ์
   * ์ํฉ์ ๋ฐ๋ผ ์ ๋ง 100% ์ฅ๋ดํ  ๋ ๋ค์ ๋๋ํ. ๊ทธ ์ธ์๋ ํผํ๊ธฐ
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // undefined
  console.log((<string>result).length); // undefined

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // ๐ฑ
  // TypeError: wrong.push is not a function

  // ? <-> ! (๋ฌด์กฐ๊ฑดnull์ด์๋์ผ)
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ๋ฌด์กฐ๊ฑด๋ฐฐ์ด์ด์ผ ์ ๋๊ฐ์ด์์ด ์ง์ง์ฅ๋ดํด ๐ฑ
  // const numbers = findNumbers()!;
  // numbers.push(2);

  // ์ข์? ์์ 
  const button = document.querySelector('class')!;
  // if (button) {
  //   button.nodeValue;
  // }
}
