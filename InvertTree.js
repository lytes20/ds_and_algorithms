function invertTree(node) {
  let left = node.left;

  let right = node.right;

  node.right = left;
  node.left = right;

  invertTree(left);
  invertTree(right);
}


const tree = {left: 'a', right: 'b'}
const inverted = {left: 'b', right: 'a'}
