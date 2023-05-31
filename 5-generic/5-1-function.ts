{
  // checkNotNullNumber, checkNotNullString, ... 타입별로 만들기 절대 X
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result); // 123
  // checkNotNullBad(null); // error

  // 아무 타입이나 다 되게
  // any: 타입이 보장되지 않음. 타입 정보가 없어서 안전하지 않음
  // 제네릭은 이것을 쓸 때 타입이 결정돼 타입을 더 보장받을 수 있음
  // 사용하는 사람이 어떤 타입인지 결정. 컴파일 시간에 보장
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid!');
    }
    return arg;
  }
  const number = checkNotNull(123); // 123
  const boal: boolean = checkNotNull(true); // true
}
