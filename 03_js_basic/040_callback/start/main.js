// コールバック関数：引数に他の関数が渡ってくる
function print(callback) {
  console.log(callback);
  const result = callback(2);
  console.log(result);
}

function fn(number) {
  return number * 2;
}

print(fn);

console.log(fn(2));
console.log(fn(4));

const fnArrow = (number) => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });

console.log(fnArrowObj(2));
