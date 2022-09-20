// function proclaim(status: string) {
//   console.log(`I'm ${status || "not ready..."}`);
// }
// proclaim();
// proclaim("ready?");
// proclaim("ready!");
function proclaim(status) {
    console.log("I'm ".concat(status || "not ready..."));
}
proclaim();
proclaim("ready?");
proclaim("ready!");
