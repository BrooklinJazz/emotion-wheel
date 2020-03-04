import { objectFromArray } from "./objectFromArray";
import { objectFromAction } from "./objectFromAction";

const disgustActions = objectFromArray([
  "disapproving",
  "disappointed",
  "awful",
  "repelled"
]);
const disapprovingActions = objectFromArray([
  "judgmental",
  "embarrassed"
]);
const disappointedActions = objectFromArray([
  "appalled",
  "revolted"
]);
const awfulActions = objectFromArray([
  "nauseated",
  "detestable"
]);
const repelledActions = objectFromArray([
  "horrified",
  "hesitant"
]);

export const allDisgustActions = objectFromAction([
  ["disgust", disgustActions],
  ["disapproving", disapprovingActions],
  ["disappointed", disappointedActions],
  ["awful", awfulActions],
  ["repelled", repelledActions],
  ["judgmental"],
  ["embarrassed"],
  ["appalled"],
  ["revolted"],
  ["nauseated"],
  ["detestable"],
  ["horrified"],
  ["hesitant"],
]);
