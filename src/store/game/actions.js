export function scoreInitAction({ commit }, payload) {
  // スコア生成
  return getRandomInt(
    payload.min,
    payload.max,
    payload.uncheckoutable_numbers
  ).then(result => {
    console.log("called action: " + result);
    // ミューテーション呼び出し
    commit("updateScore", result);
  });
}

// スコア初期化処理
function getRandomInt(min, max, use_uncheckoutable_numbers) {
  const uncheckoutable_numbers = [163, 166, 169, 172, 173, 175, 176, 178, 179];

  return new Promise(resolve => {
    getRandomIntLoopUnit(min, max).then(result => {
      if (
        !use_uncheckoutable_numbers &&
        uncheckoutable_numbers.includes(result)
      ) {
        getRandomInt(min, max, use_uncheckoutable_numbers).then(() =>
          resolve(result)
        );
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
    console.log("rtn: " + rtn);
    resolve(rtn);
  });
}
