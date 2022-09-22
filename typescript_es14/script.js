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
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.Chinchilla;
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
ordersArrayTS.push([Pet.Jerboa, 3]);
