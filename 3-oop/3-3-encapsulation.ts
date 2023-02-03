{
  /**
   * # Encapsulation 캡슐화 시켜보기 (정보를 은닉!)
   *
   * ## class로 만든 coffee maker의 문제점
   * - 외부에서 object 상태를 유효하지 않게 설정 가능한 위험한 상황
   *
   * ## 다양한 레벨의 정보 은닉
   * - public : 공개적. 따로 작성하지 않으면 기본적으로 설정. 보편적으론 명시 작성 x
   * - private : 비공개라는 키워드. 외부에서 보거나 접근할 수 없게 만듦
   * - protected : 외부에서 접근할 수 없지만 상속받은 자식 클래스에서 접근 가능
   *
   * => 외부에 노출하고 접근할 수 있는 것은 무엇인지 생각해 내부 데이터를 결정
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    // static 키워드 함수는 생성자를 이용해 생성하는 것을 금지하기 위해 사용
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    // 외부에서 직접적 설정 x public 함수를 통해 내부 상태 변경!
    fillCoffeeBeans(beans: number) {
      // 유효성 검사를 이용해 안정성을 높여 코딩할 수 있음
      if (beans < 0) {
        // 메시지는 친절하게 작성할수록 좋음 :)
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans; // 정상적인 경우 실행
    }

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

  // const maker = new CoffeeMaker(32);
  // maker.coffeeBeans = -34 // invalid
  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);
}
