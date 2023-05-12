function solution(num) {
  const primes = [];
  let iterator;

  while (num > 1) {
    if (num % 2 !== 0 || num === 2) {
      iterator = num;
      for (let i = 2; i <= iterator; i++) {
        if (num % iterator === 0) {
          primes.push(num);
        }
        iterator--;
      }
    }
    num--;
  }
  return primes.sort();
}

solution(5);
