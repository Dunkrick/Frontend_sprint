"Today I'm refreshing and connecting, not relearning." - May God be with us

- When working with react, we do not handle the DOM directly. React handles the DOM for us. And our job is to look our for data handling

1. Components - function that returns the UI
    ``` function Button() {
        return <button>Click</button>
    }```

2. Props - passing data into the components
    ``` <Greeting name="Rithwick" /> ```

3. State - Changing data inside a component
    ```const [count, setCount] = useState(0) ```

4. useState - The tool to create state, used when UI must update

5. Event Handling - User clicks -> State changes -> UI updates
    ```<button onClick={handleClick}>```


Today's Goal: I built a working React mini app using components + props + state