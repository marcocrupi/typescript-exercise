# 27 - TYPE NARROWING: Type guards

STEP:

* In the code editor, there’s a program that should take in sports statistics and format them. The formatStatistic() function should take in values like 'Win' and 0.364, then format them to 'WIN' and 0.36 respectively. Currently, our program is broken. If you run tsc in the terminal, you’ll see an error that we cannot call .toFixed() on stat. Let’s fix that with a type guard. In the body of the formatStatistic() function, write a type guard using typeof that checks if stat is a 'number'. If it is, then move the return stat.toFixed(2) statement inside the type guard to return the result.
* Now let’s handle the case where stat may be a 'string'. Write another type guard using typeof in the body of formatStatistic() that checks if stat is a 'string'. If it is, call .toUpperCase() on it and return the result.