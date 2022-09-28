var siameseCat = {
    name: "Proxie",
    run: function () { return "pitter pat"; }
};
var bettaFish = {
    name: "Neptune",
    swim: function () { return "bubble blub"; }
};
function move(pet) {
    if ("run" in pet) {
        return pet.run();
    }
    if ("swim" in pet) {
        return pet.swim();
    }
}
console.log(move(siameseCat));
