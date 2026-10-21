# 04 Rendering Lists

Central question: How does React render a list of components from an array of data, and why does it need a `key` prop to track each item across renders?

One question per cycle:

1. Why does React need a stable `key` for each item in a list, and what goes wrong (or could go wrong) if you use the array index as that key?

## Warming

- React use the keys to preserve or reset state from a component.
- React use the keys to identify the component among his siblings.
- Keys are necessary when you need to sort the list, or even make a drag and drop.

## 1. Rendering Lists

### Learnings

- Keys helps React identify an item between its siblings, and make the correct updates to the DOM tree, when you sort the array or insert a new element, or delete one.
- Keys must be unique among siblings.
- Keys must not change.
- Do not use index from array as key. If an item is inserted, deleted or the array gets reordered, React will lose the reference of the item, this gonna leads to subtle and confusing bugs.
- Do not generate keys on the fly, e.g. with `key={Math.random()`. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time.
- When your list not change (don't get reordered, inserted, updated or filtered - is static), you could use an index as key.

## Sources
- [Rendering Lists](https://react.dev/learn/rendering-lists)
