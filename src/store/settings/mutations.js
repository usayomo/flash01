import state from "./state";

export function updateUseUncheckoutableNumbersState(state, boolean) {
  state.use_uncheckoutable_numbers = boolean;
}

export function updateMinScore(state, val) {
  state.min_score = val;
}

export function updateMaxScore(state, val) {
  state.max_score = val;
}

export function updateIsFatBull(state, boolean) {
  state.is_fat_bull = boolean;
}
