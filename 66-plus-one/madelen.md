# 66. Plus One
https://leetcode.com/problems/plus-one

## Approach

## Code

### Method 1: split and join
```ts
function plusOne(digits: number[]): number[] {
  let x = BigInt(digits.join('')) + 1n;
  return x.toString().split('').map(Number);
};
```

- [Array.prototype.join](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.join)은 O(n).
- [x.toString()](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.tostring)은 내부적으로 `join`을 두 번째 인자 없이(디폴트 `,`) 호출하니까 똑같이 O(N).
- [String.prototype.split](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.split) 도 내가 구현한다고 하면 일단 전체 문자열을 한 번 순회하니까 O(N)일 것 같으니..

전체 시간복잡도는 O(3N) => **O(N)**

### Method 2: Iterative
```ts
function plusOne(digits: number[]): number[] {
  let index = digits.length - 1;

  if (digits[index] < 9) {
    digits[index] += 1;
    return digits;
  }

  digits[index] += 1;

  while (digits[index] > 9) {
    digits[index] %= 10;
    if (index - 1 < 0) {
      return [1, ...digits];
    } else {
      digits[index - 1] += 1;
    }
    --index;
  }
  return digits;
};

```

`digits` 리스트를 순회하고 끝이기 때문에 시간 복잡도는 **O(N)**.

