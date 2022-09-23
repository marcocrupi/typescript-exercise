// function formatListings(listings) {
//   return listings.map((listing) => {
//     if (typeof listing === "string") {
//       return listing.toUpperCase();
//     }
//     if (typeof listing === "number") {
//       return `$${listing.toLocaleString()}`;
//     }
//   });
// }
// const result = formatListings([
//   "123 Main St",
//   226800,
//   "580 Broadway Apt 4a",
//   337900,
// ]);
// console.log(result);
function formatListings(listings) {
    return listings.map(function (listing) {
        if (typeof listing === "string") {
            return listing.toUpperCase();
        }
        if (typeof listing === "number") {
            return "$".concat(listing.toLocaleString());
        }
    });
}
var result = formatListings([
    "123 Main St",
    226800,
    "580 Broadway Apt 4a",
    337900,
]);
console.log(result);
