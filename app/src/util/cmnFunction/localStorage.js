export const setLocalStorage = (KeyName, KeyValue) => {
  localStorage.setItem(KeyName, KeyValue);
};

export const getLocalStorage = (keyName) => {
  const KeyValue = localStorage.getItem(keyName);
  return KeyValue !== null ? JSON.parse(KeyValue) : null;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const removeLocalStorageItem = (KeyName) => {
  localStorage.removeItem(KeyName);
};
