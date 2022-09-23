// type Like = {
//   username: string;
//   displayName: string;
// };
function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
var newEvent = {
    username: "vkrauss",
    displayName: "Veronica Krauss"
};
var friendName = getFriendNameFromEvent(newEvent);
console.log("You have an update from ".concat(friendName, "."));
