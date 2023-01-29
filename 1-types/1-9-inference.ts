/**
 * Type Inference 타입 추론
 * 원시 타입같이 간단한 경우 생략할 수 있지만 함수는 코드가 많으니 정확하게 명시하기 (void 제외)
 * 자동으로 명시해 주지만 따로 리턴되는 타입이 있다면 작성하는 습관 들이기
 * 팀이나 프로젝트 할 때 정확하게 스타일 가이드 확정. 가독성을 생각해서 일관성 있게 코딩하기!
 */

let text = 'hello';
// text = 1 // ts가 string 타입으로 유추

// 인자에 따로 타입을 명시하지 않으면 any 타입을 갖고 있음 (회색 경고 닷닷닷)
function print(message = 'hello') {
  console.log(message);
}
print('hello');

// function add(x: number, y: number)
function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
// result는 자동으로 number 타입으로 결정됨
