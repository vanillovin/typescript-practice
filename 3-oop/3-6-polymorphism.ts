{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕`);
      return { shots, hasMilk: false };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    // overwriting
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return { ...coffee, hasSugar: true };
    }
  }

  // CafeLatteMachine = CoffeeMachine
  // SweetCoffeeMaker = CoffeeMachine = CoffeeMaker
  // CoffeeMachine = CoffeeMaker
  // 고로 SweetCoffeeMaker = CoffeeMachine = CoffeeMaker
  // 이렇게 만들 수 있음 => const machines: CoffeeMaker[] = [
  const machines = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CafeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log('------------------------');
    machine.makeCoffee(1);
  });
  /*
  ------------------------
  grinding beans for 1    
  heating up... 🔥        
  Pulling 1 shots...☕     
  ------------------------
  grinding beans for 1    
  heating up... 🔥        
  Pulling 1 shots...☕     
  Steaming some milk... 🥛
  ------------------------
  grinding beans for 1    
  heating up... 🔥        
  Pulling 1 shots...☕     
  ------------------------
  */
}
