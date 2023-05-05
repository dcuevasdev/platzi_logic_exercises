function solution(num) {
  let steps = 0;

  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      if (num % 4 === 3) {
        num++;
      } else {
        num--;
      }
    }

    steps++;
  }

  return steps;
}

solution(15);
