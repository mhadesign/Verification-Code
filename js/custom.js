let body = document.querySelector(".generate_code");
function generate(genNum) {
  let code = "";
  let schema = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < genNum; i++) {
    code += schema.charAt(Math.floor(Math.random() * schema.length));
    body.innerHTML = code; 
  }

  console.log(code);
}
generate(6);
