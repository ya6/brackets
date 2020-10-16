module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let made_optimization = true;

  while (made_optimization) {
      delta = arr.length;

      for (let index = 0; index < arr.length; index += 1) {

          bracketsConfig.forEach(element => {

              if (element[0] === arr[index] && element[1] === arr[index + 1]) arr.splice(index, 2);

          });
      }
      if (arr.length > 0 && delta > arr.length) made_optimization = true;
      else made_optimization = false;
  }

  return arr.length === 0;
}
