import { Machine, interpret } from "xstate";
// TODO add fully fleshed states.
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed
// see example: https://xstate.js.org/viz/?gist=14bee9d8de6c10a5c48e0c9e1d3ec461 try to keep visualization up to date

const initialActions = {
  anger: "anger",
  fear: "fear",
  joy: "joy",
  disgust: "disgust",
  sad: "sad",
  surprise: "surprise"
};

const angerActions = {
  let_down: "let_down",
  humiliated: "humiliated",
  bitter: "bitter",
  mad: "mad",
  aggressive: "aggressive",
  frustrated: "frustrated",
  distant: "distant",
  critical: "critical"
}

const letDownActions = {
  betrayed: "betrayed",
  resentful: "resentful",
}

const humiliatedActions = {
  disrespected: "disrespected",
  ridiculed: "ridiculed",
}

const bitterActions = {
  indignant: "indignant",
  violated: "violated",
}

const madActions = {
  furious: "furious",
  jealous: "jealous",
}

const aggressiveActions = {
  provoked: "provoked",
  hostile: "hostile",
}

const frustratedActions = {
  infuriated: "infuriated",
  annoyed: "annoyed",
}

const distantActions = {
  withdrawn: "withdrawn",
  numb: "numb",
}

const criticalActions = {
  skeptical: "skeptical",
  dismissive: "dismissive",
}

const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: initialActions },
    anger: { on: angerActions },
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {},
    let_down: { on: letDownActions },
    humiliated: { on: humiliatedActions },
    bitter: { on: bitterActions },
    mad: { on: madActions },
    aggressive: { on: aggressiveActions },
    frustrated: { on: frustratedActions },
    distant: { on: distantActions },
    critical: { on: criticalActions },
    betrayed: {},
    resentful: {},
    disrespected: {},
    ridiculed: {},
    indignant: {},
    violated: {},
    furious: {},
    jealous: {},
    provoked: {},
    hostile: {},
    infuriated: {},
    annoyed: {},
    withdrawn: {},
    numb: {},
    skeptical: {},
    dismissive: {},
  }
});
