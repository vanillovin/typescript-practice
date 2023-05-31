{
  // Utility Type이란? ✮ → ✩

  const obj = { name: 'ming' };
  // 접근법
  obj.name; // ming
  obj['name']; // ming

  // type도 index를 기반으로 결정 가능
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string type
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key1: Keys = 'gender';
  const key2: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'ming',
    gender: 'male',
  };
}
