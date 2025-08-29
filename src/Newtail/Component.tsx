//  all array methods in javascriptbnynb
// | Method                               | Description                                                           |
// | ------------------------------------ | --------------------------------------------------------------------- |
// | `Object.assign()`                    | Copies properties from one or more objects into a target object       |
// | `Object.create()`                    | Creates a new object using an existing object as prototype            |
// | `Object.defineProperty()`            | Adds a property with custom behavior (getter, setter, writable, etc.) |
// | `Object.defineProperties()`          | Adds multiple properties                                              |
// | `Object.entries()`                   | Returns key-value pairs as array (`[key, value]`)                     |
// | `Object.keys()`                      | Returns array of keys                                                 |
// | `Object.values()`                    | Returns array of values                                               |
// | `Object.freeze()`                    | Makes an object immutable (can’t be changed)                          |
// | `Object.seal()`                      | Prevents adding/removing properties but allows editing existing ones  |
// | `Object.is()`                        | Checks if two values are the same (like `===`, but more precise)      |
// | `Object.getOwnPropertyDescriptor()`  | Returns details of a property (like writable, enumerable)             |
// | `Object.getOwnPropertyDescriptors()` | Returns all property descriptors                                      |
// | `Object.getPrototypeOf()`            | Returns the prototype of the object                                   |
// | `Object.setPrototypeOf()`            | Sets the prototype of an object                                       |
// | `Object.hasOwn()`                    | Checks if an object has a property directly (not inherited)           |
// | `Object.fromEntries()`               | Converts key-value pairs back into an object                          |





// ✅ 1. Basic Methods
// Method	What it does	Returns
// push()	Add item(s) to the end	New length
// pop()	Remove last item	Removed item
// shift()	Remove first item	Removed item
// unshift()	Add item(s) to the beginning	New length
// length	Returns the number of items	Number

// 🔁 2. Iteration Methods
// Method	What it does	Returns
// forEach()	Loops through array	undefined
// map()	Transforms items into a new array	New array
// filter()	Returns items that match a condition	New array
// reduce()	Reduces to a single value	Any (number, string, object)
// reduceRight()	Like reduce(), but from right to left	Any
// find()	Returns first match	Item or undefined
// findIndex()	Returns index of first match	Index or -1
// some()	Is at least one item true?	true or false
// every()	Are all items true?	true or false
// flat()	Flattens nested arrays	New array
// flatMap()	Maps and flattens one level	New array

// 🔍 3. Searching & Checking
// Method	What it does	Returns
// includes()	Checks if value exists	true / false
// indexOf()	First index of item	Index or -1
// lastIndexOf()	Last index of item	Index or -1

// 🔧 4. Modifying (Mutating) Methods
// Method	What it does	Returns
// splice(start, deleteCount, ...items)	Add/remove items at any position	Removed items array
// sort()	Sorts in place (by default, alphabetically)	Same array
// reverse()	Reverses array in place	Same array
// fill(value, start?, end?)	Fill array with value	Same array
// copyWithin(target, start, end?)	Copy part of array within itself	Same array

// 🧱 5. Creating Arrays
// Method	What it does	Returns
// Array.of()	Creates new array from arguments	New array
// Array.from()	Converts iterable (like string or NodeList) to array	New array
// new Array(length)	Creates empty array with length	Array

// 🧪 6. Conversion & Joining
// Method	What it does	Returns
// join(separator)	Converts array to string	String
// toString()	Converts array to comma-separated string	String

// 📦 7. Accessing
// Method	What it does	Returns
// at(index)	Access item (supports negative index)	Item or undefined
// [i]	Bracket notation (like arr[0])	Item

// ✅ Modern Favorites
// map() – transform array

// filter() – select items

// find() – get first match

// some() & every() – check conditions

// flat() – flatten nested arrays

// at() – access from end using negative index

