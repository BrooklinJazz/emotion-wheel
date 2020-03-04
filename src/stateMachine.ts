import { Machine, interpret } from "xstate";
import { allAngerActions } from "./angerActions";
import { allDisgustActions } from "./disgustActions";
import { objectFromArray } from "./objectFromArray";

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
    anger: {},
    ...allAngerActions,
    ...allDisgustActions
  }
});
