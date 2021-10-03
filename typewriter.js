// const sentence = "hello there from lighthouse labs\n";
// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, i * 50);
// }

const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  setTimeout(() => {
    i !== sentence.length - 1 ? process.stdout.write(char) : process.stdout.write(`${char}\n`);
  }, i * 50);
}