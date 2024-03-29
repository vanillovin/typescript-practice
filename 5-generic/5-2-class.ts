// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

const best: SimpleEither<
  {
    name: string;
  },
  string
> = new SimpleEither({ name: 'v' }, 'hello');

// interface Either {
//   left: () => number;
//   right: () => number;
// }

// class SimpleEither implements Either {
//   constructor(private leftValue: number, private rightValue: number) {}
//   left(): number {
//     return this.leftValue;
//   }
//   right(): number {
//     return this.rightValue;
//   }
// }
// const either = new SimpleEither(4, 5);
// either.left(); // 4
// either.right(); // 5
