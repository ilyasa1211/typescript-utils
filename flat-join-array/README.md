# Flat Join Array

Flatting two or more array and then join them with defined separator

### Usage

```typescript
const separator = '###';
const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const result = flatJoinArray(separator, array1, array2);
// result = [1,2,3,4,'###',5,6,7,8];
```