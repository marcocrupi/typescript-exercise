// type User = {
//   id: number;
//   username: string;
// };

// function createUser() {
//   const randomChance = Math.random() >= 0.5;

//   if (randomChance) {
//     return { id: 1, username: "nikko" };
//   } else {
//     return "Could not create a user.";
//   }
// }

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

let userData: User | string = createUser();