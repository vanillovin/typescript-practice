{
  // Array
  const fruits: string[] = ['🍓', '🍌'];
  const scores: Array<number> = [1, 2, 4];
  // 전달된 인자를 함수 내부에서 변경하지 않도록 readonly 타입으로 보장
  // 데이터를 읽을 수만 있음. 변경 업데이트 X

  function printArray(fruits: readonly string[]) {
    // fruits.push X, readonly Array<string> 는 허용되지 않음
    // 일관성 있게 string[] number[] 문법!
  }

  // Tuple -> interface, type alias, class 등으로 대체
  // 서로 다른 타입의 데이터를 담을 수 있음. 권장 x
  // 무언가를 동적으로 리턴할 때 유용. 더 생각하기
  let student: [string, number]; // 고정된사이즈의서로다른타입
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // 가독성↓
  const [name, age] = student; // 사용하는곳에서결정하는단점

  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  // 리액트의 useState가 튜플을 굉장히 유연하게 잘 활용한 경우라고 볼 수 있음
  // 사용자가 어떠한 변수를 다양한 초깃값으로 읽고 지정하고 업데이트할 수 있는 api 두 가지를
  // 동적으로 만들어 리턴하고, 사용하는 사람이 각각 이름을 정해서 사용할 수 있도록 만듦.
  // => 무언가를 동적으로 리턴해 사용자가 이름을 정의해서 써야 하거나, 클래스나 인터페이스로 묶기 애매한 경우
  // 그 외의 경우엔 interface나 type alias로 쓸 수 있는지 잘 생각하고 사용
}
