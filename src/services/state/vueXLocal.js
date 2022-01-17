import VuexPersistence from 'vuex-persist';
import localforage from 'localforage';

localforage.config({
  storeName: '<project-name>',
});

export const vuexLocal = new VuexPersistence({
  key: 'live',
  storage: {
    getItem(key) {
      // return promise
      // todo: get data and decrypt
      return localforage.getItem(key);
    },
    setItem(key, data) {
      // return promise
      // todo: encrypt data and then set
      return localforage.setItem(key, data);
    },
    removeItem(key) {
      // return promise
      return localforage.removeItem(key);
    },
    clear() {
      // return promise
      return localforage.clear();
    },
    length() {
      // return promise
      return localforage.length();
    },
    key(keyIndex) {
      return localforage.key(keyIndex);
    },
  },
  asyncStorage: true,
  modules: [
  ],
});

window.localForage = localforage;
