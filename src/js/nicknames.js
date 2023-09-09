export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (/\d{4,}/.test(this.name) === true) {
      return 'Имя не должно содержать подряд более трёх цифр';
    } if (/^[\d_-]/.test(this.name) === true) {
      return 'Имя не должно начинаться с цифр, символов подчёркивания или тире';
    } if (/[\d_-]$/.test(this.name) === true) {
      return 'Имя не должно заканчиваться цифрами, символами подчёркивания или тире';
    } if (/^[a-z0-9_-]+$/i.test(this.name) === false) {
      return 'Имя должно содержать только латинские буквы, символы тире, подчёркивания и цифры';
    }
    return `Имя ${this.name} допустимо`;
  }
}
