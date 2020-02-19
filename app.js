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
var a=e=i=o=u=0;
var s1=Prograd1.split()
var s2=Prograd2.split()
for(var j=0; j<Prograd2.length; j++)
{ if(Prograd2[j]=='a' || Prograd2[j]=='A')
  {a++;}
  if(Prograd2[j]=='e' || Prograd2[j]=='E')
  {e++;}
  if(Prograd2[j]=='i' || Prograd2[j]=='I')
  {i++;}
  if(Prograd2[j]=='o' || Prograd2[j]=='O')
  {o++;}
  if(Prograd2[j]=='u' || Prograd2[j]=='U')
  {u++;}
}
console.log("a : "+a)
console.log("e : "+e)
console.log("i : "+i)
console.log("o : "+o)
console.log("u : "+u)


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
     if(l[0]<l[1])
{ console.log("The driver's name goes first.")}
else if(l[0]>l[1]){
  console.log("Yo, the navigator goes first definitely.")}
else { console.log("What?! You both have the same name?")}



// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
      var para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum sed justo ut finibus. Proin consequat eget neque vel aliquam. Suspendisse potenti. Maecenas eu egestas felis, ac tristique lorem. Morbi nec dui rhoncus, dignissim dolor vitae, fermentum orci. Aenean id nunc non urna mollis viverra non et velit. Pellentesque dignissim dignissim ante, at cursus nunc convallis sit amet. Quisque bibendum sagittis consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras imperdiet sapien non sodales elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas a ipsum nec nibh consectetur egestas. Aenean varius libero a elit blandit, sit amet commodo urna semper. Maecenas iaculis id velit nec malesuada. Etiam venenatis ac mi ac fermentum. Aenean orci lectus, pretium vitae leo ac, pellentesque hendrerit ligula. Nunc sit amet ligula sapien. Integer id lacus nec urna sollicitudin luctus ut at arcu. Donec suscipit ante ut hendrerit fermentum. Cras faucibus tristique blandit. Pellentesque et eros non orci tristique accumsan. Mauris gravida suscipit ipsum, malesuada lobortis nisl fringilla et. Morbi nisl neque, finibus a imperdiet nec, interdum id nisl. Aenean sit amet blandit odio, at ultricies leo. Sed fringilla pharetra diam et consectetur. Vivamus porta bibendum risus ac auctor. Vestibulum tincidunt eleifend pretium. Praesent in mauris eget nisi pretium imperdiet a a nunc. Vestibulum massa enim, vestibulum et ex sit amet, porta blandit metus. Duis lectus purus, condimentum at orci ac, laoreet blandit nibh. Vivamus convallis urna eu nulla faucibus, at lacinia ipsum cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque rhoncus eu arcu placerat viverra. Sed tincidunt ut quam in ultrices. Nunc a imperdiet ligula. Mauris ac molestie dui, vel iaculis eros. Nulla iaculis nibh lorem, vel viverra sem vulputate ac. Fusce scelerisque dignissim dui vehicula pharetra. Proin molestie facilisis quam ut tempus. Praesent tempus dui dui, a pretium sem feugiat ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer suscipit, nulla at egestas sodales, massa arcu laoreet ligula, vitae feugiat justo lacus vitae ipsum. Cras non libero varius, viverra dui a, maximus tortor. Quisque luctus orci est, a lobortis lorem ornare quis."
var br = para.split(" ")
var le = br.length
var c= 0;
for(var i=0; i<br.length; i++)
{ if(br[i]=="et")
{ c++;
}}
console.log(c)

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
      var phrase = "race car"
var den = phrase.split(" ")
var dej = den.join("")
var newstring = "";
for (var i = dej.length - 1; i >= 0; i--) { 
        newstring += dej[i]; }
if(dej==newstring)
{ console.log("Palindrome");}
else{console.log("Not a Palindrome");}



// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
