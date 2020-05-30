import { Machine } from "xstate";
import { EmoActions, EmoStates } from "./actions";

export const emotionStateMachine = Machine({
  id: "emotionMachine",
  initial: EmoStates.INIT,
  states: {
    init: { on: { [EmoActions.START]: EmoStates.SELECTING } },
    [EmoStates.SELECTING]: {
      on: {
        [EmoActions.ANGER]: EmoStates.ANGER,
        [EmoActions.FEAR]: EmoStates.FEAR,
        [EmoActions.HAPPY]: EmoStates.HAPPY,
        [EmoActions.DISGUST]: EmoStates.DISGUST,
        [EmoActions.SAD]: EmoStates.SAD,
        [EmoActions.SURPRISE]: EmoStates.SURPRISE,
        [EmoActions.BAD]: EmoStates.BAD,
      },
    },
    [EmoStates.ANGER]: {
      on: {
        [EmoActions.LET_DOWN]: EmoStates.LET_DOWN,
        [EmoActions.HUMILIATED]: EmoStates.HUMILIATED,
        [EmoActions.BITTER]: EmoStates.BITTER,
        [EmoActions.MAD]: EmoStates.MAD,
        [EmoActions.AGGRESSIVE]: EmoStates.AGGRESSIVE,
        [EmoActions.FRUSTRATED]: EmoStates.FRUSTRATED,
        [EmoActions.DISTANT]: EmoStates.DISTANT,
        [EmoActions.CRITICAL]: EmoStates.CRITICAL,
      },
    },
    [EmoStates.FEAR]: {
      on: {
        [EmoActions.SCARED]: EmoStates.SCARED,
        [EmoActions.ANXIOUS]: EmoStates.ANXIOUS,
        [EmoActions.INSECURE]: EmoStates.INSECURE,
        [EmoActions.WEAK]: EmoStates.WEAK,
        [EmoActions.REJECTED]: EmoStates.REJECTED,
        [EmoActions.THREATENED]: EmoStates.THREATENED,
      },
    },
    [EmoStates.HAPPY]: {
      on: {
        [EmoActions.PLAYFUL]: EmoStates.PLAYFUL,
        [EmoActions.CONTENT]: EmoStates.CONTENT,
        [EmoActions.INTERESTED]: EmoStates.INTERESTED,
        [EmoActions.PROUD]: EmoStates.PROUD,
        [EmoActions.ACCEPTED]: EmoStates.ACCEPTED,
        [EmoActions.POWERFUL]: EmoStates.POWERFUL,
        [EmoActions.PEACEFUL]: EmoStates.PEACEFUL,
        [EmoActions.TRUSTING]: EmoStates.TRUSTING,
        [EmoActions.OPTIMISTIC]: EmoStates.OPTIMISTIC,
      },
    },
    [EmoStates.DISGUST]: {
      on: {
        [EmoActions.DISAPPROVING]: EmoStates.DISAPPROVING,
        [EmoActions.DISAPPOINTED]: EmoStates.DISAPPOINTED,
        [EmoActions.AWFUL]: EmoStates.AWFUL,
        [EmoActions.REPELLED]: EmoStates.REPELLED,
      },
    },
    [EmoStates.SAD]: {
      on: {
        [EmoActions.LONELY]: EmoStates.LONELY,
        [EmoActions.VULNERABLE]: EmoStates.VULNERABLE,
        [EmoActions.DESPAIR]: EmoStates.DESPAIR,
        [EmoActions.GUILTY]: EmoStates.GUILTY,
        [EmoActions.DEPRESSED]: EmoStates.DEPRESSED,
        [EmoActions.HURT]: EmoStates.HURT,
      },
    },
    [EmoStates.SURPRISE]: {
      on: {
        [EmoActions.STARTLED]: EmoStates.STARTLED,
        [EmoActions.CONFUSED]: EmoStates.CONFUSED,
        [EmoActions.AMAZED]: EmoStates.AMAZED,
        [EmoActions.EXCITED]: EmoStates.EXCITED,
      },
    },
    [EmoStates.LET_DOWN]: {
      on: {
        [EmoActions.BETRAYED]: EmoStates.BETRAYED,
        [EmoActions.RESENTFUL]: EmoStates.RESENTFUL,
      },
    },
    [EmoStates.HUMILIATED]: {
      on: {
        [EmoActions.DISRESPECTED]: EmoStates.DISRESPECTED,
        [EmoActions.RIDICULED]: EmoStates.RIDICULED,
      },
    },
    [EmoStates.BITTER]: {
      on: {
        [EmoActions.INDIGNANT]: EmoStates.INDIGNANT,
        [EmoActions.VIOLATED]: EmoStates.VIOLATED,
      },
    },
    [EmoStates.MAD]: {
      on: {
        [EmoActions.FURIOUS]: EmoStates.FURIOUS,
      },
    },
    [EmoStates.AGGRESSIVE]: {
      on: {
        [EmoActions.PROVOKED]: EmoStates.PROVOKED,
        [EmoActions.HOSTILE]: EmoStates.HOSTILE,
      },
    },
    [EmoStates.FRUSTRATED]: {
      on: {
        [EmoActions.INFURIATED]: EmoStates.INFURIATED,
        [EmoActions.ANNOYED]: EmoStates.ANNOYED,
      },
    },
    [EmoStates.DISTANT]: {
      on: {
        [EmoActions.WITHDRAWN]: EmoStates.WITHDRAWN,
        [EmoActions.NUMB]: EmoStates.NUMB,
      },
    },
    [EmoStates.CRITICAL]: {
      on: {
        [EmoActions.SKEPTICAL]: EmoStates.SKEPTICAL,
        [EmoActions.DISMISSIVE]: EmoStates.DISMISSIVE,
      },
    },
    [EmoStates.DISRESPECTED]: {},
    [EmoStates.RIDICULED]: {},
    [EmoStates.INDIGNANT]: {},
    [EmoStates.VIOLATED]: {},
    [EmoStates.FURIOUS]: {},
    [EmoStates.PROVOKED]: {},
    [EmoStates.HOSTILE]: {},
    [EmoStates.INFURIATED]: {},
    [EmoStates.ANNOYED]: {},
    [EmoStates.WITHDRAWN]: {},
    [EmoStates.NUMB]: {},
    [EmoStates.SKEPTICAL]: {},
    [EmoStates.DISMISSIVE]: {},
    [EmoStates.DISAPPROVING]: {
      on: {
        [EmoActions.JUDGEMENTAL]: EmoStates.JUDGEMENTAL,
        [EmoActions.EMBARRASSED]: EmoStates.EMBARRASSED,
      },
    },
    [EmoStates.DISAPPOINTED]: {
      on: {
        [EmoActions.APPALLED]: EmoStates.APPALLED,
        [EmoActions.REVOLTED]: EmoStates.REVOLTED,
      },
    },
    [EmoStates.AWFUL]: {
      on: {
        [EmoActions.NAUSEATED]: EmoStates.NAUSEATED,
        [EmoActions.DETESTABLE]: EmoStates.DETESTABLE,
      },
    },
    [EmoStates.REPELLED]: {
      on: {
        [EmoActions.HORRIFIED]: EmoStates.HORRIFIED,
        [EmoActions.HESITANT]: EmoStates.HESITANT,
      },
    },
    [EmoStates.SCARED]: {
      on: {
        [EmoActions.HELPLESS]: EmoStates.HELPLESS,
        [EmoActions.FRIGHTENED]: EmoStates.FRIGHTENED,
      },
    },
    [EmoStates.ANXIOUS]: {
      on: {
        [EmoActions.OVERWHELMED]: EmoStates.OVERWHELMED,
        [EmoActions.WORRIED]: EmoStates.WORRIED,
      },
    },
    [EmoStates.INSECURE]: {
      on: {
        [EmoActions.INADEQUATE]: EmoStates.INADEQUATE,
        [EmoActions.INFERIOR]: EmoStates.INFERIOR,
      },
    },
    [EmoStates.WEAK]: {
      on: {
        [EmoActions.WORTHLESS]: EmoStates.WORTHLESS,
        [EmoActions.INSIGNIFICANT]: EmoStates.INSIGNIFICANT,
      },
    },
    [EmoStates.REJECTED]: {
      on: {
        [EmoActions.EXCLUDED]: EmoStates.EXCLUDED,
        [EmoActions.PERSECUTED]: EmoStates.PERSECUTED,
      },
    },
    [EmoStates.THREATENED]: {
      on: {
        [EmoActions.NERVOUS]: EmoStates.NERVOUS,
        [EmoActions.EXPOSED]: EmoStates.EXPOSED,
      },
    },
    [EmoStates.STARTLED]: {
      on: {
        [EmoActions.SHOCKED]: EmoStates.SHOCKED,
        [EmoActions.DISMAYED]: EmoStates.DISMAYED,
      },
    },
    [EmoStates.CONFUSED]: {
      on: {
        [EmoActions.DISILLUSIONED]: EmoStates.DISILLUSIONED,
        [EmoActions.PERPLEXED]: EmoStates.PERPLEXED,
      },
    },
    [EmoStates.AMAZED]: {
      on: {
        [EmoActions.ASTONISHED]: EmoStates.ASTONISHED,
        [EmoActions.AWE]: EmoStates.AWE,
      },
    },
    [EmoStates.EXCITED]: {
      on: {
        [EmoActions.EAGER]: EmoStates.EAGER,
        [EmoActions.ENERGETIC]: EmoStates.ENERGETIC,
      },
    },
    [EmoStates.BAD]: {
      on: {
        [EmoActions.TIRED]: EmoStates.TIRED,
        [EmoActions.STRESSED]: EmoStates.STRESSED,
        [EmoActions.BUSY]: EmoStates.BUSY,
        [EmoActions.BORED]: EmoStates.BORED,
      },
    },
    [EmoStates.TIRED]: {
      on: {
        [EmoActions.SLEEPY]: EmoStates.SLEEPY,
        [EmoActions.UNFOCUSSED]: EmoStates.UNFOCUSSED,
      },
    },
    [EmoStates.STRESSED]: {
      on: {
        [EmoActions.OVERWHELMED]: EmoStates.OVERWHELMED,
        [EmoActions.OUT_OF_CONTROL]: EmoStates.OUT_OF_CONTROL,
      },
    },
    [EmoStates.BUSY]: {
      on: {
        [EmoActions.PRESSURED]: EmoStates.PRESSURED,
        [EmoActions.RUSHED]: EmoStates.RUSHED,
      },
    },
    [EmoStates.BORED]: {
      on: {
        [EmoActions.INDIFFERENT]: EmoStates.INDIFFERENT,
        [EmoActions.APATHETIC]: EmoStates.APATHETIC,
      },
    },
    [EmoStates.LONELY]: {
      on: {
        [EmoActions.ISOLATED]: EmoStates.ISOLATED,
        [EmoActions.ABANDONED]: EmoStates.ABANDONED,
      },
    },
    [EmoStates.VULNERABLE]: {
      on: {
        [EmoActions.VICTIMIZED]: EmoStates.VICTIMIZED,
        [EmoActions.FRAGILE]: EmoStates.FRAGILE,
      },
    },
    [EmoStates.DESPAIR]: {
      on: {
        [EmoActions.GRIEF]: EmoStates.GRIEF,
        [EmoActions.POWERLESS]: EmoStates.POWERLESS,
      },
    },
    [EmoStates.GUILTY]: {
      on: {
        [EmoActions.REMORSEFUL]: EmoStates.REMORSEFUL,
        [EmoActions.ASHAMED]: EmoStates.ASHAMED,
      },
    },
    [EmoStates.DEPRESSED]: {
      on: {
        [EmoActions.INFERIOR]: EmoStates.INFERIOR,
        [EmoActions.EMPTY]: EmoStates.EMPTY,
      },
    },
    [EmoStates.HURT]: {
      on: {
        [EmoActions.EMBARRASSED]: EmoStates.EMBARRASSED,
        [EmoActions.DISAPPOINTED]: EmoStates.DISAPPOINTED,
      },
    },
    [EmoStates.PLAYFUL]: {
      on: {
        [EmoActions.AROUSED]: EmoStates.AROUSED,
        [EmoActions.CHEEKY]: EmoStates.CHEEKY,
      },
    },
    [EmoStates.CONTENT]: {
      on: {
        [EmoActions.FREE]: EmoStates.FREE,
        [EmoActions.JOYFUL]: EmoStates.JOYFUL,
      },
    },
    [EmoStates.INTERESTED]: {
      on: {
        [EmoActions.CURIOUS]: EmoStates.CURIOUS,
        [EmoActions.INQUISITIVE]: EmoStates.INQUISITIVE,
      },
    },
    [EmoStates.PROUD]: {
      on: {
        [EmoActions.SUCCESSFUL]: EmoStates.SUCCESSFUL,
        [EmoActions.CONFIDENT]: EmoStates.CONFIDENT,
      },
    },
    [EmoStates.ACCEPTED]: {
      on: {
        [EmoActions.RESPECTED]: EmoStates.RESPECTED,
        [EmoActions.VALUED]: EmoStates.VALUED,
      },
    },
    [EmoStates.POWERFUL]: {
      on: {
        [EmoActions.COURAGEOUS]: EmoStates.COURAGEOUS,
        [EmoActions.CREATIVE]: EmoStates.CREATIVE,
      },
    },
    [EmoStates.PEACEFUL]: {
      on: {
        [EmoActions.LOVING]: EmoStates.LOVING,
        [EmoActions.THANKFUL]: EmoStates.THANKFUL,
      },
    },
    [EmoStates.TRUSTING]: {
      on: {
        [EmoActions.SENSITIVE]: EmoStates.SENSITIVE,
        [EmoActions.INTIMATE]: EmoStates.INTIMATE,
      },
    },
    [EmoStates.OPTIMISTIC]: {
      on: {
        [EmoActions.HOPEFUL]: EmoStates.HOPEFUL,
        [EmoActions.INSPIRED]: EmoStates.INSPIRED,
      },
    },
    [EmoStates.HELPLESS]: {},
    [EmoStates.FRIGHTENED]: {},
    [EmoStates.OVERWHELMED]: {},
    [EmoStates.WORRIED]: {},
    [EmoStates.INADEQUATE]: {},
    [EmoStates.INFERIOR]: {},
    [EmoStates.WORTHLESS]: {},
    [EmoStates.INSIGNIFICANT]: {},
    [EmoStates.EXCLUDED]: {},
    [EmoStates.PERSECUTED]: {},
    [EmoStates.NERVOUS]: {},
    [EmoStates.EXPOSED]: {},
    [EmoStates.BETRAYED]: {},
    [EmoStates.RESENTFUL]: {},
    [EmoStates.JUDGEMENTAL]: {},
    [EmoStates.EMBARRASSED]: {},
    [EmoStates.APPALLED]: {},
    [EmoStates.REVOLTED]: {},
    [EmoStates.NAUSEATED]: {},
    [EmoStates.DETESTABLE]: {},
    [EmoStates.HORRIFIED]: {},
    [EmoStates.HESITANT]: {},
    [EmoStates.EMPTY]: {},
    [EmoStates.REMORSEFUL]: {},
    [EmoStates.ASHAMED]: {},
    [EmoStates.GRIEF]: {},
    [EmoStates.POWERLESS]: {},
    [EmoStates.VICTIMIZED]: {},
    [EmoStates.FRAGILE]: {},
    [EmoStates.ISOLATED]: {},
    [EmoStates.ABANDONED]: {},
    [EmoStates.AROUSED]: {},
    [EmoStates.CHEEKY]: {},
    [EmoStates.FREE]: {},
    [EmoStates.JOYFUL]: {},
    [EmoStates.CURIOUS]: {},
    [EmoStates.INQUISITIVE]: {},
    [EmoStates.SUCCESSFUL]: {},
    [EmoStates.CONFIDENT]: {},
    [EmoStates.RESPECTED]: {},
    [EmoStates.VALUED]: {},
    [EmoStates.COURAGEOUS]: {},
    [EmoStates.CREATIVE]: {},
    [EmoStates.LOVING]: {},
    [EmoStates.THANKFUL]: {},
    [EmoStates.SENSITIVE]: {},
    [EmoStates.INTIMATE]: {},
    [EmoStates.HOPEFUL]: {},
    [EmoStates.INSPIRED]: {},
    [EmoStates.INDIFFERENT]: {},
    [EmoStates.APATHETIC]: {},
    [EmoStates.PRESSURED]: {},
    [EmoStates.RUSHED]: {},
    [EmoStates.OUT_OF_CONTROL]: {},
    [EmoStates.SLEEPY]: {},
    [EmoStates.UNFOCUSSED]: {},
    [EmoStates.SHOCKED]: {},
    [EmoStates.DISMAYED]: {},
    [EmoStates.DISILLUSIONED]: {},
    [EmoStates.PERPLEXED]: {},
    [EmoStates.ASTONISHED]: {},
    [EmoStates.AWE]: {},
    [EmoStates.EAGER]: {},
    [EmoStates.ENERGETIC]: {},
  },
});
