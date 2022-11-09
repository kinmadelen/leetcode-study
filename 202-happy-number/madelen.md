# 0202. Happy Number

https://leetcode.com/problems/happy-number/

## TypeScript

### Approach

- 새로운 값을 계산하면서 해시맵에 저장
- 이미 나온 값인 경우, 무한루프에 빠지기 때문에 false를 반환
- 1이 나왔다면 true를 반환

```text
isHappy(n: number) → boolean
    Pre: n is a number to test whether it's a happy number or not
    Post: n is either happy or not happy

    hmp ← new Hashmap
    hmp.add(n)

    WHILE (n != 1)
        newN ← sumOfDigitSquare(n)

        IF hmp.contains(newN)
            return false
        END IF
        hmp.add(newN)
    END WHILE

    return true
END isHappy
```

### Code

```ts
function digitSum(n: number): number {
  let x = 0;

  while (n) {
    let t = n % 10;
    x += t * t;
    n = Math.trunc(n / 10);
  }

  return x;
}

function isHappy(n: number): boolean {
  let hmp = new Map<number, number>();
  hmp.set(n, 1);

  while (n !== 1) {
    n = digitSum(n);
    if (hmp.has(n)) {
      return false;
    }

    hmp.set(n, 1);
  }
  return true;
}
```

### Complexity

시간복잡도는 **O(logn)** 이라고 하네요.
참고: https://leetcode.com/problems/happy-number/solution/
