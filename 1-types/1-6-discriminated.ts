{
  /**
   * Discriminated Union 🚀
   * union 타입의 차별화하는 구분할수있는
   * function: login -> success, fail ⏱
   */

  // 각각union안에동일한result키를가지고있지만
  // 어떤state냐에따라서다른값다른타입이지정돼있음
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  function printLoginState(state: LoginState) {
    // state.result => success or fail
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  printLoginState({ result: 'fail', reason: 'oops' });

  // union을 사용할 때나 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로써
  // 조금 더 직관적이고 구분하기 쉽게 만든다
}
