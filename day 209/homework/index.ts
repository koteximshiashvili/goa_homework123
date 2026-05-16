function identity<T>(sixseven: T): T {
  return sixseven;
}

console.log(identity<number>(67));
console.log(identity<string>("six seven"));

function logArray<T>(sixseven: T[]): T[] {
  return sixseven;
}

console.log(logArray<number>([6, 7]));
console.log(logArray<string>(["s", "i", "x", "s", "e", "v", "e", "n"]));

function makePair<T, U>(sixseven: T, sixnine: U): [T, U] {
  return [sixseven, sixnine];
}

console.log(makePair<number, string>(67, "six seven"));


function swap<T, U>(sixseven: [T, U]): [U, T] {
  return [sixseven[1], sixseven[0]];
}

console.log(swap<string, number>(["six seven", 67]));

function firstElement<T>(sixseven: T[]): T {
  return sixseven[0];
}

console.log(firstElement<boolean>([Boolean("67"), Boolean(67), Boolean("six seven")]));
