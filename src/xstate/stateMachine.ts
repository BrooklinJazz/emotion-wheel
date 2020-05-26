import { Machine } from "xstate";
import { EmoActions } from "./actions";

export const emotionStateMachine = Machine({
  id: "emotionMachine",
  initial: "init",
  states: {
    init: { on: { [EmoActions.START]: "selecting" } },
    selecting: {
      on: {
        [EmoActions.ANGER]: "anger",
        [EmoActions.FEAR]: "fear",
        [EmoActions.JOY]: "joy",
        [EmoActions.DISGUST]: "disgust",
        [EmoActions.SAD]: "sad",
        [EmoActions.SURPRISE]: "surprise"
      }
    },
    anger: {},
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {}
  }
});
