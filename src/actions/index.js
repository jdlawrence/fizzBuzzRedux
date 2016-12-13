export const incrementCount = () => ({
  type: 'INCREMENT',
});

export const changeString = ( {fizz, buzz}) => ({
  type: 'CHANGE_STRING',
  fizz: fizz,
  buzz: buzz
});