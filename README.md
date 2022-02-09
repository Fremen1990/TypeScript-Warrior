# 🐱‍👤 TypeScript-Warrior 🐱‍🏍🤖

## It's excercise which have a goal to train refactoring from JavaScript to TypeScript. Excercise from previous modules of MEGA-K course with continous improvement.


### TypeScript Warrior v1:

ToDo:
V1:
- [x] Webstorm configuration
- [x] Installation packages and configuration TypeScript  
- [x] Express configuration and public folder - static files creation
- [ ] Routes structure
- [ ] View - Overall views structure
- [ ] Records
- [ ] Logic for Warriors creation 
- [ ] Logic for Hall of Glory
- [ ] Logic for Fight Arena

V2:
- [ ] Vizualization for Fight Log
- [ ] Front-End JavaScript to handle points for warriors


package.json:  
```
{
  "name": "typescript-warrior",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "ts-node index.ts",
    "start:dev": "tsnd index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2",
    "express-async-errors": "^3.1.1",
    "express-handlebars": "^6.0.2",
    "method-override": "^3.0.0",
    "mysql2": "^2.3.3",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.16",
    "@types/method-override": "^0.0.32",
    "@types/uuid": "^8.3.4",
    "ts-node": "^10.4.0",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.5"
  }
}

```

tsconfig.json
```  
{
  "compilerOptions": {
    "noImplicitAny": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "target": "es6",
    "downlevelIteration": true,
    "lib": [
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
