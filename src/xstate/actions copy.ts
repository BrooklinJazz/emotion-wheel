// just keeping this here for now incase we decide to use capital case actions.

/**
 * Basic
 */

const Basic = {
  FEAR: "FEAR",
  JOY: "JOY",
  DISGUST: "DISGUST",
  SAD: "SAD",
  SURPRISE: "SURPRISE"
};

/**
 * Anger
 */

const Anger = {
  LET_DOWN: "LET_DOWN",
  HUMILIATED: "HUMILIATED",
  BITTER: "BITTER",
  MAD: "MAD",
  AGGRESSIVE: "AGGRESSIVE",
  FRUSTRATED: "FRUSTRATED",
  DISTANT: "DISTANT",
  CRITICAL: "CRITICAL"
};
const Mad = {
  FURIOUS: "FURIOUS",
  JEALOUS: "JEALOUS"
};
const Aggressive = {
  PROVOKED: "PROVOKED",
  HOSTILE: "HOSTILE"
};

const Frustrated = {
  INFURIATED: "INFURIATED",
  ANNOYED: "ANNOYED"
};

const Distant = {
  WITHDRAWN: "WITHDRAWN",
  NUMB: "NUMB"
};

const Critical = {
  SKEPTICAL: "SKEPTICAL",
  DISMISSIVE: "DISMISSIVE"
};

const Humiliated = {
  DISRESPECTED: "DISRESPECTED",
  RIDECULED: "RIDECULED"
};

const Bitter = {
  INDIGNANT: "INDIGNANT",
  VIOLATED: "VIOLATED"
};

/**
 * Disgust Actions
 */

const Disgust = {
  DISAPPROVING: "DISAPPROVING",
  DISAPPOINTED: "DISAPPOINTED",
  AWFUL: "AWFUL",
  REPELLED: "REPELLED"
};

const Disapproving = {
  JUDGEMENTAL: "JUDGEMENTAL",
  EMBARASSED: "EMBARASSED"
};

const Disappointed = {
  APPALLED: "APPALLED",
  REVOLTED: "REVOLTED"
};

const Awful = {
  NAUSEATED: "NAUSEATED",
  DETESTABLE: "DETESTABLE"
};

const Repelled = {
  HORRIFIED: "HORRIFIED",
  HESITANT: "HESITANT"
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