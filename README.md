# School API

School API allows developers to use some functionalities needed at schools, like adding a student to a classroom and a school and receiving the list of students from a certain class, etc.

## Which packages are used?
[TypeScript](https://www.npmjs.com/package/typescript) as a programming language.   
[Express](https://www.npmjs.com/package/express) as a node.js framework.  
[Mongoose](https://www.npmjs.com/package/mongoose) as an object modeling tool.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/npm) to install dependencies.

```bash
npm install
```

## Usage

Before running the code, make sure you have MongoDB up and running. 
Add MongoDB uri to the `env.ts` file by renaming the `env.ts.sample` file as `env.ts` and replacing the path name of uri.

```typescript
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
