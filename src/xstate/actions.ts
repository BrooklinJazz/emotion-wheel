/**
 * Basic
 */

export const BasicActions = {
  ANGER: "anger",
  FEAR: "fear",
  JOY: "joy",
  DISGUST: "disgust",
  SAD: "sad",
  SURPRISE: "surprise"
};

/**
 * Anger
 */

export const Anger = {
  LET_DOWN: "let_down",
  HUMILIATED: "humiliated",
  BITTER: "bitter",
  MAD: "mad",
  AGGRESSIVE: "aggressive",
  FRUSTRATED: "frustrated",
  DISTANT: "distant",
  CRITICAL: "critical"
};

export const Mad = {
  FURIOUS: "furious",
  JEALOUS: "furious"
};
export const Aggressive = {
  PROVOKED: "provoked",
  HOSTILE: "hostile"
};

export const Frustrated = {
  INFURIATED: "infuriated",
  ANNOYED: "annoyed"
};

export const Distant = {
  WITHDRAWN: "withdrawn",
  NUMB: "numb"
};

export const Critical = {
  SKEPTICAL: "skeptical",
  DISMISSIVE: "dismissive"
};

export const Humiliated = {
  DISRESPECTED: "distrespected",
  RIDECULED: "redeculed"
};

export const Bitter = {
  INDIGNANT: "indignant",
  VIOLATED: "violated"
};

/**
 * Disgust Actions
 */

export const Disgust = {
  DISAPPROVING: "disapproving",
  DISAPPOINTED: "disappointed",
  AWFUL: "awful",
  REPELLED: "repelled"
};

export const Disapproving = {
  JUDGEMENTAL: "judgemental",
  EMBARASSED: "embarassed"
};

export const Disappointed = {
  APPALLED: "appalled",
  REVOLTED: "revolted"
};

export const Awful = {
  NAUSEATED: "nauseated",
  DETESTABLE: "detestable"
};

export const Repelled = {
  HORRIFIED: "horrified",
  HESITANT: "hesitant"
};

/**
 * EmoActions
 */

const AngerActions = {
  ...Anger,
  ...Humiliated,
  ...Bitter,
  ...Mad,
  ...Aggressive,
  ...Frustrated,
  ...Distant,
  ...Critical
};

const DisgustActions = {
  ...Disgust,
  ...Disapproving,
  ...Disappointed,
  ...Awful,
  ...Repelled
};

export const EmoActions = {
  START: "selecting",
  ...BasicActions,
  ...AngerActions,
  ...DisgustActions
};

export const EmoStates = {
  ...EmoActions,
  SELECTING: "selecting"
};
