function solution(num1, num2) {
  const sub = num1 - num2;
  const sum = num1 + num2;

  return Number(`${sub}${sum}`);
}

solution(5, 4);
solution(21, 5);
