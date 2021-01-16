export const sessionStorageParser = (value) => {
  if(!value) {
    //writing data to sessionstorage
    const storage = { ... sessionStorage};
    for(const key of Object.keys(storage)) {
      storage[key] = JSON.parse(storage[key]);
    }
    return storage;
  } else {
    for(const key of Object.keys(value)) {
      if(typeof value[key] === 'object') 
        sessionStorage.setItem(key, JSON.stringify(value[key]));
      else
        sessionStorage.setItem(key.value[key]);
    }
  }
}