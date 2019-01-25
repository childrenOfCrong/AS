function solution(brown, red) {
  let minWidth = Math.ceil(brown / 4 + 1);
  let maxHeight = (brown + red) / (4 * (brown + 16));
  for (let i = minWidth; i >= maxHeight; i++) {
    if ((brown + red) % i === 0) {
      let [width, height] = [i, (brown + red) / i];

      if ((width - 2) * (height - 2) === red) return [width, height];
    }
  }
}


