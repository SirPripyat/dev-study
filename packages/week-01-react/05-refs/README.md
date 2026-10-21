# 05 Refs

Central question: What is a ref, how does `useRef` differ from `useState`, and why doesn't updating `ref.current` trigger a re-render?

One question per cycle:

1. When should you reach for a ref instead of state, and why is it unsafe to read or write `ref.current` during rendering?

## 1. Referencing Values with Refs

### Learnings

- When you want a component to "remember" some information, but you don't want that information to trigger new renders, you can use a ref.
- `ref.current` is intentionally mutable - you can read and overwrite this value;
- Like `state`, `refs` are retained by React between re-renders, but `refs` don't re-render the component.
- Use `ref` when a piece of information is only needed by event handlers/logic and doesn't affect what's rendered - not a performance choice, but a correctness one.
- `Refs` are an escape hatch.
- You shouldn't read or write the current value during rendering, this makes the component's behavior unpredictable. Use state in this case.
  - Exception: first render, like `if (!ref.current) ref.current = new Thing()`;
- Refs don't provoke a re-reder, because React doesn't know when `ref.current` changes.
- Ref is a regular JavaScript object and behaves like one.
- Refs are used when your component needs to step outside React and communicate with external APIs, but it doesn't impact the UI rendering logic.
- Refs are mostly used to access DOM elements.

## Sources
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
