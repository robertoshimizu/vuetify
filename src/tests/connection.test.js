// const { TestWatcher } = require("@jest/core");
// const axios = require("axios");

// test("Ensure API returns 200 when called", async () => {
//   const response = await axios({
//     url: "http://localhost:3000/users/5",
//     method: "get",
//   });
//   expect(response.status).toBe(200);
// });

import QuoteGenerator from "../model/selectProduct";

function sumArray(a, b) {
  var c = [];
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    c.push((a[i] || 0) + (b[i] || 0));
  }
  return c;
}

test("Instantiate SelectProduct", () => {
  var generator = new QuoteGenerator(450000, 450000, 50000, 1000, 5000);
  var json = generator.getJson();
  // for (let i = 0; i < json.length; i++) {
  //     var seguradora = json[i].seguradora;
  //     console.log(seguradora);
  // }

  var m = json.map((item) => {
    return (item.M1 * 450000) / 1000;
  });
  var ipa = json.map((item) => {
    return (item.IPA * 450000) / 1000;
  });
  var saf = json.map((item) => {
    return (item.SAF_indiv * 5000) / 1000;
  });
  var dit = json.map((item) => {
    return (item.DIT15 * 1000) / 1000;
  });

  var sum1 = sumArray(m, ipa);

  console.log(sum1);
  let i = m.indexOf(Math.min(...m));

  // let foo = {
  //     index:1,
  //     seguradora: json[i].seguradora,
  //     duration: json[i].tipo,
  //     price: result[i],
  //     coberturas:["morte"]
  // };

  // console.log(foo);
});

test("Instantiate SelectProduct", () => {
  var generator = new QuoteGenerator();
  var rates = generator.getRates(450000, 450000, 50000, 1000, 5000);

  console.log(rates);
});
