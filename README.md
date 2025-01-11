# Next.js router.push() Asynchronous Behavior and Unexpected Timing

This repository demonstrates a common issue in Next.js applications where the asynchronous nature of `router.push()` can lead to unexpected behavior.  Specifically, code placed after a `router.push()` call might execute before the route change is fully reflected in the application state.

The problem is illustrated in `bug.js`.  The `console.log` statement intends to execute *after* the route change to `/another-page`, but because `router.push()` is asynchronous, it runs before the route completes the transition.

The solution, shown in `bugSolution.js`, leverages the `router.events` to ensure the route change completes before the subsequent logic is executed. This solution handles the asynchronous nature of route changes and prevents race conditions.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Note that the console log will appear before the route changes.