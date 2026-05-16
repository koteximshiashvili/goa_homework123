class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    return this.items.join(", ");
  }
}

const stack = new Stack();

for (let ch of "hello") {
  stack.push(ch);
  console.log("Pushed:", ch, "→ Stack:", stack.print());
}

while (!stack.isEmpty()) {
  const popped = stack.pop();
  console.log("Popped:", popped, "→ Stack:", stack.print());
}

function reverse(str) {
  const stack = new Stack();
  for (let ch of str) stack.push(ch);
  let reversed = "";
  while (!stack.isEmpty()) reversed += stack.pop();
  return reversed;
}

console.log(reverse("stack"));

function isBalanced(expression) {
  const stack = new Stack();
  const pairs = { ")": "(", "]": "[", "}": "{" };
  for (let ch of expression) {
    if (["(", "[", "{"].includes(ch)) stack.push(ch);
    else if ([")", "]", "}"].includes(ch)) {
      if (stack.isEmpty() || stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.isEmpty();
}

console.log(isBalanced("(()"));
console.log(isBalanced("([]]"));
console.log(isBalanced("{[()]}"));
