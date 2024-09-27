const friendsGraph = {
  "Kendrick Lamar": ["Rick Ross", "Pusha T", "Future"],
  "Rick Ross": ["Kendrick Lamar", "Pusha T"],
  "Pusha T": ["Kendrick Lamar", "Rick Ross", "Future"],
  Future: [
    "Kendrick Lamar",
    "Pusha T",
    "Metro Boomin",
    "Megan The Stallion",
    "Rihana",
  ],
  "Metro Boomin": ["Future"],
  "The Weekend": ["Rihana"],
  "Megan The Stallion": ["Future"],
  Rihana: ["A$AP Rocky", "The Weekend", "Future"],
  "A$AP Rocky": ["Rihana"],
  Drake: [],
};

function areDirectFriends(graph, person1, person2) {
  return graph[person1].includes(person2);
}

// Function to find the number of hops between two people
function friendDistance(graph, start, target) {
  // Create a Set
  const visited = new Set();
  const myQueue = [];
  myQueue.push([start, 0]);

  while (myQueue.length > 0) {
    const [current, numberOfHops] = myQueue.shift();
    if (current === target) {
      return numberOfHops;
    }

    for (let i = 0; i < graph[current].length; i++) {
      const friend = graph[current][i];
      if (visited.has(friend)) {
      } else {
        visited.add(friend);
        myQueue.push([friend, numberOfHops + 1]);
      }
    }
  }
}

// console.log(areDirectFriends(friendsGraph, "Pusha T", "Rick Ross"));
const friendDistanceValue = friendDistance(
  friendsGraph,
  "A$AP Rocky",
  "Rick Ross"
);
console.log("friendDistanceValue", friendDistanceValue);
