{
  /**
   * # 절차지향적으로 커피기계 만들기!
   * 데이터와 함수들이 밖에서 서로 뒹굴고 있음.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7; // 커피중량상수병수
  let coffeeBeansGram: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeansGram < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
      // 에러가 던져지면 밑에 라인들 실행 x
    }
    coffeeBeansGram -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeansGram += 3 * BEANS_GRAMM_PER_SHOT; // 커피콩충전
  const coffee = makeCoffee(2);
  console.log(coffee);
  // { shots: 2, hasMilk: false }
}
