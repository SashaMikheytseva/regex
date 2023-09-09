import Validator from '../js/nicknames';

test('checking class creation', () => {
  const validator = new Validator('Reg');
  const expected = { name: 'Reg' };

  expect(validator).toEqual(expected);
});

test.each([
  ['as-3dfg', 'Имя as-3dfg допустимо'],
  ['asd78906gh', 'Имя не должно содержать подряд более трёх цифр'],
  ['12fdhf', 'Имя не должно начинаться с цифр, символов подчёркивания или тире'],
  ['_fdhf', 'Имя не должно начинаться с цифр, символов подчёркивания или тире'],
  ['-1fdhf', 'Имя не должно начинаться с цифр, символов подчёркивания или тире'],
  ['dfhsdhf12', 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире'],
  ['dfhsdh_', 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире'],
  ['khgkgf-', 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире'],
  ['пороло?+', 'Имя должно содержать только латинские буквы, символы тире, подчёркивания и цифры'],
])(('must validate %s'), (name, expected) => {
  const valid = new Validator(name);
  const result = valid.validateUsername();
  expect(result).toBe(expected);
});
