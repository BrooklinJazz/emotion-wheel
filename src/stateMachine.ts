import { Machine, interpret } from "xstate";

export const initialActions = {
  bad: "bad",
  fearful: "fearful",
  angry: "angry",
  disgusted: "disgusted",
  sad: "sad",
  happy: "happy",
  surprised: "surprised"
};

const badStateMachine = {
  on: { cancel: "init" },
  initial: "bad",
  states: {
    bad: { on: { bored: "bored" } },
    bored: {
      initial: "bored",
      states: {
        bored: { on: { indifferent: "indifferent" } },
        indifferent: {}
      }
    }
  }
};

export const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: { start: "start" } },
    start: {
      on: { cancel: "init" },
      initial: "init",
      states: {
        init: {
          on: initialActions
        },
        bad: badStateMachine,
        fearful: {},
        angry: {},
        disgusted: {},
        sad: {},
        happy: {},
        surprised: {}
      }
    }
  }
});
