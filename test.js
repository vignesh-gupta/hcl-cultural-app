let res = [
  {
    domain: "Health Care and Social Assistance",
  },
  {
    domain: "Information and Cultural Industries",
  },
  {
    domain: "Accommodation and Food Services",
  },
  {
    domain: "Accommodation and Food Services",
  },
];

let resMap = new Map();
res.forEach((item) => {
  let domain = item.domain;
  resMap.set(domain, (resMap.get(domain) ?? 0) + 1);
});

// console.log(resMap);

let resArr = [];
resMap.forEach((value, key) => {
  resArr.push({
    x: key,
    y: value,
  });
});

console.log(resArr);
// let test=[]
// res.forEach((item) => {
//   if(test.includes(item.domain)){
// })
