{
  /**
   * Union Types: OR
   * 발생할 수 있는 다양한 케이스 중 하나를 정하고 싶을 때
   * 활용도가 굉장히 높은 타입
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('left');
  move('up');
  // move('home');

  type TileSize = 8 | 16 | 32;
  // const tile: TileSize = 7;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  // 로그인함수를호출해서성공하면성공했을때네트워크에서받아온response를리턴
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  // login():  SuccessState | FailState ->
  type LoginState = SuccessState | FailState;

  // login(id: string, password: string): Promise<LoginState>
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // success -> 🎉 body / fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
