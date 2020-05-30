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
    anger: {
      on: {
        let_down: "let_down",
        humiliated: "humiliated",
        bitter: "bitter",
        mad: "mad",
        aggressive: "aggressive",
        frustrated: "frustrated",
        distant: "distant",
        critical: "critical"
      }
    },
    fear: {},
    joy: {},
    disgust: {
      on: {
        disapproving: "disapproving",
        disappointed: "disappointed",
        awful: "awful",
        repelled: "repelled"
      }
    },
    sad: {},
    surprise: {},
    let_down: {},
    humiliated: {
      on: {
        disrespected: "disrespected",
        ridiculed: "ridiculed"
      }
    },
    bitter: {
      on: {
        indignant: "indignant",
        violated: "violated"
      }
    },
    mad: {
      on: {
        furious: "furious"
      }
    },
    aggressive: {
      on: {
        provoked: "provoked",
        hostile: "hostile"
      }
    },
    frustrated: {
      on: {
        infuriated: "infuriated",
        annoyed: "annoyed"
      }
    },
    distant: {
      on: {
        withdrawn: "withdrawn",
        numb: "numb"
      }
    },
    critical: {
      on: {
        skeptical: "skeptical",
        dismissive: "dismissive"
      }
    },
    disrespected: {},
    ridiculed: {},
    indignant: {},
    violated: {},
    furious: {},
    provoked: {},
    hostile: {},
    infuriated: {},
    annoyed: {},
    withdrawn: {},
    numb: {},
    skeptical: {},
    dismissive: {},
    disapproving: {},
    disappointed: {},
    awful: {},
    repelled: {}
  }
});
