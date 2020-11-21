// スコア初期化処理
export function scoreInitAction({ commit, state }) {
  // スコア生成
  return getRandomInt(state).then(result => {
    // ミューテーション呼び出し
    commit("updateScore", result);
  });
}

// 2つの値の間のランダムな整数を得る（再帰呼び出し）
function getRandomInt(state) {
  return new Promise(resolve => {
    getRandomIntLoopUnit(state.min_score, state.max_score).then(result => {
      if (
        !state.use_uncheckoutable_numbers &&
        state.uncheckoutable_numbers.includes(result)
      ) {
        getRandomInt(state).then(() => resolve(result));
      } else {
        resolve(result);
      }
    });
  });
}

// 2つの値の間のランダムな整数を得る
function getRandomIntLoopUnit(min, max) {
  return new Promise(resolve => {
    /* ループ処理本体 */
    var rtn =
      Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) +
      Math.ceil(min); // The maximum is exclusive and the minimum is inclusive

    resolve(rtn);
  });
}

export function hitAction({ dispatch, commit, state }, payload) {
  var point_hit = payload.number;
  // ファットブル
  if (state.is_fat_bull && payload.number == 25) {
    point_hit = 50;
  }

  if (state.darts_left == 3) {
    commit("update1stDart", point_hit);
  } else if (state.darts_left == 2) {
    commit("update2ndDart", point_hit);
  } else if (state.darts_left == 1) {
    commit("update3rdDart", point_hit);
  }

  // 次のゲームへ
  if (state.is_end_game) {
    dispatch("scoreInitAction");
    commit("update1stDart", "-");
    commit("update2ndDart", "-");
    commit("update3rdDart", "-");
    commit("updateIsEndGame", false);
    commit("updateDartLeft", 3);

    return;
  }

  if (state.score - point_hit == 0) {
    commit("updateScore", "NICE OUT!");
    commit("updateDartLeft", 0);
    commit("updateIsEndGame", true);

    return;
  } else if (state.score - point_hit > 0) {
    commit("updateScore", state.score - point_hit);
    commit("updateDartLeft", state.darts_left - 1);
  } else if (state.score - point_hit < 0) {
    commit("updateScore", "BUST");
    commit("updateDartLeft", 0);
    commit("updateIsEndGame", true);

    return;
  }

  // 残りダーツ無し
  if (state.darts_left == 0) {
    commit("updateScore", "No darts left");
    commit("updateIsEndGame", true);

    return;
  }
}

export function cannotCheckoutButtonAction({ dispatch, commit, state }) {
  // 次のゲームへ
  if (state.is_end_game) {
    dispatch("scoreInitAction");
    commit("updateDartLeft", 3);
    commit("updateIsEndGame", false);

    return;
  }

  if (state.uncheckoutable_numbers.includes(state.score)) {
    commit("updateScore", "Yes, you can't checkout " + state.score + ".");
  } else {
    commit("updateScore", "You can checkout " + state.score + ".");
  }
  commit("updateIsEndGame", true);
}
