{
  /**
   * Discriminated Union ๐
   * union ํ์์ ์ฐจ๋ณํํ๋ ๊ตฌ๋ถํ ์์๋
   * function: login -> success, fail โฑ
   */

  // ๊ฐ๊ฐunion์์๋์ผํresultํค๋ฅผ๊ฐ์ง๊ณ ์์ง๋ง
  // ์ด๋คstate๋์๋ฐ๋ผ์๋ค๋ฅธ๊ฐ๋ค๋ฅธํ์์ด์ง์ ๋ผ์์
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
      console.log(`๐ ${state.response.body}`);
    } else {
      console.log(`๐ญ ${state.reason}`);
    }
  }
  printLoginState({ result: 'fail', reason: 'oops' });

  // union์ ์ฌ์ฉํ  ๋๋ ์ด๋ค ์ผ์ด์ค๋  ๊ณตํต์ ์ธ ํ๋กํผํฐ๋ฅผ ๊ฐ์ง๊ณ  ์์์ผ๋ก์จ
  // ์กฐ๊ธ ๋ ์ง๊ด์ ์ด๊ณ  ๊ตฌ๋ถํ๊ธฐ ์ฝ๊ฒ ๋ง๋ ๋ค
}
