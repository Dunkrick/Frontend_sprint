1. A component is like a reusable piece of UI
    Ex: const App = () => {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }

2. JSX is a syntax extension of JavaScript that allows you to write HTML-like code in your JavaScript files.
    Ex: const App = () => {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }

3. Props are used to pass data from a parent component to a child component.
    Ex: const Greeting = (props) => {
        return (
            <div>
                <h1>Hello {props.name}</h1>
            </div>
        );
    }

    Used like below:
    <Greeting name="Rithwick" />

4. State is used to store data that can change over time.
    Ex: A light switch has two states:
        - ON
        - OFF

5. useState() = React tool to create and update the state.
    Ex: ```const Counter = () => {
        const [count, setCount] = useState(0);
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        );
    };```

6. List Rendering = show many items from an array
    Ex: A menu in a restaurant:
        - burger
        - pizza
        - fries
        - noodles

    In JSX:
    ```
        const menu = ["burger", "pizza", "fries", "noodles"];

        {menu.map((item) => (
            <li>{item}</li>
        ))}
    ```

7. Keys = identity for each item in a list
    Why keys matter?
        If React shows a list and one item changes, it needs to know:
            - which item stayed the same
            - which one was added
            - which one was removed

        Without keys, React can get confused.

    Syntax:
        ```{tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
        ))}```

8. Conditional Rendering = show or hide JSX based on a condition
    Ex: A light switch has two states:
        - ON
        - OFF

    In JSX:
    ```
        {isLightOn ? <LightOn /> : <LightOff />}
    ```

    We can use it for:
        - Login / Logout
        - Show/Hide components
        - Empty states
        - Error messages
        - Loading states

9. Event handling in React = reacting to user actions
    Ex: 
    ```
        <button onClick={() => console.log("Button clicked!")}>Click me</button>
    ```

10. How all of this connects together?
    Consider we're building a todo app.
        - Component = TodoApp, TodoItem, TodoForm
        - JSX = the UI written inside those components
        - Props = passing todo text from TodoApp to TodoItem
        - State = the current list of todos
        - useState = storing and updating the list
        - List rendering = showing todos from an array
        - Keys = unique ids for each todo
        - Conditional rendering = show “No todos yet” if list is empty
        - Event handling = add todo on button click, update input on typing

    That is React in real life.


The simplest way to remember everything
    Component - A reusable UI block
    JSX - UI written in JavaScript syntax
    Props - Inputs to a component
    State - Changing memory inside a component
    useState - The hook that creates state
    List rendering - Show many items from an array
    Keys - Unique ID for each item in a list
    Conditional rendering - Show UI based on true/false
    Event handling - React to clicks, typing, submits, etc.


***React lets you build the screen as small reusable pieces, pass data into them with props, store changing data with state, and update the UI automatically when users click or type.***