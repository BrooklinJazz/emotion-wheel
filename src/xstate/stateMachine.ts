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
  id: 'emotionMachine',
  initial: 'init',
  states: {
    init: { on: { START: 'selecting' }},
    selecting: { on: { ANGER: 'anger' }},
    anger: {},
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {}
  }
})