export const objectFromAction = arr => arr.reduce((total, each) => ({
  ...total,
  [each[0]]: { on: each[1] }
}), {});
