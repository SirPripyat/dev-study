# 03 Preserving and Resetting State

Central question: How does React decide whether to preserve or reset a component's state across renders, and what role do a component's position in the render tree and its `key` prop play in that decision?

One question per cycle:

1. Why does moving a component to a different position in the JSX tree, or rendering a different component type at the same position, reset its state — even though the `useState` call itself didn't change?

## 1. Preserving and Resetting State

### Learnings

- The state of component is held inside React, they don't live inside the component.
- Each component on the screen has fully isolated state.
- If you render a same component twice, each one of them gonna have their own and isolated state. 
- React preserves a component's state for as long as it's being rendered at its position in the UI tree. If the component is deleted, or a different component gets rendered at the same position, React discards its state.
- What really matters for React is the UI position tree, not the position in JSX markup.
- If you want to preserve the state between re-renders, the structure of your tree needs to "match up" from one render to another. If the structure is different, the state gets destroyed.
- Always declare component functions at the top level, and don't nest their definitions. When parent component suffer a re-render, then nested functions are recreated (new reference), React see this as a new component and the state is reset.
- Changing props doesn't reset the component's state — as long as it's the same component type at the same position, React preserves the state even if the props passed to it change.
- Keys could be used to force React reset state when a component keeps rendering in the same UI tree position.
- Keys aren't globally unique. They only specify the position within the parent.


## Sources
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)