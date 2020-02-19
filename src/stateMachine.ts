import { Machine, interpret } from "xstate";
// TODO add fully fleshed states.
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed
// see example: https://xstate.js.org/viz/?gist=14bee9d8de6c10a5c48e0c9e1d3ec461 try to keep visualization up to date

export const initialActions = {
  anger: "anger",
  fear: "fear",
  joy: "joy",
  disgust: "disgust",
  sad: "sad",
  surprise: "surprise"
};

const boredStateMachine = {
  initial: "init",
  states: {
    init: { on: { indifferent: "indifferent", apathetic: "apathetic" } },
    indifferent: {},
    apathetic: {}
  }
};

export const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: initialActions },
    anger: {},
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {}
  }
});
