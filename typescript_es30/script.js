var iron = {
    magnetize: function () { return "Electromagnet activated"; }
};
var bottle = {
    melt: function () { return "Furnace set to 2,700 degrees"; }
};
function recycle(trash) {
    // Add your code below:
    if ("magnetize" in trash) {
        return trash.magnetize();
    }
    return trash.melt();
}
console.log(recycle(iron));
