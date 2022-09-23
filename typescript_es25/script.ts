// type Like = {
//   username: string;
//   displayName: string;
// };

// type Share = {
//   username: string;
// };

// function getFriendNameFromEvent(event) {
//   return event.displayName || event.username;
// }

// const newEvent = {
//   username: "vkrauss",
//   displayName: "Veronica Krauss",
// };

// const friendName = getFriendNameFromEvent(newEvent);

// console.log(`You have an update from ${friendName}.`);

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);