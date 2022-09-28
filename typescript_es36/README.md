# 36 - ADVANCED OBJECT TYPES: Index Signatures

In the code editor, there’s a program that calls a budget API to get your current month’s budget by category. Your goal is to give the result variable the appropriate type inside the getBudget() function.

The call to getBudgetAsync() will return data that looks similar to this:

{
  'shopping': 150,
  'food': 210,
  'utilities': 100
}

The data from getBudgetAsync() could return different names for each category.

Declare an interface named Budget. Use an index signature to make all of its type members have property names of a variable category typed as a string with each key’s value typed as a number.

Apply the Budget interface to the result variable inside the getBudget() function.

In the terminal run tsc to compile your code.

Now run node index.js in the terminal. You should see this month’s budget as the output.