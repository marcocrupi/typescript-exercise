# 10 - ARRAYS: Tuples

STEP:

* The code editor has defined the variable favoriteCoordinates with the precise location of the Codecademy headquarters. The location is expressed as a tuple encoding the coordinates 40 degrees 43.2 minutes north latitude, 73 degrees 59.8 minutes west longitude. Please provide the correct type annotation for this tuple.
* Actually, our favorite place is not the Codecademy headquarters (wonderful though it may be). Reassign the variable favoriteCoordinates to a tuple that expresses the objectively best coordinates, the center of the Marianas trench at 17 degrees 45 minutes north, 142 degrees 30 minutes east.
* Sadly, the tuple favoriteCoordinates still doesn’t describe the best part of the marianas trench: the bottom. Try to fix this by adding the deepest depth to the end of the tuple: Add the code favoriteCoordinates[6] = -6.825; and then run tsc. That’s 6.825 miles deep!
* OK luckily that didn’t work. The whole point of tuples is that they have fixed lengths, so you cannot access elements of favoriteCoordinates with indices greater than 5. Even when you want to!