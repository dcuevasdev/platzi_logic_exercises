function solution(numbers) {
  const multiplying = [3, 4, 5, 6, 7, 8];
  const results = [];

  for (let i = 0; i < multiplying.length; i++) {
    results.push(numbers[i] / multiplying[i]);
  }

  const validator = results.every((number) => number === results[0]);

  if (validator) {
    return results[0];
  } else {
    return validator;
  }
}

solution([27, 36, 45, 54, 63, 72]);
solution([27, 36, 45, 54, 42, 72]);
