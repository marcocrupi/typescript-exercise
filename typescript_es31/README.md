# 31 - ADVANCED OBJECT TYPES: Interfaces and Types

STEP: 

* In the code editor, there’s a program that will show progress on a monthly running goal. This month’s running goal is 50 miles (~80km). The updateRunGoal() takes in a run argument and displays stats about this month’s running goal. This program works right now, but we need to add a type to run since run is of type any at the moment. At the top of index.ts, declare an interface named Run with one type member: miles: number;
* Apply the Run interface to the run parameter.
* In the terminal run tsc to compile your code.
* Finally, run node index.js in the terminal to see the output. You should see some stats about a monthly running goal.