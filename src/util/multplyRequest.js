// url maxNum
export default function multRequest(urls, maxNum) {
  const length = urls.length;
  let count = 0; //第几个
  let result = new Array(length).fill(false);
  return new Promise((resolve, reject) => {
    while (count < maxNum) {
      next();
    }
    function next() {
      let current = count++;
      if (current >= length) {
        !result.includes(false) && resolve(result);
        return;
      }
      const url = urls[current];
      fetch(url, { method: 'GET' })
        .then((res) => {
          result[current] = res;
          if (current < length) {
            next();
          }
        })
        .catch((err) => {
          result[current] = err;
          if (current < length) {
            next();
          }
        });
    }
  });
}
