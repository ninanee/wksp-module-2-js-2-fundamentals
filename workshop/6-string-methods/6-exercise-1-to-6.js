// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = "Rick Sanchez";
const rickSaying = "wubba lubba dub dub";
const grandson = "Morty Antoine Smith";
const enemies =
  "Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova";
const alternateRicks =
  "Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137";
const secret =
  "summerlobaconokfamily ascaryt mintergalactice, I'jerrym Pimortybethckle Rick!";
const notCode = [
  "summer",
  "bacon",
  "scary",
  "intergalactic",
  "jerry",
  "morty",
  "beth",
  "family",
];

// Q1
// How many names does Morty have? (use grandson)
const newGrandson = grandson.split(" ");
console.log(newGrandson.length);

// Q2
// Convert the alternateRicks string to an array. Console that array.
const newOne = alternateRicks.split(",");
console.log(newOne);

// Q3
// How many Ricks have been named in alternateRicks?

let count1 = (alternateRicks.match(/Rick/g) || []).length;

console.log(count1);

let count = 0;
for (let i = 0; i < newOne.length; i++) {
  if (newOne[i].includes("Rick")) {
    count++;
  }
}
console.log(`Another solution of A3) is : ${count}`);
// Q4
// How many characters are there in rickSaying (without spaces)?
let newRickSaying = rickSaying.split(" ");
let count4 = 0;
for (let i = 0; i < newRickSaying.length; i++) {
  for (let j = 0; j < newRickSaying[i].length; j++) {
    count4++;
  }
}
console.log(`The solution for Q4: ${count4}`);
// Q4
// Morty doesn't actually have a middle name. Console Morty's name without "Antoine".

let newName = grandson.replace("Antoine ", "");
console.log(`Q4 for the new name: ${newName}`);
// Q5
// Decode and console. the secret!
// To do so, you will need to remove all of the notCode words.
let decodemsg = secret;
for (let i = 0; i < notCode.length; i++) {
  decodemsg = decodemsg.replace(notCode[i], "");
}

console.log("Q5", decodemsg);
// Q6 (challenge)
// Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.
let newEmemies = enemies.replace(" Scary Terry,", "");
console.log("Q6)", newEmemies);
