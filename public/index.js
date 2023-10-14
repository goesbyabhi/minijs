function sum(var1, var2) {
  return var1 + var2;
}

function info(name) {
  const age = sum(10, 10);
  const profession = 'Software Engineer';
  const message = `Hello ${name}, your age is ${age} and you are a ${profession}`;
  console.log(message);
}

info('Abhishek Panda');
