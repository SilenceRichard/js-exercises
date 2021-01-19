function shallowCopy(obj) {
  if (typeof obj !== 'object') {
    return;
  }
  const mapObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      mapObj[key] = obj[key];
    }
  }
  return mapObj;
}