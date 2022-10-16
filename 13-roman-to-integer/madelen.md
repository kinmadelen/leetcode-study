# 13. Roman to Integer

https://leetcode.com/problems/roman-to-integer/

## Approach

문제에서 주어진 설명 그대로 구현했다.

다만 반복되는 코드가 많다보니 이를 줄이기 위해 if문에서 switch문으로 변경을 했고, enum을 사용해서 `num += Roman[s[i]]`과 같이 간단히 올바른 값을 더할수 있도록 해봤다.
enum을 안썼으면 if혹은 case를 계속 추가해야한다.

## Code

```ts
function romanToInt(s: string): number {
  let num = 0;
  const SIZE = s.length;
  enum Roman {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
  }

  for (let i = 0; i < SIZE; ++i) {
    switch (s[i]) {
      case 'I':
        num += Roman.I;
        if (s[i + 1] === 'V') (num += 3), ++i;
        else if (s[i + 1] === 'X') (num += 8), ++i;
        break;
      case 'X':
        num += Roman.X;
        if (s[i + 1] === 'L') (num += 30), ++i;
        else if (s[i + 1] === 'C') (num += 80), ++i;
        break;
      case 'C':
        num += Roman.C;
        if (s[i + 1] === 'D') (num += 300), ++i;
        else if (s[i + 1] === 'M') (num += 800), ++i;
        break;
      default:
        num += Roman[s[i]];
    }
  }

  return num;
}
```

## Complexity

문자열의 문자 만큼 반복하기 때문에 시간복잡도는 O(n)이 된다 (`n = s.length`).
