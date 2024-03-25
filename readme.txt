node -v
v19.1.0

index22-2.js does not work. Why?

Chapter 40
The default is 4 threads (if it is in power saver mode on my HP Spectre 360)

Increasing the thread pool size can help with performance but that is limited by the number of available CPU cores

-----------------------------------------------------

Chapter 42

Event Loop - Execution Order

user written synchronous JavaScript code takes priority over async code that the runtime would like to execute.

Only after the call stack is empty, the event loop comes into picture.

1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue

2. All callbacks within the timer queue are executed

3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue

4. All callbacks within the I/O queue are executed

5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.

6. All callbacks in the check queue are executed

7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue

8. All callbacks in the close queue are executed

9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.
-----------------------------------------------------------

Chapter 45

When running setTimeout with delay 0 ms and I/O async method, the order of execution can never be guarranteed.

#however, on my HP360 PC, 2 or 3 ms can create the same behavior, instead of 0 ms. It is probably because my machine is faster.		

Chapter 64

Further Learning

express.js
Jest or Vitest
TypeScript


