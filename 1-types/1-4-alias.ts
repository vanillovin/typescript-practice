{
  /**
   * 타입스크립트의 꽃 🌷 Type Alias
   * 새로운 타입을 내가 정의할 수 있음.
   */

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    // animal: 'dog' error
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let myName: Name;
  // myName = 'a';
  myName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
