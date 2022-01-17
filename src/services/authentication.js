import StorageService from './storage';

export default class AuthenticationService  {

  static setStorage(key, data) {
    StorageService.putObject(key, data);
  }

  static getStorage(key) {
    return StorageService.getObject(key);
  }

  static getLoggedOutInfo() {
    return StorageService.getObject('loggedOutInfo');
  }

  static setRefreshTokenTime(token) {
    StorageService.putObject('refreshTokenTime', token);
  }

  static getRefreshTokenTime() {
    return StorageService.getObject('refreshTokenTime');
  }

  static setToken(token) {
    StorageService.putObject('authToken', token);
  }

  static getToken() {
    return StorageService.getObject('authToken');
  }

  static deleteToken() {
    return StorageService.removeObject('authToken');
  }

  static setLoggedInUser(user) {
    StorageService.putObject('loggedInUser', user);
  }

  static getLoggedInUser() {
    return StorageService.getObject('loggedInUser');
  }

  static setRoles(roles) {
    StorageService.putObject('roles', roles);
  }


  static getRoles() {
    return StorageService.getObject('roles');
  }

  static signOut() {
    StorageService.removeObject('authToken');
    StorageService.removeObject('loggedInUser');
    StorageService.removeObject('loggedOutInfo');
    StorageService.removeObject('refreshTokenTime');
  }
}
