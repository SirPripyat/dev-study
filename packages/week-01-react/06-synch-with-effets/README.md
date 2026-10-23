# 06 Synchronizing with Effects

Central question: What is an Effect, and why do you need one to synchronize a component with an external system instead of handling that logic during render or in an event handler?

## 1. Synchronizing with Effects

### Learnings

- Event handlers contain "side effects" caused by a specific user action, e.g. a button click or typing
- Effects let you specify side effects that are caused by rendering itself, rather than by a particular event
- ChatRoom
  - Send a message is an event, because it's directly caused by the user clicking specific button
  - Setting up a server connect is an Effect, because it should happen no matter which interaction caused the component to appear.
- Effects run at the end of a commit after the screen updates.
- The time Effects run is good to sync React components with some external system (Backend request or third-party lib).
- By default, an Effect runs after every commit.
- Some Effects need to specify how to stop, undo, or clean up whatever they were doing.
- Dependency array
  - Tells React that it should skip re-running your Effect after every commit, if the values there are the same as they were in the last render.
  - `ref` and `setState` have stable identity: React guarantees you'll always get the same object on every render. So they'll never change.
- Cleanup function
  - React always cleans up the previous render's Effect before the next render's Effect.
  - React always cleans up the previous render's Effect on every component unmount.
- In development, React (Strict Mode) mounts, unmounts and mounts on purpose, this leads to Effect running twice. This exists to help developers find missing cleanups.
 
    

## Sources
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
