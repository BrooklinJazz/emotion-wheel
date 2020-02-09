import { Machine, interpret } from "xstate";
// TODO add fully fleshed states. 
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed

export const initialActions = {
  bad: "bad",
  fearful: "fearful",
  angry: "angry",
  disgusted: "disgusted",
  sad: "sad",
  happy: "happy",
  surprised: "surprised"
};

const boredStateMachine = {
  initial: "init",
  states: {
    init: { on: { indifferent: "indifferent", apathetic: "apathetic" } },
    indifferent: {},
    apathetic: {}
  }
}
const busyStateMachine = {
  initial: "init",
  states: {
    init: { on: { pressured: "pressured", rushed: "rushed" } },
    pressured: {},
    rushed: {}
  }
}

const badStateMachine = {
  on: { cancel: "init" },
  initial: "init",
  states: {
    init: { on: { bored: "bored" } },
    bored: boredStateMachine,
    busy: busyStateMachine
  }
};

export const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: initialActions },
    bad: badStateMachine,
    fearful: {},
    angry: {},
    disgusted: {},
    sad: {},
    happy: {},
    surprised: {}
  }
});
