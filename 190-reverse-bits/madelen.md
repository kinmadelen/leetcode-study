# 0190. Reverse Bits

https://leetcode.com/problems/reverse-bits/

## TypeScript

### Approach

~~I think I can just XOR input string with `111....111 (32)`.~~

OH wait. No, I'm not inversing bits. I'm reversing its order.

### Code

```ts
function reverseBits(n: number): number {
  let str = n.toString(2).padStart(32, '0');
  let rev = str.split('').reverse().join('');
  return parseInt(rev, 2);
}
```

### Complexity

**O(N)** where `N = string.length`

### 실패 코드

아래 코드가 왜 틀린지 모르겠다. JS엔진 내부가 숫자를 표현하는 방식이 조금 다른가보다.

```ts
function reverseBits(n: number): number {
  let rev = 0;
  let p = 31;
  while (n > 0) {
    rev += (n & 1) << p;
    --p;
    n >>= 1;
  }

  return rev;
}
```

똑같은 코드가 c++에서는 잘 돌아간다.

```cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t rev = 0;
        int p = 31;
        while(n > 0) {
            rev += (n&1) << p;
            --p;
            n >>= 1;
        }
        return rev;
    }
};
```
