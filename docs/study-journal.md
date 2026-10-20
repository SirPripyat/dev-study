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