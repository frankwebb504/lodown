'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;




/**
 * idenetity: Designed to take any value and return that value unchanged.
 * 
 * @param {any data type} value: Any value to be returned.
 * @return {any data type} value: Value returned unchanged.
 * 
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;





/**
 * typeOf: Designed to return the type of value provided as a string.
 * 
 * @param {any data type} value: Any value to be returned.
 * @return {string of data type} string: sting of date type of value.
 * 
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    }
    else if (typeof value === undefined) {
        return 'undefined';
    }
    else if (value === null) {
        return 'null';
    }
    else {return typeof value}
}
module.exports.typeOf = typeOf;





/**
 * First: Designed to return the first <number> items of <array>. If array param is not an array provide blank array.
 * If number is not provided or NaN, return first item in array.
 * 
 * @param {array} array: Array of items to pull from.
 * @param {number} number: How many items to return from the begining of array.
 * @return {array} array: Array of remaining values.
 * 
 */
function first(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    else if (number === undefined || isNaN(number)) {
        return array[0];
    }
    else {return array.splice(0, number)}
}
module.exports.first = first;



/**
 * Last: Designed to return the last <number> items of <array>. If array param is not an array provide blank array.
 * If number is not provided or NaN, return first item in array.
 * If number is longer than array length, returns array
 * @param {array} array: Array of items to pull from.
 * @param {number} number: How many items to return from the end of array.
 * @return {array} array: Array of remaining values.
 * 
 */
function last(array, number) {
    if (!Array.isArray(array)) {
        return [];
    }
    else if (number === undefined || isNaN(number)) {
        return array[array.length -1];
    }
    else if (number > array.length -1) {
        return array;
    }
    else {return array.splice(array.length - number, array.length - 1)}
}
module.exports.last = last;



/**
 * indexOf: Designed to return the index of the first given value found in array.
 * If not found, return -1.
 * @param {array} array: Array of items to pull from.
 * @param {any data type} value: Value we are looking for in the array.
 * @return {number}: Number representing the index in array where found, or -1 if value not found in array.
 * 
 */
function indexOf(array, value) {
for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
        return i;
    }
}
return -1;
}
module.exports.indexOf = indexOf;



/**
 * contains: Designed to return true if a given value is found in a given array, or false otherwise.
 * 
 * @param {array} array: Array of items to pull from.
 * @param {any data type} value: Value we are looking for in the array.
 * @return {boolean} true or false: true if found, false if not.
 * 
 */
function contains(array, value) {
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
        count = count + 1;
    }
}
var test = (count >= 1) ? true : false;
return test;
}
module.exports.contains = contains;



/**
 * each: Designed to determine if collection given is an object or array, and run a given function on each array element or object key.
 * 
 * @param {array or object} collection: object or array we are calling the function on
 * @param {function} func: function we want to run on each array item or object property
 * 
 */
function each(collection, func) {
    if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    else {for (let key in collection) {
        func(collection[key], key, collection);
    }}
}
module.exports.each = each;




/**
 * unique: Designed to remove all duplicates from a given array
 * 
 * @param {array} array: Array of items to search.
 * @return {array} array: Same array given with all duplicates removed.
 * 
 */
function unique(array) {
let newArr = [];
for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
       newArr.push(array[i]);
    }
}
return newArr;
}
module.exports.unique = unique;





/**
 * filter: Designed to call a function on each element in an array and return a new array of all elements the function returned true for.
 * 
 * @param {array} array: Array of items to run function on.
 * @param {func} function: Function that returns true or false.
 * @return {array} array: Array made of all items from original array that returned true when function was called upon them.
 * 
 */
function filter(array, func) {
let newArr = [];
for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
        newArr.push(array[i]);
    }
}
return newArr;
}
module.exports.filter = filter;




/**
 * reject: Designed to call a function on each element in an array and return a new array of all elements the function returned false for.
 * 
 * @param {array} array: Array of items to run function on.
 * @param {func} function: Function that returns true or false.
 * @return {array} array: Array made of all items from original array that returned false when function was called upon them.
 * 
 */
function reject(array, func) {

const newArr2 = filter(array, function(element, index, collection) {
    return !func(element, index, collection);
});
return newArr2;
}


/**
 * partition: Designed to call a function on each element in an array and return a new array of two arrays: one the function returned true for, and one it returned false for
 * 
 * @param {array} array: Array of items to run function on.
 * @param {func} function: Function that returns true or false.
 * @return {array} array: Array made of all items from original array seperated into two arrays, one for which the function returned true and one for which the function returned false
 * 
 */
