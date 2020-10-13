import { action, Action } from 'easy-peasy';

interface AnimationModelState {
  counter: number;
}

interface AnimationModelActions {
  setCounter: Action<this>;
  resetCounter: Action<this>;
}

interface StoreModel extends AnimationModelState, AnimationModelActions {}

export const model: StoreModel = {
  counter: 0,
  setCounter: action((state) => {
    console.log('state ', state);
    state.counter = state.counter + 1;
  }),
  resetCounter: action((state) => {
    state.counter = 0;
  }),
};
