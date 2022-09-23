// function formatValue(value: string | number) {
// Write your code here
// }

// formatValue("Hiya");
// formatValue(42);

function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === "string") {
    return console.log(value.toLowerCase());
  }
  if (typeof value === "number") {
    return console.log(value.toFixed(2));
  }
}

formatValue("Hiya");
formatValue(42);