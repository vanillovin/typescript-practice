interface Employee {
  pay(): void;
}

// 정직원
class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFullTime() {}
}

class ParTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아 추상적인 타입으로 다시 리턴하는 함수 X
// 세부 클래스 정보를 잃어버림. 정말 자신 있다면 as casting
// function payBad(employee: Employee): Employee {
//   employee.pay();
//   return employee;
// }

// 제네릭 자동 월급 지급 함수
// Employee를 확장한 애들만 가능해!
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ming = new FullTimeEmployee();
const bob = new ParTimeEmployee();
ming.workFullTime();
bob.workPartTime();

// const mingAfterPay = pay(ming) as FullTimeEmployee;
// mingAfterPay.pay(); // 세부 클래스의 정보를 잃어버려 지불하는 거밖에 없음
// const bobAfterPay = pay(bob);

const mingAfterPay = pay(ming);
const bobAfterPay = pay(bob);
