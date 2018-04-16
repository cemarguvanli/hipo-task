const storage = {
  hasData: (key) => (!!localStorage[key] && !!localStorage[key].length),
  remove: (key) => (localStorage.removeItem(key)),
  set: (key, value) => (localStorage.setItem(key, JSON.stringify(value))),
  get: (key) => {
    if (!storage.hasData(key)) {
      return false;
    }
    return JSON.parse(localStorage[key]);
  },
  clear: () => (localStorage.clear())
};

export default storage;
