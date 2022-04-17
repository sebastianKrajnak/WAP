# Binary search tree (WAP)
School project for web applications class, focused on JavaScript. The main goal of the project is to grasp the basic constructs of JS such as object prototypes, constructors, generators and iterators. It was forbidden to use classes added in ECMAScript 2015. 

Graded 8.7/10

## Project tasks
1. Create a library that creates a binary search over any data type.
2. Implement the preorder, inorder, and postorder methods within the library using generators.
3. Document and test the library.

Library was used, ran and tested using Node.js running on Ubuntu 20.04

## Requirements:
- node.js v16.14.0
- npm 8.3.1
- mocha 9.2.2
- chai 4.3.6
- jsdoc 3.6.10 (expected to be globally installed)

# Module tree

JavaScript module implementing a binary tree with a custom comparator function (passed as a constructor arguement) using a prototypal approach.

Implementation of inorder, preorder, postorder traversal functions using generator functions.

## Running the tests

This project uses mocha and chai test frameworks to test the correct implementation of traversal functions, to run these tests run:

```shell
./test.sh
```
to install required dependencies used for testing ie. mocha and chai and run the tests automatically.

## Generating the documentation ##

Documentation of this module is done using JSDOC. It is assumed you have JSDOC installed globally, if you do not, install it with 
```shell
npm install -g jsdoc
```

To create and open the documentation instantly run:
```shell
./doc.sh
```
Jsdoc will automatically create a ```out/``` folder containing the documentation website (```index.html```). An issue with launching the site happens while running the script on WSL instead of Linux, manual opening of the website is required then.
