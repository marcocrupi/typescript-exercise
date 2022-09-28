function formatStatistic(stat: string | number) {
  if (typeof stat === "number") {
    return stat.toFixed(2);
  }
  if (typeof stat === "string") {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic("WIN"));
console.log(formatStatistic(0.36));
