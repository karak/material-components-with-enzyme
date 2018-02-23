# Material Components with Enzyme

Playground for testing a DOM transformation UI like `Material Components` with `Enzyme`.

## Note

### Classes and other attributes

See `ReactWrapper.getDOMNode()`, because `ReactWrapper.hasClass()` doesn't look actual DOM but just "className" prop.

### Events

Don't rely on `ReactWrapper.simulate`, as well as underlying `Simulate` in `react-test-utils`, for they works only in React synthetic event systems.

In addition to that, `HTMLElement.dipatchEvent` and others are also unrelyable, because they has no side-effects like focus on &lt;input&gt; clicked.
