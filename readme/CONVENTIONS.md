# Coding Conventions

When contributing code to the repository, please make sure to follow these guidelines.

## TSC

TypeScript needs to compile without errors. Please run `yarn build` before pushing your code.

## ESLint

There should be no new ESLint warnings in your code. Please run `yarn lint` and make sure your code doesn't cause any additional warnings or errors.

<sub>Note: we will clean up the existing linting errors ASAP.

## Prettier

Please configure your IDE to run prettier on save or make sure to run it manually on the whole codebase before commiting.

## Components

Please place components under `/src/components/ComponentName` export the types for its props and use named exports to expose the Component.

## Don't keep commented out code

Don't comment out code. We have version control. If you need to disable code, remove it. If you haven't yet commited that code save it in a stash using `git stash`

## DRY

Please refactor code into components as modular as possible. Reuse components where it makes sense and extract duplicate code into shared components.
