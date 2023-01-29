{
  // JavaScript
  // old: var 💩
  // 호이스팅과 예상하지못한문제 발생
  var bar = 5;
  bar = 1;

  // let (es6)
  let name = 'chocola';
  name = 'vanilla';

  // const
  const con = 0;
  // con = 1; // error

  /**
   * JavaScript Data Types
   * Primitive 원시: number, string, boolean, bigint, symbol, null, undefined
   * Object 조금더복잡: function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined: 값이 아직 결정되지 않았다
  let nickname: undefined; // 단독적사용x💩
  let age: number | undefined; // | = or
  age = 1;
  age = undefined;
  function find(): number | undefined {
    return undefined; // 무언가가 있거나 없을 때 보편적으로 undefined를 많이 이용
  }

  // null: 명확하게 비었다
  let person: null; // 💩
  let person2: string | null;

  /**
   * unknown 가능한사용x💩
   * 어떤 종류의 데이터가 담길지 알 수 없음. 무슨 타입인지 몰라.
   * - 왜 있는 걸까? 타입스크립트는 타입이 없는 자바스크립트와 연동해서 쓸 수 있기 때문에
   * 타스에서 자스 라이브러리르 이용하는 경우, 자스에서 리턴하는 타입을 모를 수 있을 때
   * 사용할 수 있지만 이런 경우도 가능하면 구체적으로 타입을 지정해서 쓰는 것이 좋음.
   */
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  /**
   * any 💩💩💩
   * 무엇이든 할당할 수 있다.
   * unknown잘모르겠어 any당당하게어떤것이든다담을수있어
   * 타입을 더할 수 있는 방법이 없을 때 정말 불가피한 경우
   */
  let anything: any = 0;
  anything = 'hello';

  // void: 아무런 값도 리턴하지 않음 (생략 가능 - 회사나 팀의 스타일 가이드 따르기)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  /**
   * never
   * 함수에서 리턴할 수 있는 또 다른 타입.
   * 리턴하지 않는 함수? 언제 사용?
   * - 애플리케이션에서 어떠한 에러를 던질 때 (에러 핸들링)
   * - 앱에서 정말 예상치 못한, 핸들링할 수 없는 에러가 발생했을 때
   * - 함수에서 절대 리턴되지 않는 경우를 명시하기 위해 사용
   */
  function throwError(message: string): never {
    // 1. (error) message -> server (log 남기기)
    throw new Error(message);
    // 2. while (true) { 위에서에러를던지면 Unreachable code detected. 도달할수없는코드 }
    // return; 이 생략된 경우
  }
  let neverEnding: never; // 💩

  /**
   * object
   * 원시 타입을 제외한 모든 객체 타입을 할당할 수 있음
   * 이처럼 광범위하고 추상적인 어떤 것이든 담을 수 있는 타입은 💩
   * 가능한 구체적으로 어떤 타입인지 명시해서 작성하기!
   */
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'cocoa' });
  acceptSomeObject({ animal: 'rab' });
}
