{
  // JavaScript
  // old: var π©
  // νΈμ΄μ€νκ³Ό μμνμ§λͺ»νλ¬Έμ  λ°μ
  var bar = 5;
  bar = 1;

  // let (es6)
  let name = 'chocola';
  name = 'vanilla';

  // const
  const con = 0;
  // con = 1; // error

  /**
   * JavaScript Data Types
   * Primitive μμ: number, string, boolean, bigint, symbol, null, undefined
   * Object μ‘°κΈλλ³΅μ‘: function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined: κ°μ΄ μμ§ κ²°μ λμ§ μμλ€
  let nickname: undefined; // λ¨λμ μ¬μ©xπ©
  let age: number | undefined; // | = or
  age = 1;
  age = undefined;
  function find(): number | undefined {
    return undefined; // λ¬΄μΈκ°κ° μκ±°λ μμ λ λ³΄νΈμ μΌλ‘ undefinedλ₯Ό λ§μ΄ μ΄μ©
  }

  // null: λͺννκ² λΉμλ€
  let person: null; // π©
  let person2: string | null;

  /**
   * unknown κ°λ₯νμ¬μ©xπ©
   * μ΄λ€ μ’λ₯μ λ°μ΄ν°κ° λ΄κΈΈμ§ μ μ μμ. λ¬΄μ¨ νμμΈμ§ λͺ°λΌ.
   * - μ μλ κ±ΈκΉ? νμμ€ν¬λ¦½νΈλ νμμ΄ μλ μλ°μ€ν¬λ¦½νΈμ μ°λν΄μ μΈ μ μκΈ° λλ¬Έμ
   * νμ€μμ μμ€ λΌμ΄λΈλ¬λ¦¬λ₯΄ μ΄μ©νλ κ²½μ°, μμ€μμ λ¦¬ν΄νλ νμμ λͺ¨λ₯Ό μ μμ λ
   * μ¬μ©ν  μ μμ§λ§ μ΄λ° κ²½μ°λ κ°λ₯νλ©΄ κ΅¬μ²΄μ μΌλ‘ νμμ μ§μ ν΄μ μ°λ κ²μ΄ μ’μ.
   */
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  /**
   * any π©π©π©
   * λ¬΄μμ΄λ  ν λΉν  μ μλ€.
   * unknownμλͺ¨λ₯΄κ² μ΄ anyλΉλΉνκ²μ΄λ€κ²μ΄λ λ€λ΄μμμμ΄
   * νμμ λν  μ μλ λ°©λ²μ΄ μμ λ μ λ§ λΆκ°νΌν κ²½μ°
   */
  let anything: any = 0;
  anything = 'hello';

  // void: μλ¬΄λ° κ°λ λ¦¬ν΄νμ§ μμ (μλ΅ κ°λ₯ - νμ¬λ νμ μ€νμΌ κ°μ΄λ λ°λ₯΄κΈ°)
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π©

  /**
   * never
   * ν¨μμμ λ¦¬ν΄ν  μ μλ λ λ€λ₯Έ νμ.
   * λ¦¬ν΄νμ§ μλ ν¨μ? μΈμ  μ¬μ©?
   * - μ νλ¦¬μΌμ΄μμμ μ΄λ ν μλ¬λ₯Ό λμ§ λ (μλ¬ νΈλ€λ§)
   * - μ±μμ μ λ§ μμμΉ λͺ»ν, νΈλ€λ§ν  μ μλ μλ¬κ° λ°μνμ λ
   * - ν¨μμμ μ λ λ¦¬ν΄λμ§ μλ κ²½μ°λ₯Ό λͺμνκΈ° μν΄ μ¬μ©
   */
  function throwError(message: string): never {
    // 1. (error) message -> server (log λ¨κΈ°κΈ°)
    throw new Error(message);
    // 2. while (true) { μμμμλ¬λ₯Όλμ§λ©΄ Unreachable code detected. λλ¬ν μμλμ½λ }
    // return; μ΄ μλ΅λ κ²½μ°
  }
  let neverEnding: never; // π©

  /**
   * object
   * μμ νμμ μ μΈν λͺ¨λ  κ°μ²΄ νμμ ν λΉν  μ μμ
   * μ΄μ²λΌ κ΄λ²μνκ³  μΆμμ μΈ μ΄λ€ κ²μ΄λ  λ΄μ μ μλ νμμ π©
   * κ°λ₯ν κ΅¬μ²΄μ μΌλ‘ μ΄λ€ νμμΈμ§ λͺμν΄μ μμ±νκΈ°!
   */
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'cocoa' });
  acceptSomeObject({ animal: 'rab' });
}
