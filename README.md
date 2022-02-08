# 🐱‍👤 TypeScript-Warrior 🐱‍🏍🤖

## It's excercise which have a goal to train refactoring from JavaScript to TypeScript. Excercise from previous modules of MEGA-K course with continous improvement.

- [x] Open oryginal project in JS
- [x] install dependencies from package.json: npm install
- [x] Install nessesary TypeScript dev dependencies:
- [x] Check TypeScript config:
```
 {
"compilerOptions": {
  "noImplicitAny": true,
  "preserveConstEnums": true,
  "sourceMap": true,
  "target": "es6",
  "downlevelIteration": true,
  "lib": [
    // "dom",
    "es6",
    "dom.iterable"
     ],
  "outDir": "dist",
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "moduleResolution": "Node"
  }
}
```

- [x] Create scripts for TypeScript run:

```  
 "scripts": {
  "start": "ts-node index.ts",
  "start:dev": "tsnd index.ts"
  }
```
Have fun with improvements  😊
