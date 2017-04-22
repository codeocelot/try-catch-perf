# How slow is a try/catch block? 

Turns out, not much, if any.

mid-2015 MBP 2.5 GHz Intel Core i7, non-trivial background load.

After 100000 iterations:

If we time the try block first, the try block case actually runs 0.0390675 seconds faster

If we time the no-catch block first, the try block takes 0.0258106 seconds *slower*

The lesson?  Program structure matters way more than a try/catch block.
