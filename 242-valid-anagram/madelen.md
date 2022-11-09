# 0242. Valid Anagram

https://leetcode.com/problems/valid-anagram/

## TypeScript

### Naive Approach

```ts
function isAnagram(s: string, t: string): boolean {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
}
```

#### Complexity

`sort()` 함수를 사용했기 때문에 시간복잡도는 **O(nlogn)**

### Hashmap

```ts
function isAnagram(s: string, t: string): boolean {
  let smap = new Map<string, number>();
  let tmap = new Map<string, number>();
  if (s.length < t.length) {
    let temp = s;
    s = t;
    t = temp;
  }

  for (const ch of s) {
    let x = 0;
    if (smap.has(ch)) {
      x = smap.get(ch) || 0;
    }

    smap.set(ch, x + 1);
  }

  for (const ch of t) {
    let x = 0;
    if (tmap.has(ch)) {
      x = tmap.get(ch) || 0;
    }

    tmap.set(ch, x + 1);
  }

  for (const kv of smap) {
    if (kv[1] !== tmap.get(kv[0])) {
      return false;
    }
  }

  return true;
}
```

code optimized

```ts
function isAnagram(s: string, t: string): boolean {
  let mp = new Map<string, number>();

  for (const ch of s) {
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    mp.set(ch, (mp.get(ch) || 0) - 1);
  }

  for (const kv of mp) {
    if (kv[1] !== 0) return false;
  }

  return true;
}
```

#### Complexity

해시맵을 사용했기 때문에 룩업은 O(1). 최종 시간복잡도는 **O(n + m)**이 된다 (`n = s.length`, `m = t.length`)
