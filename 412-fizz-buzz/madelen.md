# 412. Fizz Buzz
https://leetcode.com/problems/fizz-buzz

## Approach

기본적으로 아래와 같이 돌리면 될 것 같다.
```text
FizzBuzz(n) → void
    Pre: n is an upper limit to perform FizzBuzz from 1
    Post: FizzBuzz, Fizz, Buzz, and/or a number is properly displayed
    
    i ← 1
    WHILE i <= n
        IF i%15==0
            print 'FizzBuzz'
        ELSIF i%3==0
            print 'Fizz'
        ELSIF i%5==0
            print 'Buzz'
        ELSE
            print i
        END IF
        ++i
    END WHILE
END
```

다만 이번 문제에서는 출력이 아닌 배열에 값을 저장하고 반환해야 하기때문에 아래처럼 구현하면 될 것 같다. 
```text
i     ← 1
array ← []
WHILE i <= n
    IF i%15==0
        array.push('FizzBuzz')
    ELSIF i%3==0
        array.push('Fizz')
    ELSIF i%5==0
        array.push('Buzz')
    ELSE
        array.push(String(i))
    END IF
    ++i
END WHILE
```

## Code
```ts
function fizzBuzz(n: number): string[] {
    let i = 1;
    let res: string[] = [];
    
    while (i <= n) {
        if (i % 15 === 0) 
            res.push('FizzBuzz');
        else if (i % 3 === 0)
            res.push('Fizz');
        else if (i % 5 === 0)
            res.push('Buzz');
        else
            res.push(`${i}`);
        ++i
    }
    
    return res;
};
```

## Complexity
시간 복잡도: **O(N)**
