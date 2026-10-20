# 02 Batching

Central question: What does it mean for React to batch state updates into a single render, and how does a component's identity (its position in the tree, or its key) determine whether React preserves or resets its state across renders?

One question per cycle:

1. Why does calling setCount(count + 1) three times only add 1, while calling the updater function form (c => c + 1) three times adds 3 — and what exactly counts as one "batch"?

## Warming

- I think batch state updates is a quick and best performance way to React re-renders a component based on state update
- I think React preserves or reset a state based on a comparison between old state value and new state value, if they're different react re-render, if it's equal react preserve.
- I think calling `setCount(c => c + 1)` three times actually update the count with a number 3, 'cause this is handled outside of snapshot
- I think key helps React find quickly an element to preserve or reset state

## 1. Queueing a Series of State Updates

### Learnings

- Each render's state values are fixed.
- React is like a waiter, so he waits until all code in the event handlers has run before processing your updates.
- `setCount(n => n + 1)` is an updater function. React queues this function to be processed after all the other code in the event handler has run.
- Updater functions must be pure and only return the result. **Do not** try to set state or run other side effect inside of them.
- Setting state doesn't change the variable in the existing render, but it requests a new render.
- Batching is a group of state updates to React dispatch one single re-render, and this happens after handlers have finished running.
- React doesn't batch across multiple intentional events like clicks, each click is handled separately.  

#### What's the difference between `setCount(count + 1)` & `setCount(c => c + 1)`?

- `setCount(count + 1)` -> count value in this case represent the value when the function ran, in other words, it's the currently value of the snapshot
- `setCount(c => c + 1)` -> `c` represents the result of the previous update already in the queue, not the commited state - so each call stacks on top of one before it (0 -> 1 -> 2 -> 3), not on top of the fixed snapshot value.

## 2. Preserving and Resetting State

### Learnings

## Sources
- [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)