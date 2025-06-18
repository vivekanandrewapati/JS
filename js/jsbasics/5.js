// Rotate ‘w3resource’ string:


let str = "w3resource";
function rotateRight(str) {
  return str[str.length - 1] + str.slice(0, str.length - 1);
}

  str = rotateRight(str);
  console.log(str);
