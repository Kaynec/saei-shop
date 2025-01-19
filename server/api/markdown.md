---
title: React as a UI Runtime
date: "2019-02-02"
spoiler: An in-depth description of the React programming model.
cta: "react"
---

Most tutorials introduce React as a UI library. This makes sense because React _is_ a UI library. That’s literally what the tagline says!

![React homepage screenshot: "A JavaScript library for building user interfaces"](data:image/png;base64,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)

I’ve written about the challenges of creating [user interfaces](/the-elements-of-ui-engineering/) before. But this post talks about React in a different way — more as a [programming runtime](https://en.wikipedia.org/wiki/Runtime_system).

**This post won’t teach you anything about creating user interfaces.** But it might help you understand the React programming model in more depth.

---

**Note: If you’re _learning_ React, check out [the docs](https://reactjs.org/docs/getting-started.html#learn-react) instead.**

<p><font size="60">⚠️</font></p>

**This is a deep dive — THIS IS NOT a beginner-friendly post.** In this post, I’m describing most of the React programming model from first principles. I don’t explain how to use it — just how it works.

It’s aimed at experienced programmers and folks working on other UI libraries who asked about some tradeoffs chosen in React. I hope you’ll find it useful!

**Many people successfully use React for years without thinking about most of these topics.** This is definitely a programmer-centric view of React rather than, say, a [designer-centric one](http://mrmrs.cc/writing/developing-ui/). But I don’t think it hurts to have resources for both.

With that disclaimer out of the way, let’s go!

---

## Host Tree

Some programs output numbers. Other programs output poems. Different languages and their runtimes are often optimized for a particular set of use cases, and React is no exception to that.

React programs usually output **a tree that may change over time**. It might be a [DOM tree](https://www.npmjs.com/package/react-dom), an [iOS hierarchy](https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/View%20Hierarchy.html), a tree of [PDF primitives](https://react-pdf.org/), or even of [JSON objects](https://reactjs.org/docs/test-renderer.html). However, usually, we want to represent some UI with it. We’ll call it a “_host_ tree” because it is a part of the _host environment_ outside of React — like DOM or iOS. The host tree usually has [its](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) [own](https://developer.apple.com/documentation/uikit/uiview/1622616-addsubview) imperative API. React is a layer on top of it.

So what is React useful for? Very abstractly, it helps you write a program that predictably manipulates a complex host tree in response to external events like interactions, network responses, timers, and so on.

A specialized tool works better than a generic one when it can impose and benefit from particular constraints. React makes a bet on two principles:

- **Stability.** The host tree is relatively stable and most updates don’t radically change its overall structure. If an app rearranged all its interactive elements into a completely different combination every second, it would be difficult to use. Where did that button go? Why is my screen dancing?

- **Regularity.** The host tree can be broken down into UI patterns that look and behave consistently (such as buttons, lists, avatars) rather than random shapes.

**These principles happen to be true for most UIs.** However, React is ill-suited when there are no stable “patterns” in the output. For example, React may help you write a Twitter client but won’t be very useful for a [3D pipes screensaver](https://www.youtube.com/watch?v=Uzx9ArZ7MUU).

## Host Instances

The host tree consists of nodes. We’ll call them “host instances”.

In the DOM environment, host instances are regular DOM nodes — like the objects you get when you call `document.createElement('div')`. On iOS, host instances could be values uniquely identifying a native view from JavaScript.

Host instances have their own properties (e.g. `domNode.className` or `view.tintColor`). They may also contain other host instances as children.

(This has nothing to do with React — I’m describing the host environments.)

There is usually an API to manipulate host instances. For example, the DOM provides APIs like `appendChild`, `removeChild`, `setAttribute`, and so on. In React apps, you usually don’t call these APIs. That’s the job of React.

## Renderers

A _renderer_ teaches React to talk to a specific host environment and manage its host instances. React DOM, React Native, and even [Ink](https://mobile.twitter.com/vadimdemedes/status/1089344289102942211) are React renderers. You can also [create your own React renderer](https://github.com/facebook/react/tree/master/packages/react-reconciler).

React renderers can work in one of two modes.

The vast majority of renderers are written to use the “mutating” mode. This mode is how the DOM works: we can create a node, set its properties, and later add or remove children from it. The host instances are completely mutable.

React can also work in a [“persistent”](https://en.wikipedia.org/wiki/Persistent_data_structure) mode. This mode is for host environments that don’t provide methods like `appendChild()` but instead clone the parent tree and always replace the top-level child. Immutability on the host tree level makes multi-threading easier. [React Fabric](https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018) takes advantage of that.

As a React user, you never need to think about these modes. I only want to highlight that React isn’t just an adapter from one mode to another. Its usefulness is orthogonal to the target low-level view API paradigm.

## React Elements

In the host environment, a host instance (like a DOM node) is the smallest building block. In React, the smallest building block is a _React element_.

A React element is a plain JavaScript object. It can _describe_ a host instance.

```jsx
// JSX is a syntax sugar for these objects.
// <button className="blue" />
{
  type: 'button',
  props: { className: 'blue' }
}
```

A React element is lightweight and has no host instance tied to it. Again, it is merely a _description_ of what you want to see on the screen.

Like host instances, React elements can form a tree:

```jsx
// JSX is a syntax sugar for these objects.
// <dialog>
//   <button className="blue" />
//   <button className="red" />
// </dialog>
{
  type: 'dialog',
  props: {
    children: [{
      type: 'button',
      props: { className: 'blue' }
    }, {
      type: 'button',
      props: { className: 'red' }
    }]
  }
}
```

_(Note: I omitted [some properties](/why-do-react-elements-have-typeof-property/) that aren’t important to this explanation.)_

However, remember that **React elements don’t have their own persistent identity.** They’re meant to be re-created and thrown away all the time.

React elements are immutable. For example, you can’t change the children or a property of a React element. If you want to render something different later, you will _describe_ it with a new React element tree created from scratch.

I like to think of React elements as being like frames in a movie. They capture what the UI should look like at a specific point in time. They don’t change.

## Entry Point

Each React renderer has an “entry point”. It’s the API that lets us tell React to render a particular React element tree inside a container host instance.

For example, React DOM entry point is `ReactDOM.render`:

```jsx
ReactDOM.render(
  // { type: 'button', props: { className: 'blue' } }
  <button className="blue" />,
  document.getElementById("container")
);
```

When we say `ReactDOM.render(reactElement, domContainer)`, we mean: **“Dear React, make the `domContainer` host tree match my `reactElement`.”**

React will look at the `reactElement.type` (in our example, `'button'`) and ask the React DOM renderer to create a host instance for it and set the properties:

```jsx {3,4}
// Somewhere in the ReactDOM renderer (simplified)
function createHostInstance(reactElement) {
  let domNode = document.createElement(reactElement.type);
  domNode.className = reactElement.props.className;
  return domNode;
}
```

In our example, effectively React will do this:

```jsx {1,2}
let domNode = document.createElement("button");
domNode.className = "blue";

domContainer.appendChild(domNode);
```

If the React element has child elements in `reactElement.props.children`, React will recursively create host instances for them too on the first render.

## Reconciliation

What happens if we call `ReactDOM.render()` twice with the same container?

```jsx {2,11}
ReactDOM.render(
  <button className="blue" />,
  document.getElementById("container")
);

// ... later ...

// Should this *replace* the button host instance
// or merely update a property on an existing one?
ReactDOM.render(
  <button className="red" />,
  document.getElementById("container")
);
```

Again, React’s job is to _make the host tree match the provided React element tree_. The process of figuring out _what_ to do to the host instance tree in response to new information is sometimes called [reconciliation](https://reactjs.org/docs/reconciliation.html).

There are two ways to go about it. A simplified version of React could blow away the existing tree and re-create it from scratch:

```jsx
let domContainer = document.getElementById("container");
// Clear the tree
domContainer.innerHTML = "";
// Create the new host instance tree
let domNode = document.createElement("button");
domNode.className = "red";
domContainer.appendChild(domNode);
```

But in DOM, this is slow and loses important information like focus, selection, scroll state, and so on. Instead, we want React to do something like this:

```jsx
let domNode = domContainer.firstChild;
// Update existing host instance
domNode.className = "red";
```

In other words, React needs to decide when to _update_ an existing host instance to match a new React element, and when to create a _new_ one.

This raises a question of _identity_. The React element may be different every time, but when does it refer to the same host instance conceptually?

In our example, it’s simple. We used to render a `<button>` as a first (and only) child, and we want to render a `<button>` in the same place again. We already have a `<button>` host instance there so why re-create it? Let’s just reuse it.

This is pretty close to how React thinks about it.

**If an element type in the same place in the tree “matches up” between the previous and the next renders, React reuses the existing host instance.**

Here is an example with comments showing roughly what React does:

```jsx {9,10,16,26,27}
// let domNode = document.createElement('button');
// domNode.className = 'blue';
// domContainer.appendChild(domNode);
ReactDOM.render(
  <button className="blue" />,
  document.getElementById("container")
);

// Can reuse host instance? Yes! (button → button)
// domNode.className = 'red';
ReactDOM.render(
  <button className="red" />,
  document.getElementById("container")
);

// Can reuse host instance? No! (button → p)
// domContainer.removeChild(domNode);
// domNode = document.createElement('p');
// domNode.textContent = 'Hello';
// domContainer.appendChild(domNode);
ReactDOM.render(<p>Hello</p>, document.getElementById("container"));

// Can reuse host instance? Yes! (p → p)
// domNode.textContent = 'Goodbye';
ReactDOM.render(<p>Goodbye</p>, document.getElementById("container"));
```

The same heuristic is used for child trees. For example, when we update a `<dialog>` with two `<button>`s inside, React first decides whether to re-use the `<dialog>`, and then repeats this decision procedure for each child.

## Conditions

If React only reuses host instances when the element types “match up” between updates, how can we render conditional content?

Say we want to first show only an input, but later render a message before it:

```jsx {12}
// First render
ReactDOM.render(
  <dialog>
    <input />
  </dialog>,
  domContainer
);

// Next render
ReactDOM.render(
  <dialog>
    <p>I was just added here!</p>
    <input />
  </dialog>,
  domContainer
);
```

In this example, the `<input>` host instance would get re-created. React would walk the element tree, comparing it with the previous version:

- `dialog → dialog`: Can reuse the host instance? **Yes — the type matches.**
  - `input → p`: Can reuse the host instance? **No, the type has changed!** Need to remove the existing `input` and create a new `p` host instance.
  - `(nothing) → input`: Need to create a new `input` host instance.

So effectively the update code executed by React would be like:

```jsx {1,2,8,9}
let oldInputNode = dialogNode.firstChild;
dialogNode.removeChild(oldInputNode);

let pNode = document.createElement("p");
pNode.textContent = "I was just added here!";
dialogNode.appendChild(pNode);

let newInputNode = document.createElement("input");
dialogNode.appendChild(newInputNode);
```

This is not great because _conceptually_ the `<input>` hasn’t been _replaced_ with `<p>` — it just moved. We don’t want to lose its selection, focus state, and content due to re-creating the DOM.

While this problem has an easy fix (which we’ll get to in a minute), it doesn’t occur often in React applications. It’s interesting to see why.

In practice, you would rarely call `ReactDOM.render` directly. Instead, React apps tend to be broken down into functions like this:

```jsx
function Form({ showMessage }) {
  let message = null;
  if (showMessage) {
    message = <p>I was just added here!</p>;
  }
  return (
    <dialog>
      {message}
      <input />
    </dialog>
  );
}
```

This example doesn’t suffer from the problem we just described. It might be easier to see why if we use object notation instead of JSX. Look at the `dialog` child element tree:

```jsx {12-15}
function Form({ showMessage }) {
  let message = null;
  if (showMessage) {
    message = {
      type: "p",
      props: { children: "I was just added here!" },
    };
  }
  return {
    type: "dialog",
    props: {
      children: [message, { type: "input", props: {} }],
    },
  };
}
```

**Regardless of whether `showMessage` is `true` or `false`, the `<input>` is the second child and doesn’t change its tree position between renders.**

If `showMessage` changes from `false` to `true`, React would walk the element tree, comparing it with the previous version:

- `dialog → dialog`: Can reuse the host instance? **Yes — the type matches.**
  - `(null) → p`: Need to insert a new `p` host instance.
  - `input → input`: Can reuse the host instance? **Yes — the type matches.**

And the code executed by React would be similar to this:

```jsx
let inputNode = dialogNode.firstChild;
let pNode = document.createElement("p");
pNode.textContent = "I was just added here!";
dialogNode.insertBefore(pNode, inputNode);
```

No input state is lost now.

## Lists

Comparing the element type at the same position in the tree is usually enough to decide whether to reuse or re-create the corresponding host instance.

But this only works well if child positions are static and don’t re-order. In our example above, even though `message` could be a “hole”, we still knew that the input goes after the message, and there are no other children.

With dynamic lists, we can’t be sure the order is ever the same:

```jsx
function ShoppingList({ list }) {
  return (
    <form>
      {list.map((item) => (
        <p>
          You bought {item.name}
          <br />
          Enter how many do you want: <input />
        </p>
      ))}
    </form>
  );
}
```

If the `list` of our shopping items is ever re-ordered, React will see that all `p` and `input` elements inside have the same type, and won’t know to move them. (From React’s point of view, the _items themselves_ changed, not their order.)

The code executed by React to re-order 10 items would be something like:

```jsx
for (let i = 0; i < 10; i++) {
  let pNode = formNode.childNodes[i];
  let textNode = pNode.firstChild;
  textNode.textContent = "You bought " + items[i].name;
}
```

So instead of _re-ordering_ them, React would effectively _update_ each of them. This can create performance issues and possible bugs. For example, the content of the first input would stay reflected in first input _after_ the sort — even though conceptually they might refer to different products in your shopping list!

**This is why React nags you to specify a special property called `key` every time you include an array of elements in your output:**

```jsx {5}
function ShoppingList({ list }) {
  return (
    <form>
      {list.map((item) => (
        <p key={item.productId}>
          You bought {item.name}
          <br />
          Enter how many do you want: <input />
        </p>
      ))}
    </form>
  );
}
```

A `key` tells React that it should consider an item to be _conceptually_ the same even if it has different _positions_ inside its parent element between renders.

When React sees `<p key="42">` inside a `<form>`, it will check if the previous render also contained `<p key="42">` inside the same `<form>`. This works even if `<form>` children changed their order. React will reuse the previous host instance with the same key if it exists, and re-order the siblings accordingly.

Note that the `key` is only relevant within a particular parent React element, such as a `<form>`. React won’t try to “match up” elements with the same keys between different parents. (React doesn’t have idiomatic support for moving a host instance between different parents without re-creating it.)

What’s a good value for a `key`? An easy way to answer this is to ask: **when would _you_ say an item is the “same” even if the order changed?** For example, in our shopping list, the product ID uniquely identifies it between siblings.

## Components

We’ve already seen functions that return React elements:

```jsx
function Form({ showMessage }) {
  let message = null;
  if (showMessage) {
    message = <p>I was just added here!</p>;
  }
  return (
    <dialog>
      {message}
      <input />
    </dialog>
  );
}
```

They are called _components_. They let us create our own “toolbox” of buttons, avatars, comments, and so on. Components are the bread and butter of React.

Components take one argument — an object hash. It contains “props” (short for “properties”). Here, `showMessage` is a prop. They’re like named arguments.

## Purity

React components are assumed to be pure with respect to their props.

```jsx
function Button(props) {
  // 🔴 Doesn't work
  props.isActive = true;
}
```

In general, mutation is not idiomatic in React. (We’ll talk more about the idiomatic way to update the UI in response to events later.)

However, _local mutation_ is absolutely fine:

```jsx {2,5}
function FriendList({ friends }) {
  let items = [];
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    items.push(<Friend key={friend.id} friend={friend} />);
  }
  return <section>{items}</section>;
}
```

We created `items` _while rendering_ and no other component “saw” it so we can mutate it as much as we like before handing it off as part of the render result. There is no need to contort your code to avoid local mutation.

Similarly, lazy initialization is fine despite not being fully “pure”:

```jsx
function ExpenseForm() {
  // Fine if it doesn't affect other components:
  SuperCalculator.initializeIfNotReady();

  // Continue rendering...
}
```

As long as calling a component multiple times is safe and doesn’t affect the rendering of other components, React doesn’t care if it’s 100% pure in the strict FP sense of the word. [Idempotence](https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation) is more important to React than purity.

That said, side effects that are directly visible to the user are not allowed in React components. In other words, merely _calling_ a component function shouldn’t by itself produce a change on the screen.

## Recursion

How do we _use_ components from other components? Components are functions so we _could_ call them:

```jsx
let reactElement = Form({ showMessage: true });
ReactDOM.render(reactElement, domContainer);
```

However, this is _not_ the idiomatic way to use components in the React runtime.

Instead, the idiomatic way to use a component is with the same mechanism we’ve already seen before — React elements. **This means that you don’t directly call the component function, but instead let React later do it for you**:

```jsx
// { type: Form, props: { showMessage: true } }
let reactElement = <Form showMessage={true} />;
ReactDOM.render(reactElement, domContainer);
```

And somewhere inside React, your component will be called:

```jsx
// Somewhere inside React
let type = reactElement.type; // Form
let props = reactElement.props; // { showMessage: true }
let result = type(props); // Whatever Form returns
```

Component function names are by convention capitalized. When the JSX transform sees `<Form>` rather than `<form>`, it makes the object `type` itself an identifier rather than a string:

```jsx
console.log((<form />).type); // 'form' string
console.log((<Form />).type); // Form function
```

There is no global registration mechanism — we literally refer to `Form` by name when typing `<Form />`. If `Form` doesn’t exist in local scope, you’ll see a JavaScript error just like you normally would with a bad variable name.

**Okay, so what does React do when an element type is a function? It calls your component, and asks what element _that_ component wants to render.**

This process continues recursively and is described in more detail [here](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html). In short, it looks like this:

- **You:** `ReactDOM.render(<App />, domContainer)`
- **React:** Hey `App`, what do you render to?
  - `App`: I render `<Layout>` with `<Content>` inside.
- **React:** Hey `Layout`, what do you render to?
  - `Layout`: I render my children in a `<div>`. My child was `<Content>` so I guess that goes into the `<div>`.
- **React:** Hey `<Content>`, what do you render to?
  - `Content`: I render an `<article>` with some text and a `<Footer>` inside.
- **React:** Hey `<Footer>`, what do you render to?
  - `Footer`: I render a `<footer>` with some more text.
- **React:** Okay, here you go:

```jsx
// Resulting DOM structure
<div>
  <article>
    Some text
    <footer>some more text</footer>
  </article>
</div>
```

This is why we say reconciliation is recursive. When React walks the element tree, it might meet an element whose `type` is a component. It will call it and keep descending down the tree of returned React elements. Eventually, we’ll run out of components, and React will know what to change in the host tree.

The same reconciliation rules we already discussed apply here too. If the `type` at the same position (as determined by index and optional `key`) changes, React will throw away the host instances inside, and re-create them.

## Inversion of Control

You might be wondering: why don’t we just call components directly? Why write `<Form />` rather than `Form()`?

**React can do its job better if it “knows” about your components rather than if it only sees the React element tree after recursively calling them.**

```jsx
// 🔴 React has no idea Layout and Article exist.
// You're calling them.
ReactDOM.render(Layout({ children: Article() }), domContainer);

// ✅ React knows Layout and Article exist.
// React calls them.
ReactDOM.render(
  <Layout>
    <Article />
  </Layout>,
  domContainer
);
```

This is a classic example of [inversion of control](https://en.wikipedia.org/wiki/Inversion_of_control). There’s a few interesting properties we get by letting React take control of calling our components:

- **Components become more than functions.** React can augment component functions with features like _local state_ that are tied to the component identity in the tree. A good runtime provides fundamental abstractions that match the problem at hand. As we already mentioned, React is oriented specifically at programs that render UI trees and respond to interactions. If you called components directly, you’d have to build these features yourself.

- **Component types participate in the reconciliation.** By letting React call your components, you also tell it more about the conceptual structure of your tree. For example, when you move from rendering `<Feed>` to the `<Profile>` page, React won’t attempt to re-use host instances inside them — just like when you replace `<button>` with a `<p>`. All state will be gone — which is usually good when you render a conceptually different view. You wouldn't want to preserve input state between `<PasswordForm>` and `<MessengerChat>` even if the `<input>` position in the tree accidentally “lines up” between them.

- **React can delay the reconciliation.** If React takes control over calling our components, it can do many interesting things. For example, it can let the browser do some work between the component calls so that re-rendering a large component tree [doesn’t block the main thread](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html). Orchestrating this manually without reimplementing a large part of React is difficult.

- **A better debugging story.** If components are first-class citizens that the library is aware of, we can build [rich developer tools](https://github.com/facebook/react-devtools) for introspection in development.

The last benefit to React calling your component functions is _lazy evaluation_. Let’s see what this means.

## Lazy Evaluation

When we call functions in JavaScript, arguments are evaluated before the call:

```jsx
// (2) This gets computed second
eat(
  // (1) This gets computed first
  prepareMeal()
);
```

This is usually what JavaScript developers expect because JavaScript functions can have implicit side effects. It would be surprising if we called a function, but it wouldn’t execute until its result gets somehow “used” in JavaScript.

However, React components are [relatively](#purity) pure. There is absolutely no need to execute it if we know its result won’t get rendered on the screen.

Consider this component putting `<Comments>` inside a `<Page>`:

```jsx {11}
function Story({ currentUser }) {
  // return {
  //   type: Page,
  //   props: {
  //     user: currentUser,
  //     children: { type: Comments, props: {} }
  //   }
  // }
  return (
    <Page user={currentUser}>
      <Comments />
    </Page>
  );
}
```

The `Page` component can render the children given to it inside some `Layout`:

```jsx {4}
function Page({ user, children }) {
  return <Layout>{children}</Layout>;
}
```

_(`<A><B /></A>` in JSX is the same as `<A children={<B />} />`.)_

But what if it has an early exit condition?

```jsx {2-4}
function Page({ user, children }) {
  if (!user.isLoggedIn) {
    return <h1>Please log in</h1>;
  }
  return <Layout>{children}</Layout>;
}
```

If we called `Comments()` as a function, it would execute immediately regardless of whether `Page` wants to render them or not:

```jsx {4,8}
// {
//   type: Page,
//   props: {
//     children: Comments() // Always runs!
//   }
// }
<Page>{Comments()}</Page>
```

But if we pass a React element, we don’t execute `Comments` ourselves at all:

```jsx {4,8}
// {
//   type: Page,
//   props: {
//     children: { type: Comments }
//   }
// }
<Page>
  <Comments />
</Page>
```

This lets React decide when and _whether_ to call it. If our `Page` component ignores its `children` prop and renders
`<h1>Please log in</h1>` instead, React won’t even attempt to call the `Comments` function. What’s the point?

This is good because it both lets us avoid unnecessary rendering work that would be thrown away, and makes the code less fragile. (We don’t care if `Comments` throws or not when the user is logged out — it won’t be called.)

## State

We talked [earlier](#reconciliation) about identity and how an element’s conceptual “position” in the tree tells React whether to re-use a host instance or create a new one. Host instances can have all kinds of local state: focus, selection, input, etc. We want to preserve this state between updates that conceptually render the same UI. We also want to predictably destroy it when we render something conceptually different (such as moving from `<SignupForm>` to `<MessengerChat>`).

**Local state is so useful that React lets _your own_ components have it too.** Components are still functions but React augments them with features that are useful for UIs. Local state tied to the position in the tree is one of these features.

We call these features _Hooks_. For example, `useState` is a Hook.

```jsx {2,6,7}
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

It returns a pair of values: the current state and a function that updates it.

The [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring) syntax lets us give arbitrary names to our state variables. For example, I called this pair `count` and `setCount`, but it could’ve been `banana` and `setBanana`. In the text below, I will use `setState` to refer to the second value regardless of its actual name in the specific examples.

_(You can learn more about `useState` and other Hooks provided by React [here](https://reactjs.org/docs/hooks-intro.html).)_

## Consistency

Even if we want to split the reconciliation process itself into [non-blocking](https://www.youtube.com/watch?v=mDdgfyRB5kg) chunks of work, we should still perform the actual host tree operations in a single synchronous swoop. This way we can ensure that the user doesn’t see a half-updated UI, and that the browser doesn’t perform unnecessary layout and style recalculation for intermediate states that the user shouldn’t see.

This is why React splits all work into the “render phase” and the “commit phase”. _Render phase_ is when React calls your components and performs reconciliation. It is safe to interrupt and [in the future](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html) will be asynchronous. _Commit phase_ is when React touches the host tree. It is always synchronous.

## Memoization

When a parent schedules an update by calling `setState`, by default React reconciles its whole child subtree. This is because React can’t know whether an update in the parent would affect the child or not, and by default, React opts to be consistent. This may sound very expensive but in practice, it’s not a problem for small and medium-sized subtrees.

When trees get too deep or wide, you can tell React to [memoize](https://en.wikipedia.org/wiki/Memoization) a subtree and reuse previous render results during shallow equal prop changes:

```jsx {5}
function Row({ item }) {
  // ...
}

export default React.memo(Row);
```

Now `setState` in a parent `<Table>` component would skip over reconciling `Row`s whose `item` is referentially equal to the `item` rendered last time.

You can get fine-grained memoization at the level of individual expressions with the [`useMemo()` Hook](https://reactjs.org/docs/hooks-reference.html#usememo). The cache is local to component tree position and will be destroyed together with its local state. It only holds one last item.

React intentionally doesn’t memoize components by default. Many components always receive different props so memoizing them would be a net loss.

## Raw Models

Ironically, React doesn’t use a “reactivity” system for fine-grained updates. In other words, any update at the top triggers reconciliation instead of updating just the components affected by changes.

This is an intentional design decision. [Time to interactive](https://calibreapp.com/blog/time-to-interactive/) is a crucial metric in consumer web applications, and traversing models to set up fine-grained listeners spends that precious time. Additionally, in many apps, interactions tend to result either in small (button hover) or large (page transition) updates, in which case fine-grained subscriptions are a waste of memory resources.

One of the core design principles of React is that it works with raw data. If you have a bunch of JavaScript objects received from the network, you can pump them directly into your components with no preprocessing. There are no gotchas about which properties you can access, or unexpected performance cliffs when a structure slightly changes. React rendering is O(_view size_) rather than O(_model size_), and you can significantly cut the _view size_ with [windowing](https://react-window.now.sh/#/examples/list/fixed-size).

There are some kinds of applications where fine-grained subscriptions are beneficial — such as stock tickers. This is a rare example of “everything constantly updating at the same time”. While imperative escape hatches can help optimize such code, React might not be the best fit for this use case. Still, you can implement your own fine-grained subscription system on top of React.

**Note that there are common performance issues that even fine-grained subscriptions and “reactivity” systems can’t solve.** For example, rendering a _new_ deep tree (which happens on every page transition) without blocking the browser. Change tracking doesn’t make it faster — it makes it slower because we have to do more work to set up subscriptions. Another problem is that we have to wait for data before we can start rendering the view. In React, we aim to solve both of these problems with [Concurrent Rendering](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html).

## Batching

Several components may want to update state in response to the same event. This example is contrived but it illustrates a common pattern:

```jsx {4,14}
function Parent() {
  let [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      Parent clicked {count} times
      <Child />
    </div>
  );
}

function Child() {
  let [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Child clicked {count} times
    </button>
  );
}
```

When an event is dispatched, the child’s `onClick` fires first (triggering its `setState`). Then the parent calls `setState` in its own `onClick` handler.

If React immediately re-rendered components in response to `setState` calls, we’d end up rendering the child twice:

```jsx {4,8}
*** Entering React's browser click event handler ***
Child (onClick)
  - setState
  - re-render Child // 😞 unnecessary
Parent (onClick)
  - setState
  - re-render Parent
  - re-render Child
*** Exiting React's browser click event handler ***
```

The first `Child` render would be wasted. And we couldn’t make React skip rendering `Child` for the second time because the `Parent` might pass some different data to it based on its updated state.

**This is why React batches updates inside event handlers:**

```jsx
*** Entering React's browser click event handler ***
Child (onClick)
  - setState
Parent (onClick)
  - setState
*** Processing state updates                     ***
  - re-render Parent
  - re-render Child
*** Exiting React's browser click event handler  ***
```

The `setState` calls in components wouldn’t immediately cause a re-render. Instead, React would execute all event handlers first, and then trigger a single re-render batching all of those updates together.

Batching is good for performance but can be surprising if you write code like:

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}

function handleClick() {
  increment();
  increment();
  increment();
}
```

If we start with `count` set to `0`, these would just be three `setCount(1)` calls. To fix this, `setState` provides an overload that accepts an “updater” function:

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount((c) => c + 1);
}

function handleClick() {
  increment();
  increment();
  increment();
}
```

React would put the updater functions in a queue, and later run them in sequence, resulting in a re-render with `count` set to `3`.

When state logic gets more complex than a few `setState` calls, I recommend expressing it as a local state reducer with the [`useReducer` Hook](https://reactjs.org/docs/hooks-reference.html#usereducer). It’s like an evolution of this “updater” pattern where each update is given a name:

```jsx
const [counter, dispatch] = useReducer((state, action) => {
  if (action === "increment") {
    return state + 1;
  } else {
    return state;
  }
}, 0);

function handleClick() {
  dispatch("increment");
  dispatch("increment");
  dispatch("increment");
}
```

The `action` argument can be anything, although an object is a common choice.

## Call Tree

A programming language runtime usually has a [call stack](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4). When a function `a()` calls `b()` which itself calls `c()`, somewhere in the JavaScript engine there’s a data structure like `[a, b, c]` that “keeps track” of where you are and what code to execute next. Once you exit out of `c`, its call stack frame is gone — poof! It’s not needed anymore. We jump back into `b`. By the time we exit `a`, the call stack is empty.

Of course, React itself runs in JavaScript and obeys JavaScript rules. But we can imagine that internally React has some kind of its own call stack to remember which component we are currently rendering, e.g. `[App, Page, Layout, Article /* we're here */]`.

React is different from a general purpose language runtime because it’s aimed at rendering UI trees. These trees need to “stay alive” for us to interact with them. The DOM doesn’t disappear after our first `ReactDOM.render()` call.

This may be stretching the metaphor but I like to think of React components as being in a “call tree” rather than just a “call stack”. When we go “out” of the `Article` component, its React “call tree” frame doesn’t get destroyed. We need to keep the local state and references to the host instances [somewhere](https://medium.com/react-in-depth/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-67f1014d0eb7).

These “call tree” frames _are_ destroyed along with their local state and host instances, but only when the [reconciliation](#reconciliation) rules say it’s necessary. If you ever read React source, you might have seen these frames being referred to as [Fibers](<https://en.wikipedia.org/wiki/Fiber_(computer_science)>).

Fibers are where the local state actually lives. When the state is updated, React marks the Fibers below as needing reconciliation, and calls those components.

## Context

In React, we pass things down to other components as props. Sometimes, the majority of components need the same thing — for example, the currently chosen visual theme. It gets cumbersome to pass it down through every level.

In React, this is solved by [Context](https://reactjs.org/docs/context.html). It is essentially like [dynamic scoping](http://wiki.c2.com/?DynamicScoping) for components. It’s like a wormhole that lets you put something on the top, and have every child at the bottom be able to read it and re-render when it changes.

```jsx
const ThemeContext = React.createContext(
  "light" // Default value as a fallback
);

function DarkApp() {
  return (
    <ThemeContext.Provider value="dark">
      <MyComponents />
    </ThemeContext.Provider>
  );
}

function SomeDeeplyNestedChild() {
  // Depends on where the child is rendered
  const theme = useContext(ThemeContext);
  // ...
}
```

When `SomeDeeplyNestedChild` renders, `useContext(ThemeContext)` will look for the closest `<ThemeContext.Provider>` above it in the tree, and use its `value`.

(In practice, React maintains a context stack while it renders.)

If there’s no `ThemeContext.Provider` above, the result of `useContext(ThemeContext)` call will be the default value specified in the `createContext()` call. In our example, it is `'light'`.

## Effects

We mentioned earlier that React components shouldn’t have observable side effects during rendering. But side effects are sometimes necessary. We may want to manage focus, draw on a canvas, subscribe to a data source, and so on.

In React, this is done by declaring an effect:

```jsx {4-6}
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

When possible, React defers executing effects until after the browser re-paints the screen. This is good because code like data source subscriptions shouldn’t hurt [time to interactive](https://calibreapp.com/blog/time-to-interactive/) and [time to first paint](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint). (There's a [rarely used](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) Hook that lets you opt out of that behavior and do things synchronously. Avoid it.)

Effects don’t just run once. They run both after a component is shown to the user for the first time, and after it updates. Effects can close over current props and state, such as with `count` in the above example.

Effects may require cleanup, such as in case of subscriptions. To clean up after itself, an effect can return a function:

```jsx
useEffect(() => {
  DataSource.addSubscription(handleChange);
  return () => DataSource.removeSubscription(handleChange);
});
```

React will execute the returned function before applying this effect the next time, and also before the component is destroyed.

Sometimes, re-running the effect on every render can be undesirable. You can tell React to [skip](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) applying an effect if certain variables didn’t change:

```jsx {3}
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]);
```

However, it is often a premature optimization and can lead to problems if you’re not familiar with how JavaScript closures work.

For example, this code is buggy:

```jsx
useEffect(() => {
  DataSource.addSubscription(handleChange);
  return () => DataSource.removeSubscription(handleChange);
}, []);
```

It is buggy because `[]` says “don’t ever re-execute this effect”. But the effect closes over `handleChange` which is defined outside of it. And `handleChange` might reference any props or state:

```jsx
function handleChange() {
  console.log(count);
}
```

If we never let the effect re-run, `handleChange` will keep pointing at the version from the first render, and `count` will always be `0` inside of it.

To solve this, make sure that if you specify the dependency array, it includes **all** things that can change, including the functions:

```jsx {4}
useEffect(() => {
  DataSource.addSubscription(handleChange);
  return () => DataSource.removeSubscription(handleChange);
}, [handleChange]);
```

Depending on your code, you might still see unnecessary resubscriptions because `handleChange` itself is different on every render. The [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) Hook can help you with that. Alternatively, you can just let it re-subscribe. For example, browser’s `addEventListener` API is extremely fast, and jumping through hoops to avoid calling it might cause more problems than it’s worth.

_(You can learn more about `useEffect` and other Hooks provided by React [here](https://reactjs.org/docs/hooks-effect.html).)_

## Custom Hooks

Since Hooks like `useState` and `useEffect` are function calls, we can compose them into our own Hooks:

```jsx {2,8}
function MyResponsiveComponent() {
  const width = useWindowWidth(); // Our custom Hook
  return <p>Window width is {width}</p>;
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}
```

Custom Hooks let different components share reusable stateful logic. Note that the _state itself_ is not shared. Each call to a Hook declares its own isolated state.

_(You can learn more about writing your own Hooks [here](https://reactjs.org/docs/hooks-custom.html).)_

## Static Use Order

You can think of `useState` as a syntax for defining a “React state variable”. It’s not _really_ a syntax, of course. We’re still writing JavaScript. But we are looking at React as a runtime environment, and because React tailors JavaScript to describing UI trees, its features sometimes live closer to the language space.

If `use` _were_ a syntax, it would make sense for it to be at the top level:

```jsx {3}
// 😉 Note: not a real syntax
component Example(props) {
  const [count, setCount] = use State(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

What would putting it into a condition or a callback or outside a component even mean?

```jsx
// 😉 Note: not a real syntax

// This is local state... of what?
const [count, setCount] = use State(0);

component Example() {
  if (condition) {
    // What happens to it when condition is false?
    const [count, setCount] = use State(0);
  }

  function handleClick() {
    // What happens to it when we leave a function?
    // How is this different from a variable?
    const [count, setCount] = use State(0);
  }
```

React state is local to the _component_ and its identity in the tree. If `use` were a real syntax it would make sense to scope it to the top-level of a component too:

```jsx
// 😉 Note: not a real syntax
component Example(props) {
  // Only valid here
  const [count, setCount] = use State(0);

  if (condition) {
    // This would be a syntax error
    const [count, setCount] = use State(0);
  }
```

This is similar to how `import` only works at the top level of a module.

**Of course, `use` is not actually a syntax.** (It wouldn’t bring much benefit and would create a lot of friction.)

However, React _does_ expect that all calls to Hooks happen only at the top level of a component and unconditionally. These [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) can be enforced with [a linter plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks). There have been heated arguments about this design choice but in practice, I haven’t seen it confusing people. I also wrote about why commonly proposed alternatives [don’t work](https://overreacted.io/why-do-hooks-rely-on-call-order/).

Internally, Hooks are implemented as [linked lists](https://dev.to/aspittel/thank-u-next-an-introduction-to-linked-lists-4pph). When you call `useState`, we move the pointer to the next item. When we exit the component’s [“call tree” frame](#call-tree), we save the resulting list there until the next render.

[This article](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e) provides a simplified explanation for how Hooks work internally. Arrays might be an easier mental model than linked lists:

```jsx
// Pseudocode
let hooks, i;
function useState() {
  i++;
  if (hooks[i]) {
    // Next renders
    return hooks[i];
  }
  // First render
  hooks.push(...);
}

// Prepare to render
i = -1;
hooks = fiber.hooks || [];
// Call the component
YourComponent();
// Remember the state of Hooks
fiber.hooks = hooks;
```

_(If you’re curious, the real code is [here](https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberHooks.new.js).)_

This is roughly how each `useState()` call gets the right state. As we’ve learned [earlier](#reconciliation), “matching things up” isn’t new to React — reconciliation relies on the elements matching up between renders in a similar way.

## What’s Left Out

We’ve touched on pretty much all important aspects of the React runtime environment. If you finished this page, you probably know React in more detail than 90% of its users. And there’s nothing wrong with that!

There are some parts I left out — mostly because they’re unclear even to us. React doesn’t currently have a good story for multipass rendering, i.e. when the parent render needs information about the children. Also, the [error handling API](https://reactjs.org/docs/error-boundaries.html) doesn’t yet have a Hooks version. It’s possible that these two problems can be solved together. Concurrent Mode is not stable yet, and there are interesting questions about how Suspense fits into this picture. Maybe I’ll do a follow-up when they’re fleshed out and Suspense is ready for more than [lazy loading](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactlazy-code-splitting-with-suspense).

**I think it speaks to the success of React’s API that you can get very far without ever thinking about most of these topics.** Good defaults like the reconciliation heuristics do the right thing in most cases. Warnings, like the `key` warning, nudge you when you risk shooting yourself in the foot.

If you’re a UI library nerd, I hope this post was somewhat entertaining and clarified how React works in more depth. Or maybe you decided React is too complicated and you’ll never look at it again. In either case, I’d love to hear from you on Twitter! Thank you for reading.
