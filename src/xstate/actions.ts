/**
 * Basic
 */

const Basic = {
  FEAR: "fear",
  JOY: "joy",
  DISGUST: "disgust",
  SAD: "sad",
  SURPRISE: "surprise"
};

/**
 * Anger
 */

const Anger = {
  LET_DOWN: "let_down",
  HUMILIATED: "humiliated",
  BITTER: "bitter",
  MAD: "mad",
  AGGRESSIVE: "aggressive",
  FRUSTRATED: "frustrated",
  DISTANT: "distant",
  CRITICAL: "critical"
};
const Mad = {
  FURIOUS: "furious",
  JEALOUS: "furious"
};
const Aggressive = {
  PROVOKED: "provoked",
  HOSTILE: "hostile"
};

const Frustrated = {
  INFURIATED: "infuriated",
  ANNOYED: "annoyed"
};

const Distant = {
  WITHDRAWN: "withdrawn",
  NUMB: "numb"
};

const Critical = {
  SKEPTICAL: "skeptical",
  DISMISSIVE: "dismissive"
};

const Humiliated = {
  DISRESPECTED: "distrespected",
  RIDECULED: "redeculed"
};

const Bitter = {
  INDIGNANT: "indignant",
  VIOLATED: "violated"
};

/**
 * Disgust Actions
 */

const Disgust = {
  DISAPPROVING: "disapproving",
  DISAPPOINTED: "disappointed",
  AWFUL: "awful",
  REPELLED: "repelled"
};

const Disapproving = {
  JUDGEMENTAL: "judgemental",
  EMBARASSED: "embarassed"
};

const Disappointed = {
  APPALLED: "appalled",
  REVOLTED: "revolted"
};

const Awful = {
  NAUSEATED: "nauseated",
  DETESTABLE: "detestable"
};

const Repelled = {
  HORRIFIED: "horrified",
  HESITANT: "hesitant"
};

/**
 * EmoActions
 */

export const EmoActions = {
  START: "selecting",

  Basic,
  Anger: {
    ...Anger,
    Humiliated,
    Bitter,
    Mad,
    Aggressive,
    Frustrated,
    Distant,
    Critical
  },
  Disgust: {
    ...Disgust,
    Disapproving,
    Disappointed,
    Awful,
    Repelled
  }
};

export const EmoStates = { 
    ...EmoActions,
    SELECTING: "selecting"
 };
