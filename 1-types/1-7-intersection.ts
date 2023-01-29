{
  /**
   * Intersection Types: &
   * Union은 발생할 수 있는 모든 케이스 중 한 가지만 선택
   * Intersection은 그 모든 것을 다 합한 성격
   * 다양한 타입들을 하나로 묶어서 선언할 수 있음!
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'ellie',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
