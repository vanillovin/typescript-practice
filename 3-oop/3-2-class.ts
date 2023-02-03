{
  /**
   * # 객체지향적으로 커피기계 만들기 (static 사용)
   * Class = 청사진 = template
   * - 멤버변수 : object마다 새로 만들어질 데이터가 존재하면
   * - static
   *   - 클래스 레벨에서 함께 공유하고 활용.
   *   - 멤버 변수뿐만 아니라 함수에서도 적용 가능
   *   - 예) new Math() x => Math.abs
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level 클래스와연결 오브젝트마다생성x
    coffeeBeans: number = 0; // instance (object) level

    // class를 가지고 object를 만들 때 항상 처음에 호출되는 함수
    // instance를 만들면서 설정하고 싶은 게 있다면!
    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // constructor를 호출하지 않고 새로운 커피 기계를 생성
    // 클래스 내부에 있는 어떤 속성값도 필요로하지않으므로 static 붙이기
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 멤버변수접근 this(class).val
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // new 클래스의 인스턴스 생성 / () 생성자 호출
  const maker = new CoffeeMaker(32);
  console.log(maker); // CoffeeMaker { coffeeBeans: 32 }
  const maker2 = new CoffeeMaker(14);
  console.log(maker2); // CoffeeMaker { coffeeBeans: 14 }

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3); // CoffeeMaker { coffeeBeans: 3 }
}
