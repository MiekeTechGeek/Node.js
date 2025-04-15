// Quick check 0.1 True or false: The Node.js event loop runs each task to completion before handling the next task.
// = False, In Node.js, the event loop does not necessarily run each task to completion before handling the next one. Instead, it runs tasks from different phases of the loop, and each task runs to completion, but not all tasks overall.

// Quick check 2.1 If you have a file called hello.js, what will happen if you run node hello in terminal?
// = Node.js will still find and run hello.js, as long as: The file exists in the current directory, or there's no ambiguity (like a hello folder or executable file).

// Quick check 2.2
// 1 What are three ways in which you could exit the REPL environment?
// 2 How do you load a file that isn’t in your project folder into REPL?
// 3 What happens if you run .save with a filename that already exists?

// = 1. You can exit the Node.js REPL in at least these three ways:

//Type .exit and press Enter

//Press Ctrl + D

//Press Ctrl + C twice

// = 2. Use the .load command with the full (or relative) path to the file: .load /full/path/to/file.js

// = 3. It will overwrite the existing file without warning, so .save myScript.js will create (or replace) myScript.js with the current REPL session history.

