export default class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field];
    }
  }

  first(field) {
    if (this.errors[field]) {
      return this.errors[field][0];
    }
  }

  set(field, value) {
    this.errors[field] = value;
  }

  record(errors) {
    this.errors = errors;
  }

  clear(field) {
    delete this.errors[field];
  }

  any() {
    return Object.keys(this.errors).length > 0;
  }

  has(field) {
    return this.errors[field];
  }

  clearAll() {
    this.errors = {};
  }
}
