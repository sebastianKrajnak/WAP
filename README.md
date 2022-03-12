## Requirements:
- node.js v16.14.0
- npm 8.3.1
- mocha ('./test.sh')
- chai ('./test.sh')
- jsdoc ([Documentation](#generating-the-documentation 'Go to generating-the-documentation'))

School project for web applications class, focused on JavaScript. The main goal of the project is to grasp the basics of JS such as object prototypes, constructors, generators and iterators. It was forbidden to use classes added in ECMAScript 2015.

## Project tasks
1. Create a library that creates a binary search over any data type.
2. Implement the preorder, inorder, and postorder methods within the library using generators.
3. Document and test the library.

Library was used, ran and tested using Node.js

# Module tree

JavaScript module used for the creation of a binary tree with a custom comparator function (passed as a constructor arguement) using a prototypial method.

Implementation of inorder, preorder, postorder traversal functions using generator functions.

## Running the tests

This project uses mocha and chai test frameworks to test the correct implementation of traversal functions, to run these tests run:

```shell
./test.sh
```
to install required dependencies used for testing ie. mocha and chai and run the tests automatically.

## Generating the documentation

Documentation of this module is done using JSDOC. It is assumed you have JSDOC installed, if not do such using 
```shell
npm install -g jsdoc
```

To create and open the documentation instantly run:
```shell
./doc.sh
```
Jsdoc will automatically create a ```out/``` folder containing the documentation website.