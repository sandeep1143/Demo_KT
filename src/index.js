function sayHello() {
  const msg = process.env.SECRET_TOKEN ? "Hello from a secure project!" : "Hello, World!";
  return msg;
}
module.exports = { sayHello };
