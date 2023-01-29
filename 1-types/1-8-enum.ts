{
  /**
   * Enum
   * 여러 가지 관련된 상수 값들을 한 곳에 모아 정의할 수 있도록 도와주는 타입
   * TS에서의 Enum은, 타입이 정확하게 보장되지 않으므로 가능한 한 쓰지 않는 것이 좋음
   * => 대부분의 케이스에서 충분히 유니온 타입으로 대체 가능
   */

  // JavaScript
  // 자바스크립트에서 상수 정의는, 바뀌지 않는 어떤 특정한 고정 값을 나타낼 때 대문자 형태로 사용
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const Monday = 0;
  const Tuesday = 1;
  const Wednesday = 2;
  // 객체를 꽁꽁 얼려서 수정 안 되게 한 번만 정의.
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // enum -> union
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednedsdy';

  // 따로 값을 지정하지 않으면 자동으로 0부터 계산됨
  // 문자열은 수동적으로 하나하나씩 할당해야 함
  enum Days {
    Monday = 1, // 없으면 0
    Tuesday, // 1...
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 1
  let day: Days = Days.Saturday;
  day = Days.Tuesday;

  // 문제점 - enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당 가능
  day = 10; // 컴파일 에러가 발생하지 않음
  console.log(day); // 10

  // 자동으로 코드 완성
  let dayOfWeek: DaysOfWeek = 'Monday';
  dayOfWeek = 'Wednedsdy';

  // ts -> js / `tsc filename`
}
