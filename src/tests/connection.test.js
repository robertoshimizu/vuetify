const { TestWatcher } = require("@jest/core");
const axios = require("axios");

test("Ensure API returns 200 when called", async () => {
  const response = await axios({
    url: "http://localhost:3000/users/5",
    method: "get",
  });
  expect(response.status).toBe(200);
});
