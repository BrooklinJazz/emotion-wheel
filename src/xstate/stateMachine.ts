import { Machine } from "xstate";
import { EmoActions, EmoStates } from "./actions";

export const emotionStateMachine = Machine({
  id: "emotionMachine",
  initial: EmoStates.INIT,
  states: {
    init: { on: { [EmoActions.START]: EmoStates.SELECTING } },
    [EmoStates.SELECTING]: {
      on: {
        [EmoActions.ANGER]: EmoStates.ANGER,
        [EmoActions.FEAR]: EmoStates.FEAR,
        [EmoActions.JOY]: EmoStates.JOY,
        [EmoActions.DISGUST]: EmoStates.DISGUST,
        [EmoActions.SAD]: EmoStates.SAD,
        [EmoActions.SURPRISE]: EmoStates.SURPRISE
      }
    },
    [EmoStates.ANGER]: {
      on: {
        [EmoActions.LET_DOWN]: EmoStates.LET_DOWN,
        [EmoActions.HUMILIATED]: EmoStates.HUMILIATED,
        [EmoActions.BITTER]: EmoStates.BITTER,
        [EmoActions.MAD]: EmoStates.MAD,
        [EmoActions.AGGRESSIVE]: EmoStates.AGGRESSIVE,
        [EmoActions.FRUSTRATED]: EmoStates.FRUSTRATED,
        [EmoActions.DISTANT]: EmoStates.DISTANT,
        [EmoActions.CRITICAL]: EmoStates.CRITICAL
      }
    },
    [EmoStates.FEAR]: {},
    [EmoStates.JOY]: {},
    [EmoStates.DISGUST]: {
      on: {
        [EmoActions.DISAPPROVING]: EmoStates.DISAPPROVING,
        [EmoActions.DISAPPOINTED]: EmoStates.DISAPPOINTED,
        [EmoActions.AWFUL]: EmoStates.AWFUL,
        [EmoActions.REPELLED]: EmoStates.REPELLED
      }
    },
    [EmoStates.SAD]: {},
    [EmoStates.SURPRISE]: {},
    [EmoStates.LET_DOWN]: {},
    [EmoStates.HUMILIATED]: {
      on: {
        [EmoActions.DISRESPECTED]: EmoStates.DISRESPECTED,
        [EmoActions.RIDICULED]: EmoStates.RIDICULED
      }
    },
    [EmoStates.BITTER]: {
      on: {
        [EmoActions.INDIGNANT]: EmoStates.INDIGNANT,
        [EmoActions.VIOLATED]: EmoStates.VIOLATED
      }
    },
    [EmoStates.MAD]: {
      on: {
        [EmoActions.FURIOUS]: EmoStates.FURIOUS
      }
    },
    [EmoStates.AGGRESSIVE]: {
      on: {
        [EmoActions.PROVOKED]: EmoStates.PROVOKED,
        [EmoActions.HOSTILE]: EmoStates.HOSTILE
      }
    },
    [EmoStates.FRUSTRATED]: {
      on: {
        [EmoActions.INFURIATED]: EmoStates.INFURIATED,
        [EmoActions.ANNOYED]: EmoStates.ANNOYED
      }
    },
    [EmoStates.DISTANT]: {
      on: {
        [EmoActions.WITHDRAWN]: EmoStates.WITHDRAWN,
        [EmoActions.NUMB]: EmoStates.NUMB
      }
    },
    [EmoStates.CRITICAL]: {
      on: {
        [EmoActions.SKEPTICAL]: EmoStates.SKEPTICAL,
        [EmoActions.DISMISSIVE]: EmoStates.DISMISSIVE
      }
    },
    [EmoStates.DISRESPECTED]: {},
    [EmoStates.RIDICULED]: {},
    [EmoStates.INDIGNANT]: {},
    [EmoStates.VIOLATED]: {},
    [EmoStates.FURIOUS]: {},
    [EmoStates.PROVOKED]: {},
    [EmoStates.HOSTILE]: {},
    [EmoStates.INFURIATED]: {},
    [EmoStates.ANNOYED]: {},
    [EmoStates.WITHDRAWN]: {},
    [EmoStates.NUMB]: {},
    [EmoStates.SKEPTICAL]: {},
    [EmoStates.DISMISSIVE]: {},
    [EmoStates.DISAPPROVING]: {},
    [EmoStates.DISAPPOINTED]: {},
    [EmoStates.AWFUL]: {},
    [EmoStates.REPELLED]: {}
  }
});
