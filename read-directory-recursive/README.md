# Read Directory Recursive

## Usage

Lets say i want to get all filename inside a directory and its subdirectory.
```console
src
├── assets
│   └── images
│       ├── home.png
│       └── photo.png
├── index.ts
└── mod.ts
```

I can just do this:
```typescript
const files = readDirectoryRecursive("./src");

console.log(files);
```

Output:
```console
[
  './src/assets/images/home.png',
  './src/assets/images/photo.png',
  './src/index.ts',
  './src/mod.ts'
]
```

## Use Case

I mainly use this for entry files in webpack.config.js