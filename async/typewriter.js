const sentence = "I am Batman and I am the protector of Gotham City!";

let i = 1000; //the original 1000 m/s from the problem
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i); //the initial timeout factor has to be replaced with a variable that adds 50 m/s incrementally as it increases with each letter in the string.
  i += 50;
}

setTimeout(() => {
  process.stdout.write("\n");
}, i);