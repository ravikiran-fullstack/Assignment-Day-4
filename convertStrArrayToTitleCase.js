//Convert all the strings to title caps in a string array
let sentenceArray = [
  "create a new repository",
  "push an existing repository from the",
  "import code from another repository",
];

let convertToCapsCase = function (str) {
  let modStr = str.split("");
  let char = modStr.splice(0, 1).toString().toUpperCase();
  modStr.unshift(char);
  return modStr.join("");
};

let result = sentenceArray.map((ele) => {
  let strArray = ele.split(" ");
  let resultStr = strArray.map((str) => {
    return convertToCapsCase(str);
  });

  return resultStr.join(" ");
});

console.log(result);

//IIFE
(function (sentenceArray) {
  let convertToCapsCase = function (str) {
    let modStr = str.split("");
    let char = modStr.splice(0, 1).toString().toUpperCase();
    modStr.unshift(char);
    return modStr.join("");
  };

  let result = sentenceArray.map((ele) => {
    let strArray = ele.split(" ");
    let resultStr = strArray.map((str) => {
      return convertToCapsCase(str);
    });

    return resultStr.join(" ");
  });

  console.log(result);
})(sentenceArray);
