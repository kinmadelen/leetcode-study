# 20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

## Approach

받은 string을 하나하나 char로 나누어 괄호를 비교대조한다.<br>
이때 stack(Last in Last out)을 사용해서 괄호가 오픈상태인 경우 stack에 닫는 괄호를 push한다. <br>
가장 마지막에 스택의 top(last value)값과 입력된 닫는 괄호가 동일한 타입인지 비교하고 그렇지 않을 경우엔 false를 리턴한다. <br>
동일한 타입의 경우엔 top을 pop하며 입력된 값도 push하지 않고 빈채로 둔다. <br>

결국 s에 대한 loop를 다 돌았을 경우 stack이 비어있게 되면 true가 된다.

## Code

```cpp
class Solution {
public:
    bool isValid(string s) {
      stack<char> charStack;
      for(char charC : s) {
        if(charC == '(') {
          // 괄호가 오픈 상태인 경우엔 stack에 닫는 괄호를 push
          charStack.push(')');
        }else if(charC == '[') {
          charStack.push(']');
        }else if(charC == '{') {
          charStack.push('}');
        }else {
          // 스택의 top(last value)값과 입력된 닫는 괄호가 동일한 타입인지 비교
          if(charStack.empty() || charStack.top() != charC) {
            return false;
          }
          // 동일한 타입의 경우엔 top을 pop
          // 입력된 값도 push하지 않음
          charStack.pop();
        }
      }
      return charStack.empty();
    }
};
```

## Complexity

문자를 char로 하나하나 쪼개어 loop 를 돌리기 때문에 시간복잡도는 O(N)​로 추정 (입력값이 증가함에 따라 같은 비율로 증가하는 시간을 의미)
