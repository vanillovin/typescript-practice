// https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints
const obj = { name: 'ming', age: 20 };
const obj2 = { animal: '🦌' };

console.log(getValue(obj, 'name')); // ming
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🦌

// 이 k라는 것은 그 오브젝트 T 안에 있는 키들 중 하나여야만 하고
// 리턴되는 것은 그 오브젝트에 있는 그 키가 가리키고 있는 value 타입이어야 된다 라고 명시
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// console.log(getValue(obj, 'animal')); // 빨간줄
getValue(obj2, 'animal');
