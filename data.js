const {Api,TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input"); // npm i input

const apiId = 7442153;
const apiHash = "ef016286083b4a99916e7bc40e545406";
const stringSession = new StringSession("1BAAOMTQ5LjE1NC4xNjcuOTEAUHwQVNQInuBzFS3uzqVjAZr4iLAsHxshxbHcZQnSU19TwTbSEcWyhy1ZP/YFdH3khGhRLi+ruc8IKD34pcXs97A7dUTMcKmTZRVxutoTAoYoq2crPrbhm03RBjFL/Av2eH+8TkIeqf14NgCnYCuXQUZ6UEvSGhU7hFIgltogmT7UfyYxAWgKSJdpi+cHo7y8Mlqu79ReTnBy/ee7mRSCj8GJwKw6HTAMbSZCDXaJidy40FqDhlWUWG9Z8k4t8VbkFxSfLaTldK1GPNsQ9TeYBuoAkd9pfKln5z1tOZTX1W60Nz0Js1soeFLAG6+8TA7zjU1c6y8cIl54OAYzFeVW4Yo="); // fill this later with the value from session.save()
const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
(async () => {
 
  await client.start({
    phoneNumber: async () => await input.text("number ?"),
    password: async () => await input.text("password?"),
    phoneCode: async () => await input.text("Code ?"),
    onError: (err) => console.log(err),
  });
  console.log("Bağlanmış olabilirsin");
  console.log(client.session.save()); // Save this string to avoid logging in again
})();
const data = 1;
module.exports ={
    client,
    Api
};