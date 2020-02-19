// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var Prograd1 = "Ashish";
var Prograd2 = "Swapnil";
console.log("The navigator's name is "+Prograd2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var x =Prograd1.length;
var y = Prograd2.length;
if(x>y){
console.log("The driver has the longest name "+x);
}
else{
  console.log("The Navigator has the longest name, it has "+y" characters");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var k = 0, p = 0;
for (var i = 0; i < Prograd1.length; i++)
    if(Prograd1.charCodeAt(i)<97){
        p = p+1;
    }
  else{
        k = k+1;}
console.log("UpperCase: " + p)
console.log("LowerCase: " + k)




// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
if(i == Prograd1.length-1){
        break;
    }else{
        res = res + " ";




// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
var splting = Prograd2.split("");
var rev = spliting.reverse();
var final = rev.join("");
console.log(final)



// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
var con = ""
undefined
ada = ada.concat(Prograd1, " ", Prograd2)
var a = ada.split(" ")
var resu = "";
for (i = a.length-1; i>=0; i--){
    ru = ru + a[i];
    if(i == 0){
        break;
    }else{
        ru = ru + " ";}
}
console.log(ru)


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
     for(var i =0 )

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
