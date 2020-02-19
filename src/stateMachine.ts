import { Machine, interpret } from "xstate";
// TODO add fully fleshed states.
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed
// see example: https://xstate.js.org/viz/?gist=14bee9d8de6c10a5c48e0c9e1d3ec461 try to keep visualization up to date
const objectFromArray = (arr = []) =>
  arr.reduce((total, each) => {
    return {
      ...total,
      [each]: each
    };
  }, {});

const initialActions = objectFromArray([
  "anger",
  "fear",
  "joy",
  "disgust",
  "sad",
  "surprise"
]);

const angerActions = objectFromArray([
  "let_down",
  "humiliated",
  "bitter",
  "mad",
  "aggressive",
  "frustrated",
  "distant",
  "critical"
]);

const letDownActions = objectFromArray(["betrayed", "resentful"]);

const humiliatedActions = {
  disrespected: "disrespected",
  ridiculed: "ridiculed"
};

const bitterActions = {
  indignant: "indignant",
  violated: "violated"
};

const madActions = {
  furious: "furious",
  jealous: "jealous"
};

const aggressiveActions = {
  provoked: "provoked",
  hostile: "hostile"
};

const frustratedActions = {
  infuriated: "infuriated",
  annoyed: "annoyed"
};

const distantActions = {
  withdrawn: "withdrawn",
  numb: "numb"
};

const criticalActions = {
  skeptical: "skeptical",
  dismissive: "dismissive"
};

const emptyObjFromArr = arr =>
  arr.reduce(
    (total, each) => ({
      ...total,
      [each]: {}
    }),
    {}
  );

const actionObjFromKeyAction = arr =>
  arr.reduce(
    (total, each) => ({
      ...total,
      [each[0]]: { on: each[1] }
    }),
    {}
  );

const allAngerActions = actionObjFromKeyAction([
  ["anger", angerActions],
  ["let_down", letDownActions],
  ["humiliated", humiliatedActions],
  ["bitter", bitterActions],
  ["mad", madActions],
  ["aggressive", aggressiveActions],
  ["frustrated", frustratedActions],
  ["distant", distantActions],
  ["critical", criticalActions],
  ["betrayed"],
  ["resentful"],
  ["disrespected"],
  ["ridiculed"],
  ["indignant"],
  ["violated"],
  ["furious"],
  ["jealous"],
  ["provoked"],
  ["hostile"],
  ["infuriated"],
  ["annoyed"],
  ["withdrawn"],
  ["numb"],
  ["skeptical"],
  ["dismissive"]
])

const emotionStateMachine = Machine({
  id: "Emotion Wheel",
  initial: "init",
  states: {
    init: { on: initialActions },
    fear: {},
    joy: {},
    disgust: {},
    sad: {},
    surprise: {},
    ...allAngerActions,
  }
});
