# 30 - TYPE NARROWING: Narrowing After a Type Guard

In the editor, we’ve created a program that recycles variables of type Metal and Glass. The goal of the program is to sort out the trash of type Metal before the trash of type Glass.

Right now, the recycle() function calls the .melt() method on each piece of trash. Let’s give the recycle() function the ability to sort out pieces of trash of type Metal.

In the body of the recycle() function, write a type guard that checks if there is a .magnetize() method on the trash parameter. If there is, then return trash.magnetize(). Your type guard should appear above the trash.melt() call.