function partition(array, func) {
let bigArr = [];
let trueArr = [];
let falseArr = [];
for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
        trueArr.push(array[i]);
    }
    else {falseArr.push(array[i])}
}
bigArr.push(trueArr);
bigArr.push(falseArr);
return bigArr;
}
module.exports.partition = partition;


/**
 * map: Designed to call a function on each element in an array or object and return the results in an array
 * 
 * @param {collection} array or object: Array or object of items to run function on.
 * @param {func} function: Function to run on object or array
 * @return {array} array: Array made of all the returns from the function called on each item in array or object
 * 
 */
function map(collection, func) {
    let newArr = [];
    each(collection, function(element, index, collection) {
        newArr.push(func(element, index, collection));
    })
    return newArr;
}
module.exports.map = map;



/**
 * pluck: Designed to return an array of the property given from an array of objects
 * @param {array} array of objects: Array of objects we will search through for a property.
 * @param {property} string: property that we are looking for
 * @return {array} array: Array made of all the values we have from the property we searched for.
 * 
 */
function pluck(array, prop) {
return map(array, function(element, index, array) {
    return element[prop];
})
}
module.exports.pluck = pluck;



/**
 * every: Designed to return true if every element in collection passes test function, or false if any elements fail
 * @param {collection} array or objects: Array or objects we will test our function on
 * @param {funct} function: function that should evaluate to true or false
 * @return {boolean} true or false: returns true if all elements pass, or false if any element returns false
 * 
 */
function every(collection, funct) {
let count = 0;
// if funct is not given, we must evaluate the truthyness of each element in collection and return the outcome accordingly    
   if (funct === undefined || funct === null) {
//run each of every object property or array index, and determine the truthyness of each       
       each(collection, function(element, index, collection) {
//if any are false we want to return false           
        if (!!element === false) {
            count += 1;
        }
//if all run without returning false, they all passed so we want to return true        
    })
   }
//if funct was provided, we want to run that function on each element   
   else {each(collection, function(element, index, collection) {
//if the result of any of those function calls on the elements is false we want to return false       
        if (funct(element, index, collection) === false) {
            count += 1;
        }
//if none returned false, they all passed. So we want to return true        
    })
   }
if (count === 0) {
    return true;
}   
else {return false}
}
module.exports.every = every;



/**
 * some: Designed to return true if one element in collection passes test function, or false if all elements fail
 * @param {collection} array or objects: Array or objects we will test our function on
 * @param {funct} function: function that should evaluate to true or false
 * @return {boolean} true or false: returns true if one element passes, or false if all elements return false
 * 
 */
function some(collection, funct) {
let count = 0;
// if funct is not given, we must evaluate the truthyness of each element in collection and return the outcome accordingly    
   if (funct === undefined || funct === null) {
//run each of every object property or array index, and determine the truthyness of each       
       each(collection, function(element, index, collection) {
//if any are false we want to return false           
        if (!!element === true) {
            count += 1;
        }
//if all run without returning false, they all passed so we want to return true        
    })
   }
//if funct was provided, we want to run that function on each element   
   else {each(collection, function(element, index, collection) {
//if the result of any of those function calls on the elements is false we want to return false       
        if (funct(element, index, collection) === true) {
            count += 1;
        }
//if none returned false, they all passed. So we want to return true        
    })
   }
if (count === 0) {
    return false;
}   
else {return true}
}
module.exports.some = some;




/**
 * reduce: Designed to apply a function to an array starting with a seed. If no seed given, it starts with the first element of the array.
 * @param {array} array: Array we will run our function on
 * @param {funct} function: function that we will run on our array with the paramenters (seed or previous result, element, index)
 * @param {seed} number: number to start off our function with
 * @return {number} number: returns the final result after the function has been called on all elements
 * 
 */
function reduce(array, func, seed) {
 let seedDefined = 0;
   if(seed === undefined) {
       seed = array[0];
       seedDefined = 1;
   }
   for(var i = seedDefined; i <= array.length - 1; i++) {
       seed = func(seed,array[i],i) ;
   }
   return seed;
};
module.exports.reduce = reduce;

/**
 * extend: Designed to take an object, an any number of onjects afterwards and add properties on the first object from the others
 * @param {object} object: object we will add properties to.
 * @param {object} object: object we will take properties from to be added
 * @param {...theArgs} any number of more objects: as many more objects you want to pull properites from
 * @return {object} original object: first object in the arguments, with new properties added
 * 
 */
function extend(obj1, obj2, ...theArgs) {
for (let key in obj2) {
    obj1[key] = obj2[key];
}
for (let i = 0; i < theArgs.length; i++) {
for (let key in theArgs[i]) {
    obj1[key] = theArgs[i][key];
}}
return obj1;
}
module.exports.extend = extend;
















