"Today I am refreshing, not relearning - may God be with me"

Varibles - let, const

Use an Array when the items are of the same type and the sequence matters (e.g., a high-score list).
Example:
const scores = [100, 92, 85]; 

Use an Object when you need to label your data or describe one entity with many attributes (e.g., a product's price, weight, and color)
Example:
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2024,
  color: "blue"
};

Use Dot notation (car.make) for known keys or Bracket notation (car["make"]) for dynamic keys.


Functions & Arrow functions
Ex: function add(a, b) {
  return a + b;
}

Ex: const addArrow = (a, b) => a + b;


Constructors: You cannot use new with an arrow function; it will throw a TypeError.
Methods: Avoid using arrow functions for object methods if you need to access other properties of that object using this


Method 	                            Purpose                                     Result
map()	            Transforms each element individually.          A new array of the same length.
filter()	        Selects elements based on a condition.           A new array with only matching items.
reduce()	        Aggregates elements into a single value.        A single value (number, object, etc.).

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10


Spread Operator
Shallow Copy Only: It only copies the first level of an object or array. Nested objects or arrays are still passed by reference, meaning changes to a nested item in the copy will affect the original.
Overriding Properties: When merging objects, if properties have the same name, the last property spread into the object will overwrite previous values.
Spread vs. Rest: While both use ..., they are opposites. Spread expands elements into a list, while Rest parameters collect multiple arguments back into a single array.


Destructuring


async, await
async function fetchData() {
  try {
    // Execution pauses here until the fetch promise resolves
    const response = await fetch('https://example.com');
    
    // Execution pauses again for the JSON conversion
    const data = await response.json();
    
    console.log(data);
  } catch (error) {
    // Handles any errors from the fetch or json conversion
    console.error("Error fetching data:", error);
  }
}

fetchData();


fetch
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parses JSON body into a JS object
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

Key Concepts to Remember
Response handling: A fetch() promise only rejects on network failures. It does not reject for HTTP errors like 404 or 500; you must check response.ok manually.
Two-stage process: First, you get the Response object (headers and status). Second, you must use a method like .json(), .text(), or .blob() to read the body content.
Body streaming: Request and response bodies are ReadableStream objects, meaning they can be processed in chunks for better performance with large files.
CORS: Cross-Origin Resource Sharing is enabled by default. If you encounter errors when requesting data from a different domain, ensure the server supports CORS or use the no-cors mode (which limits access to the response).



JSON format
Example JSON
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"]
}


addEventListeners() and DOM
const btn = document.querySelector('#myBtn');
btn.addEventListener('click', () => {
    console.log('Button clicked!');
});

Common DOM Events
Category 	                      Examples	                                            Description
Mouse	                            click, dblclick, mouseenter, mouseleave	              Interactions with a mouse or trackpad.
Keyboard	                        keydown, keyup, keypress	                            Pressing or releasing keys.
Form	                            submit, change, focus, blur	                            Interacting with inputs or submitting a form.
Window	                            load, resize, scroll	                                Browser-level changes like page finishing or resizing.


Event Object
event.target: The element that actually triggered the event.
event.type: The name of the event (e.g., "click").
event.preventDefault(): Stops the browser's default behavior (like a link opening or a form refreshing the page).
event.stopPropagation(): Prevents the event from bubbling up to parent elements.