import { objectFromArray, objectFromAction } from "./stateMachine";

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
export const allAngerActions = objectFromAction([
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
]);
