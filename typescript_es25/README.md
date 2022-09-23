# 25 - UNION TYPES: Common Key Value Pairs

In the editor, we’ve written a program that should display a message about a social media event. The getFriendNameFromEvent() function takes an event, then returns the friend’s displayName or username. Let’s start by adding a type to the getFriendNameFromEvent()’s event parameter. Use a union to allow event to be a Like or a Share, then save your code.

In getFriendNameFromEvent()‘s body, it returns event.displayName || event.username. Hover over event.displayName. You’ll see a pop-up with this error message:

Property 'displayName' does not exist on type 'Like | Share'.
Property 'displayName' does not exist on type 'Share'.(2339)

This message is pointing out that there’s no displayName property on the Share type. In the Share type, add a displayName of type string, just like on the Like type.
