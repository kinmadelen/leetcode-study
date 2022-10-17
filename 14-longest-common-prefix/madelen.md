# 14. Longest Common Prefix
https://leetcode.com/problems/longest-commen-prefix

## Approach
모든 단어들을 순회하면서 각 문자가 동일한지 확인하면 될 것 같다.
같으면 답에 append하고, 다르면 바로 종료.

## Code
```ts
function longestCommonPrefix(strs: string[]): string {
  const WORDS = strs.length;
  const LENGTH = strs[0].length;

  // 단어가 한 개일 경우 바로 반환
  if(WORDS <= 1) {
    return strs[0];
  }
  let result: string = '';

  for(let i=0; i<LENGTH; ++i) {
	// 첫 번째 단어의 문자를 확인
    let ch = strs[0][i];
      
    for (let j = 1; j < WORDS; ++j) {
	  // 단어의 끝이거나 문자가 다를경우 반환
      if(i === strs[j].length || strs[j][i] !== ch) {
          return result;
      }
    }
      
    result += ch;
  }
    
  return result;
}
```

## Complexity
- O(NM) 
  - `N` = 단어의 길이
  - `M` = 단어의 개수
