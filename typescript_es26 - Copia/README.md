# 26 - UNION TYPES: Unions with Literal Types

STEP:

* Let’s write a program that will use literal types and unions to display the states of a download button. Start by writing a type named Status. It should be equal to the union of three literal types: 'idle', 'downloading', and 'complete'.
* Next, write a function named downloadStatus(). It should have one parameter named status, which should be typed as the Status type you wrote in the previous step.
* Inside the downloadStatus() function’s body, write three conditionals that output different messages based on status. If status is 'idle', console.log() a 'Download' message. If status is 'downloading', console.log() a 'Downloading...' message. If status is 'complete', console.log() a 'Your download is complete!' message.
* Now that we have a downloadStatus() function with distinct states, let’s call it! Call downloadStatus() with a valid argument.