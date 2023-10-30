// Important Note - No Built-in functions to be used

// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian1` with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable `Kalvium2` with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const Kalvian1 = 'Sahil';
const Kalvium2 = 'Aditya';

console.log("The driver's name is " + Kalvian1);
console.log("The navigator's name is " + Kalvium2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!

const driverLength = Kalvian1.length;
const navigatorLength = Kalvium2.length;

if (driverLength > navigatorLength) {
  console.log(
    'The driver has the longest name, it has ' + driverLength + ' characters.'
  );
} else if (navigatorLength > driverLength) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      navigatorLength +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' + driverLength + ' characters!'
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - Print "no vowels".
// - For example, in String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

function vowelAndindex(name) {
  let vowels = [];
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u' ||
      char === 'A' ||
      char === 'E' ||
      char === 'I' ||
      char === 'O' ||
      char === 'U'
    ) {
      vowels.push(char);
      vowels.push(i + 1);
    }
  }
  if (vowels.length > 0) {
    let output = name + ' ';
    for (let i = 0; i < vowels.length; i++) {
      if (i > 0) {
        output += ' ';
      }
      output += vowels[i];
    }
    console.log(output);
  } else {
    console.log('no vowels');
  }
}

vowelAndindex(Kalvian1);
vowelAndindex(Kalvium2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countUpperCaseLowerCase(name) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++;
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++;
    }
  }

  console.log('Uppercase characters in ' + name + ': ' + upperCaseCount);
  console.log('Lowercase characters in ' + name + ': ' + lowerCaseCount);
}

countUpperCaseLowerCase(Kalvian1);
countUpperCaseLowerCase(Kalvium2);

// Progression 3: Control Statements - 2

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
function printNameInCapitals(name) {
  let result = '';
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      result += char;
    }
    if (i < name.length - 1) {
      result += ' ';
    }
  }
  console.log(result);
}

printNameInCapitals(Kalvian1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
function printNameInReverse(name) {
  let result = '';
  for (let i = name.length - 1; i >= 0; i--) {
    result += name[i];
  }
  console.log(result);
}

printNameInReverse(Kalvium2);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

function mergeNames(Kalvian1, Kalvium2) {
  console.log(Kalvian1 + ' ' + Kalvium2);
  console.log(Kalvium2 + ' ' + Kalvian1);
}

mergeNames(Kalvian1, Kalvium2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function compareNames(Kalvian1, Kalvium2) {
  const comparison = Kalvian1.localeCompare(Kalvium2);

  if (comparison < 0) {
    console.log("The driver's name goes first.");
  } else if (comparison > 0) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('What?! You both have the same name?');
  }
}

compareNames(Kalvian1, Kalvium2);
