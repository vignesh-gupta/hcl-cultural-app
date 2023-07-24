export function treeDataMapper(arr: Array<{ domain: string }>) {
  let resMap = new Map<string, number>();
  arr.forEach((item) => {
    let domain = item.domain;
    resMap.set(domain, (resMap.get(domain) ?? 0) + 1);
  });

  // console.log(resMap);

  let returnOptions : {x:string , y:number}[] = [];
  resMap.forEach((value, key) => {
    returnOptions.push({
      x: key,
      y: value,
    });
  });

  return returnOptions
}
