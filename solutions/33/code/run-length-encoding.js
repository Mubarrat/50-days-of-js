export const decode = (text) => {

  if (text === '') return '';
  let input = text;
  let regex = /((\d+)?(\D))/g;
  let result = '';
  let match = regex.exec(input);
  do {
      result += match[3].repeat(+match[2]) || match[3];
      match = regex.exec(input);
  } while (match);

  return result;
};

export const encode = (text) => {
  if (text === '') return '';
  let input = text;
  let regex = /(.)\1*/g;
  let result = '';
  let match = regex.exec(input);
  do {
      match[0].length > 1 ? result += match[0].length + match[1] : result += match[1];
      match = regex.exec(input);
  } while (match);

  return result;
};