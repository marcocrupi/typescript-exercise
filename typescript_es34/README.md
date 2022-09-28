# 34 - ADVANCED OBJECT TYPES: Composed Types

STEP: 

* Let’s take the nested type we wrote previously and refactor it into multiple types that we compose together. We’ll do this by creating two new types: DefaultConfig and Config. Declare an interface named DefaultConfig and define its members as the same type members that are under the existing default type inside Directory.
* Declare another interface named Config. Give it one type member with a property named default and a value of type DefaultConfig (the interface you declared in the last step).
* In the Directory type, type the config property as Config, removing its existing nested object type.
* It’s time to check our types to make sure everything checks out. In the terminal, run tsc to compile your code.
* Run node index.js in the terminal. You should see the same output that you saw in the last exercise.
