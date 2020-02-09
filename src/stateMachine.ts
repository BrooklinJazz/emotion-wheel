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

export const emotionStateMachine = Machine({
  id: "toggle",
  initial: "init",
  states: {
    init: { on: initialActions },
    bad: {
      on: { cancel: "init" },
      initial: "bad",
      states: {
        bad: { on: { bored: "bored" } },
        bored: {
          initial: "bored",
          states: {
            bored: {on: {indifferent: "indifferent"}},
            indifferent: {}
          }
        }
      }
    },
    fearful: { on: { cancel: "init" } },
    angry: { on: { cancel: "init" } },
    disgusted: { on: { cancel: "init" } },
    sad: { on: { cancel: "init" } },
    happy: { on: { cancel: "init" } },
    surprised: { on: { cancel: "init" } }
  }
});
