/**
 * Basic
 */

export const BasicActions = {
  ANGER: "anger",
  FEAR: "fear",
  JOY: "joy",
  DISGUST: "disgust",
  SAD: "sad",
  SURPRISE: "surprise",
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
  CRITICAL: "critical",
};

export const Mad = {
  FURIOUS: "furious",
  JEALOUS: "furious",
};
export const Aggressive = {
  PROVOKED: "provoked",
  HOSTILE: "hostile",
};

export const Frustrated = {
  INFURIATED: "infuriated",
  ANNOYED: "annoyed",
};

export const Distant = {
  WITHDRAWN: "withdrawn",
  NUMB: "numb",
};

export const Critical = {
  SKEPTICAL: "skeptical",
  DISMISSIVE: "dismissive",
};

export const Humiliated = {
  DISRESPECTED: "disrespected",
  RIDICULED: "ridiculed",
};

export const Bitter = {
  INDIGNANT: "indignant",
  VIOLATED: "violated",
};

/**
 * Disgust Actions
 */

export const Disgust = {
  DISAPPROVING: "disapproving",
  DISAPPOINTED: "disappointed",
  AWFUL: "awful",
  REPELLED: "repelled",
};

export const Disapproving = {
  JUDGEMENTAL: "judgemental",
  EMBARASSED: "embarassed",
};

export const Disappointed = {
  APPALLED: "appalled",
  REVOLTED: "revolted",
};

export const Awful = {
  NAUSEATED: "nauseated",
  DETESTABLE: "detestable",
};

export const Repelled = {
  HORRIFIED: "horrified",
  HESITANT: "hesitant",
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

/**
 * Fear
 */

const Fear = {
  SCARED: "scared",
  ANXIOUS: "anxious",
  INSECURE: "insecure",
  WEAK: "weak",
  REJECTED: "rejected",
  THREATENED: "threatened",
};

const Scared = {
  HELPLESS: "helpless",
FRIGHTENED: "frightened"
}

const Anxious = {
OVERWHELMED: "OVERWHELMED",
WORRIED: "WORRIED",
}

const Insecure = {
INADEQUATE: "INADEQUATE",
INFERIOR: "INFERIOR",

}

const Weak = {
WORTHLESS: "WORTHLESS",
INSIGNIFICANT: "INSIGNIFICANT",

}

const Rejected = {
EXCLUDED: "EXCLUDED",
PERSECUTED: "PERSECUTED"
}

const Threatened = {
NERVOUS: "NERVOUS",
EXPOSED: "EXPOSED"
}


export const EmoActions = {
  START: "selecting",
  ...BasicActions,
  ...AngerActions,
  ...DisgustActions,
  ...Fear
};

export const EmoStates = {
  ...EmoActions,
  SELECTING: "selecting",
};
