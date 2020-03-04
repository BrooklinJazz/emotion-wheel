// TODO add fully fleshed states.
// this fill is currently and example of:
//  Bad -> Busy/Bored -> Indifferent/Apathetic or Pressured/Rushed
// see example: https://xstate.js.org/viz/?gist=14bee9d8de6c10a5c48e0c9e1d3ec461 try to keep visualization up to date
export const objectFromArray = (arr = []) => arr.reduce((total, each) => {
  return {
    ...total,
    [each]: each
  };
}, {});
