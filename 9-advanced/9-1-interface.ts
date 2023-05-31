{
  // Type alias vs Interface
  // Interface? 규격 사항. 의사소통. 계약서
  // Types? 어떠한 데이터를 담을 수 있을지 데이터의 모습

  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }
  // interface PositionInterface {
  //   z: number;
  // }

  // object ★
  // 둘 다 가능! 오브젝트 형태로 만들 수 있음
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class ★
  // 둘 다 클래스에서 구현이 가능함
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  // Extends
  // 인터페이스 - 상속을 통해서 확장
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  // 타입 - intersection을 이용해 묶은 타입
  type ZPositionType = PositionType & { z: number };

  // only interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PositionType {
  // }

  //  Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string

  type NumberType = number;
  type Direction = 'left' | 'right';
}
