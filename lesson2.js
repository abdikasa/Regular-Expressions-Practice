function findRe(reg, string) {
    //If string matches the regular expression, return true.
    if (reg.test(string)) {
        console.log(`${str} is inside ${reg.source}`)
    }else{
        console.log(`${str} is not inside ${reg.source}`)
    }
}

let re;
re = /hello/i

const str = 'Hello World';
const result = re.exec(str);  


//Metacharacter symbols
re = /^h/i                  //Start with an 'H' or 'h'. 
re = /^o$/i                 //End with lowercase/uppercase O.
re = /^hello$/i             //Start and end with hello.
re = /^h.llo$/i             //the '.' is a 'single' wildcard character.
re = /^h*llo$/i             //The asterisk, will match any character 0 or more times.
re = /gre?a?y/i             //Option character (?), you put the ? after the optional char.
re = /gray\?/               //Escape character: For special chars, to match them, use /(special char).



findRe(re, str);
