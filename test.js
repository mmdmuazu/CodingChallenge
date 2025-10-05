//   javascript test

/* write a function that reverses a word */
function reverseWord(word) {
  return word.split(" ").reverse().join(" ");
}
console.log(reverseWord("hello world")); // Output: 'world hello'

// remove deplicates from an array
function removeDuplicates(arr) {
  const record = [];
  for (const num of arr) {
    if (!record.includes(num)) {
        record.push(num);
    // or use Set
    // the spread operator (...) to convert the Set back into an array
    // return [...new Set(arr)];

    }
  }
  return record;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// step two 
// count the number of vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello world")); // Output: 3

// step three

function countOccurrences(arr, target) {
    let count = {};
    for (const num of arr) {
        if (num in count) {
            count[num]++;
        }else{
            count[num] = 1;
        }
    }
    return count[target];   
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3], 3)); // Output: { '1': 1, '2': 2, '3': 3 }

function fizzBuzz(n) {
    for (let i=0;i<n+1;i++){
        if(i == 3 || i == 3 + 3){
            console.log("Fizz");
        }else if(i == 5 || i == 5 + 5){
            console.log("Buzz");
        }else if(i == 3 * 5){
            console.log("FizzBuzz")
        }else if(i == 3 * 3){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}

//            Correction
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
fizzBuzz(15);

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
//                     Correction
// // another way
// function isPalindrome(str) {
//   const clean = str.toLowerCase().replace(/\s/g, "");
//   const reversed = clean.split("").reverse().join("");
//   return clean === reversed;
// }

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 


function smallestForm(n) {
  // Base case: stop if n is 1 or prime
  if (n <= 3) return n;

  // Try to find factors
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      const a = i;
      const b = n / i;
      const newN = a + b;
      // Keep reducing recursively
      return smallestForm(newN);
    }
  }

  // If no factors found, it's prime
  return n;
}

// Test examples
console.log(smallestForm(12));  // 5  -> 9=3*3 => 3+3=6 => 2*3=6 => 2+3=5
// console.log(smallestForm(12)); // 7  -> 12=3*4 => 3+4=7
// console.log(smallestForm(2));  // 2
// console.log(smallestForm(18)); // ?

console.log(os.machine())

