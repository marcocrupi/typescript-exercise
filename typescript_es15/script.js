var petOnSale = "chinchilla";
var ordersArray = [
    ["rat", 2],
    ["chinchilla", 1],
    ["hamster", 2],
    ["chinchilla", 50],
];
// Write your code below:
var Pet;
(function (Pet) {
    Pet["Hamster"] = "HAMSTER";
    Pet["Rat"] = "RAT";
    Pet["Chinchilla"] = "CHINCHILLA";
    Pet["Tarantula"] = "TARANTULA";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.Chinchilla;
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
ordersArrayTS.push(["HAMSTER", 1]);
