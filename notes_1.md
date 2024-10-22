# CS 260 Notes (Term 1)

## Other
### Console
Console Commands:
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

## HTML
### Input
Input Elements
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

Input Types
| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

Input Attributes
| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

Validation: most types have internal validation, you can specify required, but you should also have validation built into your JavaScript that checks the input data to ensure it is valid before submission. Good design includes giving validation feedback to the user.

### Intro
Full HTML document example
```
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <!-- comment -->
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>
```

Common Elements
| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

Special characters: HTML uses several reserved characters for defining its file format. If you want to use those characters in your content then you need to escape them using the `entity` syntax. For example, to display a less than symbol (`<`) you would instead use the less than entity (`&lt;`). You can also use the entity syntax to represent any unicode character.
| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

Index.html: browsers default to a domain's index.html file when it's just the domain name (i.e. google.com => google.com/index.html)

### Media
Elements include img, audio, video, svg, and canvas.

External Media
- external media all take a URL as an attribute. Can be relative (same location as code) or full (different domain)
- image: specify src in the img tag and you should include an "alt" for if the src is invalid
- audio: include "controls" attribute to display controls for the audio, can use autoplay attribute, can use loop attribute. EX:
```
<audio controls src="testAudio.mp3"></audio>
```
- vide: same options as audio. EX:
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```

Internal Media
- SVG (scalable Vector Graphics) can be built using various elements and inline graphic rendering objects.
- Canvas: introduced recently to facilitate 2D drawing and animation. requires javascript support.

## CSS
### Animation
- Declared using animation properties and defining keyframes
- Every millisecond is defined using from - to, then percentages are used for anything between start and end. Ex: 
```
[tag] {
    animation-name: [name];
    animation-duration: [#]s;
}
@keyframes [name] {
    from {
        css: style;
    }
    50% {
        css: style;
    }
    to {
        css: style;
    }
}
```
- Other animation properties:
    - animation-delay ([#]s)
    - animation-iteration-count ([#], infinite)
    - animaiton-direction (normal, reverse, alternate, alternate-reverse)
    - animation-timing-function (ease, linear, ease-in, ease-out, etc.)
    - animation-fill-mode (affects which styles apply before and after the animation)

### Declarations
#### Properties (non-exhaustive)
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |
#### Units
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |
#### Colors
| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |

### Fonts
- 4 families of fonts: Serif, sans-serif, fixed, and symbol. EX:
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```

### Frameworks
- Frameworks provide funtions and components that commonly appear in web applications.
    - Tailwind
    - Bootstrap
    - Materialize
    - Foundation
    - ...

### Introduction
- Associating with HTML:
1. Inline: use the "style" attribute in the tag. EX:
```
<p style="color:green">CSS</p>
``` 
2. File style: in head use \<style\> tag. EX:
```
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```
3. Styles.css: link the file into the HTML. EX:
```
<head>
    <link rel="stylesheet" href="styles.css" />
</head>
```
In the style file:
```
p {
  color: green;
}
```
- Cascading: The styles apply from highest level to lowest, for example inline will overwrite style tag, and style tag will overwrite the .css file.
- Box Model: [margin[border[padding[element]]]]

### Responsive
#### General
- Display Values

| Value  | Meaning                                                                                                                      |
| ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| none   | Don't display this element. The element still exists, but the browser will not render it.                                    |
| block  | Display this element with a width that fills its parent element. A `p` or `div` element has block display by default.        |
| inline | Display this element with a width that is only as big as its content. A `b` or `span` element has inline display by default. |
| flex   | Display this element's children in a flexible orientation.                                                                   |
| grid   | Display this element's children in a grid orientation.                                                                       |

- Viewport meta tag:
```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```
- Float: moves an element to left or right of its container element and allows inline elements to wrap
    - Use with css declaration float:[right/left/center...]
#### Flexbox
- Flex properites
    - display: flex (sets the display property of the element to be flex)
    - flex-direction (column, row)
    - flex (numbers for [grow, shrink, basis])
    - justify-content
    - align-items / align-content
- Media queries: used to detect and change css based on screen. EX:
```
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```
#### Grid
Display property grid is used to make the container perform as a grid. (display: grid;)
EX:
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```

### Selectors
- Element type selector: sets style for an element tag. EX: body
- Combinators: use a space between elements to choose only elements by tag that are children of the predecessors. EX: (only affects h2 within sections)
```
section h2 {
  color: #004400;
}
```
- Other Combinators (not just direct descendent)

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `div ~ p`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `div + p`      | Any p that has an adjacent div sibling     |

- Class selector: use .[name] in style declaration and set the class="[name]" to apply style to it
- ID selector: references the ID of an element. all IDs should be unique within HTML document so this should target just a specific element. EX: (#[name] { style... })
- Attribute selector: choose elemnts based upon their attributes. EX: p[class='summary'] {[style]}
- Pseudo selector: a large list of predefined attributes that can be used. EX: hover, fullscreen, checked, default, required, link, etc.

### Startup
```
./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
```

## JavaScript
### JSON
Simple way to share and store data. Formatted as follows:
| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |
Uses an object containing zero or more key value pairs. Key is always a string and the value must be one of the valid JSON data types. Example:
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
}
```
can convert using the JSON.parse and JASON.stringify functions in JavaScript

__________________________________________

### Expressions
If else
```
if (condition) {
  // code to execute if condition is true
} else {
  // code to execute if condition is false
}

```
For loop
```
for (initialization; condition; increment) {
  // code to execute repeatedly
}

```
While loop
```
while (condition) {
  // code to execute while condition is true
}

```
Switch
```
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no cases match
}

```

### Example
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

### Promises
Promises are used in rendering the HTML page. Processes that take time mean that the page must render after the process is finished. Calling the promise object constructor and passing it an executor function runs it asynchronously. The state of the promise is always one of these:
1. pending
2. fulfilled
3. rejected
Example with a cointoss that fails 10 percent of the time:
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed

//async, try/catch version
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
Functions declared as async means it will return a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

## Midterm Topics

#### HTML
- What does the link element do?
- What does a div tag do?
- How would you display an image with a hyperlink in HTML?
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- How do you declare the document type to be html?

#### CSS
- What is the difference between padding and margin? (see Box Model in Introduction)
- What does the following padding CSS do? (see Box Model in Introduction and Declarations)
- Which of the following are true? (mark all that are true about the DOM) (General)
- Given this HTML and this CSS how will the images be displayed using flex? (see Flexbox)
- By default, the HTML span element has a default CSS display property value of: (inline according to copilot but None accordion to W3 schools)
- How would you use CSS to change all the div elements to have a background color of red? (see Selectors)
- In the CSS box model, what is the ordering of the box layers starting at the inside and working out? (see box model in introduction)
- Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? (see declarations and selectors)
- What is the difference between the #title and .grid selector? (Selectors)

#### JavaScript
- What does the following code using arrow syntax function declaration do?
    - EX: 
    ```
    let myFunction = (a, b) => a * b;
    ```
    - EX2:
    ```
    //before
    hello = function() {
        return "Hello World!";
    }
    //after
    hello = () => {
        return "Hello World!";
    }
    ```
- What does the following code using map with an array output?
- What does the following code output using getElementByID and addEventListener?
    - getElementByID returns an element with a specified value as the ID
    - addEventListener attaches an event handler to a document. EX:
    ```
    //full
    document.addEventListener("click", myFunction);

    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello World";
    }

    //condensed
    document.addEventListener("click", function(){
        document.getElementById("demo").innerHTML = "Hello World";
    });
    ```
- What does the following line of Javascript do using a # selector?
    - the # selector is for IDs in the HTML
- What will the following code output when executed using a for loop and console.log?
- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    - ```
        document.getElementById('byu').style.color = 'green';
- What is valid javascript syntax for if, else, for, while, switch statements?
- What is the correct syntax for creating a javascript object?
    - ```
        const myObject = {
            property1: value1,
            property2: value2,
            // more properties
        };

- Is it possible to add new properties to javascript objects?
    - yes, properties are added dynamically by assigning them using brackets or by declaring a new variable
- If you want to include JavaScript on an HTML page, which tag do you use?
    - \<script\> tag will include javascript
- Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- What will the following code using Promises output when executed?


#### Other
- What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- Which of the following console command creates a remote shell session? (See Other Console Commands)
- Which of the following correctly describes JSON? (see JSON)
- Which of the following is true when the -la parameter is specified for the ls console command?
    - list long format including hidden files
- Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    - protocol (https://)
    - sub domain (www.)
    - root domain (google)
    - TLD (.com)
    - pages and arguments after all that
- What is a web certificate that is necessary to use HTTPS: SSL certificate
- Can a DNS A record can point to an IP address or another A record.
    - A DNS A (Address) record only points to an IP address, not another A record.
- Port 443, 80, 22 is reserved for which protocol?
    - 443: HTTPS
    - 80: HTTP
    - 22: SSH (secure shell)

### Full Javascript Example
```
async function pickupPizza() {
  //don't forget to make the functions async!
  const order = createOrder();

  // replaced Promise
  try {
    await placeOrder(order);
    serveOrder(order);
  } catch (order) {
    orderFailure(order);
  }
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] 😋 <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

async function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

function doWork(order, min, max, resolve, reject, errMsg) {
  let workTime = Math.random() * (max - min) + min;
  setTimeout(() => {
    workTime = Math.round(workTime);
    if (workTime < max * 0.85) {
      resolve(order);
    } else {
      order.error = errMsg;
      reject(order);
    }
  }, workTime);
}

function serveOrder(order) {
  order.element.innerHTML = `<span>[${order.id}] 🍕 <b>Served</b>!</span>`;
}

function orderFailure(order) {
  order.element.innerHTML = `<span> [${order.id}] 😠 <b class='failure'>Failure</b>! ${order.error}</span>`;
}

```