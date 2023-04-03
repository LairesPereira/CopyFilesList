import readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: null
});

export default rl
