function updateRunGoal(run) {
    console.log("\nMiles left:       ".concat(50 - run.miles, "\nPercent of goal:  ").concat((run.miles / 50) * 100, "% complete\n  "));
}
updateRunGoal({
    miles: 5
});
