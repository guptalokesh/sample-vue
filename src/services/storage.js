export default class StorageService {
  static putObject(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  static getObject(key) {
    if (navigator.cookieEnabled && window.localStorage) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    return {};
  }

  static removeObject(key) {
    window.localStorage.removeItem(key);
  }
}
