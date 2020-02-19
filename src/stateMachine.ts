import { Machine, interpret } from "xstate";
import { allAngerActions } from "./angerActions";
import { allDisgustActions } from "./disgustActions";

// TODO add fully fleshed states.
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed
// see example: https://xstate.js.org/viz/?gist=14bee9d8de6c10a5c48e0c9e1d3ec461 try to keep visualization up to date

export const objectFromArray = (arr = []) =>
arr.reduce((total, each) => {
  return {
    ...total,
    [each]: each
  };
}, {});

export const objectFromAction = arr =>
  arr.reduce(
    (total, each) => ({
      ...total,
      [each[0]]: { on: each[1] }
    }),
    {}
  );

export const initialActions = objectFromArray([
  "anger",
  "fear",
  "joy",
  "disgust",
  "sad",
  "surprise"
]);

export const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: initialActions },
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {},
    ...allAngerActions,
    ...allDisgustActions
  }
});
