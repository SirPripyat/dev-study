# 19/10

## Render

- React see the JSX return of the function. If it's HTML Tag, he writes in DOM. In other way, he searches for HTML tag in the component until he finds.
- The action of update a state is what cause a re-render in a component.
- When a parent component suffer a re-render, all of his children in the DOM tree suffers too.

## Commit

- Commit is the action of React writes a component in the DOM recursively.

## Snapshot

- When the component is rendered, React keep a snapshot of the component (JSX, event function, state values). When the state is updated, React schedules an updated snapshot with all the values updated.

# 20/10

## Batching

- Batching is grouping multiple states updates into a single re-render.
- Batching happens at the end of an event handler, e.g. a user button click.
- `setCount(c => c + 1)` when called three times in a row will update `count` with number 3, because `c` represents the result of the previous update already in the queue, not the commited state.
- `setCount(count + 1)` represents "Replace `count` value with 1" (considering count is 0).

# 21/10

## Preserving and Resetting State

- The state is held inside React, not the component.
- React preserve the state based on UI tree position of components.
- React reset state when the components are replaced.
- React could reset the state of a component changing his key, even if his position is the same.
- Keys aren't globally unique - they only need to be unique among siblings.
- Props don't reset the state of the component.
- What really matters for React is the UI tree position, not the component position in JSX.
- Never declare a component nested inside another component. Every the parent re-renders, React sees the nested function as a new component and resets its state.