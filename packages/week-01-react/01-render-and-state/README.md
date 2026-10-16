# 01 Render & State

Central question: When and why does React re-render a component, and what happens to its state in the process?

One question per cycle:

1. What are render and commit, and when does each one happen?
2. What triggers a re-render: state, props, or the parent component?
3. Why does calling setCount(count + 1) three times only add 1, while the updater function form adds 3?
4. How does React decide whether to preserve or reset a component’s state (tree position and key)?

## Warming

- I think a component re-renders when the state changes.
- If a parent component re-renders, its children will re-render.
- If a child component re-renders, the parent won't.
- React won't re-render a component if the state hasn't changed.
- Props don't interfere in the re-render cycle.
- I think React will preserve the state of a component if his states don't change.
- I think preserver state is related with dependency arrays.
- I think React is always preservers the state of a component, only to compare the previous state with the new one.

## 1. Render and Commit

### Learnings
- React goes down level by level (Gallery → Image → img) until every branch of the tree ends in HTML elements, which are the only things the browser actually knows how to draw on screen,

```
Gallery                                                                                                                                                                                                                
└── section                                                                                                                                                                                                           
    ├── h1                                                                                                                                                                                                           
    ├── Image → img                                                                                                                                                                                                  
    ├── Image → img                                                                                                                                                                                                  
    └── Image → img  
```

``` typescript
export default function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}

function Image() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/ZF6s192.jpg"
      alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
    />
  );
}
```

- Rerender is different from recreating the component in the DOM.

## 2. State as Snapshot

### Learnings 
- When React renders the component for the first time, this action creates a snapshot with the initial state values (default values from useState)
- When you update the state, this doesn't change the current snapshot, this only schedules a new render.
- When the re-render runs, React calls the component again, and now the states have the updated values. This creates a new snapshot.
- Every snapshot is independent of the previous one and complete, includes not only state values, but also the JSX returned by the component and any event function created in that execution.  

## 3. Queueing a Series of State Updatese

## 4. Preserving and Resetting State

## Sources
- [Render and Commit](https://react.dev/learn/render-and-commit)
- [State as snapshot](https://react.dev/learn/state-as-a-snapshot)
- [Queueing a Series of State Updates](https://react.dev/learn/queueing-a-series-of-state-updates)
- [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state)