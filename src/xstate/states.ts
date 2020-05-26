const Initial = {
    init: "init",
    selecting: "selecting"
}

const Basic = {
  anger: "anger",
  fear: "fear",
  joy: "joy",
  disgust: "disgust",
  sad: "sad",
  surprise: "surprise"
};

// conventient interface for accessing state values
export const EmoState = {
  Initial,
  ...Initial,
  Basic,
  ...Basic
};