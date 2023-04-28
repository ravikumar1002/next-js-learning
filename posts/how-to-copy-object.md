---
title: "How to Copy object?"
date: "2022-06-10"
---
Hey guys, so this topic is about how to copy an object without changing the original one because sometimes we copied an object without knowing that accidentally we changed the original object too.

  So Let's start  
  

---

## Understanding Deep and Shallow Copy

  In a reassignment operation involving primitive data types such as strings, numbers, and booleans, the original variable is copied by JavaScript.

For example, 
```js
y = x //  x is copied into y
 
y++ // y is incremented
 
console.log(y) // now 4
console.log(x) // still 3
```
In this case, the value 3 is copied into y, and then x is disconnected from y. So mutating y does not affect x.

Conversely, with non-primitive data types like arrays and objects, only a reference to the values is passed. So when the copy is mutated, the original also gets mutated. This is also known as **shallow copying**.
```js
let aalu = {name: "aalu"};
 
let bhalu = aalu;
bhalu.name = "bhalu";
 
console.log(aalu.name);  // outputs "bhalu"
console.log(bhalu.name); // outputs "bhalu"
```

If we instead want to copy an object so that we can modify it without affecting the original object, we need to make a **deep copy**.

---

## So let's talk about copying Obj

  
### 1. JSON.stringify() and JSON.parse()

 So first talk about what is `JSON.stringify()` and `JSON.parse()`? 
   
`JSON.stringify()` : This method converts a JavaScript object or value to a JSON string.

`JSON.parse()`: This method parses a JSON string, constructing the JavaScript value or object described by the string. 

We can combine both of these methods to create a copy of an object like this: 

```js
const user = {
    name: "JSON",
    age: "21",
    job: "standard file format and data interchange format",
}
 
let clone = JSON.parse(JSON.stringify(user))
 
console.log(user)
console.log(clone)
 
/*
{
  age: 21,
  job: "standard file format and data interchange format",
  name: "JSON"
}
{
  age: 21,
  job: "standard file format and data interchange format",
  name: "JSON"
}
*/
```

When the copy object is mutated, the original object stays the same:

```js
clone.age = 32
 
console.log(user)
console.log(clone)
 
/*
{
  age: 21,
  job: "standard file format and data interchange format",
  name: "JSON"
}
{
  age: 32,
  job: "standard file format and data interchange format",
  name: "JSON"
}
```


However, this will also create a problem when we are working with a function that was inside a function.

Suppose we have a method in our object `user` called `incrementAge`:

```js
const user = {
    name: "JSON",
    age: "21",
    job: "standard file format and data interchange format",
    incrementAge: function() {
         this.age++
    }
}
```

The function will not be available in the copied object. Thus, this method achieves deep copy only if there is no function within the object.

###   Object.assign()

Among the object constructor methods, `Object.assign()` is used to copy the values and properties from one or more source objects to a target object. It returns the target object, which has properties and values copied from the source object.

```js
const user = {
    name: "JSON",
    age: "21",
    job: "standard file format and data interchange format",
    incrementAge: function() {
         this.age++
    }
}
 
let clone = Object.assign({}, user) // Copies user into clone

clone.age = 32
 
console.log(user)
console.log(clone)
 
/*
{
     age: 21,
     incrementAge: function() {
       this.age++
     },
     job: "standard file format and data interchange format",
     name: "JSON"
}
{
     age: 32,
     incrementAge: function() {
       this.age++
     },
     job: "standard file format and data interchange format",
     name: "JSON"
}
*/
```
However, one thing to remember about `Object.assign()` is that the method only performs a partial deep copy on objects.

To understand what that means, let's consider the following:
```js
const user = {
    name: "JSON",
    age: 21,
    job: "standard file format and data interchange format",
    location: {
      city: "Lagos",
    }
}

const clone = Object.assign({}, user)

clone.age = 32
clone.location.city = "New York"
 
console.log(user)
console.log(clone)
 
/*
{
  age: 21,
  job: "standard file format and data interchange format",
  location: {
       city: "New York",
  },
  name: "JSON",
}
 
{
  age: 32,
  job: "standard file format and data interchange format",
  location: {
       city: "New York",
  },
  name: "JSON",
}
*/
```

Whenever we mutate a property within the nested object (in `clone`), it will also mutate the same property in the original object (`user`). While the age property in the original object remained untouched, the city property was mutated by the reassignment operation. Hence, the `Object.assign()` method should be used to deep copy objects that have no nested objects. 

### The Spread Operator(`...`)

Introduced with ES2015, this operator is just great because it is so short and simple. It ‘spreads’ out all of the values into a new object. You can use it as follows:

```js
const obj = {
  age: 21,
  job: "standard file format and data interchange format",
  location: {
       city: "New York",
  },
  name: "JSON",
}

const copyObj = {...obj}

copyObj.job = "nothing"

console.log(obj, copyObj)

/*

{
  age: 21,
  job: "standard file format and data interchange format",
  location: {
       city: "New York",
  },
  name: "JSON",
}

{
  age: 21,
  job: "nothing",
  location: {
       city: "New York",
  },
  name: "JSON",
}

```
However, much like with `Object.assign()`, the spread operator only makes a partial copy. So any object with a nested object will not be deeply copied.

###  Lodash cloneDeep() 

Lodash is a modern JavaScript utility library delivering modularity, performance & extras. Lodash also provides a utility method _.cloneDeep() for deep cloning of objects in JavaScript. 
```js
const deepClonedObject = _.clonedeep(originalObject);
```
You can learn more about this and its methods from 
 https://lodash.com/docs

### Conclusion

As you've seen, there are many ways to copy a variable in JavaScript. None of them is perfect for every occasion, so you'll have to be careful to choose the best method for each situation.
