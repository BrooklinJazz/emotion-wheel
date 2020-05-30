/**
 * Basic
 */

export const Basic = {
  ANGER: "ANGER",
  FEAR: "FEAR",
  JOY: "JOY",
  DISGUST: "DISGUST",
  SAD: "SAD",
  SURPRISE: "SURPRISE",
};

/**
 * Anger
 */

export const Anger = {
  LET_DOWN: "LET_DOWN",
  HUMILIATED: "HUMILIATED",
  BITTER: "BITTER",
  MAD: "MAD",
  AGGRESSIVE: "AGGRESSIVE",
  FRUSTRATED: "FRUSTRATED",
  DISTANT: "DISTANT",
  CRITICAL: "CRITICAL",
};

export const Mad = {
  FURIOUS: "FURIOUS",
  JEALOUS: "FURIOUS",
};
export const Aggressive = {
  PROVOKED: "PROVOKED",
  HOSTILE: "HOSTILE",
};

export const Frustrated = {
  INFURIATED: "INFURIATED",
  ANNOYED: "ANNOYED",
};

export const Distant = {
  WITHDRAWN: "WITHDRAWN",
  NUMB: "NUMB",
};

export const Critical = {
  SKEPTICAL: "SKEPTICAL",
  DISMISSIVE: "DISMISSIVE",
};

export const Humiliated = {
  DISRESPECTED: "DISRESPECTED",
  RIDICULED: "RIDICULED",
};

export const Bitter = {
  INDIGNANT: "INDIGNANT",
  VIOLATED: "VIOLATED",
};

/**
 * Disgust Actions
 */

export const Disgust = {
  DISAPPROVING: "DISAPPROVING",
  DISAPPOINTED: "DISAPPOINTED",
  AWFUL: "AWFUL",
  REPELLED: "REPELLED",
};

export const Disapproving = {
  JUDGEMENTAL: "JUDGEMENTAL",
  EMBARASSED: "EMBARASSED",
};

export const Disappointed = {
  APPALLED: "APPALLED",
  REVOLTED: "REVOLTED",
};

export const Awful = {
  NAUSEATED: "NAUSEATED",
  DETESTABLE: "DETESTABLE",
};

export const Repelled = {
  HORRIFIED: "HORRIFIED",
  HESITANT: "HESITANT",
};

/**
 * Fear
 */

export const Fear = {
  SCARED: "SCARED",
  ANXIOUS: "ANXIOUS",
  INSECURE: "INSECURE",
  WEAK: "WEAK",
  REJECTED: "REJECTED",
  THREATENED: "THREATENED",
};

export const Scared = {
  HELPLESS: "HELPLESS",
  FRIGHTENED: "FRIGHTENED",
};

export const Anxious = {
  OVERWHELMED: "OVERWHELMED",
  WORRIED: "WORRIED",
};

export const Insecure = {
  INADEQUATE: "INADEQUATE",
  INFERIOR: "INFERIOR",
};

export const Weak = {
  WORTHLESS: "WORTHLESS",
  INSIGNIFICANT: "INSIGNIFICANT",
};

export const Rejected = {
  EXCLUDED: "EXCLUDED",
  PERSECUTED: "PERSECUTED",
};

export const Threatened = {
  NERVOUS: "NERVOUS",
  EXPOSED: "EXPOSED",
};

const FearActions = {
  ...Fear,
  ...Scared,
  ...Anxious,
  ...Insecure,
  ...Weak,
  ...Rejected,
  ...Threatened,
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
  ...Critical,
};

const DisgustActions = {
  ...Disgust,
  ...Disapproving,
  ...Disappointed,
  ...Awful,
  ...Repelled,
};

export const EmoActions = {
  START: "selecting",
  ...Basic,
  ...AngerActions,
  ...DisgustActions,
  ...FearActions,
};

export const EmoStates = {
  ...EmoActions,
  INIT: "INIT",
  SELECTING: "SELECTING",
};
