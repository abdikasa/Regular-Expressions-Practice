let  reg;

reg = /hello/;          // literal characters taken at face value
console.log(reg)        // output: /hello/
console.log(reg.source) // output: hello

//Functions that use reg expressions

//exec() - returns the found result in an array/object or null.
//It reads like this 'searchForTerm.exec('input')'

const result = reg.exec('hello world')
//hello is inside (hello, world), function retunrs ['hello', index, the input, group].
//Index is index based: so it looks for the whole term inside the input, in this case it would be 0. If the input was 'ummhello' => index would be 3. 
console.log(result);

//If the result returns an array, it means the term is found in the input, you can do the following.

console.log(result[0]) //returns the searched item, in this case 'hello'.
console.log(result.index) //returns the index
console.log(result.input) //returns the passed item inside the paranthesis.

//test() - returns true or false depending on a match, case sensitive
//Use flags to indicate exactly  what you want to find.
//In this case, 'Hello' fails the test no pun intended. But it can pass the test with i (case-insenitive) after the /.
//g at the end represents a global search.
console.log(reg.test('hello')) 

//match() => the same as exac but it takes the reg expression inside the param instead of the passed index we are seraching.

console.log('hello'.match(reg))


//search() - Returns index like indexOf(), the firt match.

const str = 'Hello there'
const result2 = str.search(reg);

//replace()- return a new string with some or all matches of a pattern.

const string = 'hello there';

const newString = str.replace(reg, 'Hi');