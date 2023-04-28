---
title: "Types of Loop in JavaScript"
date: "2022-06-10"
---

So What are loops?

 Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false. A loop will continue running until the defined condition returns false.
  So question is that how many types of loop is available in  JS,
let's discuss

### for statement
  
  A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

  The for loop has the following syntax:
```js
for (initialExpression; conditionExpression; incrementExpression){
   // code block to be executed
 }
```
here, 
* `initialExpression` — it is used to initialize the counter 
    variables, and evaluated once unconditionally before the first 
    execution of the body of the loop.
* `conditionExpression` — it is evaluated at the beginning of each 
    iteration. If it evaluates to true, the loop statements 
    execute. If it evaluates to false, the execution of the loop 
    ends.
* `incrementExpression` — it updates the loop counter with a new 
   value each time the loop runs.

#### Example

```js
 for(let i=1; i<=5; i++) {
    console.log("The number for loop" + i );
 }

 // output:
 // "The number for loop 1" 
 // "The number for loop 2" 
 // "The number for loop 3" 
 // "The number for loop 4"
 // "The number for loop 5"
 
```

### do...while
  
 The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

A do...while statement looks as follows:
```js
do
  statement
while (condition);

```
here, 
The body of the loop is executed at first. Then the condition is evaluated. If the condition evaluates to true, the body of the loop inside the do statement is executed again. The condition is evaluated once again.
If the condition evaluates to true, the body of the loop inside the do statement is executed again. This process continues until the condition evaluates to false. Then the loop stops.

#### Example

```js
var result = '';
var i = 0;

do {
  i += 1;
  result += i + ' ';
}
while (i > 0 && i < 5);
console.log(result);

 // output

   //  '1 2 3 4 5 '

```


## while statement

 The most basic loop in JavaScript is the while loop which would be discussed in this chapter. The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.

while statement looks as follows:
```js
while (condition)
  statement
```
Here,
A while loop evaluates the condition inside the parenthesis ().
If the condition evaluates to true, the code inside the while loop is executed. The condition is evaluated again.
This process continues until the condition is false. When the condition evaluates to false, the loop stops.

#### example

```js
let i = 1, n = 5;

while (i <= n) {
    console.log(i);
    i += 1;
}

 // output
 // 1
 // 2
 // 3
 // 4
 // 5

```

## for...in statement

for...in is an important loop for JavaScript since it loops through all enumerable properties of a JavaScript object. In other words, if we have an object we can read all the values the object has using the for...in loop.
for...in is very helpful if we have an object we know nothing about, and this enables us to shift through properties and make decisions. This happens a lot with server calls. Also, this makes using prototypes easier since we can make a loop not knowing all the properties.

for...in statement looks as follows:
```js
for (key in object) {
    // body of for...in
}

```
Here,
A for in loop  evaluate in object. Property is key of object 

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

```

## for...of 

ES6 introduces a new for-of loop that allows us to iterate over arrays or other iterable objects (e.g. strings) very easily. Also, the code inside the loop is executed for each element of the iterable object. The for...of loop doesn't work with objects because they are not iterable. If you want to iterate over the properties of an object you can use the for-in loop.

for...of statement looks as follows:
```js
for (element of iterable) {
    // body of for...of
}
```
Here,
iterable - an iterable object (array, set, strings, etc).
element - items in the iterable


```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

```

To summarize, a loop is a sequence of instructions that is repeated until a condition is met. The key difference between the two major types of loops is that a For loop will run a set number of times whereas a While loop will run a variable number of times. Two major uses of loops are to produce output and to search for information.